package test

import (
	"github.com/gin-gonic/gin"
)

// Dispatcher test 功能相关的控制器
type Dispatcher struct {
}

// Test 项目搭建的测试API
func (Dispatcher) Test(c *gin.Context) {
	c.JSON(200, "Hello World")
}

// UserMiddlewareTest 用户管理中间件的测试API
func (Dispatcher) UserMiddlewareTest(c *gin.Context) {
	c.JSON(200, "user middleware use success")
}

// AuthMiddlewareTest 用户管理中间件的测试API
func (Dispatcher) AuthMiddlewareTest(c *gin.Context) {
	c.JSON(200, "auth middleware use success")
}
