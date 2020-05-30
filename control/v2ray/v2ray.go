package v2ray

import (
	"net/http"
	"os"

	// v2ray core 启动的依赖
	_ "v2ray.com/core/app/dispatcher"
	_ "v2ray.com/core/app/proxyman/inbound"
	_ "v2ray.com/core/app/proxyman/outbound"

	"v2ray.com/core"

	"github.com/gin-gonic/gin"

	"github.com/gopherty/v2ray-web/logger"
	"github.com/gopherty/v2ray-web/utils"
)

// 启动成功后保存实例的状态用于关闭
var (
	v2rayInstance *core.Instance
)

// Dispatcher v2ray 功能相关的控制器
type Dispatcher struct {
}

// Start 启动 v2ray 服务
func (Dispatcher) Start(c *gin.Context) {
	if v2rayInstance != nil {
		c.String(http.StatusInternalServerError, "服务已启动")
		return
	}

	// 暂定 v2ray 配置文件名称和位置硬编码，因为是通过 web-ui 来对配置文件进行操作。
	path := utils.BasePath() + "/v2ray.json"

	file, err := os.Open(path)
	if err != nil {
		logger.Logger().Error(err.Error())
	}
	defer file.Close()

	// 需要 json 格式注册解析器，默认为 protobuf。
	// 注册配置文件加载器
	core.RegisterConfigLoader(&core.ConfigFormat{
		Name:      "JSON",
		Extension: []string{"json"},
		Loader:    loaderJSON,
	})

	// 解析 v2ray 的配置文件
	config, err := core.LoadConfig("json", "v2ray.json", file)
	if err != nil {
		logger.Logger().Error(err.Error())
		c.String(http.StatusInternalServerError, err.Error())
		return
	}

	// 创建 v2ray 实例
	instance, err := core.New(config)
	if err != nil {
		logger.Logger().Error(err.Error())
		c.String(http.StatusInternalServerError, err.Error())
		return
	}

	err = instance.Start()
	if err != nil {
		logger.Logger().Error(err.Error())
		c.String(http.StatusInternalServerError, err.Error())
		return
	}

	v2rayInstance = instance // 保存实例，用于关闭。
	c.String(http.StatusOK, "服务启动成功")
}

// Stop 关闭 v2ray 服务
func (Dispatcher) Stop(c *gin.Context) {
	if v2rayInstance == nil {
		c.String(http.StatusInternalServerError, "服务未启动")
		return
	}

	err := v2rayInstance.Close()
	if err != nil {
		logger.Logger().Error(err.Error())
		c.String(http.StatusInternalServerError, err.Error())
		return
	}

	// 释放全局资源
	v2rayInstance = nil
	c.String(http.StatusOK, "服务关闭成功")
}
