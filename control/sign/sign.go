package sign

import (
	"net/http"
	"strings"

	"github.com/gopherty/v2ray-web/token"

	"github.com/gopherty/v2ray-web/db"
	"github.com/gopherty/v2ray-web/model/users"
	"github.com/gopherty/v2ray-web/serve"

	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
	"github.com/gopherty/v2ray-web/logger"
)

// Dispatcher 登陆控制器
type Dispatcher struct {
}

// Join 用户注册
func (Dispatcher) Join(c *gin.Context) {
	// 绑定参数
	var param ParamJoin
	err := c.ShouldBindWith(&param, binding.Default(c.Request.Method, c.ContentType()))
	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusInternalServerError, gin.H{
			"code":  serve.StatusOK,
			"desc":  "前端请求参数和后端绑定参数不匹配",
			"error": err.Error(),
			"token": "",
			"data":  gin.H{},
		})
		return
	}

	engine := db.Engine()
	_, err = engine.Insert(&users.User{
		UserName: param.UserName,
		Passwd:   param.Password,
		Email:    param.Email,
	})

	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusInternalServerError, gin.H{
			"code":  serve.StatusDBServerError,
			"desc":  "服务器内部错误",
			"error": err.Error(),
			"token": "",
			"data":  gin.H{},
		})
		return
	}

	// 注册成功
	c.JSON(http.StatusOK, gin.H{
		"code":  serve.StatusOK,
		"desc":  "",
		"error": "",
		"token": "",
		"data": gin.H{
			"msg": "注册成功",
		},
	})
}

// Login 用户登陆
func (Dispatcher) Login(c *gin.Context) {
	// 用于绑定用户名和密码的结构体
	var param ParamLogin
	err := c.ShouldBindWith(&param, binding.Default(c.Request.Method, c.ContentType()))
	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusInternalServerError, gin.H{
			"code":  serve.StatusOK,
			"desc":  "",
			"error": err.Error(),
			"token": "",
			"data":  gin.H{},
		})
		return
	}

	// 验证用户名或者邮箱登陆
	var user users.User
	user.Passwd = param.Password
	if strings.Contains(param.User, "@") {
		user.Email = param.User
	} else {
		user.UserName = param.User
	}

	engine := db.Engine()
	ok, err := engine.Get(&user)
	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusInternalServerError, gin.H{
			"code":  serve.StatusDBServerError,
			"desc":  "",
			"error": err.Error(),
			"token": "",
			"data":  gin.H{},
		})
		return
	}

	if !ok {
		c.JSON(http.StatusInternalServerError, gin.H{
			"code":  serve.StatusDBServerError,
			"desc":  "用户名或密码不正确",
			"error": "",
			"token": "",
			"data":  gin.H{},
		})
		return
	}

	// 创建 token 和 auth
	t, err := token.NewToken(user.ID)
	if err != nil {
		logger.Logger().Error(err.Error())
	}
	err = token.CreateAuth(user.ID, t)
	if err != nil {
		logger.Logger().Error(err.Error())
	}

	// 登陆成功后给服务器设置 cookie
	// c.SetCookie("v2ray-web", V2RAYWEB, 0, "/", "test.cn", false, true)
	c.JSON(http.StatusOK, gin.H{
		"code":  serve.StatusOK,
		"desc":  "",
		"error": "",
		"token": gin.H{
			"access_token":  t.AccessToken,
			"refresh_token": t.RefreshToken,
		},
		"data": gin.H{
			"msg": "登陆成功",
		},
	})
}

// Logout 用户登出
func (Dispatcher) Logout(c *gin.Context) {
	access, err := token.ExtractTokenMetadata(c.Request)
	if err != nil {
		c.JSON(http.StatusUnauthorized, "unauthorized")
		return
	}
	deleted, err := token.DeleteAuth(access.AccessUUID)
	if err != nil || deleted == 0 {
		c.JSON(http.StatusUnauthorized, "unauthorized")
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"code":  serve.StatusOK,
		"desc":  "",
		"error": "",
		"token": "",
		"data": gin.H{
			"msg": "成功登出",
		},
	})
}
