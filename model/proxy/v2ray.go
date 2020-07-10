package proxy

// Vmess   vmess 协议表
type Vmess struct {
	ID  uint64 `xorm:"pk  autoincr 'id'"`
	UID uint64 `xorm:"not null 'user_id'"`

	Name    string `xorm:"'name'"`
	Address string `xorm:"'address'"`
	Port    int    `xorm:"port"`

	// settings vnext  users
	UserID   string `xorm:"userId"`
	AlertID  int    `xorm:"'alertId'"`
	Security string `xorm:"security"`
	Level    int    `xorm:"level"`

	// streamSettings
	Network     string `xorm:"network"`
	NetSecurity string `xorm:"net_security"`
	Path        string `xorm:"path"`

	Domains string
}

// TableName v2ray的表明
func (Vmess) TableName() string {
	return "vmess"
}
