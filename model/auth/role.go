package auth

// Role 角色控制
type Role struct {
	ID       int64  `xorm:"pk  autoincr 'id'"`
	UID      int64  `xorm:"not null 'user_id'"`
	AuthID   int64  `xorm:"not null unique 'auth_id'"`
	RoleName string `xorm:"varchar(18) not null comment('roles')"`
}
