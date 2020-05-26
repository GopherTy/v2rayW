package control

import (
	"github.com/gin-gonic/gin"
)

// Test 项目搭建的测试API
func (Controller) Test(c *gin.Context) {
	c.JSON(200, "Hello World")
}

// UserMiddlewareTest 用户管理中间件的测试API
func (Controller) UserMiddlewareTest(c *gin.Context) {
	c.JSON(200, "user middleware use success")
}

// AuthMiddlewareTest 用户管理中间件的测试API
func (Controller) AuthMiddlewareTest(c *gin.Context) {
	c.JSON(200, "auth middleware use success")
}
