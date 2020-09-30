package proxy

// Vless   vless 协议表
type Vless struct {
	ID uint64 `xorm:"pk  autoincr 'id' BIGINT"`
	// 用户 id，用于区分是哪个用户的协议。
	UID uint64 `xorm:"notnull 'user_id' BIGINT"`

	// 别名
	Name     string `xorm:"'name' VARCHAR(255)"`
	Protocol string `xorm:"notnull  comment('协议名称')  default('vless')  'protocol' VARCHAR(255)"`
	Address  string `xorm:"'address' VARCHAR(255)"`
	Port     int    `xorm:"'port' INT"`

	// settings vnext  users
	UserID     string `xorm:"userId"`
	Flow       string `xorm:"'flow'"`
	Encryption string `xorm:"encryption default('none')"`
	Level      int    `xorm:"level"`
	Email      string `xorm:"email"`
	Decryption string `xorm:"decryption default('none')"`

	// fallback
	Alpn         string `xorm:"alpn"`
	FallbackPath string `xorm:"fallback_path"`
	Dest         string `xorm:"dest default('none')"`
	Xver         int    `xorm:"xver"`

	// streamSettings
	Network     string `xorm:"network"`
	NetSecurity string `xorm:"net_security"`
	Path        string `xorm:"path"`
	Domains     string `xorm:"domains"`

	// 国内直连
	Direct bool `xorm:"direct default('false')"`
}

// TableName v2ray的表名
func (Vless) TableName() string {
	return "vless"
}
