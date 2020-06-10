package token

import (
	"time"

	"github.com/dgrijalva/jwt-go"
)

// AppSecret .
var AppSecret = "v2ray"

// Token .
type Token struct {
}

// CreateToken .
func (Token) CreateToken(userid int64) (token string, err error) {
	claims := jwt.MapClaims{
		"authorized": true,
		"user_id":    userid,
		"exp":        time.Now().Add(15 * time.Minute).Unix(),
	}

	t := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	token, err = t.SignedString([]byte(AppSecret))
	if err != nil {
		return
	}

	return
}
