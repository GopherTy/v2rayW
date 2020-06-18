package v2ray

// ParamStart accept parameters pass from network.
type ParamStart struct {
	Address string `json:"address"`
	Port    int    `json:"port"`

	UserID   string `json:"user_id"`
	AlertID  int    `json:"alert_id"`
	Level    int    `json:"level"`
	Security string `json:"security"`

	Method   string `json:"method"`
	Protocol string `json:"protocol"`
	Type     string `json:"type"`
	Domain   string `json:"domain"`
	Path     string `json:"path"`
}
