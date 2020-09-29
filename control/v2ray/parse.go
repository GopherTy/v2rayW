package v2ray

// 解析 vmess 协议
func parseVmessOutbound(param ProtocolParam) (err error) {
	// mu.Lock()
	// defer mu.Unlock()

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

	if len(cnf.Outbounds) != 0 {
		for i, outbound := range cnf.Outbounds {
			if outbound["protocol"] == "vmess" {
				cnf.Outbounds[i] = vmess
				return
			}
		}
	}
	cnf.Outbounds = append(cnf.Outbounds, vmess)

	return
}

// 解析 vless 协议
func parseVlessOutbound(param ProtocolParam) (err error) {
	// mu.Lock()
	// defer mu.Unlock()

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

	if len(cnf.Outbounds) != 0 {
		for i, outbound := range cnf.Outbounds {
			if outbound["protocol"] == "vless" {
				cnf.Outbounds[i] = vless
				return
			}
		}
	}
	cnf.Outbounds = append(cnf.Outbounds, vless)

	return
}
