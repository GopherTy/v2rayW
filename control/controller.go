package control

import (
	"github.com/gopherty/v2ray-web/control/sign"
	"github.com/gopherty/v2ray-web/control/test"
	"github.com/gopherty/v2ray-web/control/v2ray"
)

// Controller 整个应用功能的控制器
type Controller struct {
	TestDispathce   test.Dispatcher  // test 功能的控制器
	V2rayDispathcer v2ray.Dispatcher // v2ray 功能的控制器
	SignDispacher   sign.Dispatcher  // sign 功能能的控制器
}
