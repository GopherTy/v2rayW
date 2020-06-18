package v2ray

// Config v2ray config struct to json
type Config struct {
	Log       Log        `json:"log"`
	Inbounds  []Inbound  `json:"inbounds"`
	Outbounds []Outbound `json:"outbounds"`
}

// Log 日志
type Log struct {
	Access   string `json:"access"`   // 访问日志的文件地址
	Error    string `json:"error"`    // 错误日志的文件地址
	LogLevel string `json:"loglevel"` // 错误日志的级别
}

// API api 接口
type API struct {
	Tag      string `json:"tag"`      //出站代理标识
	Services string `json:"services"` //开启的API列表
}

// DNS dns 服务器
type DNS struct {
	Hosts    string `json:"hosts"`    // 静态 IP 列表
	Servers  Server `json:"servers"`  // dns 服务器列表
	ClientIP string `json:"clientIp"` // 当前系统的 IP 地址
	Tag      string `json:"tag"`      //标识
}

// Server dns server 对象
type Server struct {
	Address   string   `json:"address"`   //dns 服务器地址
	Port      int      `json:"port"`      //dns 服务器端口
	Domains   []string `json:"domains"`   // 一个域名列表，此列表包含的域名，将优先使用此服务器进行查询。
	ExpectIPs []string `json:"expectIPs"` //一个 IP 范围列表，格式和路由配置中相同。
}

// Routing 路由
type Routing struct {
	DomainStrategy string     `json:"domainStrategy"`
	Rules          []Rule     `json:"rules"`
	Balancers      []Balancer `json:"balancers"`
}

// Rule 规则
type Rule struct {
	Type        string      `json:"type"`
	Domain      []string    `json:"domain"`
	IP          []string    `json:"ip"`
	Port        interface{} `json:"port"`
	Network     string      `json:"network"`
	Source      []string    `json:"source"`
	User        []string    `json:"user"`
	InboundTag  []string    `json:"inboundTag"`
	Protocol    []string    `json:"protocol"`
	Attr        string      `json:"attrs"`
	OutboundTag string      `json:"outboundTag"`
	BalancerTag string      `json:"balancerTag"`
}

// Balancer 负载均衡器
type Balancer struct {
	Tag      string   `json:"tag"`
	Selector []string `json:"selector"`
}

// Policy 本地策略，可以进行权限相关的配置
type Policy struct {
	Level  map[string]LevelPolicy `json:"levels"`
	System SystemPolicy           `json:"system"`
}

// LevelPolicy 策略等级
type LevelPolicy struct {
	Handshake         int  `json:"handshake"`
	ConnIdle          int  `json:"connIdle"`
	UplinkOnly        int  `json:"uplinkOnly"`
	DownlinkOnly      int  `json:"downlinkOnly"`
	StatsUserUplink   bool `json:"statsUserUplink"`
	StatsUserDownlink bool `json:"statsUserDownlink"`
	BufferSize        int  `json:"bufferSize"`
}

// SystemPolicy 系统策略
type SystemPolicy struct {
	StatsInboundUplink   bool `json:"statsInboundUplink"`
	StatsInboundDownlink bool `json:"statsInboundDownlink"`
}

// Inbound 入站连接配置
type Inbound struct {
	Port           interface{}          `json:"port"`
	Listen         string               `json:"listen"`
	Protocol       string               `json:"protocol"`
	Settings       InboundConfiguration `json:"settings"`
	StreamSettings StreamSettings       `json:"streamSettings"`
	Tag            string               `json:"tag"`
	Sniffing       Sniffing             `json:"sniffing"`
	Allocate       Allocate             `json:"allocate"`
}

// InboundConfiguration 入口配置
type InboundConfiguration struct {
	Client                    []Client `json:"clients"`
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

// StreamSettings  底层传输配置
type StreamSettings struct {
	NetWork      string    `json:"network"`
	Security     string    `json:"security"`
	WSSettings   WebSocket `json:"wsSettings"`
	TLSSettings  string    `json:"tlsSettings"`
	TCPSettings  string    `json:"tcpSettings"`
	HTTPSettings string    `json:"httpSettings"`
	DSSettings   string    `json:"dsSettings"`
	QUICSettings string    `json:"quicSettings"`
	Sockopt      string    `json:"sockopt"`
}

// WebSocket ws协议
type WebSocket struct {
	Path   string            `json:"path"`
	Header map[string]string `json:"headers"`
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
	SendThrough    string
	Protocol       string
	Settings       OutboundConfiguration
	Tag            string
	StreamSettings StreamSettings
	ProxySettings  ProxySetting
	Mux            Mux
}

// OutboundConfiguration 出口配置
type OutboundConfiguration struct {
	Vnext Vmess
}

// Vmess vmess 协议
type Vmess struct {
	Address string `json:"address"`
	Port    int    `json:"port"`
	Users   []User `json:"users"`
}

// User 用户
type User struct {
	ID       string `json:"id"`
	AlterID  int    `json:"alterId"`
	Level    int    `json:"level"`
	Security string `json:"security"`
}

// Freedom 出站协议，可以用来向任意网络发送（正常的） TCP 或 UDP 数据。
type Freedom struct {
	DomainStrategy string `json:"domainStrategy"`
	Redirect       string `json:"redirect"`
	UserLevel      int    `json:"userLevel"`
}

// ProxySetting 出站代理配置。
type ProxySetting struct {
}

// Mux 配置
type Mux struct {
	Enabled     bool `json:"enabled"`
	Concurrency int  `json:"concurrency"`
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
