package refresh

import (
	"net/http"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
	"github.com/gopherty/v2ray-web/db"
	"github.com/gopherty/v2ray-web/logger"
	"github.com/gopherty/v2ray-web/model"
	"github.com/gopherty/v2ray-web/serve"
	"github.com/gopherty/v2ray-web/token"
)

// Dispatcher test 功能相关的控制器
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
	}

	userID, err := token.ExtractRefreshTokenMetadata(refreshToken["refresh_token"])
	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusUnauthorized, model.BackToFrontEndData{
			Code:        serve.StatusServerError,
			Description: "服务器获取 metadata 信息失败",
			Error:       err.Error(),
		})
	}
	t, err := token.NewToken(userID)
	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusUnauthorized, model.BackToFrontEndData{
			Code:        serve.StatusServerError,
			Description: "服务器生成 token 失败",
			Error:       err.Error(),
		})
	}

	// 将 token 存入到 redis 中。
	atExp := time.Unix(t.AtExpires, 0)
	err = db.Client().Set(t.AccessUUID, strconv.Itoa(int(userID)), atExp.Sub(time.Now())).Err()
	if err != nil {
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
