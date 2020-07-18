# v2rayW

本项目为 `ProjectV` 项目中 `v2ray-core` 的 web 客户端。通过网页端配置代理协议进行科学上网。目前只支持 `vmess` 协议，其他协议和更多功能将之后进行迭代。

## Install 

相对于其他 `v2ray` 客户端，本客户端的安装和体验目前应该不如其他客户端好，主要原因：菜是原罪。

其实做这个项目的目的有二。其一是为了提升自己的编程能力，练习一些主流且实用的编程技术。其二是在 `Windows` 和 `Linux`平台进行切换的时候，在没有配置好代理环境的时候去下载一些主流的代理环境较为吃力，所以才有此想法自己开发一个客户端。

若有幸你使用了本客户端，还请你在使用后提出你的宝贵意见。有在使用过程中发现的任何 `bug` 或对应的功能需求请开启 `issue` 进行提交。

1.在运行该项目前搭建项目的运行环境。安装 `MySQL` 和 `Redis` 数据库，用于系统登录。相关的安装教程网上比较多，可以选择对应平台的教程进行安装。Linux 环境推荐使用 docker 进行安装。相对轻量！

2.下载对应平台的 release 。或者下载该项目然后执行安装脚本 `build.sh`。

3.安装好运行环境后，配置项目启动环境。具体说明如下：

打开 bin 文件夹下的 `config.json`  文件

```json
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
        "GinLogsPath": "" // Gin 框的日志输出位置
    },
    // Redis 数据库配置
    "Redis": {
        "Address": "localhost:6379" // 地址和端口。
    }
}
```

## Usage

**默认本地浏览器配置代理端口为 1080，协议为 sockt5。暂不支持修改！！！**  

在开启前后端服务器后，打开浏览器输入链接进行使用默认为 http://localhost:4200。

## Contributing

[提交问题](https://github.com/GopherTy/v2ray-web/issues/new) 或贡献代码请提交 `PR` 请求。

## License

[MIT](https://github.com/GopherTy/v2ray-web/blob/master/LICENSE) © GopherTy