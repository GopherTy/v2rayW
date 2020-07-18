package serve

// 服务器内部的状态码
const (
	StatusServerError     = 0 // StatusServerError 服务器错误
	StatusOK              = 1 // StatusOK 请求接口成功
	StatusDBError         = 2 // StatusDBServerError 与数据库相关的错误
	StatusParamNotMatched = 3 // StatusParamNotMatched 客户端与服务器参数结构不匹配
	StatusV2rayError      = 4 // StatusV2rayError 与 v2ray 服务相关的错误。
	StatusUnauthorized    = 5 // StatusUnauthorized token过期
)
