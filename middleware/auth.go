package middleware

import (
	"net/http"

	"github.com/gopherty/v2ray-web/db"
	"github.com/gopherty/v2ray-web/logger"
	"github.com/gopherty/v2ray-web/model/auth"

	"github.com/gin-gonic/gin"
)

// UserAuthenticate 用户登录认证
func UserAuthenticate() gin.HandlerFunc {
	return func(c *gin.Context) {
		db := db.Engine()

		exists, err := db.IsTableExist(&auth.Role{})
		if err != nil {
			c.AbortWithError(http.StatusBadGateway, err)
		}
		if !exists {
			db.CreateTables(&auth.Role{})
		}

		exists, err = db.IsTableExist(&auth.Auth{})
		if err != nil {
			c.AbortWithError(http.StatusBadGateway, err)
		}
		if !exists {
			db.CreateTables(&auth.Auth{})
		}

		db.Sync2(&auth.Role{}, &auth.Auth{})
		c.Next()
		logger.Logger().Info("Enable auth middleware")
	}
}
