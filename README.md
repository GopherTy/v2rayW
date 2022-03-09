# v2rayW

本项目为 `ProjectV`（已迁移至 v2fly） 项目中 **[v2ray-core](https://github.com/v2fly/v2ray-core)** 的 web 客户端。目前支持 `vmess` 、`vless`、`scoks` 、`shadowsocks` 入口协议，支持订阅，分享（二维码、链接、完整配置）、导入等功能。更多功能将在之后进行迭代开发。

## Install 

本客户端支持 linux、windows 请下载对应平台最新的 release 安装使用。

安装步骤如下：

1.下载对应平台最新的 release 。或者 fork 该项目然后执行编译脚本 `build.sh`  。

> 注意：若需要打包 view 视图模块到 go 中需要安装 statik。前端在 `v2rayW-view` 项目中。
>
> 安装命令: go install github.com/rakyll/statik @v0.1.7

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

> 说明：若想在 linux 或 windows 以服务的形式启动，请查看 bin/ 文件夹下的 systemd/ 或 winServcie/ 按 usage 文件说明进行配置。

若有幸你使用了本客户端，还请你在使用后提出你的宝贵意见。有在使用过程中发现的任何 `bug` 或对应的功能需求请开启 `issue` 进行提交。

## Usage

成功启动应用后打开 http://localhost:9200 使用，默认端口为 9200，可以在配置文件（config.json）中进行修改。

Step1: 配置代理协议，本地默认代理协议为 socks5，端口为 1080 ，查看对应代理协议的完整配置进行修改！

Step2: 配置无误后点击启动即可。  

以下是本应用界面的部分截图:

![protocol.png](https://i.loli.net/2020/12/10/btSVzBPsfnMmqEG.png)

![index.png](https://i.loli.net/2020/12/10/MZmlKhI4SzbY52X.png)

![vmess.png](https://i.loli.net/2020/12/10/zVcx4DFGeLSZiBK.png)

![vless.png](https://i.loli.net/2020/12/10/WAQGXZ4CUuS3d8n.png)

最后祝你玩的愉快。

## Contributing

[提交问题](https://github.com/GopherTy/v2ray-web/issues/new) 或贡献代码请提交 `PR` 请求。

## License

[MIT](https://github.com/GopherTy/v2ray-web/blob/master/LICENSE) © GopherTy

