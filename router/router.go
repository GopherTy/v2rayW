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

	// // v1 REST API
	// api := engine.Group("/api")
	// v1 := api.Group("/v1")

	// {
	// 	// view
	// 	v1.GET("/", ctl.ViewDispathcer.Redirect)
	// 	v1.GET("/index", ctl.ViewDispathcer.Redirect)
	// 	v1.GET("/index.html", ctl.ViewDispathcer.Redirect)

	// 	view := v1.Group("/view")
	// 	view.GET("/*path", ctl.ViewDispathcer.View)
	// }

	// {
	// 	// auth
	// 	auth := v1.Group("/auth")
	// 	auth.POST("/token", ctl.UserDispacher.Login)
	// 	auth.DELETE("/token", ctl.UserDispacher.Logout)

	// 	auth.PATCH("/token", ctl.RefreshDispathce.RefreshToken)
	// }

	// {
	// 	// user
	// 	v1.POST("/user", ctl.UserDispacher.Join)
	// 	v1.PATCH("/user/{id}", middleware.TokenAuthMiddleware(), ctl.UserDispacher.Passwd)
	// }

	// {
	// 	// v2fly
	// 	service := v1.Group("/service")
	// 	{
	// 		service.POST("/v2fly", middleware.TokenAuthMiddleware(), ctl.V2rayDispathcer.Start)
	// 		service.DELETE("/v2fly", middleware.TokenAuthMiddleware(), ctl.V2rayDispathcer.Stop)

	// 		service.GET("/v2fly/configuration", middleware.TokenAuthMiddleware(), ctl.V2rayDispathcer.ListSettings)
	// 		service.PATCH("/v2fly/configuration", middleware.TokenAuthMiddleware(), ctl.V2rayDispathcer.Settings)

	// 		service.GET("/v2fly/logs", ctl.V2rayDispathcer.Logs)
	// 		service.GET("/v2fly/state", ctl.V2rayDispathcer.Status)
	// 	}

	// 	{
	// 		// proxy protocol
	// 		v1.GET("/{uid}/protocols", middleware.TokenAuthMiddleware(), ctl.ProtocolDispathcer.ListProxyProtocols)
	// 		v1.POST("/{uid}/protocol/{name}", middleware.TokenAuthMiddleware(), ctl.ProtocolDispathcer.AddProxyProtocol)
	// 		v1.PATCH("/{uid}/protocol/{name}/{id}", middleware.TokenAuthMiddleware(), ctl.ProtocolDispathcer.UpdateProxyProtocol)
	// 		v1.DELETE("/{uid}/protocol/{name}/{id}", middleware.TokenAuthMiddleware(), ctl.ProtocolDispathcer.DeleteProxyProtocol)
	// 		v1.DELETE("/{uid}/protocol", middleware.TokenAuthMiddleware(), ctl.ProtocolDispathcer.ClearProxyProtocol)
	// 	}

	// 	{
	// 		// url subscription address
	// 		v1.GET("/{uid}/subscription/urls", middleware.TokenAuthMiddleware(), ctl.SubscribeDispathcer.ListSubscribeURL)
	// 		v1.POST("/{uid}/subscription/url", middleware.TokenAuthMiddleware(), ctl.SubscribeDispathcer.AddSubscribeURL)
	// 		v1.PUT("/{uid}/subscription/url/{uid}", middleware.TokenAuthMiddleware(), ctl.SubscribeDispathcer.UpdateSubscribeURL)
	// 		v1.DELETE("/{uid}/subscription/url/{uid}", middleware.TokenAuthMiddleware(), ctl.SubscribeDispathcer.DeleteSubscribeURL)

	// 		v1.GET("/{uid}/subscription/{addr}", middleware.TokenAuthMiddleware(), ctl.SubscribeDispathcer.SubscribeProxyProtocol)
	// 	}
	// }

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
	protocolGroup.POST("/delete", middleware.TokenAuthMiddleware(), ctl.ProtocolDispathcer.DeleteProxyProtocol) // 删除代理协议
	protocolGroup.POST("/update", middleware.TokenAuthMiddleware(), ctl.ProtocolDispathcer.UpdateProxyProtocol) // 修改代理协议
	protocolGroup.POST("/list", middleware.TokenAuthMiddleware(), ctl.ProtocolDispathcer.ListProxyProtocols)    // 获取代理协议
	protocolGroup.POST("/clear", middleware.TokenAuthMiddleware(), ctl.ProtocolDispathcer.ClearProxyProtocol)   // 清空代理协议

	subscribeGroup := engine.Group("/api/subscribe")
	subscribeGroup.POST("/add", middleware.TokenAuthMiddleware(), ctl.SubscribeDispathcer.AddSubscribeURL)         // 增加订阅地址
	subscribeGroup.POST("/delete", middleware.TokenAuthMiddleware(), ctl.SubscribeDispathcer.DeleteSubscribeURL)   // 删除订阅地址
	subscribeGroup.POST("/update", middleware.TokenAuthMiddleware(), ctl.SubscribeDispathcer.UpdateSubscribeURL)   // 修改订阅地址
	subscribeGroup.POST("/list", middleware.TokenAuthMiddleware(), ctl.SubscribeDispathcer.ListSubscribeURL)       // 获取订阅地址
	subscribeGroup.POST("/pull", middleware.TokenAuthMiddleware(), ctl.SubscribeDispathcer.SubscribeProxyProtocol) // 订阅代理协议
}
