package user

import (
	"net/http"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"

	"github.com/gopherty/v2rayW/db"
	"github.com/gopherty/v2rayW/logger"
	"github.com/gopherty/v2rayW/model"
	"github.com/gopherty/v2rayW/model/users"
	"github.com/gopherty/v2rayW/serve"
	"github.com/gopherty/v2rayW/token"
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
		c.JSON(http.StatusUnprocessableEntity, model.BackToFrontEndData{
			Code:        serve.StatusParamNotMatched,
			Description: "前端请求参数和后端绑定参数不匹配",
			Error:       err.Error(),
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
		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
			Code:        serve.StatusDBError,
			Description: "数据库错误",
			Error:       err.Error(),
		})
		return
	}

	// 注册成功
	c.JSON(http.StatusOK, model.BackToFrontEndData{
		Code: serve.StatusOK,
		Data: map[string]interface{}{
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
		c.JSON(http.StatusUnprocessableEntity, model.BackToFrontEndData{
			Code:        serve.StatusParamNotMatched,
			Description: "前端请求参数和后端绑定参数不匹配",
			Error:       err.Error(),
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
		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
			Code:        serve.StatusDBError,
			Description: "数据库错误",
			Error:       err.Error(),
		})
		return
	}

	if !ok {
		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
			Code:        serve.StatusDBError,
			Description: "用户名或密码不正确",
		})
		return
	}

	// 记录登录日志
	userLog := &users.UserLoginLog{
		UID:       user.ID,
		ClientIP:  c.ClientIP(),
		LoginTime: time.Now(),
	}
	_, err = engine.Table(userLog.TableName()).Insert(userLog)
	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
			Code:  serve.StatusDBError,
			Error: err.Error(),
		})
		return
	}

	// 创建 token 和 auth
	t, err := token.NewToken(user.ID)
	if err != nil {
		logger.Logger().Error(err.Error())
	}

	// 登陆成功后给服务器设置
	c.JSON(http.StatusOK, model.BackToFrontEndData{
		Code: serve.StatusOK,
		Auth: model.Auth{
			AccessToken:  t.AccessToken,
			RefreshToken: t.RefreshToken,
		},
		Data: map[string]interface{}{
			"msg": "登录成功",
		},
	})
}

// Logout 用户登出
func (Dispatcher) Logout(c *gin.Context) {
	// 需要手动设置 refresh token 过期，所以应该存储 refresh token。
	// 验证时，应该获取存储的 refresh token 而不是用户的 token。目前不需要过期 refresh token

	c.JSON(http.StatusOK, model.BackToFrontEndData{
		Code: serve.StatusOK,
		Data: map[string]interface{}{
			"msg": "成功登出",
		},
	})
}

// Passwd 修改密码
func (Dispatcher) Passwd(c *gin.Context) {
	var param ParamPasswd
	err := c.ShouldBindWith(&param, binding.Default(c.Request.Method, c.ContentType()))
	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
			Code:        serve.StatusParamNotMatched,
			Description: "参数传递与后端不一致",
			Error:       err.Error(),
		})
		return
	}

	engine := db.Engine()
	_, err = engine.Table("user").ID(param.UID).Update(&users.User{
		Passwd: param.Passwd,
	})
	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
			Code:        serve.StatusDBError,
			Description: "修改密码出错",
			Error:       err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, model.BackToFrontEndData{
		Code: serve.StatusOK,
		Data: map[string]interface{}{
			"msg": "修改成功",
		},
	})
}
