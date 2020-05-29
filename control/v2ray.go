package control

import (
	"fmt"
	"net/http"
	"os"

	"github.com/gopherty/v2ray-web/utils"

	"github.com/gin-gonic/gin"

	"github.com/gopherty/v2ray-web/logger"
	core "github.com/v2ray/v2ray-core"
)

// Start 启动 v2ray 服务
func (Controller) Start(c *gin.Context) {
	path := utils.BasePath()
	logger.Logger().Info(path)

	file, err := os.Open(path + "/v2ray.json")
	if err != nil {
		logger.Logger().Error(err.Error())
	}

	// 加载 v2ray 的配置文件，看是否生效。
	// 需要注册解析器
	cfg, err := core.LoadConfig("json", "v2ray.json", file)
	if err != nil {
		logger.Logger().Error(err.Error())
	}

	instance, err := core.New(cfg)
	if err != nil {
		logger.Logger().Error(err.Error())
	}

	fmt.Println(instance)
	err = instance.Start()
	if err != nil {
		logger.Logger().Error(err.Error())
		instance.Close()
	}

	c.String(http.StatusOK, "success")
}
