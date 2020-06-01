package config

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"os"

	"github.com/gopherty/v2ray-web/utils"
)

// Config 全局JSON配置对象
type Config struct {
	DB     DataBase // 配置文件数据库对象
	HTTP   HTTP     // HTTP 协议配置对象
	Logger Logger   // Logger 配置对象
}

// HTTP HTTP协议配置对象
type HTTP struct {
	TLS      bool
	Address  string // 地址
	CertFile string //证书验证文件
	KeyFile  string // 证书
}

// DataBase 数据库连接对象
type DataBase struct {
	Driver string // 数据库驱动
	Source string // 连接字符串

	ShowSQL bool // 是否显示 SQL 语句

	MaxOpenConns int // 数据库连接池数量
	MaxIdleConns int // 数据库连接最大空闲数

	Cached            int  // 缓存大小
	UserManageDisable bool //是否开启用户管理
}

// Logger 日志对象
type Logger struct {
	Level       string // 日志等级：日志等级: debug,info,warn,error,dpanic,panic,fatal
	Development bool   // 是否开启开发模式
	Encoding    string // 日志输出格式
	OutputLogs  bool   // 是否输出日志文件
}

// config  单例全局配置对象
var config *Config

// Register 配置对象注册器
type Register struct {
}

// Regist 实现 IRegister 接口，以注册获取初始化好的 config 对象。
func (Register) Regist() {
	basePath := utils.BasePath()

	// 读取配置文件
	b, err := ioutil.ReadFile(basePath + "/config.json")
	if err != nil {
		fmt.Println("Load config object fail: ", err)
		os.Exit(1)
	}

	var cfg *Config
	err = json.Unmarshal(b, cfg)
	if err != nil {
		fmt.Println("Json parse config object fail: ", err)
		os.Exit(1)
	}
	config = cfg
}

// Configure 获取配置对象
func Configure() *Config {
	return config
}
