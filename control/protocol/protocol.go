package protocol

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
	"github.com/gopherty/v2ray-web/db"
	"github.com/gopherty/v2ray-web/logger"
	"github.com/gopherty/v2ray-web/model/proxy"
)

// Dispatcher 协议功能相关的控制器
type Dispatcher struct {
}

// ListProxyProtocols 获取用户所有的代理协议
func (Dispatcher) ListProxyProtocols(c *gin.Context) {
	var params map[string]interface{}
	err := c.ShouldBindWith(&params, binding.Default(c.Request.Method, c.ContentType()))
	if err != nil {
		logger.Logger().Error(err.Error())
		c.String(http.StatusInternalServerError, err.Error())
		return
	}

	engine := db.Engine()
	session := engine.NewSession()
	defer session.Close()

	session.Begin()
	var v2rays []proxy.Vmess
	err = session.Table("vmess").Where("user_id = ?", params["uid"]).Find(&v2rays)
	if err != nil {
		logger.Logger().Error(err.Error())
		session.Rollback()
		c.String(http.StatusInternalServerError, err.Error())
		return
	}

	session.Commit()
	c.JSON(http.StatusOK, gin.H{
		"vmess": v2rays,
	})
}

// AddProxyProtocol 增加代理协议
func (Dispatcher) AddProxyProtocol(c *gin.Context) {
	// 获取 json 对象与后端数据结构绑定
	var params Content
	err := c.ShouldBindWith(&params, binding.Default(c.Request.Method, c.ContentType()))
	if err != nil {
		logger.Logger().Error(err.Error())
		c.String(http.StatusUnprocessableEntity, "传递参数与后端不一致")
		return
	}

	// 获取数据库对象
	engine := db.Engine()
	switch params.Protocol {
	case "vmess":
		v2ray := &proxy.Vmess{
			UID:         uint64(params.UID),
			Name:        params.Name,
			Protocol:    params.Protocol,
			Address:     params.Address,
			Port:        params.Port,
			UserID:      params.UserID,
			AlertID:     params.AlertID,
			Security:    params.Security,
			Level:       params.Level,
			Network:     params.Network,
			NetSecurity: params.NetSecurity,
			Path:        params.Path,
			Domains:     params.Domains,
		}
		_, err := engine.Table(v2ray.TableName()).Insert(v2ray)
		if err != nil {
			logger.Logger().Error(err.Error())
			c.String(http.StatusInternalServerError, "增加协议失败")
			return
		}
	default:
		c.String(http.StatusInternalServerError, "不支持该协议")
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"msg": "增加成功",
	})
}

// DeleteProxyProtocol 删除代理协议
func (Dispatcher) DeleteProxyProtocol(c *gin.Context) {
	var params DeleteParams
	err := c.ShouldBindWith(&params, binding.Default(c.Request.Method, c.ContentType()))
	if err != nil {
		logger.Logger().Error(err.Error())
		c.String(http.StatusUnprocessableEntity, err.Error())
		return
	}

	var protocolName string
	var bean interface{}
	switch params.ProtocolName {
	case "vmess":
		protocolName = "vmess"
		bean = proxy.Vmess{
			ID: uint64(params.ProtocolID),
		}
	default:
		protocolName = "undefine"
	}
	if protocolName == "" || protocolName == "undefine" {
		c.String(http.StatusInternalServerError, "不支持该协议")
		return
	}
	engine := db.Engine()
	_, err = engine.Table(protocolName).Delete(bean)
	if err != nil {
		c.String(http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"msg": "删除成功",
	})
}

// UpdateProxyProtocol 修改代理协议
func (Dispatcher) UpdateProxyProtocol(c *gin.Context) {
	var params Content
	err := c.ShouldBindWith(&params, binding.Default(c.Request.Method, c.ContentType()))
	if err != nil {
		logger.Logger().Error(err.Error())
		c.String(http.StatusUnprocessableEntity, "传递参数与后端不一致")
		return
	}

	engine := db.Engine()
	switch params.Protocol {
	case "vmess":
		v2ray := &proxy.Vmess{
			UID:         uint64(params.UID),
			Name:        params.Name,
			Address:     params.Address,
			Port:        params.Port,
			UserID:      params.UserID,
			AlertID:     params.AlertID,
			Security:    params.Security,
			Level:       params.Level,
			Network:     params.Network,
			NetSecurity: params.NetSecurity,
			Path:        params.Path,
			Domains:     params.Domains,
		}
		_, err := engine.Table(v2ray.TableName()).Where(" id = ?", params.ID).Update(v2ray)
		if err != nil {
			logger.Logger().Error(err.Error())
			c.String(http.StatusInternalServerError, err.Error())
			return
		}
	default:
		c.String(http.StatusInternalServerError, "不支持该协议")
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"msg": "修改成功",
	})
}
