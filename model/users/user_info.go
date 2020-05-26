package users

import (
	"time"
)

// UserInfo 用户信息表
type UserInfo struct {
	ID       int64  `xorm:"pk autoincr 'id'"`
	UID      int64  `xorm:"'user_id'"`
	NickName string `xorm:"varchar(100) 'nickname'"`
	Age      int
	Phone    int
	Email    string
	Address  string
	Updated  time.Time `xorm:"updated 'last_update_time'"`
}

// TableName 表名
func (UserInfo) TableName() string {
	return "user_info"
}
