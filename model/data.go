package model

// BackToFrontEndData 返回给前端的结构
type BackToFrontEndData struct {
	Code        int                    // 自定义状态码
	Description string                 // 描述信息
	Auth        Auth                   // 认证信息
	Data        map[string]interface{} // 数据
	Error       string                 //  错误信息
}

// Auth 包括访问 token 和 刷新 token
type Auth struct {
	AccessToken  string // 访问 token
	RefreshToken string // 刷新 token
}
