package control

import (
	"net/http"

	"github.com/gopherty/v2rayW/control/protocol"
	"github.com/gopherty/v2rayW/control/refresh"
	"github.com/gopherty/v2rayW/control/subscribe"
	"github.com/gopherty/v2rayW/control/user"
	"github.com/gopherty/v2rayW/control/v2ray"
	"github.com/gopherty/v2rayW/control/view"
	"github.com/gopherty/v2rayW/service/kernel"
	"github.com/gorilla/websocket"
)

// 整个应用功能的控制器
type controller struct {
	RefreshDispatcher   refresh.Dispatcher   // test 功能的控制器
	V2rayDispatcher     v2ray.Dispatcher     // v2ray 功能的控制器
	UserDispatcher      user.Dispatcher      // sign 功能的控制器
	ProtocolDispatcher  protocol.Dispatcher  // 协议功能的控制器
	SubscribeDispatcher subscribe.Dispatcher // 订阅功能的控制器
	ViewDispatcher      view.Dispatcher      // 前端界面的控制器
}

func New() *controller {
	return &controller{
		V2rayDispatcher: v2ray.Dispatcher{
			Core: kernel.New(),
			Upgrader: &websocket.Upgrader{
				ReadBufferSize:  1024,
				WriteBufferSize: 1024,
				CheckOrigin: func(r *http.Request) bool {
					return true
				},
			},
		},
	}
}
