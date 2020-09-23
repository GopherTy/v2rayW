package utils

import (
	"crypto/md5"
	"encoding/hex"
	"log"
	"os"
	"os/exec"
	"path/filepath"
)

// IsFileOrDirExists 判断文件或文件夹是否存在
func IsFileOrDirExists(src string) bool {
	_, err := os.Stat(src)
	if err != nil {
		return os.IsExist(err)
	}

	return true
}

// IsFile 是否是文件
func IsFile(src string) bool {
	f, err := os.Stat(src)
	if err != nil {
		return false
	}

	return !f.IsDir()
}

// IsDir 是否是目录
func IsDir(src string) bool {
	f, err := os.Stat(src)
	if err != nil {
		return false
	}

	return f.IsDir()
}

// BasePath  获取项目的绝对路径
func BasePath() (basePath string) {
	path, err := exec.LookPath(os.Args[0])
	if err != nil {
		log.Fatalln(err)
	}
	path, err = filepath.Abs(path)
	if err != nil {
		log.Fatalln(err)
	}
	basePath = filepath.Dir(path)
	return
}

// CreatePath 根据指定路径创建，若存在就不做任何操作。
func CreatePath(path string) (err error) {
	if path == "" {
		return
	}

	absPath, err := filepath.Abs(path)
	if err != nil {
		return
	}

	absPath = filepath.Dir(absPath)
	if IsFileOrDirExists(absPath) {
		return
	}

	err = os.Mkdir(absPath, os.ModePerm)
	if err != nil {
		return
	}

	return
}

// MD5 md5加密
func MD5(src interface{}) (dst string, err error) {
	if v, ok := src.(string); ok {
		hash := md5.New()
		_, err = hash.Write([]byte(v))
		if err != nil {
			return
		}
		dst = hex.EncodeToString(hash.Sum(nil))
	}

	return
}
