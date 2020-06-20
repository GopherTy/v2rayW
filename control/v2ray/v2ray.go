package v2ray

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
	"os"

	"github.com/gin-gonic/gin/binding"

	// v2ray core 启动的依赖
	_ "v2ray.com/core/app/dispatcher"
	_ "v2ray.com/core/app/proxyman/inbound"
	_ "v2ray.com/core/app/proxyman/outbound"

	"v2ray.com/core"

	"github.com/gin-gonic/gin"

	"github.com/gopherty/v2ray-web/logger"
	"github.com/gopherty/v2ray-web/serve"
	"github.com/gopherty/v2ray-web/utils"
)

// 启动成功后保存实例的状态用于关闭
var (
	instance *core.Instance
)

// Dispatcher v2ray 功能相关的控制器
type Dispatcher struct {
}

// Start 启动 v2ray 服务
func (Dispatcher) Start(c *gin.Context) {
	// 将前端传过来的参数解析成 JSON 格式写入到文件中。
	parmasToJSON(c)
	if instance != nil {
		err := instance.Start()
		defer instance.Close()
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{
				"code":  serve.StatusServerError,
				"desc":  "",
				"error": err.Error(),
				"token": "",
				"data":  gin.H{},
			})
			return
		}
		c.JSON(http.StatusOK, gin.H{
			"code":  serve.StatusOK,
			"desc":  "",
			"error": "",
			"token": "",
			"data": gin.H{
				"msg": "服务启动成功",
			},
		})
		return
	}

	// 暂定 v2ray 配置文件名称和位置硬编码，因为是通过 web-ui 来对配置文件进行操作。
	path := utils.BasePath() + "/test.json"

	file, err := os.Open(path)
	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusInternalServerError, gin.H{
			"code":  serve.StatusServerError,
			"desc":  "",
			"error": err.Error(),
			"token": "",
			"data":  gin.H{},
		})
		return
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
		c.JSON(http.StatusInternalServerError, gin.H{
			"code":  serve.StatusServerError,
			"desc":  "",
			"error": err.Error(),
			"token": "",
			"data":  gin.H{},
		})
		return
	}

	// 创建 v2ray 实例
	instance, err = core.New(config)
	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusInternalServerError, gin.H{
			"code":  serve.StatusServerError,
			"desc":  "",
			"error": err.Error(),
			"token": "",
			"data":  gin.H{},
		})
		return
	}

	err = instance.Start()
	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusInternalServerError, gin.H{
			"code":  serve.StatusServerError,
			"desc":  "",
			"error": err.Error(),
			"token": "",
			"data":  gin.H{},
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"code":  serve.StatusOK,
		"desc":  "",
		"error": "",
		"token": "",
		"data": gin.H{
			"msg": "服务启动成功",
		},
	})
}

// Stop 关闭 v2ray 服务
func (Dispatcher) Stop(c *gin.Context) {
	if instance == nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"code":  serve.StatusServerError,
			"desc":  "",
			"error": "服务未启动",
			"token": "",
			"data":  gin.H{},
		})
		return
	}

	err := instance.Close()
	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusInternalServerError, gin.H{
			"code":  serve.StatusServerError,
			"desc":  "",
			"error": err.Error(),
			"token": "",
			"data":  gin.H{},
		})
		return
	}

	// 释放全局资源
	c.JSON(http.StatusOK, gin.H{
		"code":  serve.StatusOK,
		"desc":  "",
		"error": "",
		"token": "",
		"data": gin.H{
			"msg": "服务关闭成功",
		},
	})
}

// Logs v2ray 启动后日志输出接口
func (Dispatcher) Logs(c *gin.Context) {
	if instance == nil {
		return
	}

}

// parmasToJSON 将 v2ray 启动参数转化为配置文件
func parmasToJSON(c *gin.Context) {
	// 绑定参数
	var param ParamStart
	err := c.ShouldBindWith(&param, binding.Default(c.Request.Method, c.ContentType()))
	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusUnprocessableEntity, gin.H{
			"code":  serve.StatusServerError,
			"desc":  "",
			"error": err.Error(),
			"token": "",
			"data":  gin.H{},
		})
		return
	}

	// 入口协议
	destOverride := []string{"http", "tls"}
	sock := Inbound{
		Port:     1080,
		Listen:   "127.0.0.1",
		Protocol: "socks",
		Settings: Socks{
			Auth: "noauth",
		},
		Sniffing: Sniffing{
			Enabled:      true,
			DestOverride: destOverride,
		},
	}
	inbounds := []Inbound{sock}

	user := User{
		ID:       param.UserID,
		AlterID:  param.AlertID,
		Level:    param.Level,
		Security: param.Security,
	}
	users := []User{user}

	vmess := Vmess{
		Address: param.Address,
		Port:    param.Port,
		Users:   users,
	}
	protocols := []interface{}{vmess}

	outboundConf := OutboundConfiguration{
		Vnext: protocols,
	}

	outbound := Outbound{
		Protocol: "vmess",
		Settings: outboundConf,
		StreamSettings: StreamSettings{
			NetWork:  param.Network,
			Security: param.NetSecurity,
			WSSettings: WebSocket{
				Path: param.Path,
			},
		},
		Mux: Mux{
			Enabled: true,
		},
	}

	outbounds := []Outbound{outbound}
	cnf := Config{
		Inbounds:  inbounds,
		Outbounds: outbounds,
	}

	str, err := json.MarshalIndent(&cnf, "", "    ")
	if err != nil {
		return
	}

	path := utils.BasePath() + "/test.json"
	err = ioutil.WriteFile(path, str, 0666)
	if err != nil {
		panic(err)
	}
}
