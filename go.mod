module github.com/gopherty/v2rayW

go 1.12

require (
	github.com/dgrijalva/jwt-go v3.2.0+incompatible
	github.com/gin-gonic/gin v1.6.3
	github.com/go-xorm/xorm v0.7.9
	github.com/gopherty/broadcaster v1.0.0
	github.com/gorilla/websocket v1.4.2
	github.com/mattn/go-sqlite3 v1.14.4
	github.com/rakyll/statik v0.1.7
	go.uber.org/zap v1.15.0
	gopkg.in/check.v1 v1.0.0-20190902080502-41f04d3bba15 // indirect
	v2ray.com/core v4.15.0+incompatible
)

replace v2ray.com/core => ../v2ray-core-4.29.0
