package protocol

import (
	"encoding/json"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"

	"github.com/gopherty/v2rayW/db"
	"github.com/gopherty/v2rayW/logger"
	"github.com/gopherty/v2rayW/model"
	"github.com/gopherty/v2rayW/model/proxy"
	"github.com/gopherty/v2rayW/serve"
)

// Dispatcher 协议功能相关的控制器
type Dispatcher struct {
}

// ListProxyProtocols 获取用户所有的代理协议
func (Dispatcher) ListProxyProtocols(c *gin.Context) {
	var params map[string]interface{}
	err := c.ShouldBind(&params)
	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusUnprocessableEntity, model.BackToFrontEndData{
			Code:        serve.StatusServerError,
			Description: "前端请求参数和后端绑定参数不匹配",
			Error:       err.Error(),
		})
		return
	}

	engine := db.Engine()

	var v2rays []proxy.Vmess
	err = engine.Where("user_id = ?", params["uid"]).Find(&v2rays)
	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
			Code:        serve.StatusDBError,
			Description: "数据库错误",
			Error:       err.Error(),
		})
		return
	}

	var vless []proxy.Vless
	err = engine.Where("user_id = ?", params["uid"]).Find(&vless)
	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
			Code:        serve.StatusDBError,
			Description: "数据库错误",
			Error:       err.Error(),
		})
		return
	}

	var socks []proxy.Socks
	err = engine.Where("user_id = ?", params["uid"]).Find(&socks)
	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
			Code:        serve.StatusDBError,
			Description: "数据库错误",
			Error:       err.Error(),
		})
		return
	}

	var shadowsocks []proxy.Shadowsocks
	err = engine.Where("user_id = ?", params["uid"]).Find(&shadowsocks)
	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
			Code:        serve.StatusDBError,
			Description: "数据库错误",
			Error:       err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, model.BackToFrontEndData{
		Code:        serve.StatusOK,
		Description: "获取成功",
		Data: map[string]interface{}{
			"vmess":       v2rays,
			"vless":       vless,
			"socks":       socks,
			"shadowsocks": shadowsocks,
		},
	})
}

// AddProxyProtocol 增加代理协议
func (Dispatcher) AddProxyProtocol(c *gin.Context) {
	// 获取 json 对象与后端数据结构绑定
	var params Parameter
	err := c.ShouldBind(&params)
	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusUnprocessableEntity, model.BackToFrontEndData{
			Code:        serve.StatusParamNotMatched,
			Description: "前端请求参数和后端绑定参数不匹配",
			Error:       err.Error(),
		})
		return
	}

	var v2rayCnf []byte
	if params.Custom {
		cnf := NewConfig()
		err := json.Unmarshal([]byte(params.ConfigFile), cnf)
		if err != nil {
			logger.Logger().Error(err.Error())
			c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
				Code:        serve.StatusServerError,
				Description: "解析配置文件错误",
				Error:       err.Error(),
			})
			return
		}

		data, err := json.MarshalIndent(cnf, "", "    ")
		if err != nil {
			logger.Logger().Error(err.Error())
			c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
				Code:        serve.StatusServerError,
				Description: "解析配置文件错误",
				Error:       err.Error(),
			})
			return
		}
		v2rayCnf = data
	} else {
		data, err := NewParser().ParseData(params)
		if err != nil {
			logger.Logger().Error(err.Error())
			c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
				Code:        serve.StatusServerError,
				Description: "解析配置文件错误",
				Error:       err.Error(),
			})
			return
		}
		v2rayCnf = data
	}

	// 获取数据库对象
	engine := db.Engine()
	var id uint64
	switch strings.ToUpper(params.Protocol) {
	case Vmess:
		vmess := &proxy.Vmess{
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
			Direct:      params.Direct,
			ConfigFile:  string(v2rayCnf),
		}
		_, err = engine.Insert(vmess)
		if err != nil {
			logger.Logger().Error(err.Error())
			c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
				Code:        serve.StatusDBError,
				Description: "数据库错误",
				Error:       err.Error(),
			})
			return
		}
		id = vmess.ID
	case Vless:
		vless := &proxy.Vless{
			UID:      uint64(params.UID),
			Name:     params.Name,
			Protocol: params.Protocol,
			Address:  params.Address,
			Port:     params.Port,
			UserID:   params.UserID,
			// Flow:        params.Flow,
			Encryption:  params.Encryption,
			Level:       params.Level,
			Network:     params.Network,
			NetSecurity: params.NetSecurity,
			Path:        params.Path,
			Domains:     params.Domains,
			Direct:      params.Direct,
			ConfigFile:  string(v2rayCnf),
		}
		_, err = engine.Insert(vless)
		if err != nil {
			logger.Logger().Error(err.Error())
			c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
				Code:        serve.StatusDBError,
				Description: "数据库错误",
				Error:       err.Error(),
			})
			return
		}
		id = vless.ID
	case Socks:
		socks := &proxy.Socks{
			UID:        uint64(params.UID),
			Name:       params.Name,
			Protocol:   params.Protocol,
			Address:    params.Address,
			Port:       params.Port,
			User:       params.User,
			Passwd:     params.Passwd,
			Direct:     params.Direct,
			ConfigFile: string(v2rayCnf),
		}
		_, err = engine.Insert(socks)
		if err != nil {
			logger.Logger().Error(err.Error())
			c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
				Code:        serve.StatusDBError,
				Description: "数据库错误",
				Error:       err.Error(),
			})
			return
		}
		id = socks.ID
	case ShadowSocks:
		shadowsocks := &proxy.Shadowsocks{
			UID:        uint64(params.UID),
			Name:       params.Name,
			Protocol:   params.Protocol,
			Address:    params.Address,
			Port:       params.Port,
			Passwd:     params.Passwd,
			Security:   params.Security,
			Direct:     params.Direct,
			ConfigFile: string(v2rayCnf),
		}
		_, err = engine.Insert(shadowsocks)
		if err != nil {
			logger.Logger().Error(err.Error())
			c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
				Code:        serve.StatusDBError,
				Description: "数据库错误",
				Error:       err.Error(),
			})
			return
		}
		id = shadowsocks.ID
	default:
		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
			Code:  serve.StatusServerError,
			Error: "不支持该协议",
		})
		return
	}

	c.JSON(http.StatusOK, model.BackToFrontEndData{
		Code:        serve.StatusOK,
		Description: "增加成功",
		Data: map[string]interface{}{
			"id":  id,
			"cnf": string(v2rayCnf),
		},
	})
}

