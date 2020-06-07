package serve

// 服务器内部的状态码
const (
	StatusOK = 20 // StatusOK 请求接口成功

	StatusServerError   = 50 // StatusServerError 服务器内部错误
	StatusDBServerError = 51 // StatusDBServerError 与数据库相关的错误
)
