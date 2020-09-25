package v2ray

// Config v2ray config struct to json
type Config struct {
	Log       Log        `json:"log"`
	Inbounds  []Inbound  `json:"inbounds"`
	Outbounds []Outbound `json:"outbounds"`
}

// Log 日志配置，表示 V2Ray 如何输出日志。
type Log struct {
	// 访问日志的文件地址
	Access string `json:"access"`
	// 错误日志的文件地址
	Error string `json:"error"`
	// 错误日志的级别
	LogLevel string `json:"loglevel"`
}

// API 远程控制。
type API struct {
	// 出站代理标识
	Tag string `json:"tag"`
	// 开启的API列表
	Services []string `json:"services"`
}

// DNS 内置的 DNS 服务器，若此项不存在，则默认使用本机的 DNS 设置。
type DNS struct {
	// 静态 IP 列表
	Hosts map[string]string `json:"hosts"`
	// DNS 服务器列表。类型为[string | Server]
	Servers interface{} `json:"servers"`
	// 当前系统的 IP 地址
	ClientIP string `json:"clientIp"`
	// 标识
	Tag string `json:"tag"`
}

// Server DNS 服务器对象
type Server struct {
	// DNS 服务器地址
	Address string `json:"address"`
	// DNS 服务器端口
	Port int `json:"port"`
	// 一个域名列表，此列表包含的域名，将优先使用此服务器进行查询。
	Domains []string `json:"domains"`
	// 一个 IP 范围列表，格式和路由配置中相同。
	ExpectIPs []string `json:"expectIPs"`
}

// Routing 路由
type Routing struct {
	// 域名解析策略，根据不同的设置使用不同的策略。 取值 "AsIs" | "IPIfNonMatch" | "IPOnDemand"
	DomainStrategy string `json:"domainStrategy"`
	// 对应一个数组，数组中每个元素是一个规则。
	Rules []*Rule `json:"rules"`
	// 一个数组，数组中每个元素是一个负载均衡器的配置。
	Balancers []*Balancer `json:"balancers"`
}

// Rule 规则
type Rule struct {
	// 目前只支持"field"这一个选项。
	Type string `json:"type"`
	// 一个数组，数组每一项是一个域名的匹配。
	Domain []string `json:"domain"`
	// 一个数组，数组内每一个元素代表一个 IP 范围。
	IP []string `json:"ip"`
	// 目标端口范围。类型为 number | string
	Port interface{} `json:"port"`
	// 可选的值有 "tcp"、"udp" 或 "tcp,udp"，当连接方式是指定的方式时，此规则生效。
	Network string `json:"network"`
	// 一个数组，数组内每一个元素是一个 IP 或 CIDR。
	Source []string `json:"source"`
	// 一个数组，数组内每一个元素是一个邮箱地址。
	User []string `json:"user"`
	// 一个数组，数组内每一个元素是一个标识。
	InboundTag []string `json:"inboundTag"`
	// 一个数组，数组内每一个元素表示一种协议。取值为 [ "http" | "tls" | "bittorrent" ]
	Protocol []string `json:"protocol"`
	// 一段脚本，用于检测流量的属性值。
	Attr string `json:"attrs"`
	// 对应一个 额外出站连接配置 的标识。
	OutboundTag string `json:"outboundTag"`
	// 对应一个负载均衡器的标识。
	BalancerTag string `json:"balancerTag"`
}

// Balancer 负载均衡器
type Balancer struct {
	// 此负载均衡器的标识，用于匹配 RuleObject 中的 balancerTag。
	Tag string `json:"tag"`
	// 一个字符串数组，其中每一个字符串将用于和出站协议标识的前缀匹配。
	Selector []string `json:"selector"`
}

// Policy 本地策略，可以进行权限相关的配置
type Policy struct {
	// 一组键值对
	Level  map[string]*LevelPolicy `json:"levels"`
	System *SystemPolicy           `json:"system"`
}

// LevelPolicy 策略等级
type LevelPolicy struct {
	// 连接建立时的握手时间限制。单位为秒。默认值为 4。
	Handshake int `json:"handshake"`
	// 连接空闲的时间限制。单位为秒。默认值为 300。
	ConnIdle int `json:"connIdle"`
	// 当连接下行线路关闭后的时间限制。单位为秒。默认值为 2。
	UplinkOnly int `json:"uplinkOnly"`
	// 当连接上行线路关闭后的时间限制。单位为秒。默认值为 5。
	DownlinkOnly int `json:"downlinkOnly"`
	// 当值为 true 时，开启当前等级的所有用户的上行流量统计。
	StatsUserUplink bool `json:"statsUserUplink"`
	// 当值为 true 时，开启当前等级的所有用户的下行流量统计。
	StatsUserDownlink bool `json:"statsUserDownlink"`
	// 每个连接的内部缓存大小。单位为 kB。
	BufferSize int `json:"bufferSize"`
}

