#!/bin/bash 
export GOOS=windows
export GOARCH=386
go build -o ./bin/v2ray-web.exe main.go


export GOOS=linux
export GOARCH=amd64
go build -o ./bin/v2ray-web main.go