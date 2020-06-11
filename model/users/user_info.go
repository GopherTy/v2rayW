package users

import (
	"time"
)

// UserInfo 用户信息表
type UserInfo struct {
	ID       uint64    `xorm:"pk autoincr 'id'"`
	UID      uint64    `xorm:"'user_id'"`
	NickName string    `xorm:"varchar(100) 'nickname'"`
	Age      int       `xorm:"'age'"`
	Phone    int       `xorm:"'phone'"`
	Address  string    `xorm:"'address'"`
	Updated  time.Time `xorm:"updated 'last_update_time'"`
}

// TableName 表名
func (UserInfo) TableName() string {
	return "user_info"
}
