package token

import (
	"time"

	"github.com/dgrijalva/jwt-go"
)

// AppSecret .
var (
	AppSecret        = "v2ray"
	AppSecretRefresh = "v2rayRefresh"
)

// Token 基于 jwt token 的认证结构
type Token struct {
	AccessToken  string // 访问令牌
	RefreshToken string // 刷新令牌
	AtExpires    int64  // 访问令牌过期时间，一般为 15 分钟。
	RtExpires    int64  // 当访问令牌过期后，可以使用刷新令牌来重拾。刷新令牌过期时间，一般为 7 天。
}

// NewToken 根据登录成功后的用户 id，创建 token。
func NewToken(userID uint64) (token *Token, err error) {
	token = &Token{}

	// 访问令牌过期时间和存在 redis 中的唯一 id
	token.AtExpires = time.Now().Add(time.Minute * 15).Unix()

	// 刷新令牌
	token.RtExpires = time.Now().Add(time.Hour * 24 * 7).Unix()

	// jwt 中的 payload,自定义内容。
	atClaims := jwt.MapClaims{
		"authorized": true,            // 是否认证
		"user_id":    userID,          // 用户 id
		"exp":        token.AtExpires, // 过期时间
	}
	// 创建访问令牌
	accessToken := jwt.NewWithClaims(jwt.SigningMethodHS256, atClaims)
	token.AccessToken, err = accessToken.SignedString([]byte(AppSecret)) // 此处因该将写入到配置文件中，以保证安全。
	if err != nil {
		return
	}

	// jwt 中的 payload,自定义内容。
	rtClaims := jwt.MapClaims{
		"user_id": userID,          // 用户 id
		"exp":     token.RtExpires, // 过期时间
	}

	// 创建刷新令牌
	refreshToken := jwt.NewWithClaims(jwt.SigningMethodHS256, rtClaims)
	token.RefreshToken, err = refreshToken.SignedString([]byte(AppSecretRefresh))
	if err != nil {
		return
	}

	return
}
