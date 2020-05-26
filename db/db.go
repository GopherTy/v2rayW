package db

import (
	"github.com/gopherty/v2ray-web/config"
	"github.com/gopherty/v2ray-web/logger"

	"github.com/go-xorm/xorm"
)

var db *xorm.Engine

// Register 数据库注册器
type Register struct {
}

// Regist 实现 IRegister 接口，以注册获取初始化好的 db 对象。
func (Register) Regist() {
	cfg := config.Configure()

	// 初始化日志对象
	// 检查数据库配置内容是否为空。
	if cfg.DB.Driver == "" || cfg.DB.Source == "" {
		logger.Logger().Fatal("Please configure database dirver or source")
	}

	engine, err := xorm.NewEngine(cfg.DB.Driver, cfg.DB.Source)
	if err != nil {
		logger.Logger().Fatal(err.Error())
	}

	err = engine.Ping()
	if err != nil {
		logger.Logger().Fatal(err.Error())
	}

	// 设置数据库最大连接数和空闲数
	engine.SetMaxOpenConns(cfg.DB.MaxOpenConns)
	engine.SetMaxIdleConns(cfg.DB.MaxIdleConns)

	// 是否开启 SQL 日志
	if cfg.DB.ShowSQL {
		engine.ShowSQL(true)
	}

	if cfg.DB.Cached != 0 {
		cacher := xorm.NewLRUCacher(xorm.NewMemoryStore(), cfg.DB.Cached)
		engine.SetDefaultCacher(cacher)
	}

	db = engine
	logger.Logger().Info("Init db success")
}

// Engine 获取 db 对象
func Engine() *xorm.Engine {
	return db
}
