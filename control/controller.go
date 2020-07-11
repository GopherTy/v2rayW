package control

import (
	"github.com/gopherty/v2ray-web/control/protocol"
	"github.com/gopherty/v2ray-web/control/refresh"
	"github.com/gopherty/v2ray-web/control/user"
	"github.com/gopherty/v2ray-web/control/v2ray"
)

// Controller 整个应用功能的控制器
type Controller struct {
	RefreshDispathce   refresh.Dispatcher  // test 功能的控制器
	V2rayDispathcer    v2ray.Dispatcher    // v2ray 功能的控制器
	UserDispacher      user.Dispatcher     // sign 功能的控制器
	ProtocolDispathcer protocol.Dispatcher // 协议功能的控制器
}