// DeleteProxyProtocol 删除代理协议
func (Dispatcher) DeleteProxyProtocol(c *gin.Context) {
	var params Parameter
	err := c.ShouldBind(&params)
	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusUnprocessableEntity, model.BackToFrontEndData{
			Code:        serve.StatusParamNotMatched,
			Description: "前端请求参数和后端绑定参数不匹配",
			Error:       err.Error(),
		})
		return
	}

	var protocolName string
	var bean interface{}
	switch strings.ToUpper(params.Name) {
	case Vmess:
		protocolName = "vmess"
		bean = proxy.Vmess{
			ID: uint64(params.ID),
		}
	case Vless:
		protocolName = "vless"
		bean = proxy.Vless{
			ID: uint64(params.ID),
		}
	case Socks:
		protocolName = "socks"
		bean = proxy.Socks{
			ID: uint64(params.ID),
		}
	case ShadowSocks:
		protocolName = "shadowsocks"
		bean = proxy.Shadowsocks{
			ID: uint64(params.ID),
		}
	default:
		protocolName = "undefine"
	}
	if protocolName == "" || protocolName == "undefine" {
		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
			Code:  serve.StatusServerError,
			Error: "不支持该协议",
		})
		return
	}

	engine := db.Engine()
	_, err = engine.Delete(bean)
	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
			Code:        serve.StatusDBError,
			Description: "数据库错误",
			Error:       err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, model.BackToFrontEndData{
		Code:        serve.StatusOK,
		Description: "删除成功",
	})
}

