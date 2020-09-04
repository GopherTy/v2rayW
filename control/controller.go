package control

import (
	"github.com/gopherty/v2rayW/control/protocol"
	"github.com/gopherty/v2rayW/control/refresh"
	"github.com/gopherty/v2rayW/control/user"
	"github.com/gopherty/v2rayW/control/v2ray"
	"github.com/gopherty/v2rayW/control/view"
)

// Controller 整个应用功能的控制器
type Controller struct {
	RefreshDispathce   refresh.Dispatcher  // test 功能的控制器
	V2rayDispathcer    v2ray.Dispatcher    // v2ray 功能的控制器
	UserDispacher      user.Dispatcher     // sign 功能的控制器
	ProtocolDispathcer protocol.Dispatcher // 协议功能的控制器
	ViewDispathcer     view.Dispatcher     // 前端界面的控制器
}
