package sign

// ParamLogin accept parameters pass from network.
type ParamLogin struct {
	User     string `form:"user" json:"user"  binding:"required"`
	Password string `form:"password" json:"password" binding:"required"`
}
