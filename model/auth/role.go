package auth

// Role 角色控制
type Role struct {
	ID       uint64 `xorm:"pk  autoincr 'id'"`
	UID      uint64 `xorm:"not null 'user_id'"`
	AuthID   uint64 `xorm:"not null unique 'auth_id'"`
	RoleName string `xorm:"varchar(18) not null comment('roles')"`
}
