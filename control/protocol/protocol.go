package protocol

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
	"strings"
	"sync"

	"github.com/gin-gonic/gin"

	"github.com/gopherty/v2rayW/control/v2ray"
	"github.com/gopherty/v2rayW/db"
	"github.com/gopherty/v2rayW/logger"
	"github.com/gopherty/v2rayW/model"
	"github.com/gopherty/v2rayW/model/proxy"
	"github.com/gopherty/v2rayW/serve"
	"github.com/gopherty/v2rayW/utils"
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

	content, err := ParseToData(params)
	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
			Code:        serve.StatusServerError,
			Description: "解析配置文件错误",
			Error:       err.Error(),
		})
		return
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
			ConfigFile:  string(content),
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
			ConfigFile:  string(content),
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
			ConfigFile: string(content),
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
	case Shadowsocks:
		shadowsocks := &proxy.Shadowsocks{
			UID:        uint64(params.UID),
			Name:       params.Name,
			Protocol:   params.Protocol,
			Address:    params.Address,
			Port:       params.Port,
			Passwd:     params.Passwd,
			Security:   params.Security,
			Direct:     params.Direct,
			ConfigFile: string(content),
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
			"cnf": string(content),
		},
	})
}

// DeleteProxyProtocol 删除代理协议
func (Dispatcher) DeleteProxyProtocol(c *gin.Context) {
	var params DeleteParams
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
	switch strings.ToUpper(params.ProtocolName) {
	case Vmess:
		protocolName = "vmess"
		bean = proxy.Vmess{
			ID: uint64(params.ProtocolID),
		}
	case Vless:
		protocolName = "vless"
		bean = proxy.Vless{
			ID: uint64(params.ProtocolID),
		}
	case Socks:
		protocolName = "socks"
		bean = proxy.Socks{
			ID: uint64(params.ProtocolID),
		}
	case Shadowsocks:
		protocolName = "shadowsocks"
		bean = proxy.Shadowsocks{
			ID: uint64(params.ProtocolID),
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
	if !params.Custom {
		content, err := ParseToData(params)
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
	} else {
		cnf = params.ConfigFile
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
	case Shadowsocks:
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

// LoadCnfProxyProtocol 加载完整配置文件
// func (Dispatcher) LoadCnfProxyProtocol(c *gin.Context) {
// 	// 获取 json 对象与后端数据结构绑定
// 	var params Parameter
// 	err := c.ShouldBind(&params)
// 	if err != nil {
// 		logger.Logger().Error(err.Error())
// 		c.JSON(http.StatusUnprocessableEntity, model.BackToFrontEndData{
// 			Code:        serve.StatusParamNotMatched,
// 			Description: "前端请求参数和后端绑定参数不匹配",
// 			Error:       err.Error(),
// 		})
// 		return
// 	}

// 	cnf := v2ray.NewConfig()
// 	err = json.Unmarshal([]byte(params.ConfigFile), cnf)
// 	if err != nil {
// 		logger.Logger().Error(err.Error())
// 		c.JSON(http.StatusUnprocessableEntity, model.BackToFrontEndData{
// 			Code:        serve.StatusInternalServerError,
// 			Description: "配置文件有误",
// 			Error:       err.Error(),
// 		})
// 		return
// 	}

// 	engine := db.Engine()
// 	var id uint64
// 	switch strings.ToUpper(params.Protocol) {
// 	case Vmess:
// 		vmess := &proxy.Vmess{
// 			UID:         uint64(params.UID),
// 			Name:        params.Name,
// 			Protocol:    params.Protocol,
// 			Address:     params.Address,
// 			Port:        params.Port,
// 			UserID:      params.UserID,
// 			AlertID:     params.AlertID,
// 			Security:    params.Security,
// 			Level:       params.Level,
// 			Network:     params.Network,
// 			NetSecurity: params.NetSecurity,
// 			Path:        params.Path,
// 			Domains:     params.Domains,
// 			Direct:      params.Direct,
// 			ConfigFile:  string(content),
// 		}
// 		_, err = engine.Insert(vmess)
// 		if err != nil {
// 			logger.Logger().Error(err.Error())
// 			c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
// 				Code:        serve.StatusDBError,
// 				Description: "数据库错误",
// 				Error:       err.Error(),
// 			})
// 			return
// 		}
// 		id = vmess.ID
// 	case Vless:
// 		vless := &proxy.Vless{
// 			UID:      uint64(params.UID),
// 			Name:     params.Name,
// 			Protocol: params.Protocol,
// 			Address:  params.Address,
// 			Port:     params.Port,
// 			UserID:   params.UserID,
// 			// Flow:        params.Flow,
// 			Encryption:  params.Encryption,
// 			Level:       params.Level,
// 			Network:     params.Network,
// 			NetSecurity: params.NetSecurity,
// 			Path:        params.Path,
// 			Domains:     params.Domains,
// 			Direct:      params.Direct,
// 			ConfigFile:  string(content),
// 		}
// 		_, err = engine.Insert(vless)
// 		if err != nil {
// 			logger.Logger().Error(err.Error())
// 			c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
// 				Code:        serve.StatusDBError,
// 				Description: "数据库错误",
// 				Error:       err.Error(),
// 			})
// 			return
// 		}
// 		id = vless.ID
// 	case Socks:
// 		socks := &proxy.Socks{
// 			UID:        uint64(params.UID),
// 			Name:       params.Name,
// 			Protocol:   params.Protocol,
// 			Address:    params.Address,
// 			Port:       params.Port,
// 			User:       params.User,
// 			Passwd:     params.Passwd,
// 			Direct:     params.Direct,
// 			ConfigFile: string(content),
// 		}
// 		_, err = engine.Insert(socks)
// 		if err != nil {
// 			logger.Logger().Error(err.Error())
// 			c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
// 				Code:        serve.StatusDBError,
// 				Description: "数据库错误",
// 				Error:       err.Error(),
// 			})
// 			return
// 		}
// 		id = socks.ID
// 	case Shadowsocks:
// 		shadowsocks := &proxy.Shadowsocks{
// 			UID:        uint64(params.UID),
// 			Name:       params.Name,
// 			Protocol:   params.Protocol,
// 			Address:    params.Address,
// 			Port:       params.Port,
// 			Passwd:     params.Passwd,
// 			Security:   params.Security,
// 			Direct:     params.Direct,
// 			ConfigFile: string(content),
// 		}
// 		_, err = engine.Insert(shadowsocks)
// 		if err != nil {
// 			logger.Logger().Error(err.Error())
// 			c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
// 				Code:        serve.StatusDBError,
// 				Description: "数据库错误",
// 				Error:       err.Error(),
// 			})
// 			return
// 		}
// 		id = shadowsocks.ID
// 	default:
// 		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
// 			Code:  serve.StatusServerError,
// 			Error: "不支持该协议",
// 		})
// 		return
// 	}

// 	c.JSON(http.StatusOK, model.BackToFrontEndData{
// 		Code:        serve.StatusOK,
// 		Description: "增加成功",
// 		Data: map[string]interface{}{
// 			"id":  id,
// 			"cnf": string(content),
// 		},
// 	})
// }

// ParseToData .
func ParseToData(params Parameter) (content []byte, err error) {
	cnf := v2ray.NewConfig()
	path := utils.BasePath() + "/v2ray.json"

	var mu sync.Mutex
	mu.Lock()
	data, err := ioutil.ReadFile(path)
	if err != nil {
		mu.Unlock()
		return
	}
	mu.Unlock()

	err = json.Unmarshal(data, cnf)
	if err != nil {
		return
	}

	// 国内直连，开启后启动 v2ray 启动会变慢。
	if params.Direct {
		cnf.Routing = map[string]interface{}{
			"domainStrategy": "IPOnDemand",
			"rules": []map[string]interface{}{
				{
					"type":        "field",
					"outboundTag": "direct",
					"domain":      []string{"geosite:cn"}, // 中国大陆主流网站的域名
				},
				{
					"type":        "field",
					"outboundTag": "direct",
					"ip": []string{
						"geoip:cn",      // 中国大陆的 IP
						"geoip:private", // 私有地址 IP，如路由器等
					},
				},
			},
		}
		cnf.Outbounds = []map[string]interface{}{
			{},
			{
				"protocol": "freedom",
				"settings": map[string]interface{}{},
				"tag":      "direct",
			},
		}
	} else {
		cnf.Routing = map[string]interface{}{}
		cnf.Outbounds = []map[string]interface{}{
			{},
		}
	}

	param := v2ray.ProtocolParam{
		Protocol: params.Protocol,
		ID:       params.ID,
		Address:  params.Address,
		Port:     params.Port,
		UserID:   params.UserID,
		AlertID:  params.AlertID,
		// Flow:        params.Flow,
		Encryption:  params.Encryption,
		Level:       params.Level,
		Security:    params.Security,
		User:        params.User,
		Passwd:      params.Passwd,
		Network:     params.Network,
		Domains:     params.Domains,
		Path:        params.Path,
		NetSecurity: params.NetSecurity,
		Direct:      params.Direct,
	}
	switch strings.ToUpper(params.Protocol) {
	case "VMESS":
		err = v2ray.ParseVmessOutbound(param, cnf)
		if err != nil {
			return
		}
	case "VLESS":
		err = v2ray.ParseVlessOutbound(param, cnf)
		if err != nil {
			return
		}
	case "SOCKS":
		err = v2ray.ParseSocksOutbound(param, cnf)
		if err != nil {
			return
		}
	case "SHADOWSOCKS":
		err = v2ray.ParseShadowsocksOutbound(param, cnf)
		if err != nil {
			return
		}
	}

	content, err = json.MarshalIndent(cnf, "", "    ")
	if err != nil {
		return
	}
	return
}
