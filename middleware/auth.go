package middleware

import (
	"net/http"

	"github.com/gopherty/v2ray-web/token"

	"github.com/gin-gonic/gin"
)

// TokenAuthMiddleware .
func TokenAuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		err := token.ValidToken(c.Request)
		if err != nil {
			c.JSON(http.StatusUnauthorized, err.Error())
			c.Abort()
			return
		}
		c.Next()
	}
}
