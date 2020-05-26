package utils

import (
	"log"
	"os"
	"os/exec"
	"path/filepath"
)

// IsFileOrDirExists 判断文件或文件夹是否存在
func IsFileOrDirExists(src string) bool {
	_, err := os.Stat(src)
	if err != nil {
		if os.IsExist(err) {
			return true
		}
		return false
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
	// 获取项目绝对路径，读取配置文件。
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
