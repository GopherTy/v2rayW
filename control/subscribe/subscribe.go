package subscribe

import (
	"encoding/base64"
	"encoding/json"
	"net/http"
	"strconv"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/gopherty/v2rayW/db"
	"github.com/gopherty/v2rayW/logger"
	"github.com/gopherty/v2rayW/model"
	"github.com/gopherty/v2rayW/model/proxy"
	"github.com/gopherty/v2rayW/serve"
)

// Dispatcher 订阅功能相关的控制器
type Dispatcher struct {
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
