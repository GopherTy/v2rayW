package router

import (
	"github.com/gin-gonic/gin"
	"github.com/gopherty/v2rayW/control"
)

// Router 路由管理
type Router struct {
}

// Route 注册路由
func (Router) Route(engine *gin.Engine) {
	// 控制器
	ctl := control.New()

	// 非组
	// view
	engine.GET("/", ctl.ViewDispatcher.Redirect)
	engine.GET("/index", ctl.ViewDispatcher.Redirect)
	engine.GET("/index.html", ctl.ViewDispatcher.Redirect)
	viewGroup := engine.Group("/view")
	viewGroup.GET(`/*path`, ctl.ViewDispatcher.View)

	// 组
	// v2ray
	v2rayGroup := engine.Group("/api/v2ray")
	v2rayGroup.POST("/start", ctl.V2rayDispatcher.Start)  // 启动
	v2rayGroup.GET("/stop", ctl.V2rayDispatcher.Stop)     // 关闭
	v2rayGroup.GET("/logs", ctl.V2rayDispatcher.Logs)     // 日志( websocket )
	v2rayGroup.GET("/status", ctl.V2rayDispatcher.Status) // v2ray状态( websocket )

	// protocol
	protocolGroup := engine.Group("/api/protocol")
	protocolGroup.POST("/add", ctl.ProtocolDispatcher.AddProxyProtocol)       // 增加代理协议
	protocolGroup.POST("/delete", ctl.ProtocolDispatcher.DeleteProxyProtocol) // 删除代理协议
	protocolGroup.POST("/update", ctl.ProtocolDispatcher.UpdateProxyProtocol) // 修改代理协议
	protocolGroup.POST("/list", ctl.ProtocolDispatcher.ListProxyProtocols)    // 获取代理协议
	protocolGroup.POST("/clear", ctl.ProtocolDispatcher.ClearProxyProtocol)   // 清空代理协议

	subscribeGroup := engine.Group("/api/subscribe")
	subscribeGroup.POST("/add", ctl.SubscribeDispatcher.AddSubscribeURL)         // 增加订阅地址
	subscribeGroup.POST("/delete", ctl.SubscribeDispatcher.DeleteSubscribeURL)   // 删除订阅地址
	subscribeGroup.POST("/update", ctl.SubscribeDispatcher.UpdateSubscribeURL)   // 修改订阅地址
	subscribeGroup.POST("/list", ctl.SubscribeDispatcher.ListSubscribeURL)       // 获取订阅地址
	subscribeGroup.POST("/pull", ctl.SubscribeDispatcher.SubscribeProxyProtocol) // 订阅代理协议
}
