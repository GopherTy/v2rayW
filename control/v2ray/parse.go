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
			"wsSettings": map[string]interface{}{
				"path": param.Path,
			},
		},
		"mux": map[string]interface{}{
			"enabled":     false,
			"concurrency": 8,
		},
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
			"wsSettings": map[string]interface{}{
				"path": param.Path,
			},
		},
		"mux": map[string]interface{}{
			"enabled":     false,
			"concurrency": 8,
		},
	}

	cnf.Outbounds[0] = vless
	return
}
