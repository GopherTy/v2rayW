#!/bin/bash 
export GOOS=windows
export GOARCH=386
go build -o ./bin/v2rayW.exe main.go


export GOOS=linux
export GOARCH=amd64
go build -o ./bin/v2rayW main.go