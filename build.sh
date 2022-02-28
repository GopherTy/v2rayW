#!/bin/bash 

# root directory $BASH_SOURCE 变量在脚本文件中可以显示脚本的路径，但是在 shell 命令行中什么都不会输出。
DirRoot=`cd $(dirname $BASH_SOURCE) && pwd`
Target=v2rayW
TestItems=()

function manual(){
    echo "usage  example:  
            step1:  ./build.sh s  view  
                build view to go file(先将静态资源打包到go中) 
            step2: ./build.sh l 
                build for linux(编译到linux平台)"
    echo "l/linux           build for linux(编译到linux)"
    echo "w/windows         build for windows(编译到windows)"
    echo "d/darwin          build for macos(编译到macos)"
    echo "s/source          build view source(编译前端视图文件)"
    echo "t/test            feature test(功能测试)"
}

# 将前端文件打包仅 go 代码中
function buildView(){
    statik -src="$DirRoot/assets/view" -ns $1 -f 
}

# macOS 跨平台编译安装对应平台依赖后进行打包
# linux brew install FiloSottile/musl-cross/musl-cross 注：mac m1 不支持
# windows brew install mingw-w64
case $1 in 
    s|source)
        buildView $2 
    ;;
    l|linux)
        export GOOS=linux CGO_ENABLED=1 GOARCH=amd64 CC=x86_64-linux-musl-gcc CXX=x86_64-linux-musl-g++
        cd $DirRoot && go build -ldflags "-s -w" -o "$DirRoot/bin/$Target"
    ;; 
    w|windows)
	      export GOOS=windows CGO_ENABLED=1 GOARCH=amd64 CC=x86_64-w64-mingw32-gcc CXX=x86_64-w64-mingw32-g++
        cd $DirRoot && go build -ldflags "-s -w" -o "$DirRoot/bin/$Target".exe
    ;;
    d|darwin)
        export GOOS=darwin CGO_ENABLED=1 GOARCH=amd64
    	cd $DirRoot && go build -ldflags "-s -w"  -o "$DirRoot/bin/$Target"
    ;;
    t|test)
        for i in ${!TestItems[@]}
        do 
            cd "$DirRoot/${TestItems[i]}" && go test
        done
    ;;
    *)
        manual
    ;;
esac
