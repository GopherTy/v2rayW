package v2ray

import (
	"bufio"
	"encoding/json"
	"io/ioutil"
	"net/http"
	"os"

	"github.com/gin-gonic/gin/binding"
	"github.com/gopherty/v2ray-web/model"
	"github.com/gopherty/v2ray-web/token"
	"github.com/gorilla/websocket"

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
	instance  *core.Instance
	oldStdout *os.File
	close     = false
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
		if err != nil {
			logger.Logger().Error(err.Error())
			c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
				Code:        serve.StatusV2rayError,
				Description: "v2ray 启动错误",
				Error:       err.Error(),
			})
			return
		}

		c.JSON(http.StatusOK, model.BackToFrontEndData{
			Code: serve.StatusOK,
			Data: map[string]interface{}{
				"msg": "v2ray 服务启动成功",
			},
		})
		return
	}

	// 暂定 v2ray 配置文件名称和位置硬编码，因为是通过 web-ui 来对配置文件进行操作。
	path := utils.BasePath() + "/test.json"
	file, err := os.Open(path)
	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
			Code:        serve.StatusServerError,
			Description: "打开 v2ray 配置文件出错",
			Error:       err.Error(),
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
	config, err := core.LoadConfig("json", "test.json", file)
	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
			Code:        serve.StatusServerError,
			Description: "加载 v2ray 配置文件出错",
			Error:       err.Error(),
		})
		return
	}

	// 创建 v2ray 实例
	instance, err = core.New(config)
	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
			Code:        serve.StatusV2rayError,
			Description: "创建 v2ray 实例出错",
			Error:       err.Error(),
		})
		return
	}

	err = instance.Start()
	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
			Code:        serve.StatusV2rayError,
			Description: "v2ray 启动错误",
			Error:       err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, model.BackToFrontEndData{
		Code: serve.StatusOK,
		Data: map[string]interface{}{
			"msg": "服务启动成功",
		},
	})
}

// Stop 关闭 v2ray 服务
func (Dispatcher) Stop(c *gin.Context) {
	if instance == nil {
		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
			Code:  serve.StatusV2rayError,
			Error: "服务未启动",
		})
		return
	}

	err := instance.Close()
	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
			Code:        serve.StatusV2rayError,
			Description: "v2ray 关闭服务失败",
			Error:       err.Error(),
		})
		return
	}

	close = true
	c.JSON(http.StatusOK, model.BackToFrontEndData{
		Code: serve.StatusOK,
		Data: map[string]interface{}{
			"msg": "服务关闭成功",
		},
	})
}

// Logs v2ray 启动后日志输出接口
func (Dispatcher) Logs(c *gin.Context) {
	err := token.ValidWSToken(c.Request)
	if err != nil {
		c.String(http.StatusUnauthorized, "Unauthorized")
		return
	}

	// 获取日志输出
	upgrader := websocket.Upgrader{
		ReadBufferSize:  1024,
		WriteBufferSize: 1024,
		CheckOrigin: func(r *http.Request) bool {
			return true
		},
	}
	conn, err := upgrader.Upgrade(c.Writer, c.Request, nil)
	defer conn.Close()
	if err != nil {
		logger.Logger().Error(err.Error())
		return
	}

	// 启动后捕获控制台
	oldStdout = os.Stdout
	r, w, err := os.Pipe()
	if err != nil {
		logger.Logger().Error(err.Error())
		return
	}
	os.Stdout = w
	go func() {
		for {
			reader := bufio.NewReader(r)
			logs, err := reader.ReadBytes('\n')
			if err != nil {
				logger.Logger().Error(err.Error())
				os.Stdout = oldStdout
				oldStdout = nil
				break
			}
			err = conn.WriteMessage(websocket.TextMessage, logs)
			if err != nil {
				logger.Logger().Error(err.Error())
				os.Stdout = oldStdout
				oldStdout = nil
				break
			}
		}
	}()

	// 读取客户端发送的停止日志输出。
	for {
		_, _, err := conn.ReadMessage()
		if err != nil {
			logger.Logger().Error(err.Error())
			break
		}
	}
}

// parmasToJSON 将 v2ray 启动参数转化为配置文件
func parmasToJSON(c *gin.Context) {
	// 绑定参数
	var param ParamStart
	err := c.ShouldBindWith(&param, binding.Default(c.Request.Method, c.ContentType()))
	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusUnprocessableEntity, model.BackToFrontEndData{
			Code:        serve.StatusParamNotMatched,
			Description: "前端请求参数和后端绑定参数不匹配",
			Error:       err.Error(),
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
		return
	}
}
