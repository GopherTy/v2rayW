package proxy

// Socks socks 协议表
type Socks struct {
	ID uint64 `xorm:"pk  autoincr 'id' BIGINT"`
	// 用户 id，用于区分是哪个用户的协议。
	UID uint64 `xorm:"notnull 'user_id' BIGINT"`

	// 别名
	Name     string `xorm:"'name' VARCHAR(255)"`
	Protocol string `xorm:"notnull  comment('协议名称')  default('socks')  'protocol' VARCHAR(255)"`
	Address  string `xorm:"'address' VARCHAR(255)"`
	Port     int    `xorm:"'port' INT"`

	// 用户配置
	User   string `xorm:"'user'"`
	Passwd string `xorm:"'passwd'"`

	// 完整配置文件
	ConfigFile string `xorm:"'cnf' notnull"`

	// 国内直连
	Direct bool `xorm:"direct default('false')"`
}

// TableName 表名
func (Socks) TableName() string {
	return "socks"
}
