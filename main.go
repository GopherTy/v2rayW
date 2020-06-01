package main

import (
	"flag"
	"io"
	"os"

	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"

	"github.com/gopherty/v2ray-web/config"
	"github.com/gopherty/v2ray-web/initialization"
	"github.com/gopherty/v2ray-web/logger"
	"github.com/gopherty/v2ray-web/router"
	"github.com/gopherty/v2ray-web/utils"
)

// 应用对象的初始化操作
func init() {
	initialization.Init()
}

// 项目入口
func main() {
	// 配置项目是否为稳定版
	var releaseMode bool
	flag.BoolVar(&releaseMode, "r", false, "set application mode to  release or debug,default is debug")
	flag.Parse()

	// 配置对象
	cfg := config.Configure()
	path := utils.BasePath() + "/"

	// 是否启用 Gin 日志输出
	if cfg.Logger.OutputLogs {
		f, err := os.Create(path + "log/gin.log")
		if err != nil {
			logger.Logger().Fatal(err.Error())
		}
		gin.DefaultWriter = io.MultiWriter(os.Stdout, f)
	}

	engine := gin.Default()

	// 路由功能注册
	var r router.Router
	r.Route(engine)

	if releaseMode {
		gin.SetMode(gin.ReleaseMode)
	}

	// 验证服务器是否以HTTPS的方式启动
	if cfg.HTTP.TLS {
		engine.RunTLS(cfg.HTTP.Address, path+cfg.HTTP.CertFile, path+cfg.HTTP.KeyFile)
	} else {
		engine.Run(cfg.HTTP.Address)
	}
}
