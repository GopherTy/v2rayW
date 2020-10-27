package proxy

// Subscribe 用户协议表订阅
type Subscribe struct {
	ID uint64 `xorm:"pk  autoincr 'id' BIGINT"`
	// 用户 id，用于区分是哪个用户的订阅地址。
	UID uint64 `xorm:"notnull 'user_id' BIGINT"`

	// 订阅地址别名
	Name string `xorm:"name"`
	URL  string `xorm:"'url'"` // 订阅地址
}

// TableName 表名
func (Subscribe) TableName() string {
	return "subscribe"
}
