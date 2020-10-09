package refresh

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"

	"github.com/gopherty/v2rayW/logger"
	"github.com/gopherty/v2rayW/model"
	"github.com/gopherty/v2rayW/serve"
	"github.com/gopherty/v2rayW/token"
)

// Dispatcher token功能相关的控制器
type Dispatcher struct {
}

// RefreshToken 通过 refresh_token 生成新的 token 返回给用户。
func (Dispatcher) RefreshToken(c *gin.Context) {
	refreshToken := map[string]string{}
	err := c.ShouldBindWith(&refreshToken, binding.Default(c.Request.Method, c.ContentType()))
	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusUnprocessableEntity, model.BackToFrontEndData{
			Code:        serve.StatusServerError,
			Description: "前端请求参数和后端绑定参数不匹配",
			Error:       err.Error(),
		})
		return
	}

	userID, err := token.ExtractRefreshTokenMetadata(refreshToken["refresh_token"])
	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusForbidden, model.BackToFrontEndData{
			Code:        serve.StatusServerError,
			Description: "服务器解析 refresh_token 出错",
			Error:       err.Error(),
		})
		return
	}
	t, err := token.NewToken(userID)
	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
			Code:        serve.StatusServerError,
			Description: "服务器生成 token 失败",
			Error:       err.Error(),
		})
		return
	}

	// 生成 token 成功
	c.JSON(http.StatusOK, model.BackToFrontEndData{
		Code:        serve.StatusOK,
		Description: "刷新 token 成功",
		Auth: model.Auth{
			AccessToken: t.AccessToken,
		},
	})
}
