package logger

import (
	"fmt"
	"os"
	"strings"

	"github.com/gopherty/v2ray-web/config"
	"github.com/gopherty/v2ray-web/utils"
	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"
)

var logger *zap.Logger

// Register 日志注册器
type Register struct {
}

// Regist 实现 IRegister 接口，以注册获取初始化好的 logger 对象。
func (Register) Regist() {
	cfg := config.Configure()

	// 是否输出日志文件
	var logPath []string
	if cfg.Logger.OutputLogs {
		path := utils.BasePath() + "/log"
		if !utils.IsFileOrDirExists(path) {
			err := os.Mkdir(path, os.ModePerm)
			if err != nil {
				fmt.Sprintln("Create logs fail: ", err)
				os.Exit(1)
			}
		}
		_, err := os.Create(path + "/web-server.log")
		if err != nil {
			fmt.Sprintln("Create logs fail: ", err)
			os.Exit(1)
		}

		logPath = []string{"stdout", path + "/web-server.log"}
	} else {
		logPath = []string{"stdout"}
	}

	encoderConfig := zapcore.EncoderConfig{
		TimeKey:        "time",
		LevelKey:       "level",
		NameKey:        "logger",
		CallerKey:      "caller",
		MessageKey:     "msg",
		LineEnding:     zapcore.DefaultLineEnding,
		EncodeLevel:    zapcore.LowercaseLevelEncoder, // 小写编码器
		EncodeTime:     zapcore.ISO8601TimeEncoder,    // ISO8601 UTC 时间格式
		EncodeDuration: zapcore.SecondsDurationEncoder,
		EncodeCaller:   zapcore.ShortCallerEncoder, // 短径编码器
	}

	// 用户日志等级 debug,info,warn,error,dpanic,panic,fatal
	level := strings.TrimSpace(cfg.Logger.Level)
	level = strings.ToLower(level)
	var zapLevel zapcore.Level
	switch level {
	case "debug":
		zapLevel = zapcore.DebugLevel
	case "info":
		zapLevel = zapcore.InfoLevel
	case "error":
		zapLevel = zapcore.ErrorLevel
	case "dpanic":
		zapLevel = zapcore.DPanicLevel
	case "panic":
		zapLevel = zapcore.PanicLevel
	case "fatal":
		zapLevel = zapcore.FatalLevel
	default:
		zapLevel = zapcore.DebugLevel
	}

	atomicLevel := zap.NewAtomicLevelAt(zapLevel)
	zapCfg := zap.Config{
		Level:            atomicLevel,
		Development:      cfg.Logger.Development,
		Encoding:         cfg.Logger.Encoding, // json 或 console
		OutputPaths:      logPath,
		ErrorOutputPaths: []string{"stderr"},
		EncoderConfig:    encoderConfig,
	}

	// 创建自定义日志对象
	zapLogger, err := zapCfg.Build()
	if err != nil {
		fmt.Sprintln("Init logger fail: ", err)
		os.Exit(1)
	}
	defer zapLogger.Sync()

	logger = zapLogger
	logger.Info("Init logger success")
}

// Logger 获取 logger 对象
func Logger() *zap.Logger {
	return logger
}

// 不使用接口进行初始化，可以在各个对象中定义 Init 函数在 initialization 包中调用。
// Init 初始化日志对象
// func Init() {
// }
