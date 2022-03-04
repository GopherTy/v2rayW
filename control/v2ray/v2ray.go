package v2ray

import (
	"net/http"

	"github.com/gopherty/v2rayW/service/kernel"

	"github.com/gopherty/v2rayW/logger"
	"github.com/gopherty/v2rayW/model"
	"github.com/gopherty/v2rayW/serve"
	"github.com/gorilla/websocket"

	"github.com/gin-gonic/gin"
)

// Dispatcher v2ray 功能相关的控制器
type Dispatcher struct {
	Core *kernel.Kernel
	// Upgrader upgrade to websocket protocol
	Upgrader *websocket.Upgrader
}

func (d *Dispatcher) Start(c *gin.Context) {
	var param ProtocolParam
	var err error

	defer func() {
		if err != nil {
			c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
				Code:        serve.StatusV2rayError,
				Description: "v2ray 启动失败",
				Error:       err.Error(),
			})
		}
	}()

	// parse parameters
	err = c.ShouldBind(&param)
	if err != nil {
		return
	}

	err = d.Core.Start([]byte(param.ConfigFile), kernel.Status{
		ID:        param.ID,
		ProtoName: param.Protocol,
		Running:   true,
	})
	if err != nil {
		return
	}

	c.JSON(http.StatusOK, model.BackToFrontEndData{
		Code: serve.StatusOK,
		Data: map[string]interface{}{
			"msg": "服务启动成功",
		},
	})
}

func (d *Dispatcher) Stop(c *gin.Context) {
	if d.Core == nil {
		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
			Code:  serve.StatusV2rayError,
			Error: "服务未启动",
		})
		return
	}

	err := d.Core.Stop()
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
			Code:        serve.StatusV2rayError,
			Description: "服务关闭失败",
			Error:       err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, model.BackToFrontEndData{
		Code: serve.StatusOK,
		Data: map[string]interface{}{
			"msg": "服务关闭成功",
		},
	})
}

func (d *Dispatcher) Logs(c *gin.Context) {
	// 将 token 加入到 websocket 的子协议中，不设置 chrome 浏览器，不能使用 websocket。
	d.Upgrader.Subprotocols = []string{c.GetHeader("Sec-WebSocket-Protocol")}
	// 获取日志输出
	conn, err := d.Upgrader.Upgrade(c.Writer, c.Request, nil)
	if err != nil {
		logger.Logger().Error(err.Error())
		return
	}
	defer conn.Close()

	err = d.Core.Logs(conn)
	if err != nil && !websocket.IsUnexpectedCloseError(err) {
		logger.Logger().Error(err.Error())
	}
}

func (d *Dispatcher) Status(c *gin.Context) {
	// 将 token 加入到 websocket 的子协议中，不设置 chrome 浏览器，不能使用 websocket。
	d.Upgrader.Subprotocols = []string{c.GetHeader("Sec-WebSocket-Protocol")}
	conn, err := d.Upgrader.Upgrade(c.Writer, c.Request, nil)
	if err != nil {
		logger.Logger().Error(err.Error())
		return
	}
	defer conn.Close()

	err = d.Core.Status(conn)
	if err != nil && !websocket.IsUnexpectedCloseError(err) {
		logger.Logger().Error(err.Error())
	}
}

