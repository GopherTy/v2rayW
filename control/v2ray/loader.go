package v2ray

import (
	"io"

	"v2ray.com/core"
	"v2ray.com/ext/tools/conf/serial"
)

func loaderJSON(input io.Reader) (*core.Config, error) {
	// 解析配置文件到 Protobuf 生成的结构中。
	cnf, err := serial.LoadJSONConfig(input)
	if err != nil {
		return nil, err
	}
	return cnf, nil
}
