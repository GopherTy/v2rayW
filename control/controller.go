package control

import (
	"net/http"

	"github.com/gopherty/v2rayW/db"
	"github.com/gopherty/v2rayW/logger"
	"github.com/gopherty/v2rayW/model/proxy"

	"github.com/gopherty/v2rayW/control/protocol"
	"github.com/gopherty/v2rayW/control/subscribe"
	"github.com/gopherty/v2rayW/control/v2ray"
	"github.com/gopherty/v2rayW/control/view"
	"github.com/gopherty/v2rayW/service/kernel"
	"github.com/gorilla/websocket"
)

// 整个应用功能的控制器
type controller struct {
	V2rayDispatcher     v2ray.Dispatcher     // v2ray 功能的控制器
	ProtocolDispatcher  protocol.Dispatcher  // 协议功能的控制器
	SubscribeDispatcher subscribe.Dispatcher // 订阅功能的控制器
	ViewDispatcher      view.Dispatcher      // 前端界面的控制器
}

func New() *controller {
	core := kernel.New()

	enableAvailableProtocol(core)

	return &controller{
		V2rayDispatcher: v2ray.Dispatcher{
			Core: core,
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

// 自启动程序当前可用的配置协议，
func enableAvailableProtocol(core *kernel.Kernel) {
	var (
		v2ray []proxy.Vmess
		vless []proxy.Vless
		socks []proxy.Socks
		ss    []proxy.Shadowsocks
	)

	err := db.Engine().Find(&v2ray)
	if err != nil {
		logger.Logger().Error(err.Error())
		return
	}

	if len(v2ray) > 0 {
		_ = core.Start([]byte(v2ray[0].ConfigFile), kernel.Status{
			ID:        int(v2ray[0].ID),
			ProtoName: v2ray[0].Protocol,
			Running:   true,
		})

		return
	}

	err = db.Engine().Find(&vless)
	if err != nil {
		logger.Logger().Error(err.Error())
		return
	}

	if len(vless) > 0 {
		_ = core.Start([]byte(vless[0].ConfigFile), kernel.Status{
			ID:        int(vless[0].ID),
			ProtoName: vless[0].Protocol,
			Running:   true,
		})

		return
	}

	err = db.Engine().Find(&ss)
	if err != nil {
		logger.Logger().Error(err.Error())
		return
	}

	if len(ss) > 0 {
		_ = core.Start([]byte(ss[0].ConfigFile), kernel.Status{
			ID:        int(ss[0].ID),
			ProtoName: ss[0].Protocol,
			Running:   true,
		})

		return
	}

	err = db.Engine().Find(&socks)
	if err != nil {
		logger.Logger().Error(err.Error())
		return
	}

	if len(socks) > 0 {
		_ = core.Start([]byte(socks[0].ConfigFile), kernel.Status{
			ID:        int(socks[0].ID),
			ProtoName: socks[0].Protocol,
			Running:   true,
		})

		return
	}

	return
}
