package proxy

// Vmess   vmess 协议表
type Vmess struct {
	ID uint64 `xorm:"pk  autoincr 'id' BIGINT"`
	// 用户 id，用于区分是哪个用户的协议。
	UID uint64 `xorm:"notnull 'user_id' BIGINT"`

	Name     string `xorm:"'name' VARCHAR(255)"`
	Protocol string `xorm:"notnull  comment('协议名称')  default('vmess')  'protocol' VARCHAR(255)"`
	Address  string `xorm:"'address' VARCHAR(255)"`
	Port     int    `xorm:"'port' INT"`

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

// TableName v2ray的表名
func (Vmess) TableName() string {
	return "vmess"
}
