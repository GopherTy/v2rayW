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

// MiddlewareHello 用户管理中间件的测试API
func (Dispatcher) MiddlewareHello(c *gin.Context) {
	c.JSON(200, "hello middleware  use success")
}
