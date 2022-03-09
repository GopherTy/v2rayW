package proxy

// Shadowsocks shadowsocks 协议表
type Shadowsocks struct {
	ID uint64 `xorm:"pk  autoincr 'id' BIGINT"`

	// 别名
	Name     string `xorm:"'name' VARCHAR(255)"`
	Protocol string `xorm:"notnull  comment('协议名称')  default('shadowsocks')  'protocol' VARCHAR(255)"`
	Address  string `xorm:"'address' VARCHAR(255)"`
	Port     int    `xorm:"'port' INT"`

	// 用户配置
	Passwd   string `xorm:"'passwd'"`
	Security string `xorm:"security"`

	// 完整配置文件
	ConfigFile string `xorm:"'cnf' notnull"`

	// 国内直连
	Direct bool `xorm:"direct default('false')"`
}

// TableName 表名
func (Shadowsocks) TableName() string {
	return "shadowsocks"
}
