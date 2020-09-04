package middleware

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gopherty/v2rayW/token"
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