// // 启动成功后保存实例的状态用于关闭
// var (
// 	instance *core.Instance
// 	upgrader = websocket.Upgrader{
// 		ReadBufferSize:  1024,
// 		WriteBufferSize: 1024,
// 		CheckOrigin: func(r *http.Request) bool {
// 			return true
// 		},
// 	}
//
// 	// 服务器状态推送
// 	subj = broadcaster.NewSubject()
//
// 	// 日志输出相关变量
// 	r, w, stdout *os.File
// 	bc           = broadcaster.NewBroadcaster(0)
// )
//
// // Start 启动 v2ray 服务
// func (d *Dispatcher) V1Start(c *gin.Context) {
// 	var err error
// 	// 启动失败时还原之前的 instance 状态
// 	preInstance := instance
// 	defer func() {
// 		if err != nil {
// 			instance = preInstance
// 		}
// 	}()
//
// 	var params ProtocolParam
// 	err = c.ShouldBind(&params)
// 	if err != nil {
// 		logger.Logger().Error(err.Error())
// 		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
// 			Code:        serve.StatusParamNotMatched,
// 			Description: "解析参数错误",
// 			Error:       err.Error(),
// 		})
// 		return
// 	}
//
// 	cnf := protocol.NewConfig()
// 	// v2ray 配置文件暂不支持外部定位位置
// 	path := utils.BasePath() + "/v2ray.json"
// 	err = json.Unmarshal([]byte(params.ConfigFile), cnf)
// 	if err != nil {
// 		logger.Logger().Error(err.Error())
// 		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
// 			Code:        serve.StatusParamNotMatched,
// 			Description: "解析参数错误",
// 			Error:       err.Error(),
// 		})
// 		return
// 	}
//
// 	// 以下加锁
// 	d.mu.Lock()
// 	defer d.mu.Unlock()
// 	err = ioutil.WriteFile(path, []byte(params.ConfigFile), os.ModePerm)
// 	if err != nil {
// 		logger.Logger().Error(err.Error())
// 		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
// 			Code:        serve.StatusParamNotMatched,
// 			Description: "解析参数错误",
// 			Error:       err.Error(),
// 		})
// 		return
// 	}
//
// 	file, err := os.Open(path)
// 	if err != nil {
// 		logger.Logger().Error(err.Error())
// 		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
// 			Code:        serve.StatusServerError,
// 			Description: "打开 v2ray 配置文件出错",
// 			Error:       err.Error(),
// 		})
// 		return
// 	}
// 	defer file.Close()
//
// 	// 解析 v2ray 的配置文件
// 	config, err := core.LoadConfig("json", path, file)
// 	if err != nil {
// 		logger.Logger().Error(err.Error())
// 		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
// 			Code:        serve.StatusServerError,
// 			Description: "加载 v2ray 配置文件出错",
// 			Error:       err.Error(),
// 		})
// 		return
// 	}
//
// 	// 创建 v2ray 实例
// 	instance, err = core.New(config)
// 	if err != nil {
// 		logger.Logger().Error(err.Error())
// 		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
// 			Code:        serve.StatusV2rayError,
// 			Description: "创建 v2ray 实例出错",
// 			Error:       err.Error(),
// 		})
// 		return
// 	}
//
// 	// 为了打印 v2ray 运行日志
// 	// 在 v2ray 启动之前捕获控制台输出。
// 	r, w, err = os.Pipe()
// 	if err != nil {
// 		logger.Logger().Error(err.Error())
// 		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
// 			Code:        serve.StatusServerError,
// 			Description: "os.Pipe()调用失败",
// 			Error:       err.Error(),
// 		})
// 		return
// 	}
//
// 	stdout = os.Stdout
// 	os.Stdout = w
// 	reader := bufio.NewReader(r)
//
// 	// 启动 v2ray
// 	err = instance.Start()
// 	if err != nil {
// 		os.Stdout = stdout
// 		stdout = nil
// 		w.Close()
// 		logger.Logger().Error(err.Error())
// 		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
// 			Code:        serve.StatusV2rayError,
// 			Description: "v2ray 启动失败",
// 			Error:       err.Error(),
// 		})
// 		return
// 	}
//
// 	// 当有多个协议时，一个代理已启动成功时，当另一个代理协议实列对象应该关闭。
// 	if preInstance != nil {
// 		err = preInstance.Close()
// 		if err != nil {
// 			logger.Logger().Error(err.Error())
// 		}
// 	}
//
// 	// 推送日志
// 	go func() {
// 		for {
// 			// v2ray 单行日志输出以换行作为结束符
// 			logs, err := reader.ReadBytes('\n')
// 			if err != nil {
// 				logger.Logger().Error(err.Error())
// 				break
// 			}
//
// 			// 若打开多个网页时，同时推送输出日志
// 			err = bc.Publish(logs)
// 			if err != nil {
// 				logger.Logger().Error(err.Error())
// 				break
// 			}
// 		}
// 	}()
//
// 	// 服务器保存 v2ray 的状态
// 	// 同步至客户端 v2ray 状态
// 	d.status = &Status{
// 		ProtoName: params.Protocol,
// 		ID:        params.ID,
// 		Running:   true,
// 	}
// 	subj.Publish(d.status)
//
// 	c.JSON(http.StatusOK, model.BackToFrontEndData{
// 		Code: serve.StatusOK,
// 		Data: map[string]interface{}{
// 			"msg": "服务启动成功",
// 		},
// 	})
// }
//
// // Stop 关闭 v2ray 服务
// func (d *Dispatcher) V1Stop(c *gin.Context) {
// 	if instance == nil {
// 		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
// 			Code:  serve.StatusV2rayError,
// 			Error: "服务未启动",
// 		})
// 		return
// 	}
//
// 	err := instance.Close()
// 	if err != nil {
// 		logger.Logger().Error(err.Error())
// 		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
// 			Code:        serve.StatusV2rayError,
// 			Description: "v2ray 关闭服务失败",
// 			Error:       err.Error(),
// 		})
// 		return
// 	}
//
// 	// 释放资源对象
// 	instance = nil
//
// 	// 归还控制台
// 	os.Stdout = stdout
// 	stdout = nil
// 	w.Close() // 只用关闭 w ，因为 r 被 reader 捕获后，在它关闭时，r也会关闭。
//
// 	// 同步 v2ray 实列状态
// 	d.mu.Lock()
// 	d.status.Running = false
// 	subj.Publish(d.status)
// 	d.mu.Unlock()
//
// 	c.JSON(http.StatusOK, model.BackToFrontEndData{
// 		Code: serve.StatusOK,
// 		Data: map[string]interface{}{
// 			"msg": "服务关闭成功",
// 		},
// 	})
// }
//
// // Logs v2ray 启动后日志输出接口
// func (d *Dispatcher) V1Logs(c *gin.Context) {
// 	// 将 token 加入到 websocket 的子协议中，不设置 chrome 浏览器，不能使用 websocket。
// 	upgrader.Subprotocols = []string{c.GetHeader("Sec-WebSocket-Protocol")}
// 	// 获取日志输出
// 	conn, err := upgrader.Upgrade(c.Writer, c.Request, nil)
// 	if err != nil {
// 		logger.Logger().Error(err.Error())
// 		return
// 	}
// 	defer conn.Close()
//
// 	// 先将 http 请求升级为 websocket ，在验证 token 是否过期，如果过期则返回 websocket 中的保留状态码 5000-10000
// 	// 客户端知道 token 过期，就将刷新 token 或 重新登录后再次请求该接口。
// 	err = token.ValidWSToken(c.Request)
// 	if err != nil {
// 		logger.Logger().Error(err.Error())
//
// 		closed := conn.CloseHandler()
// 		err = closed(5001, "unauthrizationed")
// 		if err != nil {
// 			logger.Logger().Error(err.Error())
// 		}
// 		return
// 	}
//
// 	// 增加订阅
// 	logs := make(chan interface{})
// 	_ = bc.Subscribe(logs)
//
// 	go func() {
// 		for {
// 			select {
// 			case log := <-logs:
// 				if v, ok := log.([]byte); ok {
// 					err = conn.WriteMessage(websocket.TextMessage, v)
// 					if err != nil {
// 						logger.Logger().Warn(err.Error())
// 						return
// 					}
// 				} else {
// 					return
// 				}
// 			case <-bc.Done():
// 				return
// 			}
// 		}
// 	}()
//
// 	// 读取客户端发送的停止日志输出。
// 	for {
// 		_, _, err := conn.ReadMessage()
// 		if err != nil {
// 			// 取消订阅
// 			_ = bc.Unsubscribe(logs)
// 			logger.Logger().Warn(err.Error())
// 			break
// 		}
// 	}
// }
//
// // Status 服务器端 v2ray 的状态
// func (d *Dispatcher) V1Status(c *gin.Context) {
// 	// 将 token 加入到 websocket 的子协议中，不设置 chrome 浏览器，不能使用 websocket。
// 	upgrader.Subprotocols = []string{c.GetHeader("Sec-WebSocket-Protocol")}
// 	conn, err := upgrader.Upgrade(c.Writer, c.Request, nil)
// 	if err != nil {
// 		logger.Logger().Error(err.Error())
// 		return
// 	}
// 	defer conn.Close()
//
// 	// 先将 http 请求升级为 websocket ，在验证 token 是否过期，如果过期则返回 websocket 中的保留状态码 5000-10000
// 	// 客户端知道 token 过期，就将刷新 token 或 重新登录后再次请求该接口。
// 	err = token.ValidWSToken(c.Request)
// 	if err != nil {
// 		logger.Logger().Error(err.Error())
// 		closed := conn.CloseHandler()
// 		err = closed(5001, "unauthrizationed")
// 		if err != nil {
// 			logger.Logger().Error(err.Error())
// 		}
// 		return
// 	}
//
// 	subs := subj.HandleFunc(func(msg interface{}) {
// 		if status, ok := msg.(*Status); ok {
// 			err := conn.WriteJSON(gin.H{
// 				"running":  status.Running,
// 				"protocol": status.ProtoName,
// 				"id":       status.ID,
// 			})
// 			if err != nil {
// 				logger.Logger().Error(err.Error())
// 				return
// 			}
// 		}
// 	})
// 	if d.status != nil {
// 		subj.Publish(d.status)
// 	}
//
// 	// 读取客户端发送的关闭连接。
// 	for {
// 		_, _, err := conn.ReadMessage()
// 		if err != nil {
// 			subs.Unsubscribe(true)
// 			logger.Logger().Warn(err.Error())
// 			break
// 		}
// 	}
// }

