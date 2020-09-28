package v2ray

import (
	"encoding/json"
)

// 解析 vmess 协议
func parseVmessOutbound(param *ProtocolParam) (content []byte, err error) {
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

	if len(cnf.Outbounds) != 0 {
		for _, outbound := range cnf.Outbounds {
			if outbound["protocol"] == "vmess" {
				outbound = vmess
				break
			}
		}
	}
	cnf.Outbounds = append(cnf.Outbounds, vmess)

	content, err = json.MarshalIndent(cnf, "", "	")
	if err != nil {
		return
	}

	return
}

// 解析 vless 协议
func parseVlessOutbound(param *ProtocolParam) (content []byte, err error) {
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
							"flow":       "",
							"encryption": "none",
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
		for _, outbound := range cnf.Outbounds {
			if outbound["protocol"] == "vless" {
				outbound = vless
				break
			}
		}
	}
	cnf.Outbounds = append(cnf.Outbounds, vless)

	content, err = json.MarshalIndent(cnf, "", "	")
	if err != nil {
		return
	}

	return
}
