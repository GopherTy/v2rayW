package protocol

import (
	"encoding/json"
	"io/ioutil"
	"strings"
	"sync"

	"github.com/gopherty/v2rayW/utils"
)

// Parser parse protocol parameter
type Parser struct {
	mu     sync.Mutex
	params *Parameter
	conf   *BaseCnf
}

// NewParser return a new parser
func NewParser() *Parser {
	return &Parser{}
}

// ParseData parse data to v2ray config file
func (p *Parser) ParseData(params Parameter) (data []byte, err error) {
	cnf := NewConfig()
	path := utils.BasePath() + "/v2ray.json"

	p.mu.Lock()
	data, err = ioutil.ReadFile(path)
	if err != nil {
		p.mu.Unlock()
		return
	}
	p.mu.Unlock()

	err = json.Unmarshal(data, cnf)
	if err != nil {
		return
	}

	// 当为订阅时，入口配置保持默认
	if params.Subscribe {
		cnf.Inbounds[0] = map[string]interface{}{
			"listen":   "127.0.0.1",
			"port":     1080,
			"protocol": "socks",
			"settings": map[string]interface{}{
				"auth": "noauth",
			},
			"sniffing": map[string]interface{}{
				"destOverride": []string{"http", "tls"},
				"enabled":      true,
			},
		}
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

	// 赋值，用于解析到对应的代理协议
	p.params = &params
	p.conf = cnf
	switch strings.ToUpper(params.Protocol) {
	case "VMESS":
		err = p.parseVmessOutbound()
		if err != nil {
			return
		}
	case "VLESS":
		err = p.parseVlessOutbound()
		if err != nil {
			return
		}
	case "SOCKS":
		err = p.parseSocksOutbound()
		if err != nil {
			return
		}
	case "SHADOWSOCKS":
		err = p.parseShadowsocksOutbound()
		if err != nil {
			return
		}
	}

	data, err = json.MarshalIndent(cnf, "", "    ")
	if err != nil {
		return
	}
	return
}

// parseVmessOutbound 解析 vmess 协议
func (p *Parser) parseVmessOutbound() (err error) {
	vmess := map[string]interface{}{
		"protocol": p.params.Protocol,
		"settings": map[string]interface{}{
			"vnext": []map[string]interface{}{
				{
					"address": p.params.Address,
					"port":    p.params.Port,
					"users": []map[string]interface{}{
						{
							"id":       p.params.UserID,
							"alterId":  p.params.AlertID,
							"security": p.params.Security,
							"level":    p.params.Level,
						},
					},
				},
			},
		},
	}
	if p.params.NetSecurity != "" || p.params.Network != "" {
		vmess["streamSettings"] = map[string]interface{}{}
	}

	// 处理 path 参数属于哪种传输方式
	if m, ok := vmess["streamSettings"].(map[string]interface{}); ok {
		if p.params.Network != "" {
			m["network"] = p.params.Network
		}
		if p.params.NetSecurity != "" {
			m["security"] = p.params.NetSecurity
		}
		switch m["network"] {
		case "ws":
			m["wsSettings"] = map[string]interface{}{
				"path": p.params.Path,
			}
		case "h2":
			m["httpSettings"] = map[string]interface{}{
				"host": []string{p.params.Domains},
				"path": p.params.Path,
			}
		}
	}

	p.mu.Lock()
	p.conf.Outbounds[0] = vmess
	p.mu.Unlock()

	return
}

// ParseVlessOutbound 解析 vless 协议
func (p *Parser) parseVlessOutbound() (err error) {
	vless := map[string]interface{}{
		"protocol": p.params.Protocol,
		"settings": map[string]interface{}{
			"vnext": []map[string]interface{}{
				{
					"address": p.params.Address,
					"port":    p.params.Port,
					"users": []map[string]interface{}{
						{
							"id": p.params.UserID,
							// "flow":       param.Flow,
							"encryption": p.params.Encryption,
							"level":      p.params.Level,
						},
					},
				},
			},
		},
	}
	if p.params.NetSecurity != "" || p.params.Network != "" {
		vless["streamSettings"] = map[string]interface{}{}
	}

	// 处理 path 参数属于哪种传输方式
	if m, ok := vless["streamSettings"].(map[string]interface{}); ok {
		if p.params.Network != "" {
			m["network"] = p.params.Network
		}
		if p.params.NetSecurity != "" {
			m["security"] = p.params.NetSecurity
		}
		switch m["network"] {
		case "ws":
			m["wsSettings"] = map[string]interface{}{
				"path": p.params.Path,
			}
		case "h2":
			m["httpSettings"] = map[string]interface{}{
				"host": []string{p.params.Domains},
				"path": p.params.Path,
			}
		}
		switch m["security"] {
		case "xtls":
			m["xtlsSettings"] = map[string]interface{}{
				"serverName": p.params.Domains,
			}
		}
	}

	p.mu.Lock()
	p.conf.Outbounds[0] = vless
	p.mu.Unlock()

	return
}

// ParseSocksOutbound 解析 socks 协议
func (p *Parser) parseSocksOutbound() (err error) {
	socks := map[string]interface{}{
		"protocol": p.params.Protocol,
		"settings": map[string]interface{}{
			"servers": []map[string]interface{}{
				{
					"address": p.params.Address,
					"port":    p.params.Port,
					"users": []map[string]interface{}{
						{
							"user":  p.params.User,
							"pass":  p.params.Passwd,
							"level": p.params.Level,
						},
					},
				},
			},
		},
	}

	p.mu.Lock()
	p.conf.Outbounds[0] = socks
	p.mu.Unlock()

	return
}

// ParseShadowsocksOutbound 解析 shadowsocks 协议
func (p *Parser) parseShadowsocksOutbound() (err error) {
	shadowsocks := map[string]interface{}{
		"protocol": p.params.Protocol,
		"settings": map[string]interface{}{
			"servers": []map[string]interface{}{
				{
					"address":  p.params.Address,
					"port":     p.params.Port,
					"method":   p.params.Security,
					"password": p.params.Passwd,
					"level":    p.params.Level,
				},
			},
		},
	}

	p.mu.Lock()
	p.conf.Outbounds[0] = shadowsocks
	p.mu.Unlock()

	return
}
