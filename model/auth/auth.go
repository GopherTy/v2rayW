package auth

// Auth 权限
type Auth struct {
	ID      int64  `xorm:"pk autoincr not null unique 'id'"`
	Code    int    `xorm:"not null unique comment('auth code')"`
	Feature string `xorm:"varchar(100) comment('auth function')"`
}
