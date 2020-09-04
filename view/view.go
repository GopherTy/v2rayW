package view

import (
	"net/http"

	"github.com/gopherty/v2rayW/logger"
	"github.com/rakyll/statik/fs"
)

// Register 视图资源注册器
type Register struct {
}

var assetView http.FileSystem

// Regist 实现 IRegister 接口，注册视图资源。
func (Register) Regist() {
	var err error
	assetView, err = fs.NewWithNamespace("view")
	if err != nil {
		logger.Logger().Fatal(err.Error())
	}

	logger.Logger().Info("Init view success")
}

// NewAssetView 视图资源
func NewAssetView() http.FileSystem {
	return assetView
}
