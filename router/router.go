package router

import (
	"github.com/gopherty/v2rayW/control"
	"github.com/gopherty/v2rayW/middleware"

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
	// view
	engine.GET("/", ctl.ViewDispathcer.Redirect)
	engine.GET("/index", ctl.ViewDispathcer.Redirect)
	engine.GET("/index.html", ctl.ViewDispathcer.Redirect)
	viewGroup := engine.Group("/view")
	viewGroup.GET(`/*path`, ctl.ViewDispathcer.View)

	// refresh token
	engine.POST("/api/token/refresh", ctl.RefreshDispathce.RefreshToken) // 测试接口注册

	// 组
	// user
	userGroup := engine.Group("/api/user")
	userGroup.POST("/join", ctl.UserDispacher.Join)                                       // 用户注册
	userGroup.POST("/login", ctl.UserDispacher.Login)                                     // 用户登陆
	userGroup.GET("/logout", middleware.TokenAuthMiddleware(), ctl.UserDispacher.Logout)  // 用户登出
	userGroup.POST("/passwd", middleware.TokenAuthMiddleware(), ctl.UserDispacher.Passwd) // 修改密码

	// v2ray
	v2rayGroup := engine.Group("/api/v2ray")
	v2rayGroup.POST("/start", middleware.TokenAuthMiddleware(), ctl.V2rayDispathcer.Start)              // 启动
	v2rayGroup.GET("/stop", middleware.TokenAuthMiddleware(), ctl.V2rayDispathcer.Stop)                 // 关闭
	v2rayGroup.GET("/logs", ctl.V2rayDispathcer.Logs)                                                   // 日志( websocket )
	v2rayGroup.GET("/status", ctl.V2rayDispathcer.Status)                                               // v2ray状态( websocket )
	v2rayGroup.GET("/listSettings", middleware.TokenAuthMiddleware(), ctl.V2rayDispathcer.ListSettings) // 获取参数配置
	v2rayGroup.POST("/settings", middleware.TokenAuthMiddleware(), ctl.V2rayDispathcer.Settings)        // 参数设置

	// protocol
	protocolGroup := engine.Group("/api/protocol")
	protocolGroup.POST("/add", middleware.TokenAuthMiddleware(), ctl.ProtocolDispathcer.AddProxyProtocol)       // 增加代理协议
	protocolGroup.POST("/delete", middleware.TokenAuthMiddleware(), ctl.ProtocolDispathcer.DeleteProxyProtocol) // 增加代理协议
	protocolGroup.POST("/update", middleware.TokenAuthMiddleware(), ctl.ProtocolDispathcer.UpdateProxyProtocol) // 获取代理协议
	protocolGroup.POST("/list", middleware.TokenAuthMiddleware(), ctl.ProtocolDispathcer.ListProxyProtocols)    // 获取代理协议
}
