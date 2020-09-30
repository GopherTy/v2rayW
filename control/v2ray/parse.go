package v2ray

// 解析 vmess 协议
func parseVmessOutbound(param ProtocolParam) (err error) {
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

	if cnf.Outbounds[0]["protocol"] == "freedom" {
		cnf.Outbounds = append(cnf.Outbounds, vmess)
		cnf.Outbounds[0], cnf.Outbounds[1] = cnf.Outbounds[1], cnf.Outbounds[0]
		return
	}

	cnf.Outbounds[0] = vmess
	return
}

// 解析 vless 协议
func parseVlessOutbound(param ProtocolParam) (err error) {
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

	if cnf.Outbounds[0]["protocol"] == "freedom" {
		cnf.Outbounds = append(cnf.Outbounds, vless)
		cnf.Outbounds[0], cnf.Outbounds[1] = cnf.Outbounds[1], cnf.Outbounds[0]
		return
	}

	cnf.Outbounds[0] = vless
	return
}
