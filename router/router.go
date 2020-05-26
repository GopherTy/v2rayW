package router

import (
	"github.com/gopherty/v2ray-web/control"
	"github.com/gopherty/v2ray-web/middleware"

	"github.com/gin-gonic/gin"
)

// Router 路由管理
type Router struct {
}

// Route 注册路由
func (Router) Route(engine *gin.Engine) {
	// 控制器
	var ctl control.Controller

	// 非用户组
	engine.GET("/", ctl.Test)                                                  // 测试接口注册
	engine.GET("/user", middleware.UserManage(), ctl.UserMiddlewareTest)       // 启用了用户管理系统中间件，创建对应的表。
	engine.GET("/auth", middleware.UserAuthenticate(), ctl.AuthMiddlewareTest) // 启用了用户管理系统中间件，创建对应的表。

	// 用户组
	r := engine.RouterGroup.Group("/app")
	r.GET("/test", ctl.Test)
}
