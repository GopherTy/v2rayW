package v2ray

// v2ray config  object
var cnf = NewConfig()

func init() {
	// mu.Lock()
	// log
	cnf.Log = map[string]interface{}{
		"access":   "",
		"error":    "",
		"loglevel": "warning",
	}
	// socks
	inbound := map[string]interface{}{
		"port":     1080,
		"listen":   "127.0.0.1",
		"protocol": "socks",
		"settings": map[string]interface{}{
			"auth": "noauth",
		},
		"sniffing": map[string]interface{}{
			"enabled":      true,
			"destOverride": []string{"http", "tls"},
		},
	}
	cnf.Inbounds = append(cnf.Inbounds, inbound)

	// 出口配置
	outbound := map[string]interface{}{
		"protocol": "freedom",
		"settings": map[string]interface{}{},
		"tag":      "direct",
	}
	cnf.Outbounds = append(cnf.Outbounds, outbound)

	// 路由配置
	cnf.Routing = map[string]interface{}{
		"domainStrategy": "AsIs",
		"rules": []map[string]interface{}{
			map[string]interface{}{
				"type":        "field",
				"outboundTag": "direct",
				"domain":      []string{"geosite:cn"}, // 中国大陆主流网站的域名
			},
			map[string]interface{}{
				"type":        "field",
				"outboundTag": "direct",
				"ip": []string{
					"geoip:cn",      // 中国大陆的 IP
					"geoip:private", // 私有地址 IP，如路由器等
				},
			},
		},
	}
	// 路由配置
	// mu.Unlock()

	// 日志广播器
	go bc.Run()
}
