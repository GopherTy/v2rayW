# v2rayW

本项目为 `ProjectV`（迁移至 v2fly） 项目中 `v2ray-core` 的 web 客户端。通过网页端配置代理协议进行科学上网。目前支持 `vmess` 、`vless` 协议，其他协议和更多功能将之后进行迭代。

## Install 

安装步骤如下：

1.下载对应平台最新的 release 。或者 fork 该项目然后执行编译脚本 `build.sh`  。

> 注意：若需要打包 view 到 go 中需要安装 statik。 
>
> 安装命令: go get github.com/rakyll/statik @v0.1.7

2.运行对应平台的可执行文件即可使用。若需要自定义配置项目启动环境，打开 bin 文件夹下的 `config.json`  文件进行配置。配置说明如下：

```go
{  
    // 数据库配置
    "DB": {   
        "Driver": "sqlite3",  // 数据库驱动
        "Source": "app.db", // 数据库文件
        "ShowSQL": false, // 是否开启 SQL 语句，默认不开启 。 
        "MaxOpenConns": 100, // 最大连接数
        "MaxIdleConns": 5, // 最大空闲数
        "Cached": 200, // 缓存
        "UserManageDisable": false // 是否禁用用户系统。 注意：此选项不要修改，在最开始设计时是将该选项作为保留项。
    },
    // 服务器配置
    "HTTP": {
        "TLS": false, // 是否开启 https
        "Address": "localhost:9200", // 服务器运行地址和端口
         // 开启 https 后的证书文件位置
        "CertFile": "", 
        "KeyFile": "" 
    },
    // 项目日志使用
    "Logger": {
        "Level": "debug", // 日志等级
        "Encoding": "console", // 编码格式
        "Development": false, // 是否为开发模式
        // 默认日志打印在控制台。
        "AppLogsPath": "", // 应用日志输出位置 
    }
}
```

若有幸你使用了本客户端，还请你在使用后提出你的宝贵意见。有在使用过程中发现的任何 `bug` 或对应的功能需求请开启 `issue` 进行提交。

## Usage

成功启动应用后打开 http://localhost:9200 使用，默认端口为 9200，可以在配置文件（config.json）中进行修改。

Step1: 设置浏览器的代理协议，默认代理协议为 socks5 暂不支持修改。 默认代理端口为 1080 ，可以通过参数设置进行修改！

Step2: 在服务管理里配置好正确的代理协议，点击启动按钮。  

以下是相关功能截图

![index](https://github.com/GopherTy/v2rayW/blob/master/assets/index.png)

![protocol](https://github.com/GopherTy/v2rayW/blob/master/assets/protocol.png)

![add](https://github.com/GopherTy/v2rayW/blob/master/assets/add.png)

![add1](https://github.com/GopherTy/v2rayW/blob/master/assets/add1.png)

![settings](https://github.com/GopherTy/v2rayW/blob/master/assets/settings.png)

## Contributing

[提交问题](https://github.com/GopherTy/v2ray-web/issues/new) 或贡献代码请提交 `PR` 请求。

## License

[MIT](https://github.com/GopherTy/v2ray-web/blob/master/LICENSE) © GopherTy