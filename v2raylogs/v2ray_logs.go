package v2raylogs

import (
	"bufio"
	"os"

	"github.com/gopherty/v2ray-web/logger"
)

// 捕获控制台后的资源
var (
	stdout, r, w *os.File
	msg          chan []byte // 日志消息通过通道发送
)

// Register v2ray日志注册器
type Register struct {
}

// Regist 实现 IRegister 接口，为了捕获 v2ray 启动后控制台的日志输出。
func (Register) Regist() {
	var err error
	// 日志消息长度为 100 条
	msg = make(chan []byte, 100)

	// 启动后捕获控制台
	stdout = os.Stdout
	r, w, err = os.Pipe()
	if err != nil {
		logger.Logger().Fatal(err.Error())
	}
	os.Stdout = w
	reader := bufio.NewReader(r)

	go func() {
		for {
			logs, err := reader.ReadBytes('\n')
			if err != nil {
				close(msg)
				os.Stdout = stdout
				stdout = nil
				logger.Logger().Error(err.Error())
				return
			}
			msg <- logs
		}
	}()
}

// LogsMsg 日志消息队列
func LogsMsg() chan []byte {
	return msg
}

// Source 捕获控制台后的资源，用于相应的处理。
func Source() (rF *os.File, wF *os.File, stdoutF *os.File) {
	return r, w, stdout
}
