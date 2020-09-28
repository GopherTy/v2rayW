package v2ray

// v2ray config  object
var cnf = NewConfig()

func init() {
	mu.Lock()
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
	mu.Unlock()

	// 日志广播器
	go bc.Run()
}
