package initialization

import (
	"github.com/gopherty/v2ray-web/db"
	"github.com/gopherty/v2ray-web/logger"
)

// IRegister 初始化对象注册接口
type IRegister interface {
	Regist()
}

// Init 初始化数据库对象和日志对象
func Init() {
	// 调用执行注册器
	registers := []IRegister{
		logger.Register{}, // 日志
		db.Register{},     // 数据库
	}

	for _, v := range registers {
		v.Regist()
	}
}