// SystemPolicy 系统策略
type SystemPolicy struct {
	// 当值为 true 时，开启所有入站代理的上行流量统计。
	StatsInboundUplink bool `json:"statsInboundUplink"`
	// 当值为 true 时，开启所有入站代理的下行流量统计。
	StatsInboundDownlink bool `json:"statsInboundDownlink"`
	// 当值为 true 时，开启所有出站代理的上行流量统计。
	StatsOutboundUplink bool `json:"statsOutboundUplink"`
	// 当值为 true 时，开启所有出站代理的下行流量统计。
	StatsOutboundDownlink bool `json:"statsOutboundDownlink"`
}

// Inbound 入站连接配置
type Inbound struct {
	// 端口。类型为 number | "env:variable" | string
	Port interface{} `json:"port"`
	// 监听地址，只允许 IP 地址，默认值为 "0.0.0.0"
	Listen string `json:"listen"`
	// 连接协议名称，可选的值见协议列表。
	Protocol string `json:"protocol"`
	// 具体的配置内容，视协议不同而不同。类型为 InboundConfigurationObject
	Settings interface{} `json:"settings"`
	// StreamSettings StreamSettings       `json:"streamSettings"`
	// Tag            string               `json:"tag"`
	Sniffing Sniffing `json:"sniffing"`
	// Allocate Allocate `json:"allocate"`
}

// InboundConfiguration 入口配置
type InboundConfiguration struct {
}

// Client 服务器认可的用户
type Client struct {
	ID      string `json:"id"`
	Level   int    `json:"level"`
	AlterID int    `json:"alterId"`
	Email   string `json:"email"`
}

// Default clients 的默认配置。仅在配合detour时有效。
type Default struct {
	Level   int `json:"level"`
	AlertID int `json:"alterId"`
}

// Detour 指示对应的出站协议使用另一个服务器。
type Detour struct {
	To string `json:"to"`
}

// StreamSettings  底层传输配置
type StreamSettings struct {
	NetWork    string    `json:"network"`
	Security   string    `json:"security"`
	WSSettings WebSocket `json:"wsSettings"`
	// TLSSettings  string    `json:"tlsSettings"`
	// TCPSettings  string    `json:"tcpSettings"`
	// HTTPSettings string    `json:"httpSettings"`
	// DSSettings   string    `json:"dsSettings"`
	// QUICSettings string    `json:"quicSettings"`
	// Sockopt      string    `json:"sockopt"`
}

// WebSocket ws协议
type WebSocket struct {
	Path string `json:"path"`
	// Header map[string]string `json:"headers"`
}

// Sniffing 尝试探测流量的类型
type Sniffing struct {
	Enabled      bool     `json:"enabled"`
	DestOverride []string `json:"destOverride"`
}

// Allocate  端口分配设置
type Allocate struct {
	Strategy    string `json:"strategy"`
	Refresh     int    `json:"refresh"`
	Concurrency int    `json:"concurrency"`
}

// Outbound 出站连接配置
type Outbound struct {
	// SendThrough    string
	// Tag            string `json:"tag"`
	// ProxySettings  ProxySetting
	Protocol       string                `json:"protocol"` // 默认 vmess 协议
	Settings       OutboundConfiguration `json:"settings"`
	StreamSettings StreamSettings        `json:"streamSettings"`
	Mux            Mux                   `json:"mux"`
}

// OutboundConfiguration 出口配置
type OutboundConfiguration struct {
	Vnext []interface{} `json:"vnext"`
}

// User 用户
type User struct {
	ID       string `json:"id"`
	AlterID  int    `json:"alterId"`
	Security string `json:"security"`
	Level    int    `json:"level"`
}

// Vmess vmess 协议
type Vmess struct {
	Address string `json:"address"`
	Port    int    `json:"port"`
	Users   []User `json:"users"`
}

// Freedom 出站协议，可以用来向任意网络发送（正常的） TCP 或 UDP 数据。
type Freedom struct {
	DomainStrategy string `json:"domainStrategy"`
	Redirect       string `json:"redirect"`
	UserLevel      int    `json:"userLevel"`
}

// Socks 协议
type Socks struct {
	Auth string `json:"auth"`
}

// ProxySetting 出站代理配置。
type ProxySetting struct {
}

// Mux 配置
type Mux struct {
	Enabled bool `json:"enabled"`
	// Concurrency int  `json:"concurrency"`
}

// Reverse 反向代理配置。
type Reverse struct {
}

// Transport 用于配置 V2Ray 如何与其它服务器建立和使用网络连接。
type Transport struct {
}

// Stats 当此项存在式，开启统计信息。
type Stats struct {
}
