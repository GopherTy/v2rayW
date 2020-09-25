package v2ray

// ParamStart accept parameters pass from network.
type ParamStart struct {
	Protocol string // 协议名称
	ID       int    // 协议 id

	Address string `json:"address"`
	Port    int    `json:"port"`

	UserID   string
	AlertID  int    `json:"alertId"`
	Level    int    `json:"level"`
	Security string `json:"security"`

	Network     string `json:"network"`
	Domains     string `json:"domains"`
	Path        string `json:"path"`
	NetSecurity string
}

// Status v2ray 服务器状态
type Status struct {
	protocol string
	id       int
	running  bool
}
