package control

import (
	"github.com/gopherty/v2rayW/control/protocol"
	"github.com/gopherty/v2rayW/control/refresh"
	"github.com/gopherty/v2rayW/control/subscribe"
	"github.com/gopherty/v2rayW/control/user"
	"github.com/gopherty/v2rayW/control/v2ray"
	"github.com/gopherty/v2rayW/control/view"
)

// 整个应用功能的控制器
type controller struct {
	RefreshDispathce    refresh.Dispatcher   // test 功能的控制器
	V2rayDispathcer     v2ray.Dispatcher     // v2ray 功能的控制器
	UserDispacher       user.Dispatcher      // sign 功能的控制器
	ProtocolDispathcer  protocol.Dispatcher  // 协议功能的控制器
	SubscribeDispathcer subscribe.Dispatcher // 订阅功能的控制器
	ViewDispathcer      view.Dispatcher      // 前端界面的控制器
}

func New() *controller {
	return &controller{}
}
