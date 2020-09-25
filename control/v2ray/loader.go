package v2ray

import (
	"io"

	"v2ray.com/core"
	"v2ray.com/ext/tools/conf/serial"

	"github.com/gopherty/v2rayW/logger"
)

func init() {
	// 需要 json 格式注册解析器，默认为 protobuf。
	// 注册配置文件加载器
	err := core.RegisterConfigLoader(&core.ConfigFormat{
		Name:      "JSON",
		Extension: []string{"json"},
		Loader:    loaderJSON,
	})
	if err != nil {
		logger.Logger().Fatal(err.Error())
	}

	go bc.Run()
}

func loaderJSON(input io.Reader) (*core.Config, error) {
	// 解析配置文件到 Protobuf 生成的结构中。
	cnf, err := serial.LoadJSONConfig(input)
	if err != nil {
		return nil, err
	}
	return cnf, nil
}
