package view

import (
	"net/http"
	"os"
	"path/filepath"

	"github.com/gin-gonic/gin"
	"github.com/gopherty/v2rayW/logger"
	"github.com/gopherty/v2rayW/view"
)

// Dispatcher 视图功能相关的控制器
type Dispatcher struct {
}

// Redirect  将前端资源请求进行转发
func (Dispatcher) Redirect(c *gin.Context) {
	c.Redirect(http.StatusFound, `/view/`)
}

// View 查找视图资源
func (Dispatcher) View(c *gin.Context) {
	var obj struct {
		Path string `uri:"path"`
	}
	err := c.ShouldBindUri(&obj)
	if err != nil {
		logger.Logger().Error(err.Error())
		c.String(http.StatusNotFound, err.Error())
		return
	}

	// 资源匹配
	path := obj.Path
	if path == `/` || path == `` {
		path = `/index.html`
	}

	fs := view.NewAssetView()
	f, err := fs.Open(path)
	if err != nil {
		if os.IsNotExist(err) {
			path = `/index.html`
			f, err = fs.Open(path)
			if err != nil {
				handleError(c, err)
			}
		}
	}
	defer f.Close()

	stat, err := f.Stat()
	if err != nil {
		handleError(c, err)
		return
	}
	if stat.IsDir() {
		c.String(http.StatusForbidden, `not a file`)
		return
	}

	_, name := filepath.Split(path)
	http.ServeContent(c.Writer, c.Request, name, stat.ModTime(), f)
}

// 错误处理
func handleError(c *gin.Context, e error) {
	if os.IsNotExist(e) {
		c.String(http.StatusFound, e.Error())
		return
	}
	if os.IsPermission(e) {
		c.String(http.StatusForbidden, e.Error())
		return
	}
	c.String(http.StatusInternalServerError, e.Error())
}