// UpdateProxyProtocol 修改代理协议
func (Dispatcher) UpdateProxyProtocol(c *gin.Context) {
	var params Parameter
	err := c.ShouldBind(&params)
	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusUnprocessableEntity, model.BackToFrontEndData{
			Code:        serve.StatusParamNotMatched,
			Description: "前端请求参数和后端绑定参数不匹配",
			Error:       err.Error(),
		})
		return
	}

	var cnf string
	if params.Custom {
		cnf = params.ConfigFile
	} else {
		content, err := NewParser().ParseData(params)
		if err != nil {
			logger.Logger().Error(err.Error())
			c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
				Code:        serve.StatusServerError,
				Description: "解析配置文件错误",
				Error:       err.Error(),
			})
			return
		}
		cnf = string(content)
	}

	engine := db.Engine()
	switch strings.ToUpper(params.Protocol) {
	case Vmess:
		v2ray := &proxy.Vmess{
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
			Direct:      params.Direct,
			ConfigFile:  cnf,
		}
		_, err := engine.Cols("name", "address", "port", "userId", "security", "level", "network", "net_security", "path", "domains", "direct", "cnf").
			Where(" id = ?", params.ID).Update(v2ray)
		if err != nil {
			logger.Logger().Error(err.Error())
			c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
				Code:        serve.StatusDBError,
				Description: "数据库错误",
				Error:       err.Error(),
			})
			return
		}
	case Vless:
		vless := &proxy.Vless{
			Name:    params.Name,
			Address: params.Address,
			Port:    params.Port,
			UserID:  params.UserID,
			// Flow:        params.Flow,
			Encryption:  params.Encryption,
			Level:       params.Level,
			Network:     params.Network,
			NetSecurity: params.NetSecurity,
			Path:        params.Path,
			Domains:     params.Domains,
			Direct:      params.Direct,
			ConfigFile:  cnf,
		}
		_, err := engine.Cols("name", "address", "port", "userId", "flow", "encryption", "level", "network", "net_security", "path", "domains", "direct", "cnf").
			Where(" id = ?", params.ID).Update(vless)
		if err != nil {
			logger.Logger().Error(err.Error())
			c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
				Code:        serve.StatusDBError,
				Description: "数据库错误",
				Error:       err.Error(),
			})
			return
		}
	case Socks:
		socks := &proxy.Socks{
			Name:       params.Name,
			Address:    params.Address,
			Port:       params.Port,
			User:       params.User,
			Passwd:     params.Passwd,
			Direct:     params.Direct,
			ConfigFile: cnf,
		}
		_, err := engine.Cols("name", "address", "port", "user", "passwd", "direct", "cnf").
			Where(" id = ?", params.ID).Update(socks)
		if err != nil {
			logger.Logger().Error(err.Error())
			c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
				Code:        serve.StatusDBError,
				Description: "数据库错误",
				Error:       err.Error(),
			})
			return
		}
	case ShadowSocks:
		shadowsocks := &proxy.Shadowsocks{
			Name:       params.Name,
			Address:    params.Address,
			Port:       params.Port,
			Passwd:     params.Passwd,
			Security:   params.Security,
			Direct:     params.Direct,
			ConfigFile: cnf,
		}
		_, err := engine.Cols("name", "address", "port", "passwd", "security", "direct", "cnf").
			Where(" id = ?", params.ID).Update(shadowsocks)
		if err != nil {
			logger.Logger().Error(err.Error())
			c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
				Code:        serve.StatusDBError,
				Description: "数据库错误",
				Error:       err.Error(),
			})
			return
		}
	default:
		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
			Code:  serve.StatusServerError,
			Error: "不支持该协议",
		})
		return
	}

	if !params.Custom {
		c.JSON(http.StatusOK, model.BackToFrontEndData{
			Code:        serve.StatusOK,
			Description: "修改成功",
			Data: map[string]interface{}{
				"cnf": cnf,
			},
		})
	} else {
		c.JSON(http.StatusOK, model.BackToFrontEndData{
			Code:        serve.StatusOK,
			Description: "修改成功",
		})
	}
}

// ClearProxyProtocol 清空代理协议
func (Dispatcher) ClearProxyProtocol(c *gin.Context) {
	var params struct {
		UID int `json:"uid"`
	}

	err := c.ShouldBind(&params)
	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusUnprocessableEntity, model.BackToFrontEndData{
			Code:        serve.StatusParamNotMatched,
			Description: "前端请求参数和后端绑定参数不匹配",
			Error:       err.Error(),
		})
		return
	}

	session := db.Engine().NewSession()
	err = session.Begin()
	defer func() {
		if err != nil {
			session.Rollback()
			logger.Logger().Error(err.Error())
			c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
				Code:        serve.StatusDBError,
				Description: "数据库错误",
				Error:       err.Error(),
			})
		} else {
			session.Commit()
			db.Engine().ClearCache(&proxy.Vless{}, &proxy.Vmess{}, &proxy.Socks{}, &proxy.Shadowsocks{})
			c.JSON(http.StatusOK, model.BackToFrontEndData{
				Code:        serve.StatusOK,
				Description: "清空成功",
			})
		}
	}()

	_, err = session.Delete(&proxy.Vless{UID: uint64(params.UID)})
	_, err = session.Delete(&proxy.Vmess{UID: uint64(params.UID)})
	_, err = session.Delete(&proxy.Socks{UID: uint64(params.UID)})
	_, err = session.Delete(&proxy.Shadowsocks{UID: uint64(params.UID)})
}
