package v2ray

// BaseCnf v2ray config struct to json.
type BaseCnf struct {
	Log       map[string]interface{}   `json:"log"`
	API       map[string]interface{}   `json:"api"`
	DNS       map[string]interface{}   `json:"dns"`
	Routing   map[string]interface{}   `json:"routing"`
	Policy    map[string]interface{}   `json:"policy"`
	Inbounds  []map[string]interface{} `json:"inbounds"`
	Outbounds []map[string]interface{} `json:"outbounds"`
	Transport map[string]interface{}   `json:"transport"`
	Stats     map[string]interface{}   `json:"stats"`
	Reverse   map[string]interface{}   `json:"reverse"`
}

// NewConfig v2ray config struct to json
func NewConfig() *BaseCnf {
	return &BaseCnf{
		Log:       make(map[string]interface{}),
		DNS:       make(map[string]interface{}),
		Routing:   make(map[string]interface{}),
		Policy:    make(map[string]interface{}),
		Inbounds:  make([]map[string]interface{}, 0),
		Outbounds: make([]map[string]interface{}, 0),
		Transport: make(map[string]interface{}),
		Stats:     make(map[string]interface{}),
		Reverse:   make(map[string]interface{}),
	}
}

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
	Balancers []Balancer `json:"balancers"`
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
	Level  map[string]LevelPolicy `json:"levels"`
	System SystemPolicy           `json:"system"`
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
	Settings InboundConfiguration `json:"settings"`
	// 底层传输配置
	// StreamSettings StreamSettings `json:"streamSettings"`
	// 此入站连接的标识，用于在其它的配置中定位此连接。
	Tag string `json:"tag"`
	// 尝试探测流量的类型
	Sniffing Sniffing `json:"sniffing"`
	// 端口分配设置
	// Allocate Allocate `json:"allocate"`
}

// InboundConfiguration 底层传输配置
type InboundConfiguration interface {
}

