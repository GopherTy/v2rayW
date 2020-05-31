package router

import (
	"github.com/gopherty/v2ray-web/control"

	"github.com/gin-gonic/gin"
)

// Router 路由管理
type Router struct {
}

// Route 注册路由
func (Router) Route(engine *gin.Engine) {
	// 控制器
	var ctl control.Controller

	// 非组
	engine.GET("/", ctl.TestDispathce.Test) // 测试接口注册

	// 组
	// user
	userGroup := engine.Group("/user")
	userGroup.POST("/join", ctl.SignDispacher.Join)     // 用户注册
	userGroup.POST("/login", ctl.SignDispacher.Login)   // 用户登陆
	userGroup.POST("/logout", ctl.SignDispacher.Logout) // 用户登出

	// v2ray
	v2rayGroup := engine.Group("/v2ray")
	v2rayGroup.GET("/start", ctl.V2rayDispathcer.Start) // 启动
	v2rayGroup.GET("/stop", ctl.V2rayDispathcer.Stop)   // 关闭
}
