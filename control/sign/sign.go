package sign

import (
	"net/http"

	"github.com/gopherty/v2ray-web/model/users"

	"github.com/gopherty/v2ray-web/db"

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
	var param struct {
		User     string `form:"user" json:"user"  binding:"required"`
		Password string `form:"user" json:"password" binding:"required"`
	}
	err := c.ShouldBindWith(&param, binding.Default(c.Request.Method, c.ContentType()))
	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusInternalServerError, gin.H{
			"Error": err.Error(),
		})
		return
	}

	// 对密码进行 md5 加密
	// hash := md5.New()
	// hash.Write([]byte(param.Password))
	// md5Pwd := hex.EncodeToString(hash.Sum(nil))

	engine := db.Engine()
	ok, err := engine.Get(&users.User{
		UserName: param.User,
		Passwd:   param.Password,
	})

	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusInternalServerError, gin.H{
			"Error": err.Error(),
		})
		return
	}

	if !ok {
		c.JSON(http.StatusOK, gin.H{
			"Error": "用户名或密码错误",
		})
		return
	}

	// 登陆成功后给服务器设置 cookie
	c.SetCookie("v2ray-web", V2RAYWEB, 0, "/", "test.cn", false, true)
	c.JSON(http.StatusOK, gin.H{
		"Result": "登陆成功",
	})
}

// Logout 用户登出
func (Dispatcher) Logout(c *gin.Context) {

}
