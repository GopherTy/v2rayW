package model

// BackToFrontEndData 返回给前端的结构
type BackToFrontEndData struct {
	Code        int                    `json:"code"`  // 自定义状态码
	Description string                 `json:"desc"`  // 描述信息
	Auth        Auth                   `json:"token"` // 认证信息
	Data        map[string]interface{} `json:"data"`  // 数据
	Error       string                 `json:"error"` // 错误信息
}

// Auth 包括访问 token 和 刷新 token
type Auth struct {
	AccessToken  string `json:"access_token"`  // 访问 token
	RefreshToken string `json:"refresh_token"` // 刷新 token
}
