package protocol

import (
	"encoding/base64"
	"encoding/json"
	"net/http"
	"strconv"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"

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
	err := c.ShouldBindWith(&params, binding.Default(c.Request.Method, c.ContentType()))
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
	err = engine.Table("vmess").Where("user_id = ?", params["uid"]).Find(&v2rays)
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
	err = engine.Table("vless").Where("user_id = ?", params["uid"]).Find(&vless)
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
		Code: serve.StatusOK,
		Data: map[string]interface{}{
			"vmess": v2rays,
			"vless": vless,
		},
	})
}

// AddProxyProtocol 增加代理协议
func (Dispatcher) AddProxyProtocol(c *gin.Context) {
	// 获取 json 对象与后端数据结构绑定
	var params Content
	err := c.ShouldBindWith(&params, binding.Default(c.Request.Method, c.ContentType()))
	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusUnprocessableEntity, model.BackToFrontEndData{
			Code:        serve.StatusParamNotMatched,
			Description: "前端请求参数和后端绑定参数不匹配",
			Error:       err.Error(),
		})
		return
	}

	// 获取数据库对象
	engine := db.Engine()
	var id uint64
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
			Direct:      params.Direct,
		}
		_, err = engine.Table(v2ray.TableName()).Insert(v2ray)
		if err != nil {
			logger.Logger().Error(err.Error())
			c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
				Code:        serve.StatusDBError,
				Description: "数据库错误",
				Error:       err.Error(),
			})
			return
		}
		id = v2ray.ID
	case "vless":
		vless := &proxy.Vless{
			UID:         uint64(params.UID),
			Name:        params.Name,
			Protocol:    params.Protocol,
			Address:     params.Address,
			Port:        params.Port,
			UserID:      params.UserID,
			Flow:        params.Flow,
			Encryption:  params.Encryption,
			Level:       params.Level,
			Network:     params.Network,
			NetSecurity: params.NetSecurity,
			Path:        params.Path,
			Domains:     params.Domains,
			Direct:      params.Direct,
		}
		_, err = engine.Table(vless.TableName()).Insert(vless)
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
	default:
		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
			Code:  serve.StatusServerError,
			Error: "不支持该协议",
		})
		return
	}

	c.JSON(http.StatusOK, model.BackToFrontEndData{
		Code: serve.StatusOK,
		Data: map[string]interface{}{
			"msg": "增加成功",
			"id":  id,
		},
	})
}

// DeleteProxyProtocol 删除代理协议
func (Dispatcher) DeleteProxyProtocol(c *gin.Context) {
	var params DeleteParams
	err := c.ShouldBindWith(&params, binding.Default(c.Request.Method, c.ContentType()))
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
	switch params.ProtocolName {
	case "vmess":
		protocolName = "vmess"
		bean = proxy.Vmess{
			ID: uint64(params.ProtocolID),
		}
	case "vless":
		protocolName = "vless"
		bean = proxy.Vless{
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
	_, err = engine.Table(protocolName).Delete(bean)
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
		Code: serve.StatusOK,
		Data: map[string]interface{}{
			"msg": "删除成功",
		},
	})
}

// UpdateProxyProtocol 修改代理协议
func (Dispatcher) UpdateProxyProtocol(c *gin.Context) {
	var params Content
	err := c.ShouldBindWith(&params, binding.Default(c.Request.Method, c.ContentType()))
	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusUnprocessableEntity, model.BackToFrontEndData{
			Code:        serve.StatusParamNotMatched,
			Description: "前端请求参数和后端绑定参数不匹配",
			Error:       err.Error(),
		})
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
			Protocol:    params.Protocol,
			Domains:     params.Domains,
			Direct:      params.Direct,
		}
		_, err := engine.Table(v2ray.TableName()).AllCols().Where(" id = ?", params.ID).Update(v2ray)
		if err != nil {
			logger.Logger().Error(err.Error())
			c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
				Code:        serve.StatusDBError,
				Description: "数据库错误",
				Error:       err.Error(),
			})
			return
		}
	case "vless":
		vless := &proxy.Vless{
			UID:         uint64(params.UID),
			Name:        params.Name,
			Address:     params.Address,
			Port:        params.Port,
			UserID:      params.UserID,
			Flow:        params.Flow,
			Encryption:  params.Encryption,
			Level:       params.Level,
			Network:     params.Network,
			NetSecurity: params.NetSecurity,
			Path:        params.Path,
			Protocol:    params.Protocol,
			Domains:     params.Domains,
			Direct:      params.Direct,
		}
		_, err := engine.Table(vless.TableName()).AllCols().Where(" id = ?", params.ID).Update(vless)
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

	c.JSON(http.StatusOK, model.BackToFrontEndData{
		Code: serve.StatusOK,
		Data: map[string]interface{}{
			"msg": "修改成功",
		},
	})
}

// ListSubscribeURL 获取用户所有的订阅地址
func (Dispatcher) ListSubscribeURL(c *gin.Context) {
	var params SubcribeParams
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

	var content []proxy.Subscribe
	err = db.Engine().Where("user_id = ?", params.UID).Find(&content)
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
		Code: serve.StatusOK,
		Data: map[string]interface{}{
			"content": content,
		},
	})
}

