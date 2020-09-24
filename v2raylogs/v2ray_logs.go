package v2raylogs

import (
	"os"
)

// 捕获控制台后的资源
var (
	r, w, stdout *os.File
)

// Register v2ray日志注册器
type Register struct {
}

// Regist 实现 IRegister 接口，为了捕获 v2ray 启动后控制台的日志输出。
func (Register) Regist() {
	// var err error
	// // 启动后捕获控制台
	// stdout = os.Stdout
	// r, w, err = os.Pipe()
	// if err != nil {
	// 	os.Stdout = stdout
	// 	stdout = nil
	// 	logger.Logger().Fatal(err.Error())
	// }
	// os.Stdout = w
}

// Source 捕获控制台后的资源，用于相应的处理。
func Source() (rF, wF, stdOut *os.File) {
	return r, w, stdout
}
