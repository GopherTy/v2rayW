package main

import (
	"flag"

	"github.com/gin-gonic/gin"
	_ "github.com/gopherty/v2rayW/statik"
	_ "github.com/mattn/go-sqlite3"

	// v2ray core 启动的依赖
	_ "v2ray.com/core/main/distro/all"

	"github.com/gopherty/v2rayW/config"
	"github.com/gopherty/v2rayW/initialization"
	"github.com/gopherty/v2rayW/logger"
	"github.com/gopherty/v2rayW/router"
)

var (
	releaseMode bool
)

// 应用对象的初始化操作
func init() {
	// 配置项目是否为稳定版
	flag.BoolVar(&releaseMode, "r", false, "set application mode to  release or debug,default is debug")
	flag.Parse()

	initialization.Init()
}

// 项目入口
func main() {
	// 配置对象
	cnf := config.Configure()

	// 配置项目是否为稳定版,SetMode函数应该在gin.Default之前调用。
	if releaseMode {
		gin.SetMode(gin.ReleaseMode)
	}
	engine := gin.Default()

	// 路由功能注册
	var r router.Router
	r.Route(engine)

	var err error
	// 验证服务器是否以HTTPS的方式启动
	if cnf.HTTP.TLS {
		err = engine.RunTLS(cnf.HTTP.Address, cnf.HTTP.CertFile, cnf.HTTP.KeyFile)
	} else {
		err = engine.Run(cnf.HTTP.Address)
	}
	if err != nil {
		logger.Logger().Fatal(err.Error())
	}
}