// AddSubscribeURL 增加代理协议
func (Dispatcher) AddSubscribeURL(c *gin.Context) {
	// 获取 json 对象与后端数据结构绑定
	var params SubcribeParams
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

	subscribe := &proxy.Subscribe{
		UID:  uint64(params.UID),
		Name: params.Name,
		URL:  params.URL,
	}
	_, err = db.Engine().Insert(subscribe)
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
		Code: serve.StatusOK,
		Data: map[string]interface{}{
			"id": subscribe.ID,
		},
	})
}

// DeleteSubscribeURL 删除代理协议
func (Dispatcher) DeleteSubscribeURL(c *gin.Context) {
	var params SubcribeParams
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

	_, err = db.Engine().Delete(&proxy.Subscribe{
		ID: uint64(params.ID),
	})
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

// UpdateSubscribeURL 修改代理协议
func (Dispatcher) UpdateSubscribeURL(c *gin.Context) {
	var params SubcribeParams
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

	_, err = db.Engine().AllCols().Where(" id = ?", params.ID).Update(&proxy.Subscribe{
		Name: params.Name,
		UID:  uint64(params.UID),
		URL:  params.URL,
	})
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
		Description: "修改成功",
	})
}

// SubscribeProxyProtocol 订阅代理协议。
// 支持服务提供商 vmess 协议格式 和 v2ray协议 vless 格式配置
func (Dispatcher) SubscribeProxyProtocol(c *gin.Context) {
	var params struct {
		UID int    `json:"uid"`
		URL string `json:"url" `
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

	vmesss, vlesss, err := subscribe(params.UID, params.URL)
	if err != nil {
		logger.Logger().Error(err.Error())
		c.JSON(http.StatusInternalServerError, model.BackToFrontEndData{
			Code:        serve.StatusServerError,
			Description: "解析失败",
			Error:       err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, model.BackToFrontEndData{
		Code: serve.StatusOK,
		Data: map[string]interface{}{
			"vmess": vmesss,
			"vless": vlesss,
		},
	})
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
}

func subscribe(uid int, url string) (vlesss []proxy.Vless, vmesss []proxy.Vmess, err error) {
	b := make([]byte, 10240)

	resp, err := http.Get(url)
	if err != nil {
		return
	}
	defer resp.Body.Close()

	// base64 decode
	n, err := resp.Body.Read(b)
	if err != nil {
		return
	}

	strs, err := base64.StdEncoding.DecodeString(string(b[:n]))
	if err != nil {
		return
	}

	protocols := strings.Split(string(strs), "\n")
	var data []byte
	var port, aid, v int
	var tls string
	var ok bool
	for _, protocol := range protocols {
		content := strings.Split(protocol, "://")
		if len(content) != 2 {
			break
		}

		data, err = base64.StdEncoding.DecodeString(content[1])
		if err != nil {
			return
		}

		switch strings.ToUpper(content[0]) {
		case "VMESS":
			vms := vmess{}
			err = json.Unmarshal(data, &vms)
			if err != nil {
				return
			}

			port, aid, v, tls, err = convert(vms)
			if err != nil {
				return
			}

			proVmess := proxy.Vmess{
				UID:         uint64(uid),
				Protocol:    "vmess",
				Name:        vms.Ps,
				Address:     vms.Add,
				Port:        port,
				UserID:      vms.ID,
				AlertID:     aid,
				Security:    vms.Type,
				Level:       v,
				Network:     vms.Net,
				NetSecurity: tls,
				Path:        vms.Path,
				Domains:     vms.Host,
			}

			ok, err = db.Engine().Get(&proVmess)
			if err != nil {
				return
			}
			if ok {
				break
			}

			_, err = db.Engine().Insert(&proVmess)
			if err != nil {
				return
			}
			vmesss = append(vmesss, proVmess)
		case "VLESS":
			vls := vless{}
			err = json.Unmarshal(data, &vls)
			if err != nil {
				return
			}

			proVless := proxy.Vless{
				UID:         uint64(uid),
				Protocol:    "vless",
				Name:        vls.Ps,
				Address:     vls.Add,
				Port:        vls.Port,
				UserID:      vls.ID,
				Flow:        vls.Flow,
				Encryption:  vls.Encry,
				Level:       vls.V,
				Network:     vls.Net,
				NetSecurity: vls.Sec,
				Path:        vls.Path,
			}

			ok, err = db.Engine().Get(&proVless)
			if err != nil {
				return
			}
			if ok {
				break
			}

			_, err = db.Engine().Insert(&proVless)
			if err != nil {
				return
			}
			vlesss = append(vlesss, proVless)
		}
	}
	return
}

func convert(vms vmess) (port int, aid int, v int, tls string, err error) {
	port, err = strconv.Atoi(vms.Port)
	if err != nil {
		return
	}
	aid, err = strconv.Atoi(vms.AID)
	if err != nil {
		return
	}

	v, err = strconv.Atoi(vms.V)
	if err != nil {
		return
	}

	if vms.TLS == "true" {
		tls = "tls"
	}
	return
}
