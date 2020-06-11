package token

import (
	"errors"
	"fmt"
	"net/http"
	"strconv"
	"strings"

	"github.com/gopherty/v2ray-web/db"

	"github.com/dgrijalva/jwt-go"
)

// parse 包解析前端传过来的 token 字符串用于认证。

// AccessDetails  访问令牌的键值对
type AccessDetails struct {
	AccessUUID string
	UserID     uint64
}

// ExtractToken 从 requset 对象中解析出 token 字符串
func ExtractToken(r *http.Request) string {
	bearerToken := r.Header.Get("Authorization")

	strs := strings.Split(bearerToken, " ")
	if len(strs) == 2 {
		return strs[1]
	}
	return ""
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

// ExtractTokenMetadata 提取 token 元数据用于验证是否正确
func ExtractTokenMetadata(r *http.Request) (access *AccessDetails, err error) {
	token, err := VerifyToken(r)
	if err != nil {
		return
	}
	claims, ok := token.Claims.(jwt.MapClaims)
	if ok && token.Valid {
		accessUUID, ok := claims["access_uuid"].(string)
		if !ok {
			return nil, err
		}
		userID, err := strconv.ParseUint(fmt.Sprintf("%.f", claims["user_id"]), 10, 64)
		if err != nil {
			return nil, err
		}

		access = &AccessDetails{
			AccessUUID: accessUUID,
			UserID:     userID,
		}
		return access, err
	}
	return
}

// FetchAuth 获取认证
func FetchAuth(auth *AccessDetails) (userID uint64, err error) {
	userid, err := db.Client().Get(auth.AccessUUID).Result()
	if err != nil {
		return
	}

	userID, err = strconv.ParseUint(userid, 10, 64)
	if err != nil {
		return
	}
	return
}

// DeleteAuth 删除认证
func DeleteAuth(givenUUID string) (int64, error) {
	deleted, err := db.Client().Del(givenUUID).Result()
	if err != nil {
		return 0, err
	}
	return deleted, nil
}
