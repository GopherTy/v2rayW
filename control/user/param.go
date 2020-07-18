package user

// ParamLogin accept parameters pass from network.
type ParamLogin struct {
	User     string `form:"user" json:"user"  binding:"required"`
	Password string `form:"password" json:"password" binding:"required"`
}

// ParamJoin accept parameters pass from network.
type ParamJoin struct {
	UserName string `form:"username" json:"username"  binding:"required"`
	Password string `form:"password" json:"password" binding:"required"`
	Email    string `form:"email" json:"email" binding:"required"`
}

// ParamPasswd accept parameters pass from network.
type ParamPasswd struct {
	UID    int    `form:"uid" json:"uid" binding:"required"`
	Passwd string `form:"passwd" json:"passwd" binding:"required"`
}
