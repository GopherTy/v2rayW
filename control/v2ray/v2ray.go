package v2ray

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
	"os"
	"time"

	"github.com/gopherty/v2ray-web/v2raylogs"

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
	instance *core.Instance
	upgrader = websocket.Upgrader{
		ReadBufferSize:  1024,
		WriteBufferSize: 1024,
		CheckOrigin: func(r *http.Request) bool {
			return true
		},
	}

	// v2ray 服务状态, true 代表运行，false 代表停止。
	Protocol string // 协议名称
	ID       int    // 协议id
	Running  = false
)

// Dispatcher v2ray 功能相关的控制器
type Dispatcher struct {
}

// Start 启动 v2ray 服务
func (Dispatcher) Start(c *gin.Context) {
	// 将前端传过来的参数解析成 JSON 格式写入到文件中。
	protocol, id, err := parmasToJSON(c)
	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
			Code:        serve.StatusParamNotMatched,
			Description: "解析参数错误",
			Error:       err.Error(),
		})
		return
	}

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

		// 获取到控制台资源
		_, w := v2raylogs.Source()
		os.Stdout = w

		// 保存 v2ray 的状态
		Protocol = protocol
		ID = id
		Running = true

		c.JSON(http.StatusOK, model.BackToFrontEndData{
			Code: serve.StatusOK,
			Data: map[string]interface{}{
				"msg": "v2ray 服务启动成功",
			},
		})
		return
	}

	// 暂定 v2ray 配置文件名称和位置硬编码，因为是通过 web-ui 来对配置文件进行操作。
	path := utils.BasePath() + "/v2ray.json"
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
	config, err := core.LoadConfig("json", "v2ray.json", file)
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

	// 保存 v2ray 的状态
	Protocol = protocol
	ID = id
	Running = true

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

	// 保存 v2ray 的状态
	Protocol = ""
	ID = 0
	Running = false

	c.JSON(http.StatusOK, model.BackToFrontEndData{
		Code: serve.StatusOK,
		Data: map[string]interface{}{
			"msg": "服务关闭成功",
		},
	})
}

// Logs v2ray 启动后日志输出接口
func (Dispatcher) Logs(c *gin.Context) {
	// 获取日志输出
	conn, err := upgrader.Upgrade(c.Writer, c.Request, nil)
	defer conn.Close()
	if err != nil {
		logger.Logger().Error(err.Error())
		return
	}

	// 先将 http 请求升级为 websocket ，在验证 token 是否过期，如果过期则返回 websocket 中的保留状态码 5000-10000
	// 客户端知道 token 过期，就将刷新 token 或 重新登录后再次请求该接口。
	err = token.ValidWSToken(c.Request)
	if err != nil {
		logger.Logger().Error(err.Error())

		closed := conn.CloseHandler()
		err = closed(5001, "unauthrizationed")
		if err != nil {
			logger.Logger().Error(err.Error())
		}
		return
	}

	// 信号量，用于关闭发送消息协程。
	signal := make(chan int)
	go func() {
		for {
			select {
			case msg := <-v2raylogs.LogsMsg():
				err = conn.WriteMessage(websocket.TextMessage, msg)
				if err != nil {
					logger.Logger().Error(err.Error())
					return
				}
			case <-signal:
				return
			}
		}
	}()

	// 读取客户端发送的停止日志输出。
	for {
		_, _, err := conn.ReadMessage()
		if err != nil {
			signal <- 1 // 中断发送消息操作
			logger.Logger().Error(err.Error())
			break
		}
	}
}

// Status 服务器端 v2ray 的状态
func (Dispatcher) Status(c *gin.Context) {
	conn, err := upgrader.Upgrade(c.Writer, c.Request, nil)
	defer conn.Close()
	if err != nil {
		logger.Logger().Error(err.Error())
		return
	}

	// 先将 http 请求升级为 websocket ，在验证 token 是否过期，如果过期则返回 websocket 中的保留状态码 5000-10000
	// 客户端知道 token 过期，就将刷新 token 或 重新登录后再次请求该接口。
	err = token.ValidWSToken(c.Request)
	if err != nil {
		logger.Logger().Error(err.Error())
		closed := conn.CloseHandler()
		err = closed(5001, "unauthrizationed")
		if err != nil {
			logger.Logger().Error(err.Error())
		}
		return
	}

	// 发送服务器端 v2ray 的状态
	go func() {
		for {
			err := conn.WriteJSON(gin.H{
				"running":  Running,
				"protocol": Protocol,
				"id":       ID,
			})
			if err != nil {
				break
			}
			time.Sleep(1e9)
		}
	}()

	// 读取客户端发送的关闭连接。
	for {
		_, _, err := conn.ReadMessage()
		if err != nil {
			logger.Logger().Error(err.Error())
			break
		}
	}
}

// parmasToJSON 将 v2ray 启动参数转化为配置文件
func parmasToJSON(c *gin.Context) (protocol string, id int, err error) {
	// 绑定参数
	var param ParamStart
	err = c.ShouldBindWith(&param, binding.Default(c.Request.Method, c.ContentType()))
	if err != nil {
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

	path := utils.BasePath() + "/v2ray.json"
	err = ioutil.WriteFile(path, str, 0666)
	if err != nil {
		return
	}

	return param.Protocol, param.ID, err
}
