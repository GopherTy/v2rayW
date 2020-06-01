package middleware

import (
	"github.com/gin-gonic/gin"
	"github.com/gopherty/v2ray-web/logger"
)

// HelloMiddleware middleware defined
func HelloMiddleware() func(*gin.Context) {
	return func(c *gin.Context) {
		// before use middleware
		logger.Logger().Info("before ...")

		c.Next()

		// after use middleware
		logger.Logger().Info("after ...")
	}
}
