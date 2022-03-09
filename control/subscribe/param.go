package subscribe

// SubcribeParams 订阅协议参数
type SubcribeParams struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
	URL  string `json:"url"`
}

// 解码协议格式
// 服务商的 vmess 格式
type vmess struct {
	V    string `json:"v"`
	Ps   string `json:"ps"`
	Add  string `json:"add"`
	Port string `json:"port"`
	ID   string `json:"id"`
	AID  string `json:"aid"`
	Net  string `json:"net"`
	Type string `json:"type"`
	Host string `json:"host"`
	Path string `json:"path"`
	TLS  string `json:"tls"`
}

// 自定义 vless 协议
type vless struct {
	V     int    `json:"v"`
	Ps    string `json:"ps"`
	Add   string `json:"add"`
	Port  int    `json:"port"`
	ID    string `json:"id"`
	Encry string `json:"encry"`
	Flow  string `json:"flow"`
	Net   string `json:"net"`
	Sec   string `json:"sec"`
	Path  string `json:"path"`
}