// StreamSettings  底层传输配置
type StreamSettings struct {
	// 数据流所使用的网络类型，默认值为 "tcp"
	NetWork string `json:"network"`
	// 是否启用传输层加密。取值为 "none" | "tls",默认值为 "none"。
	Security string `json:"security"`
	// TLS 配置
	// TLSSettings TLS `json:"tlsSettings"`
	// 当前连接的 TCP 配置，仅当此连接使用 TCP 时有效。
	// TCPSettings TCP `json:"tcpSettings"`
	// 当前连接的 mKCP 配置，仅当此连接使用 mKCP 时有效
	// KCPSettings KCP `json:"kcpSettings"`
	// 当前连接的 WebSocket 配置，仅当此连接使用 WebSocket 时有效。
	WSSettings WebSocket `json:"wsSettings"`
	// 当前连接的 HTTP2 配置
	// HTTPSettings HTTP2 `json:"httpSettings"`
	// 当前连接的 Domain socket 配置
	// DSSettings DomainSocket `json:"dsSettings"`
	// 当前连接的 quic 配置
	// QUICSettings QUIC `json:"quicSettings"`
	// 当前连接的透明代理配置
	// Sockopt Sockopt `json:"sockopt"`
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

// TLS TLS配置。
type TLS struct {
	// 指定服务器端证书的域名，在连接由 IP 建立时有用。
	ServerName string `json:"serverName"`
	// 一个字符串数组，指定了 TLS 握手时指定的 ALPN 数值。
	ALPN []string `json:"alpn"`
	// 是否允许不安全连接（仅用于客户端）。默认值为 false
	AllowInsecure bool `json:"allowInsecure"`
	// （V2Ray 4.18+）是否禁用操作系统自带的 CA 证书。默认值为 false。
	DisableSystemRoot bool `json:"disableSystemRoot"`
	// 证书列表，其中每一项表示一个证书（建议 fullchain）。
	Certificates []Certificates `json:"certificates"`
}

// Certificates 证书列表。
type Certificates struct {
	// 证书用途，默认值为 "encipherment"。取值为 "encipherment" | "verify" | "issue"
	Usage string `json:"usage"`
	// 证书文件路径，如使用 OpenSSL 生成，后缀名为 .crt。
	CertificateFile string `json:"certificateFile"`
	// 一个字符串数组，表示证书内容，格式如样例所示。
	Certificate []string `json:"certificate"`
	// 密钥文件路径
	KeyFile string `json:"keyFile"`
	// 一个字符串数组，表示密钥内容
	Key []string `json:"key"`
}

// Sockopt 透明代理配置
type Sockopt struct {
	// 一个整数。
	Mark int `json:"mark"`
	// 是否启用 tcp fast open
	TCPFastOpen bool `json:"tcpFastOpen"`
	// 是否开启透明代理仅适用于Linux。取值为 "redirect" | "tproxy" | "off"
	Tproxy string `json:"Tproxy"`
}

// Outbound 出站连接配置
type Outbound struct {
	SendThrough    string                `json:"sendThrough"`
	Protocol       string                `json:"protocol"`
	Settings       OutboundConfiguration `json:"settings"`
	Tag            string                `json:"tag"`
	StreamSettings StreamSettings        `json:"streamSettings"`
	// ProxySettings  ProxySetting          `json:"proxySettings"`
	Mux Mux `json:"mux"`
}

// OutboundConfiguration 出口配置
type OutboundConfiguration interface {
}

// ProxySetting 出站代理配置。
type ProxySetting struct {
	Tag string `json:"tag"`
}

// Mux 配置
type Mux struct {
	Enabled     bool `json:"enabled"`
	Concurrency int  `json:"concurrency"`
}

// Transport 用于配置 V2Ray 如何与其它服务器建立和使用网络连接。
type Transport struct {
	TCPSettings  TCP          `json:"tcpSettings"`
	KCPSettings  KCP          `json:"kcpSettings"`
	WSSettings   WebSocket    `json:"wsSettings"`
	HTTPSettings HTTP2        `json:"httpSettings"`
	DSSettings   DomainSocket `json:"dsSettings"`
	QUICSettings QUIC         `json:"quicSettings"`
}

// Stats 当此项存在式，开启统计信息。
type Stats struct {
}

// Reverse 反向代理配置。
type Reverse struct {
	Bridges Bridge `json:"bridges"`
	Protals Portal `json:"protols"`
}

// Bridge .
type Bridge struct {
	Tag    string `json:"tag"`
	Domain string `json:"domain"`
}

// Portal .
type Portal struct {
	Tag    string `json:"tag"`
	Domain string `json:"domain"`
}

/*
	协议列表
*/

// BlackholeOutbound blackhole 出站协议
type BlackholeOutbound struct {
	Response Response `json:"response"`
}

// Response blackhole response 对象
type Response struct {
	// 取值为 "http" | "none"
	Type string `json:"type"`
}

// DNSOutbound dns 出站协议
type DNSOutbound struct {
	Network string `json:"network"`
	Address string `json:"address"`
	Port    int    `json:"port"`
}

// DokodemoDoorInbound 任意门入站协议
type DokodemoDoorInbound struct {
	Address        string `json:"address"`
	Port           int    `json:"port"`
	Network        string `json:"network"`
	Timeout        int    `json:"timeout"`
	FollowRedirect bool   `json:"followRedirect"`
	UserLevel      int    `json:"userLevel"`
}

// FreedomOutbound 出站协议。
type FreedomOutbound struct {
	DomainStrategy string `json:"domainStrategy"`
	Redirect       string `json:"redirect"`
	UserLevel      int    `json:"userLevel"`
}

// HTTPInbound http 入站协议
type HTTPInbound struct {
	Timeout          int       `json:"timeout"`
	Accounts         []Account `json:"account"`
	AllowTransparent bool      `json:"allowTransparent"`
	UserLevel        int       `json:"userLevel"`
}

// HTTPOutbound http 出站协议
type HTTPOutbound struct {
	Servers []HTTPServer `json:"servers"`
	Address string       `json:"address"`
	Port    int          `json:"port"`
	User    []Account    `json:"user"`
}

// HTTPServer http 服务器
type HTTPServer struct {
	Address string    `json:"address"`
	Port    int       `json:"port"`
	Users   []Account `json:"users"`
}

// Account 用户名密码
type Account struct {
	User string `json:"user"`
	Pass string `json:"pass"`
}

// MTProtoInbound MTProto 入站协议
type MTProtoInbound struct {
	Users []MTProtoUser `json:"users"`
}

// MTProtoUser MTProto user 对象
type MTProtoUser struct {
	Email  string `json:"email"`
	Level  int    `json:"level"`
	Secret string `json:"secret"`
}

// MTProtoOutbound MTProto 入站协议
type MTProtoOutbound struct {
	Tag      string      `json:"tag"`
	Port     int         `json:"port"`
	Protocol string      `json:"protocol"`
	Settings interface{} `json:"settings"`
}

// ShadowsocksInbound shadowsocks 入站协议
type ShadowsocksInbound struct {
	Shadowsocks
}

// ShadowsocksOutbound shadowsocks 入站协议
type ShadowsocksOutbound struct {
	Servers []Shadowsocks `json:"servers"`
}

// Shadowsocks .
type Shadowsocks struct {
	Email    string `json:"email"`
	Method   string `json:"method"`
	Password string `json:"password"`
	Level    int    `json:"level"`
	Ota      bool   `json:"ota"`
	Network  string `json:"network"`
}

// SocksInbound socks 入站协议
type SocksInbound struct {
	Auth string `json:"auth"`
	// Accounts  []Account `json:"accounts"`
	UDP bool   `json:"udp"`
	IP  string `json:"ip"`
	// UserLevel int       `json:"userLevel"`
}

// SocksOutbound socks 出站协议
type SocksOutbound struct {
	Servers []SocksServer `json:"servers"`
}

// SocksServer .
type SocksServer struct {
	Address string      `json:"address"`
	Port    int         `json:"port"`
	Users   []SocksUser `json:"users"`
}

// SocksUser .
type SocksUser struct {
	User  string `json:"user"`
	Pass  string `json:"pass"`
	Level int    `json:"level"`
}

// VmessInbound vmess 入站协议
type VmessInbound struct {
	Clients                   []Client `json:"clients"`
	Default                   Default  `json:"default"`
	Detour                    Detour   `json:"detour"`
	DisableInsecureEncryption bool     `json:"disableInsecureEncryption"`
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

// VmessOutbound vmess 出站协议
type VmessOutbound struct {
	Vnext []VmessServer `json:"vnext"`
}

// VmessServer vmess 协议
type VmessServer struct {
	Address string      `json:"address"`
	Port    int         `json:"port"`
	Users   []VmessUser `json:"users"`
}

// VmessUser  .
type VmessUser struct {
	ID       string `json:"id"`
	AlterID  int    `json:"alterId"`
	Security string `json:"security"`
	Level    int    `json:"level"`
}

// VlessInbound vless 入口协议
type VlessInbound struct {
	Clients    []VlessClient `json:"clients"`
	Decryption string        `json:"decryption"`
	Fallbacks  []Fallback    `json:"fallbacks"`
}

// VlessClient .
type VlessClient struct {
	ID    string `json:"id"`
	Flow  string `json:"flow"`
	Level int    `json:"level"`
	Email string `json:"email"`
}

// Fallback .
type Fallback struct {
	Alpn string `json:"alpn"`
	Path string `json:"path"`
	Dest int    `json:"dest"`
	Xver int    `json:"xver"`
}

// VlessOutbound vless 出口协议
type VlessOutbound struct {
	Vnext []VlessServer `json:"vnext"`
}

// VlessServer .
type VlessServer struct {
	Address string      `json:"address"`
	Port    int         `json:"port"`
	Users   []VlessUser `json:"users"`
}

// VlessUser .
type VlessUser struct {
	ID         string `json:"id"`
	Flow       string `json:"flow"`
	Encryption string `json:"encryption"`
	Level      int    `json:"level"`
}

/*
	传输方式
*/

// TCP TCP配置。
type TCP struct {
	// v4.27.1+，仅用于 inbound，是否接收 PROXY protocol，默认值为 false。
	AcceptProxyProtocol bool `json:"acceptProxyProtocol"`
	// 数据包头部伪装设置，默认值为 NoneHeaderObject。
	// 类型为 NoneHeaderObject | HttpHeaderobject
	Header interface{} `json:"header"`
}

// NoneHeader 不进行伪装
type NoneHeader struct {
	Type string `json:"type"`
}

// HTTPHeader HTTP 伪装配置
type HTTPHeader struct {
	// 指定进行 HTTP 伪装
	Type string `json:"type"`
	// HTTP 请求
	Request HTTPRequest `json:"request"`
	// HTTP 响应
	Response HTTPResponse `json:"response"`
}

// HTTPRequest http 请求
type HTTPRequest struct {
	// HTTP 版本，默认值为 "1.1"。
	Version string `json:"version"`
	// HTTP 方法，默认值为 "GET"。
	Method string `json:"method"`
	// 路径，一个字符串数组。默认值为 ["/"]。
	Path []string `json:"path"`
	// HTTP 头，一个键值对，每个键表示一个 HTTP 头的名称，对应的值是一个数组。
	Headers map[string][]string `json:"headers"`
}

// HTTPResponse http 响应
type HTTPResponse struct {
	// HTTP 版本，默认值为 "1.1"。
	Version string `json:"version"`
	//HTTP 状态，默认值为 "200"。
	Status string `json:"status"`
	// HTTP 状态说明，默认值为 "OK"。
	Reason string `json:"reason"`
	// HTTP 头，一个键值对，每个键表示一个 HTTP 头的名称，对应的值是一个数组。
	Headers map[string][]string `json:"headers"`
}

// KCP 当前连接的 mKCP 配置，仅当此连接使用 mKCP 时有效
type KCP struct {
	// 最大传输单元
	Mtu int `json:"mtu"`
	// 传输时间间隔
	Tti int `json:"tti"`
	// 上行链路容量
	UplinkCapacity int `json:"UplinkCapacity"`
	// 下行链路容量
	DownlinkCapacity int `json:"downlinkCapacity"`
	// 是否启用拥塞控制
	Congestion bool `json:"congestion"`
	// 单个连接的读取缓冲区大小
	ReadBufferSize int `json:"readBufferSize"`
	// 单个连接的写入缓冲区大小
	WriteBufferSize int `json:"writeBufferSize"`
	// 数据包头部伪装设置
	Header Header `json:"header"`
	// v4.24.2+，可选的混淆密码
	Seed string `json:"seed"`
}

// Header 数据包头部伪装设置
type Header struct {
	Type string `json:"type"`
}

// WebSocket ws协议
type WebSocket struct {
	// v4.27.1+，仅用于 inbound，是否接收 PROXY protsocol，默认值为 false.
	// AcceptProxyProtocol bool `json:"acceptProxyProtocol"`
	// WebSocket 所使用的 HTTP 协议路径，默认值为 "/"。
	Path string `json:"path"`
	// 自定义 HTTP 头，一个键值对，每个键表示一个 HTTP 头的名称，对应的值是字符串。默认值为空。
	// Header map[string]string `json:"headers"`
}

// HTTP2 http2 配置
type HTTP2 struct {
	Host []string `json:"host"`
	// http 路径，由 / 开头。
	Path string `json:"path"`
}

// DomainSocket 使用 unix domain socket 来传输数据。
type DomainSocket struct {
	Path     string `json:"path"`
	Abstract bool   `json:"abstract"`
}

// QUIC udp 多路并发传输协议配置
type QUIC struct {
	// 加密方式。取值为 "none" | "aes-128-gcm" | "chacha20-poly1305"
	Security string `json:"security"`
	// 加密时用的密钥
	Key string `json:"key"`
	// 数据包头部伪装设置
	Header Header `json:"header"`
}
