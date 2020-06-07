package sign

import (
	"net/http"
	"strings"

	"github.com/gopherty/v2ray-web/db"
	"github.com/gopherty/v2ray-web/model/users"
	"github.com/gopherty/v2ray-web/serve"

	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
	"github.com/gopherty/v2ray-web/logger"
)

const (
	// V2RAYWEB cookie test value
	V2RAYWEB = "v2ray"
)

// Dispatcher 登陆控制器
type Dispatcher struct {
}

// Join 用户注册
func (Dispatcher) Join(c *gin.Context) {

}

// Login 用户登陆
func (Dispatcher) Login(c *gin.Context) {
	// 用于绑定用户名和密码的结构体
	var param ParamLogin
	err := c.ShouldBindWith(&param, binding.Default(c.Request.Method, c.ContentType()))
	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusInternalServerError, gin.H{
			"code":  serve.StatusServerError,
			"desc":  "",
			"error": err.Error(),
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
			"data":  gin.H{},
		})
		return
	}

	if !ok {
		c.JSON(http.StatusOK, gin.H{
			"code":  serve.StatusDBServerError,
			"desc":  "用户名或密码不正确",
			"error": "",
			"data":  gin.H{},
		})
		return
	}

	// 登陆成功后给服务器设置 cookie
	c.SetCookie("v2ray-web", V2RAYWEB, 0, "/", "test.cn", false, true)
	c.JSON(http.StatusOK, gin.H{
		"code":  serve.StatusOK,
		"desc":  "",
		"error": "",
		"data": gin.H{
			"msg": "登陆成功",
		},
	})
}

// Logout 用户登出
func (Dispatcher) Logout(c *gin.Context) {

}
