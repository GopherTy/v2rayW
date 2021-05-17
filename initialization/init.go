package initialization

import (
	"github.com/gopherty/v2rayW/config"
	"github.com/gopherty/v2rayW/db"
	"github.com/gopherty/v2rayW/logger"
	"github.com/gopherty/v2rayW/view"
)

// IRegister 初始化对象注册接口
type IRegister interface {
	CheckIn()
}

// Init 初始化数据库对象和日志对象
func Init() {
	// 调用执行注册器
	registers := []IRegister{
		config.Register{}, // 配置
		logger.Register{}, // 系统日志
		view.Register{},   // 视图资源
		db.Register{},     // 数据库
	}

	for _, v := range registers {
		v.CheckIn()
	}
}
