package db

import (
	"github.com/go-xorm/xorm"

	"github.com/gopherty/v2rayW/config"
	"github.com/gopherty/v2rayW/logger"
	"github.com/gopherty/v2rayW/model/auth"
	"github.com/gopherty/v2rayW/model/proxy"
	"github.com/gopherty/v2rayW/model/users"
	"github.com/gopherty/v2rayW/utils"
)

var (
	db *xorm.Engine
)

// Register 数据库注册器
type Register struct {
}

// CheckIn 实现 IRegister 接口，以注册获取初始化好的 db 对象。
func (Register) CheckIn() {
	var err error
	cnf := config.Configure()

	// 初始化日志对象
	// 检查数据库配置内容是否为空。
	if cnf.DB.Driver == "" || cnf.DB.Source == "" {
		logger.Logger().Fatal("Please configure database dirver or source")
	}

	path := utils.BasePath() + "/" + cnf.DB.Source
	db, err = xorm.NewEngine(cnf.DB.Driver, path)
	if err != nil {
		logger.Logger().Fatal(err.Error())
	}

	// 设置数据库最大连接数和空闲数
	db.SetMaxOpenConns(cnf.DB.MaxOpenConns)
	db.SetMaxIdleConns(cnf.DB.MaxIdleConns)

	// 是否开启 SQL 日志
	if cnf.DB.ShowSQL {
		db.ShowSQL(true)
	}

	if cnf.DB.Cached != 0 {
		cacher := xorm.NewLRUCacher(xorm.NewMemoryStore(), cnf.DB.Cached)
		db.SetDefaultCacher(cacher)
	}

	logger.Logger().Info("Init db success")

	err = db.Ping()
	if err != nil {
		logger.Logger().Fatal(err.Error())
	}

	// v2ray 代理协议相关表
	// vmess 协议表
	exists, err := db.IsTableExist(&proxy.Vmess{})
	if err != nil {
		logger.Logger().Fatal(err.Error())
	}
	if !exists {
		err = db.CreateTables(&proxy.Vmess{})
		if err != nil {
			logger.Logger().Fatal(err.Error())
		}
	}
	// vless 表
	exists, err = db.IsTableExist(&proxy.Vless{})
	if err != nil {
		logger.Logger().Fatal(err.Error())
	}
	if !exists {
		err = db.CreateTables(&proxy.Vless{})
		if err != nil {
			logger.Logger().Fatal(err.Error())
		}
	}
	// socks 表
	exists, err = db.IsTableExist(&proxy.Socks{})
	if err != nil {
		logger.Logger().Fatal(err.Error())
	}
	if !exists {
		err = db.CreateTables(&proxy.Socks{})
		if err != nil {
			logger.Logger().Fatal(err.Error())
		}
	}
	// shadowsocks 表
	exists, err = db.IsTableExist(&proxy.Shadowsocks{})
	if err != nil {
		logger.Logger().Fatal(err.Error())
	}
	if !exists {
		err = db.CreateTables(&proxy.Shadowsocks{})
		if err != nil {
			logger.Logger().Fatal(err.Error())
		}
	}
	// 订阅地址表
	exists, err = db.IsTableExist(&proxy.Subscribe{})
	if err != nil {
		logger.Logger().Fatal(err.Error())
	}
	if !exists {
		err = db.CreateTables(&proxy.Subscribe{})
		if err != nil {
			logger.Logger().Fatal(err.Error())
		}
	}
	_ = db.Sync2(&proxy.Vmess{}, &proxy.Vless{}, &proxy.Socks{}, &proxy.Shadowsocks{}, &proxy.Subscribe{})

	// 是否关闭用户管理
	if cnf.DB.UserManageDisable {
		return
	}

	// 用户表
	exists, err = db.IsTableExist(&users.User{})
	if err != nil {
		logger.Logger().Fatal(err.Error())
	}
	if !exists {
		err = db.CreateTables(&users.User{})
		if err != nil {
			logger.Logger().Fatal(err.Error())
		}
	}
	exists, err = db.IsTableExist(&users.UserInfo{})
	if err != nil {
		logger.Logger().Fatal(err.Error())
	}
	if !exists {
		err = db.CreateTables(&users.UserInfo{})
		if err != nil {
			logger.Logger().Fatal(err.Error())
		}
	}
	exists, err = db.IsTableExist(&users.UserLoginLog{})
	if err != nil {
		logger.Logger().Fatal(err.Error())
	}
	if !exists {
		err = db.CreateTables(&users.UserLoginLog{})
		if err != nil {
			logger.Logger().Fatal(err.Error())
		}
	}
	_ = db.Sync2(&users.User{}, &users.UserInfo{}, &users.UserLoginLog{})

	// 用户权限表
	exists, err = db.IsTableExist(&auth.Role{})
	if err != nil {
		logger.Logger().Fatal(err.Error())
	}
	if !exists {
		err = db.CreateTables(&auth.Role{})
		if err != nil {
			logger.Logger().Fatal(err.Error())
		}
	}
	exists, err = db.IsTableExist(&auth.Auth{})
	if err != nil {
		logger.Logger().Fatal(err.Error())
	}
	if !exists {
		err = db.CreateTables(&auth.Auth{})
		if err != nil {
			logger.Logger().Fatal(err.Error())
		}
	}
	_ = db.Sync2(&auth.Role{}, &auth.Auth{})
}

// Engine 获取 db 对象
func Engine() *xorm.Engine {
	return db
}