// Settings 修改 v2ray 的配置文件
// func (Dispatcher) Settings(c *gin.Context) {
// 	var param SettingsParam
// 	err := c.ShouldBindWith(&param, binding.Default(c.Request.Method, c.ContentType()))
// 	if err != nil {
// 		logger.Logger().Error(err.Error())
// 		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
// 			Code:        serve.StatusParamNotMatched,
// 			Description: "解析参数错误",
// 			Error:       err.Error(),
// 		})
// 		return
// 	}

// 	path := utils.BasePath() + "/v2ray.json"
// 	mu.Lock()
// 	defer mu.Unlock()
// 	cnf.Inbounds[0]["listen"] = param.Address
// 	cnf.Inbounds[0]["port"] = param.Port
// 	cnf.Inbounds[0]["protocol"] = param.Protocol

// 	content, err := json.MarshalIndent(cnf, "", "	")
// 	if err != nil {
// 		logger.Logger().Error(err.Error())
// 		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
// 			Code:        serve.StatusServerError,
// 			Description: "保存失败",
// 			Error:       err.Error(),
// 		})
// 		return
// 	}
// 	err = ioutil.WriteFile(path, content, os.ModePerm)
// 	if err != nil {
// 		logger.Logger().Error(err.Error())
// 		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
// 			Code:        serve.StatusServerError,
// 			Description: "保存失败",
// 			Error:       err.Error(),
// 		})
// 		return
// 	}

// 	c.JSON(http.StatusOK, model.BackToFrontEndData{
// 		Code: serve.StatusOK,
// 		Data: map[string]interface{}{
// 			"msg": "保存成功",
// 		},
// 	})
// }

// ListSettings 获取 v2ray 配置文件参数
// func (Dispatcher) ListSettings(c *gin.Context) {
// 	settings := map[string]interface{}{
// 		"address":  cnf.Inbounds[0]["listen"],
// 		"port":     cnf.Inbounds[0]["port"],
// 		"protocol": cnf.Inbounds[0]["protocol"],
// 	}
// 	c.JSON(http.StatusOK, model.BackToFrontEndData{
// 		Code: serve.StatusOK,
// 		Data: map[string]interface{}{
// 			"msg":      "获取成功",
// 			"settings": settings,
// 		},
// 	})
// }
