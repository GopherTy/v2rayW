package users

import (
	"time"
)

// UserLoginLog  用户登录系统日志表
type UserLoginLog struct {
	ID        uint64    `xorm:"pk autoincr 'id'"`
	UID       uint64    `xorm:"'user_id'"`
	ClientIP  string    `xorm:"'client_ip'"`
	LoginTime time.Time `xorm:"created 'login_time'"`
}

// TableName 表名
func (UserLoginLog) TableName() string {
	return "user_logs"
}
