package v2ray

// ParseVmessOutbound 解析 vmess 协议
func ParseVmessOutbound(param ProtocolParam) (err error) {
	mu.Lock()
	defer mu.Unlock()

	//  设置协议
	vmess := map[string]interface{}{
		"protocol": param.Protocol,
		"settings": map[string]interface{}{
			"vnext": []map[string]interface{}{
				{
					"address": param.Address,
					"port":    param.Port,
					"users": []map[string]interface{}{
						{
							"id":       param.UserID,
							"alterId":  param.AlertID,
							"security": param.Security,
							"level":    param.Level,
						},
					},
				},
			},
		},
		"streamSettings": map[string]interface{}{
			"network":  param.Network,
			"security": param.NetSecurity,
		},
	}
	// 处理 path 参数属于哪种传输方式
	if m, ok := vmess["streamSettings"].(map[string]interface{}); ok {
		switch m["network"] {
		case "ws":
			m["wsSettings"] = map[string]interface{}{
				"path": param.Path,
			}
		case "h2":
			m["httpSettings"] = map[string]interface{}{
				"host": []string{param.Domains},
				"path": param.Path,
			}
		}
	}

	cnf.Outbounds[0] = vmess
	return
}

// ParseVlessOutbound 解析 vless 协议
func ParseVlessOutbound(param ProtocolParam) (err error) {
	mu.Lock()
	defer mu.Unlock()

	//  设置协议
	vless := map[string]interface{}{
		"protocol": param.Protocol,
		"settings": map[string]interface{}{
			"vnext": []map[string]interface{}{
				{
					"address": param.Address,
					"port":    param.Port,
					"users": []map[string]interface{}{
						{
							"id":         param.UserID,
							"flow":       param.Flow,
							"encryption": param.Encryption,
							"level":      param.Level,
						},
					},
				},
			},
		},
		"streamSettings": map[string]interface{}{
			"network":  param.Network,
			"security": param.NetSecurity,
		},
	}
	// 处理 path 参数属于哪种传输方式
	if m, ok := vless["streamSettings"].(map[string]interface{}); ok {
		switch m["network"] {
		case "ws":
			m["wsSettings"] = map[string]interface{}{
				"path": param.Path,
			}
		case "h2":
			m["httpSettings"] = map[string]interface{}{
				"host": []string{param.Domains},
				"path": param.Path,
			}
		}
		switch m["security"] {
		case "xtls":
			m["xtlsSettings"] = map[string]interface{}{
				"serverName": param.Domains,
			}
		}
	}

	cnf.Outbounds[0] = vless
	return
}

// ParseSocksOutbound 解析 socks 协议
func ParseSocksOutbound(param ProtocolParam) (err error) {
	mu.Lock()
	defer mu.Unlock()

	socks := map[string]interface{}{
		"protocol": param.Protocol,
		"settings": map[string]interface{}{
			"servers": []map[string]interface{}{
				{
					"address": param.Address,
					"port":    param.Port,
					"users": []map[string]interface{}{
						{
							"user":  param.User,
							"pass":  param.Passwd,
							"level": param.Level,
						},
					},
				},
			},
		},
	}

	cnf.Outbounds[0] = socks
	return
}

// ParseShadowsocksOutbound 解析 shadowsocks 协议
func ParseShadowsocksOutbound(param ProtocolParam) (err error) {
	mu.Lock()
	defer mu.Unlock()

	shadowsocks := map[string]interface{}{
		"protocol": param.Protocol,
		"settings": map[string]interface{}{
			"servers": []map[string]interface{}{
				{
					"address": param.Address,
					"port":    param.Port,
					"users": []map[string]interface{}{
						{
							"method": param.Security,
							"pass":   param.Passwd,
							"level":  param.Level,
						},
					},
				},
			},
		},
	}

	cnf.Outbounds[0] = shadowsocks
	return
}
