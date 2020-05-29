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

	// 非用户组
	engine.GET("/", ctl.Test) // 测试接口注册

	// 功能实现
}
