package v2ray

func init() {
	// 日志广播器
	go func() {
		_ = bc.Run()
	}()
}
