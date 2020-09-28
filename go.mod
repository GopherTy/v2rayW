module github.com/gopherty/v2rayW

go 1.12

require (
	github.com/dgrijalva/jwt-go v3.2.0+incompatible
	github.com/gin-contrib/pprof v1.3.0
	github.com/gin-gonic/gin v1.6.3
	github.com/go-redis/redis/v7 v7.4.0
	github.com/go-sql-driver/mysql v1.4.1
	github.com/go-xorm/xorm v0.7.9
	github.com/golang/protobuf v1.4.2
	github.com/gopherty/broadcaster v1.0.0
	github.com/gorilla/websocket v1.4.2
	github.com/myesui/uuid v1.0.0 // indirect
	github.com/rakyll/statik v0.1.7
	github.com/twinj/uuid v1.0.0
	go.uber.org/zap v1.15.0
	gopkg.in/stretchr/testify.v1 v1.2.2 // indirect
	v2ray.com/core v4.15.0+incompatible
)

replace v2ray.com/core => ../v2ray-core-4.29.0
