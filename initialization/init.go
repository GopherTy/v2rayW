package initialization

import (
	"github.com/gopherty/v2ray-web/config"
	"github.com/gopherty/v2ray-web/db"
	"github.com/gopherty/v2ray-web/logger"
	"github.com/gopherty/v2ray-web/v2raylogs"
)

// IRegister 初始化对象注册接口
type IRegister interface {
	Regist()
}

// Init 初始化数据库对象和日志对象
func Init() {
	// 调用执行注册器
	registers := []IRegister{
		config.Register{},    // 配置
		logger.Register{},    // 日志
		db.Register{},        // 数据库
		v2raylogs.Register{}, // v2ray日志
	}

	for _, v := range registers {
		v.Regist()
	}
}
