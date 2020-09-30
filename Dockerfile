FROM golang:1.15
# 工作路径
WORKDIR /app
# 将当前路径下的内容拷贝到镜像的工作目录中
COPY bin/ .

CMD ["/app/v2rayW","-r=true"]