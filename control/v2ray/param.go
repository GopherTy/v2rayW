package v2ray

// ProtocolParam accept parameters pass from network.
type ProtocolParam struct {
	Protocol string // 协议名称
	ID       int    // 协议 id

	Address string `json:"address"`
	Port    int    `json:"port"`

	UserID  string
	AlertID int `json:"alertId"`
	// vless 协议参数
	Flow string `json:"flow"`
	// vless 协议参数
	Encryption string `json:"encryption"`
	Level      int    `json:"level"`
	Security   string `json:"security"`
	// socks 协议参数
	User   string `json:"user"`
	Passwd string `json:"passwd"`

	Network     string `json:"network"`
	Domains     string `json:"domains"`
	Path        string `json:"path"`
	NetSecurity string

	ConfigFile string

	// 国内直连
	Direct bool `json:"direct"`
}
