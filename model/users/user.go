package users

import "time"

// User  系统注册用户登录表
type User struct {
	ID       int64     `xorm:"pk autoincr 'id'"`
	UserName string    `xorm:"varchar(16) 'user_name'"`
	Passwd   string    `xorm:"varchar(100) 'passwd'"`
	Email    string    `xorm:"'email'"`
	Created  time.Time `xorm:"created"`
	Updated  time.Time `xorm:"updated"`
}

// TableName 表名
func (User) TableName() string {
	return "user"
}
