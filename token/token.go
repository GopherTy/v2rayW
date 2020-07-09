package token

import (
	"strconv"
	"time"

	"github.com/gopherty/v2ray-web/db"

	"github.com/twinj/uuid"

	"github.com/dgrijalva/jwt-go"
)

// AppSecret .
var (
	AppSecret        = "v2ray"
	AppSecretRefresh = "v2rayRefresh"
)

// Token 基于 jwt token 的认证结构
type Token struct {
	AccessToken  string //访问令牌
	AccessUUID   string // 存储在 redis 中访问令牌的唯一 id
	RefreshToken string // 刷新令牌
	RefreshUUID  string // 存储在 redis 中刷新令牌的唯一 id
	AtExpires    int64  // 访问令牌过期时间，一般为 15 分钟。
	RtExpires    int64  // 当访问令牌过期后，可以使用刷新令牌来重拾。刷新令牌过期时间，一般为 7 天。
}

// NewToken 根据登录成功后的用户 id，创建 token。
func NewToken(userID uint64) (token *Token, err error) {
	token = &Token{}

	// 访问令牌过期时间和存在 redis 中的唯一 id
	token.AtExpires = time.Now().Add(time.Minute * 15).Unix()
	token.AccessUUID = uuid.NewV4().String()

	// 刷新令牌
	token.RtExpires = time.Now().Add(time.Hour * 24 * 7).Unix()
	token.RefreshUUID = uuid.NewV4().String()

	// jwt 中的 payload,自定义内容。
	atClaims := jwt.MapClaims{
		"authorized":  true,             // 是否认证
		"access_uuid": token.AccessUUID, // 访问令牌 id，用于从 redis 中获取访问令牌
		"user_id":     userID,           // 用户 id
		"exp":         token.AtExpires,  // 过期时间
	}
	// 创建访问令牌
	accessToken := jwt.NewWithClaims(jwt.SigningMethodHS256, atClaims)
	token.AccessToken, err = accessToken.SignedString([]byte(AppSecret)) // 此处因该将写入到配置文件中，以保证安全。
	if err != nil {
		return
	}

	// jwt 中的 payload,自定义内容。
	rtClaims := jwt.MapClaims{
		"refresh_uuid": token.RefreshUUID, // 访问令牌 id，用于从 redis 中获取访问令牌
		"user_id":      userID,            // 用户 id
		"exp":          token.RtExpires,   // 过期时间
	}

	// 创建刷新令牌
	refreshToken := jwt.NewWithClaims(jwt.SigningMethodHS256, rtClaims)
	token.RefreshToken, err = refreshToken.SignedString([]byte(AppSecretRefresh))
	if err != nil {
		return
	}

	return
}

// CreateAuth 根据用户 id 和自定义 token 结构 ，存入到 redis 中。
func CreateAuth(userID uint64, token *Token) (err error) {
	// 在 redis 中设置访问令牌和刷新令牌的过期时间。
	atExp := time.Unix(token.AtExpires, 0)
	rtExp := time.Unix(token.RtExpires, 0)

	err = db.Client().Set(token.AccessUUID, strconv.Itoa(int(userID)), atExp.Sub(time.Now())).Err()
	if err != nil {
		return
	}
	err = db.Client().Set(token.RefreshUUID, strconv.Itoa(int(userID)), rtExp.Sub(time.Now())).Err()
	if err != nil {
		return
	}

	return
}
