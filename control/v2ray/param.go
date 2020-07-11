package v2ray

// ParamStart accept parameters pass from network.
type ParamStart struct {
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
