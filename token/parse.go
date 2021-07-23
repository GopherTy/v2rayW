package token

import (
	"errors"
	"fmt"
	"net/http"
	"strconv"
	"strings"

	"github.com/dgrijalva/jwt-go/v4"
)

// parse 包解析前端传过来的 token 字符串用于认证。

// ExtractToken 从 requset 对象中解析出 token 字符串
func ExtractToken(r *http.Request) string {
	bearerToken := r.Header.Get("Authorization")

	strs := strings.Split(bearerToken, " ")
	if len(strs) == 2 {
		return strs[1]
	}
	return ""
}

// ValidWSToken 验证 websocket 中的 token合法性。
func ValidWSToken(r *http.Request) (err error) {
	wsToken := r.Header.Get("Sec-WebSocket-Protocol")
	token, err := jwt.Parse(wsToken, keyFunc)
	if err != nil {
		return
	}

	if _, ok := token.Claims.(jwt.Claims); !ok && !token.Valid {
		return errors.New("token invalid")
	}
	return
}

// VerifyToken 验证 token 字符串的合法性
func VerifyToken(r *http.Request) (token *jwt.Token, err error) {
	tokenStr := ExtractToken(r)

	token, err = jwt.Parse(tokenStr, keyFunc)
	if err != nil {
		return
	}
	return
}

// ValidToken 验证 token 是否有效
func ValidToken(r *http.Request) (err error) {
	token, err := VerifyToken(r)
	if err != nil {
		return
	}

	if _, ok := token.Claims.(jwt.Claims); !ok && !token.Valid {
		return errors.New("token invalid")
	}
	return
}

// 验证加密算法，并返回字符串
func keyFunc(token *jwt.Token) (res interface{}, err error) {
	if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
		err = fmt.Errorf("sign alg method not match: %v", token.Header["alg"])
		return
	}

	res = []byte(AppSecret)
	return
}

// ExtractRefreshTokenMetadata refresh
func ExtractRefreshTokenMetadata(refreshToken string) (userID uint64, err error) {
	refresh, err := jwt.Parse(refreshToken, keyRefreshFunc)
	if err != nil {
		return
	}
	claims, ok := refresh.Claims.(jwt.MapClaims)
	if !ok && !refresh.Valid {
		err = errors.New("token 不符合规则")
		return
	}
	if ok && refresh.Valid {
		userID, err = strconv.ParseUint(fmt.Sprintf("%.f", claims["user_id"]), 10, 64)
		if err != nil {
			return
		}
	}
	return
}

// 验证加密算法，并返回字符串
func keyRefreshFunc(token *jwt.Token) (res interface{}, err error) {
	if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
		err = fmt.Errorf("sign alg method not match: %v", token.Header["alg"])
		return
	}

	res = []byte(AppSecretRefresh)
	return
}
