package middleware

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gopherty/v2ray-web/db"
	"github.com/gopherty/v2ray-web/logger"
	"github.com/gopherty/v2ray-web/model/users"
)

var (
	userEnable bool
)

// UserManage 用户管理
func UserManage() gin.HandlerFunc {
	return func(c *gin.Context) {
		// 暂时使用这种方式来使用中间件
		if userEnable {
			return
		}

		db := db.Engine()

		exists, err := db.IsTableExist(&users.User{})
		if err != nil {
			c.AbortWithError(http.StatusBadGateway, err)
		}
		if !exists {
			db.CreateTables(&users.User{})
		}

		exists, err = db.IsTableExist(&users.UserInfo{})
		if err != nil {
			c.AbortWithError(http.StatusBadGateway, err)
		}
		if !exists {
			db.CreateTables(&users.UserInfo{})
		}

		exists, err = db.IsTableExist(&users.UserLoginLog{})
		if err != nil {
			c.AbortWithError(http.StatusBadGateway, err)
		}
		if !exists {
			db.CreateTables(&users.UserLoginLog{})
		}

		// before

		db.Sync2(&users.User{}, &users.UserInfo{}, &users.UserLoginLog{})
		c.Next()

		userEnable = true
		//after 在中间件调用了处理函数之后，就会在此处调用
		logger.Logger().Info("Enable user middleware")
	}
}
