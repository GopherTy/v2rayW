package control

import (
	"github.com/gopherty/v2ray-web/control/test"
	"github.com/gopherty/v2ray-web/control/v2ray"
)

// Controller 整个应用功能的控制器
type Controller struct {
	V2rayDispathcer v2ray.Dispatcher // v2ray 功能的控制器
	TestDispathce   test.Dispatcher
}
