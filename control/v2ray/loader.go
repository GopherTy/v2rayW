package v2ray

import (
	"encoding/json"
	"io/ioutil"

	"github.com/gopherty/v2rayW/logger"
	"github.com/gopherty/v2rayW/utils"
)

// v2ray config  object
var cnf = NewConfig()

func init() {
	// 解析 v2ray 的配置文件
	path := utils.BasePath() + "/v2ray.json"
	content, err := ioutil.ReadFile(path)
	if err != nil {
		logger.Logger().Fatal(err.Error() + "\n")
	}
	err = json.Unmarshal(content, cnf)
	if err != nil {
		logger.Logger().Fatal(err.Error() + "\n")
	}

	// 日志广播器
	go bc.Run()
}
