package protocol

// Content 协议参数
type Content struct {
	UID int `json:"uId"` // 登录用户的 id

	Protocol string `json:"protocol"` // 协议

	// 协议相关的配置
	Name    string `json:"name"`    // 配置协议别名
	Address string `json:"address"` // 地址
	Port    int    `json:"port"`    // 端口

	// vmess 协议
	UserID   string `json:"userId"`   //  userId
	AlertID  int    `json:"alertId"`  //   alertId
	Level    int    `json:"level"`    //  等级
	Security string `json:"security"` // 加密方式

	Network     string `json:"network"`     // 伪装网络协议类型
	Domains     string `json:"domains"`     // 伪装域名
	Path        string `json:"path"`        // 路径
	NetSecurity string `json:"netSecurity"` // 伪装网络协议的加密方式
}
