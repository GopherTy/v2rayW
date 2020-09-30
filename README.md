# v2rayW

本项目为 `ProjectV`（迁移至 v2fly） 项目中 `v2ray-core` 的 web 客户端。通过网页端配置代理协议进行科学上网。目前支持 `vmess` 、`vless` 协议，其他协议和更多功能将之后进行迭代。

## Install 

相对于其他 `v2ray` 客户端，本客户端相对来说更适用于Linux平台，它能在 web 端对 `v2ray` 进行配置管理。

其实做这个项目的目的有二。其一是对`v2ray`客户端开发比较感兴趣。其二是为了提升自己的编程能力，练习一些主流且实用的编程技术。

若有幸你使用了本客户端，还请你在使用后提出你的宝贵意见。有在使用过程中发现的任何 `bug` 或对应的功能需求请开启 `issue` 进行提交。

1.在运行该项目前搭建项目的依赖环境。安装 `MySQL` 和 `Redis` 数据库，用于系统登录和协议配置。相关的安装教程网上比较多，可以选择对应平台的教程进行安装。Linux 环境推荐使用 docker 进行安装。相对轻量！

2.下载对应平台的 release 。或者下载该项目然后执行安装脚本 `build.sh`。

3.安装好依赖环境后，配置项目启动环境。具体说明如下：

打开 bin 文件夹下的 `config.json`  文件

```go
{  
    // MySQL 数据库配置
    "DB": {   
        "Driver": "mysql",  // 数据库驱动
        "Source": "ty:123@tcp(localhost:3306)/gopherty?charset=utf8", // 连接地址，@之前的为数据库的用户名和密码; () 之中的为数据库地址和端口; gopherty 表示数据库名称。 
        "ShowSQL": false, // 是否开启 SQL 语句，默认不开启 。 
        "MaxOpenConns": 100, // 最大连接数
        "MaxIdleConns": 5, // 最大空闲数
        "Cached": 200, // 缓存
        "UserManageDisable": true // 用户系统，用于创建表。
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
        // 若以下两项都不配置，默认日志打印在控制台。
        "AppLogsPath": "", // 应用日志输出位置 
    },
    // Redis 数据库配置
    "Redis": {
        "Address": "localhost:6379" // 地址和端口。
    }
}
```

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