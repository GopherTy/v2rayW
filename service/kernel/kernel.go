package kernel

import (
	"bufio"
	"errors"
	"io/ioutil"
	"os"

	"github.com/gopherty/v2rayW/logger"

	"github.com/gin-gonic/gin"

	"github.com/gopherty/broadcaster"
	"github.com/gorilla/websocket"

	"github.com/gopherty/v2rayW/utils"

	core "github.com/v2fly/v2ray-core/v4"
)

type Kernel struct {
	instance *core.Instance

	// logger core output logs subject
	logger *broadcaster.Subject
	// state core instance status subject
	state *broadcaster.Subject

	status *Status // core running status

	stdout *os.File

	// core logs reader and writer
	lr *os.File
	lw *os.File
}

type Status struct {
	ID        int    // 协议id
	ProtoName string // 协议名称
	Running   bool   // 是否运行
}

func New() *Kernel {

	return &Kernel{
		logger: broadcaster.NewSubject(),

		state:  broadcaster.NewSubject(),
		status: new(Status),
	}
}

// Start start core-core instance
func (k *Kernel) Start(data []byte, status Status) (err error) {
	if k.instance != nil {
		err = k.instance.Close()
		if err != nil {
			return
		}
	}

	// load config
	err = k.loadConfig(data)
	if err != nil {
		return
	}

	if k.instance == nil {
		err = errors.New("v2ray-core load config failed")
		return
	}

	// catch stdout before started
	k.lr, k.lw, err = os.Pipe()
	if err != nil {
		return
	}

	k.stdout = os.Stdout
	os.Stdout = k.lw

	err = k.instance.Start()
	if err != nil {
		os.Stdout = k.stdout
		k.stdout = nil
		k.lw.Close()

		return
	}

	// read logs
	go func() {
		reader := bufio.NewReader(k.lr)

		for {
			logs, err := reader.ReadBytes('\n')
			if err != nil {
				break
			}

			// 若打开多个网页时，同时推送输出日志
			k.logger.Publish(logs)
		}
	}()

	// publish kernel running status
	k.status = &status
	k.state.Publish(k.status)

	return
}

func (k *Kernel) Stop() (err error) {
	if k.instance == nil {
		err = errors.New("core-core have not started")
		return
	}

	err = k.instance.Close()
	if err != nil {
		return
	}

	k.status.Running = false
	k.state.Publish(k.status)

	// release resource
	os.Stdout = k.stdout
	k.stdout = nil
	k.lw.Close()

	k.instance = nil

	return
}

func (k *Kernel) Logs(conn *websocket.Conn) (err error) {
	subs := k.logger.HandleFunc(func(msg interface{}) {
		logs, ok := msg.([]byte)
		if !ok {
			return
		}

		err = conn.WriteMessage(websocket.TextMessage, logs)
		if err != nil {
			logger.Logger().Error(err.Error())
			return
		}
	})

	// 监听客户端发送的关闭连接。
	for {
		_, _, err = conn.ReadMessage()
		if err != nil {
			subs.Unsubscribe(true)

			return
		}
	}
}

func (k *Kernel) Status(conn *websocket.Conn) (err error) {
	subs := k.state.HandleFunc(func(msg interface{}) {
		stat, ok := msg.(*Status)
		if !ok {
			return
		}

		err = conn.WriteJSON(gin.H{
			"id":       stat.ID,
			"protocol": stat.ProtoName,
			"running":  stat.Running,
		})
		if err != nil {
			logger.Logger().Error(err.Error())
			return
		}
	})

	k.state.Publish(k.status)

	// 监听客户端发送的关闭连接。
	for {
		_, _, err = conn.ReadMessage()
		if err != nil {
			subs.Unsubscribe(true)

			return
		}
	}
}

func (k *Kernel) loadConfig(data []byte) (err error) {
	path := utils.BasePath() + "/v2ray.json"

	err = ioutil.WriteFile(path, data, os.ModePerm)
	if err != nil {
		return
	}

	file, err := os.Open(path)
	if err != nil {
		return
	}
	defer file.Close()

	cnf, err := core.LoadConfig("json", path, file)
	if err != nil {
		return
	}

	k.instance, err = core.New(cnf)
	if err != nil {
		return
	}

	return
}
