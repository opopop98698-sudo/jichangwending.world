import fs from 'fs';
import path from 'path';

// Complete knowledge definitions for all 64 topics across 8 categories
const rawCategories = {
  R: {
    category: 'recommend',
    catName: '机场推荐',
    tool: 'RequirementSelector',
    topics: {
      R01: { name: '新手首次选购', depth: '新手机场选购决策模型与客户端架构适配', brands: ['lightspeed', 'feimao', 'dalaoyun'] },
      R02: { name: '长期日常主力', depth: '主力机场长期订阅抗风险与SLA可用性选型', brands: ['lightspeed', 'muguang', 'xingdaomeng'] },
      R03: { name: '主力备用搭配', depth: '双机场冷热双备容灾与多入口自动故障转移', brands: ['lightspeed', 'ermao', 'weifeng'] },
      R04: { name: '家庭多设备', depth: '多设备并发限制与家庭局域网软路由分流配置', brands: ['xingdaomeng', 'weitu', 'wuyou'] },
      R05: { name: '远程办公会议', depth: '跨国Zoom/Teams会议与低抖动专线连接保活', brands: ['muguang', 'xingdaomeng', 'wgetcloud'] },
      R06: { name: '视频流媒体选购', depth: 'YouTube 4K/8K 与 Netflix/Disney+ 原生解锁专线', brands: ['feimao', 'lightspeed', 'weifeng'] },
      R07: { name: 'AI与网页工作', depth: 'OpenAI/Claude 高频交互与低风险住宅出口选型', brands: ['muguang', 'firefly', 'wgetcloud'] },
      R08: { name: '跨地区移动使用', depth: '差旅移动设备频繁漫游与智能BGP就近调度', brands: ['lightspeed', 'weitu', 'dalaoyun'] }
    }
  },
  S: {
    category: 'stable',
    catName: '稳定机场',
    tool: 'MetricCalculator',
    topics: {
      S01: { name: '晚高峰稳定机场', depth: '晚高峰骨干网拥塞机制与物理专线抗拥塞支撑', brands: ['lightspeed', 'muguang', 'weifeng'] },
      S02: { name: '低丢包机场', depth: 'TCP 拥塞避免算法与跨境物理丢包率数学推导', brands: ['lightspeed', 'xingdaomeng', 'muguang'] },
      S03: { name: '连接可用性', depth: '端到端连通性五层可用度度量与成功率建模', brands: ['weitu', 'lightspeed', 'wuyou'] },
      S04: { name: '长连接与断流', depth: 'TCP Keep-Alive 保活机制与 NAT 超时断流规避', brands: ['muguang', 'wgetcloud', 'xingdaomeng'] },
      S05: { name: '运营商适配', depth: '电信163/CN2、联通4837/9929与移动CMI互联对比', brands: ['lightspeed', 'dalaoyun', 'ermao'] },
      S06: { name: '地区一致性', depth: '全球落地节点延迟标准差与地区池负载均衡', brands: ['firefly', 'lightspeed', 'feimao'] },
      S07: { name: '长期可靠性', depth: '机房运营周期、物理专线备份与抗风险能力', brands: ['wgetcloud', 'lightspeed', 'weifeng'] },
      S08: { name: '稳定性与预算', depth: '专线带宽采购成本与低价年付财务陷阱审计', brands: ['dalaoyun', 'ermao', 'lightspeed'] }
    }
  },
  F: {
    category: 'free',
    catName: '免费机场',
    tool: 'BrandFilter',
    topics: {
      F01: { name: '免费线路核验', depth: '公共免费节点物理拓扑、中间人嗅探与安全审计', brands: ['feimao', 'yuzhou', 'dalaoyun'] },
      F02: { name: '免费试用测速', depth: '商业机场正规体验包实测方法与限速机制解剖', brands: ['feimao', 'sujie', 'muguang'] },
      F03: { name: '注册与赠送流量', depth: '新客注册福利额度真实性与防滥用风控机制', brands: ['yuzhou', 'feimao', 'ermao'] },
      F04: { name: '免费不稳定原因', depth: '万人共用同一出口导致的带宽饱和与连接数耗尽', brands: ['dalaoyun', 'ermao', 'lightspeed'] },
      F05: { name: '免费任务边界', depth: '文字查阅、应急通信与高危金融操作的安全红线', brands: ['dalaoyun', 'lightspeed', 'wuyou'] },
      F06: { name: '免费订阅配置', depth: '公共订阅链接解析更新失败与 Base64 投毒排查', brands: ['ermao', 'dalaoyun', 'sujie'] },
      F07: { name: '来源与隐私', depth: '开源爬虫节点运营者身份黑箱与日志倒卖风险', brands: ['lightspeed', 'feimao', 'weifeng'] },
      F08: { name: '低成本替代', depth: '月均5-10元平价正规机场对免费节点的降维替代', brands: ['dalaoyun', 'ermao', 'lingmao'] }
    }
  },
  L: {
    category: 'lines',
    catName: '线路研究',
    tool: 'NetworkPathDiagram',
    topics: {
      L01: { name: 'IPLC', depth: '国际私有租用线路物理层SDH/SONET时分复用架构', brands: ['lightspeed', 'wgetcloud', 'muguang'] },
      L02: { name: 'IEPL', depth: '国际以太网专线二层虚拟电路弹性带宽分配机制', brands: ['lightspeed', 'xingdaomeng', 'weifeng'] },
      L03: { name: '直连中转', depth: '国内公网中转与国际骨干网直连丢包对比', brands: ['dalaoyun', 'ermao', 'wuyou'] },
      L04: { name: 'BGP与智能调度', depth: '国内三网核心多线BGP入口路由收敛与容灾', brands: ['lightspeed', 'weitu', 'xingdaomeng'] },
      L05: { name: '入口出口拓扑', depth: '前置国内接入、跨境骨干与海外落地三段式拓扑', brands: ['lightspeed', 'feimao', 'muguang'] },
      L06: { name: '代理协议', depth: 'Shadowsocks、VMess、Trojan 与 VLESS Reality 密码学', brands: ['muguang', 'firefly', 'weitu'] },
      L07: { name: 'DNS与IP识别', depth: 'Fake-IP、DoH 与住宅原生 IP 解锁反向代理', brands: ['firefly', 'feimao', 'wgetcloud'] },
      L08: { name: '冗余与故障域', depth: '海缆中断、冷备切换与双专线多活路由探测', brands: ['lightspeed', 'xingdaomeng', 'weitu'] }
    }
  },
  T: {
    category: 'lab',
    catName: '测速实验室',
    tool: 'BandwidthConverter',
    topics: {
      T01: { name: '下载上传', depth: '对称/非对称吞吐量测试与单/多线程测速口径差', brands: ['lightspeed', 'feimao', 'weifeng'] },
      T02: { name: '延迟抖动', depth: '往返时延（RTT）离散度与 Jitter 标准差测量', brands: ['lightspeed', 'muguang', 'xingdaomeng'] },
      T03: { name: '丢包重传', depth: 'TCP 快速重传、SACK 确认与拥塞窗口萎缩模型', brands: ['lightspeed', 'muguang', 'weifeng'] },
      T04: { name: '晚高峰测试', depth: '20:00-23:30 黄金窗口连续多样本采样评估准则', brands: ['lightspeed', 'xingdaomeng', 'muguang'] },
      T05: { name: '运营商对照', depth: '电信、联通、移动同节点跨运营商物理表现对标', brands: ['dalaoyun', 'lightspeed', 'ermao'] },
      T06: { name: '应用长连接', depth: '持续数据流吞吐稳定性与瞬时突发带宽差异', brands: ['muguang', 'wgetcloud', 'feimao'] },
      T07: { name: '本地与客户端变量', depth: '路由器CPU性能、Wi-Fi频段衰减与内核开销排除', brands: ['lightspeed', 'weitu', 'ermao'] },
      T08: { name: '数据复现', depth: '受控测试基线搭建与第三方结果可信度审计', brands: ['lightspeed', 'wgetcloud', 'muguang'] }
    }
  },
  O: {
    category: 'status',
    catName: '机场状态',
    tool: 'TroubleshootTree',
    topics: {
      O01: { name: '品牌入口状态', depth: '官网域名污染、Cloudflare拦截与入口可用性解耦', brands: ['lightspeed', 'feimao', 'weifeng'] },
      O02: { name: '节点故障', depth: '单机房维护、中转机宕机与落地IP被封定界', brands: ['lightspeed', 'weitu', 'muguang'] },
      O03: { name: '订阅控制面', depth: '订阅转换服务宕机、鉴权Token轮换与401排障', brands: ['ermao', 'dalaoyun', 'wuyou'] },
      O04: { name: '应用可用性', depth: 'ChatGPT/Netflix出口IP信誉库动态被封解密', brands: ['muguang', 'firefly', 'feimao'] },
      O05: { name: '公告维护', depth: '官方 Telegram 频道与工单通知透明度审计', brands: ['xingdaomeng', 'weitu', 'wgetcloud'] },
      O06: { name: '历史时间线', depth: '重大网络中断事件时间戳、持续时长与恢复率', brands: ['lightspeed', 'wgetcloud', 'weifeng'] },
      O07: { name: '监测覆盖', depth: '多探针分布式监控轮询机制与样本完备性', brands: ['lightspeed', 'muguang', 'weitu'] },
      O08: { name: '恢复更正', depth: '故障恢复验证方法论与公开勘误处理标准', brands: ['lightspeed', 'dalaoyun', 'weifeng'] }
    }
  },
  E: {
    category: 'reviews',
    catName: '深度评测',
    tool: 'TwoBrandCompare',
    topics: {
      E01: { name: '品牌证据档案', depth: '官方宣称、物理抓包证据与用户实付记录三重对标', brands: ['lightspeed', 'wgetcloud', 'feimao'] },
      E02: { name: '首次上手', depth: '客户端一键导入、规则配置平滑度与新手友好度', brands: ['lightspeed', 'feimao', 'dalaoyun'] },
      E03: { name: '长期复评', depth: '老用户超载效应、带宽缩水预警与90天复测机制', brands: ['weifeng', 'muguang', 'xingdaomeng'] },
      E04: { name: '节点地区表现', depth: '香港、日本、美国、新加坡及冷门节点可用度', brands: ['firefly', 'lightspeed', 'feimao'] },
      E05: { name: '套餐适用性', depth: '轻量包、大流量包与一次性不限时套餐性价比', brands: ['lightspeed', 'dalaoyun', 'ermao'] },
      E06: { name: '客户端体验', depth: '开源标准客户端与服务商自研定制客户端优劣', brands: ['feimao', 'lightspeed', 'weitu'] },
      E07: { name: '客服售后', depth: '工单响应SLA、Telegram群组互助与退款通道', brands: ['xingdaomeng', 'weitu', 'wgetcloud'] },
      E08: { name: '双品牌横评', depth: '同价位、同线路竞品全字段无偏见并排对比', brands: ['lightspeed', 'weifeng', 'muguang'] }
    }
  },
  N: {
    category: 'troubleshoot',
    catName: '网络排障',
    tool: 'TroubleshootTree',
    topics: {
      N01: { name: 'DNS解析', depth: 'DNS污染、Fake-IP地址池分配与域名探针失败排查', brands: ['lightspeed', 'weitu', 'ermao'] },
      N02: { name: '连接握手', depth: 'TLS 1.3 证书握手超时与 NTP 系统时钟偏差修复', brands: ['lightspeed', 'muguang', 'weifeng'] },
      N03: { name: '速度波动', depth: '晚高峰速率骤降、TCP 拥塞窗口萎缩与线路切换', brands: ['lightspeed', 'feimao', 'muguang'] },
      N04: { name: '应用失败', depth: 'ChatGPT 1020 报错、Netflix 代理检测与分流规则缺失', brands: ['muguang', 'firefly', 'wgetcloud'] },
      N05: { name: '订阅问题', depth: '401 Unauthorized、Base64解码失败与订阅格式转换', brands: ['ermao', 'dalaoyun', 'sujie'] },
      N06: { name: '系统代理TUN', depth: 'Wintun 驱动冲突、路由回环与国内应用转圈断网', brands: ['lightspeed', 'weitu', 'dalaoyun'] },
      N07: { name: 'IPv6防火墙MTU', depth: 'IPv6 优先导致连接黑洞与 MTU 分片超限丢包', brands: ['muguang', 'xingdaomeng', 'weifeng'] },
      N08: { name: '路由器多设备', depth: 'OpenWrt/PassWall 规则分流、UDP转发与局域网死锁', brands: ['xingdaomeng', 'lightspeed', 'weitu'] }
    }
  }
};

const generatedModules = {};

for (const [catCode, catData] of Object.entries(rawCategories)) {
  for (const [topicId, topicInfo] of Object.entries(catData.topics)) {
    generatedModules[topicId] = {
      topicId,
      category: catData.category,
      categoryName: catData.catName,
      topicName: topicInfo.name,
      engineeringDepth: topicInfo.depth,
      networkLayer: getNetworkLayerForCategory(catCode),
      ispRoutingAnalysis: {
        telecom: `中国电信（AS4134 163骨干网 / AS4809 CN2 GIA）：在${topicInfo.name}场景下，电信公网出口在晚高峰面临巨大拥塞压力，若缺少物理专线支撑，丢包率往往激增至 15%~30%，导致 TCP 拥塞控制强制回退；建议绑定带多线 BGP 国内入口的专线节点。`,
        unicom: `中国联通（AS4837 169网 / AS9929 CUII）：在${topicInfo.name}场景下，联通国际互联相对平稳，北方用户出海物理延迟占优；但当跨网访问南方电信机房中转时，省际跳数增加易引入 10-20ms 额外网络抖动。`,
        mobile: `中国移动（AS9808 / AS58453 CMI）：在${topicInfo.name}场景下，移动骨干网在华南方向带宽充足，但针对境外长连接高频请求或大流量 UDP 发包容易实施局部 QoS 速率扼杀，必须结合 TLS 混淆协议规避审查。`
      },
      mathematicalModel: getMathModelForCategory(catCode, topicInfo.name),
      packetCaptureAnalysis: {
        protocol: getProtocolForCategory(catCode),
        diagnosticSnippet: `curl -x http://127.0.0.1:7890 -I -v https://api.cloudflare.com/client/v4/trace`,
        hexSummary: `0000  02 00 00 38 00 00 00 00  00 00 00 00 08 00 45 00  ...8..........E.\n0010  00 3c 1a 2b 40 00 40 06  e5 4a c0 a8 01 64 68 12  .<.+@.@..J...dh.`
      },
      cliCommandSuite: [
        {
          os: 'Windows PowerShell',
          purpose: `针对【${topicInfo.name}】验证本地 TCP 连接与端口回环健康度`,
          command: 'Test-NetConnection -ComputerName 127.0.0.1 -Port 7890',
          expectedOutput: 'TcpTestSucceeded : True\nRemoteAddress    : 127.0.0.1\nRemotePort       : 7890'
        },
        {
          os: 'Windows PowerShell / CMD',
          purpose: `发送 50 组连续探测包，测试链路丢包率与延迟标准差`,
          command: 'ping -n 50 1.1.1.1',
          expectedOutput: '数据包: 已发送 = 50，已接收 = 50，丢失 = 0 (0% 丢失)\n最短 = 32ms，最长 = 36ms，平均 = 33ms'
        },
        {
          os: 'macOS / Linux Terminal',
          purpose: `检测目标服务首包响应时间（TTFB）与代理传输链路状态`,
          command: 'curl -x http://127.0.0.1:7890 -w "TCP_Connect: %{time_connect}s, TTFB: %{time_starttransfer}s, Total: %{time_total}s\\n" -s -o /dev/null https://www.google.com',
          expectedOutput: 'TCP_Connect: 0.042s, TTFB: 0.118s, Total: 0.231s'
        }
      ],
      stepByStepSOP: [
        {
          phase: '第一阶段 · 定界',
          title: '排查本地系统代理与客户端配置',
          action: `核实代理端口是否为 127.0.0.1:7890，检查规则分流模式（Rule）是否生效，避免全局模式（Global）引发回环。`,
          verification: `国内微信/网银可直连，境外网页返回正常代理响应。`
        },
        {
          phase: '第二阶段 · 核验',
          title: `核对【${topicInfo.name}】的物理线路依据`,
          action: `进入本站品牌档案库，查验目标节点是 IEPL/IPLC 物理专线还是普通公网中转，排除晚高峰假专线。`,
          verification: `晚高峰持续连续 Ping 丢包率 < 1%，延迟抖动 StDev < 3ms。`
        },
        {
          phase: '第三阶段 · 调度',
          title: '动态切换高信誉落地出口节点',
          action: `若涉及 AI 或流媒体平台风控，切换至具备住宅宽带或专有解锁的冷门节点，清理浏览器 Cookie 缓存。`,
          verification: `目标服务 HTTP 状态码返回 200，无 403 质询或 1020 报错。`
        },
        {
          phase: '第四阶段 · 避坑',
          title: '遵循小额月付试错原则',
          action: `在本地真实宽带环境下连续观测 14 天以上，确认满足业务需求后再考虑长周期订阅。`,
          verification: `彻底杜绝因机房突发封锁或上游线路缩水导致的高额沉没成本。`
        }
      ],
      conversionAdvice: {
        recommendedBrandIds: topicInfo.brands,
        selectionLogic: `在【${topicInfo.name}】场景下，优先匹配具备真实专线物理保障与大带宽冗余的品牌：首选主推品牌光速云（年付99元起步折算8.25元/月性价比极高，多协议支持），或搭配针对性流媒体/AI解锁优化的候选方案。`,
        budgetWarning: `警惕市面上远低于市场公允专线成本的“5元永久专线”宣传，避免因贪小便宜落入公网直连或恶意日志记录陷阱。`
      }
    };
  }
}

function getNetworkLayerForCategory(catCode) {
  switch (catCode) {
    case 'R': return 'L7 应用层代理分流 + L4 传输层 TCP 握手机制';
    case 'S': return 'L3 IP 路由传输层 + L2 数据链路层点对点物理专线';
    case 'F': return 'L7 HTTP/TLS 明文中间人嗅探与数据链路安全审计';
    case 'L': return 'L1 物理层光纤海缆拓扑 + L4 传输协议拥塞控制';
    case 'T': return 'L4 TCP 吞吐量标尺与并发乱序重传度量模型';
    case 'O': return 'L7 业务前台控制面与 L4 数据转发面 5 层解耦可用性';
    case 'E': return '全栈端到端网络性能长效复测与竞品参数对标';
    case 'N': return 'L3 路由表 + L4 虚拟网卡驱动（Wintun）与 DNS 协议栈';
    default: return 'L4 传输控制层协议栈';
  }
}

function getProtocolForCategory(catCode) {
  switch (catCode) {
    case 'R': return 'HTTPS / TLS 1.3 / VLESS Reality';
    case 'S': return 'TCP Retransmit / ICMP / BBR';
    case 'F': return 'Shadowsocks AEAD / Plaintext HTTP Proxy';
    case 'L': return 'SDH / SONET / MPLS / Ethernet L2';
    case 'T': return 'TCP Sliding Window / SACK / BBR v3';
    case 'O': return 'HTTP/2 REST API / Webhook Keepalive';
    case 'E': return 'Multi-protocol Comparison Matrix';
    case 'N': return 'DNS UDP/53 / Fake-IP / Wintun Driver';
    default: return 'TCP / TLS 1.3';
  }
}

function getMathModelForCategory(catCode, topicName) {
  switch (catCode) {
    case 'R':
      return {
        formulaName: '购买决策性价比与试错成本模型',
        formulaKatex: 'E_{value} = \\frac{B_{bandwidth} \\cdot U_{availability}}{P_{monthly} \\cdot (1 + R_{lockin})}',
        explanation: '其中 B_{bandwidth} 为晚高峰有效可用带宽，U_{availability} 为在线率，P_{monthly} 为折算月费，R_{lockin} 为长周期资金锁定风险系数。月付模式下 R_{lockin}=0，综合期望性价比最高。',
        practicalExample: '月付 15 元的专线套餐期望综合效用显著高于年付 200 元但次月断流的普通公网中转。'
      };
    case 'S':
      return {
        formulaName: 'Mathis TCP 丢包率与吞吐量衰减公式',
        formulaKatex: 'Throughput \\le \\frac{MSS}{RTT \\cdot \\sqrt{p}} \\cdot C',
        explanation: 'MSS 为最大报文段（1460 字节），RTT 为往返时延，p 为丢包率。当骨干网晚高峰丢包率从 0.1% 上升至 4% 时，TCP 吞吐量将出现 80% 以上的断崖式跌幅。',
        practicalExample: 'RTT=50ms 时，0.1% 丢包可跑满 75Mbps 4K 码率；丢包率升至 3% 时，吞吐跌至 13Mbps，无法维系 4K 播放。'
      };
    case 'F':
      return {
        formulaName: '免费白嫖节点并发争抢与排队延迟模型 (M/M/1/K)',
        formulaKatex: 'W_q = \\frac{\\lambda}{\\mu(\\mu - \\lambda)} \\cdot \\left[ 1 + \\left(\\frac{C_{over}}{C_{capacity}}\\right)^2 \\right]',
        explanation: '在公共免费节点中，并发连接请求数 \\lambda 远远超过服务处理能力 \\mu，导致排队等待时延 W_q 趋于无穷大，体现在用户端即为全部超时红标。',
        practicalExample: '单台免费节点承载 3000 人并发时，平均握手延迟由 80ms 飙升至 1800ms，丢包率超 45%。'
      };
    case 'L':
      return {
        formulaName: '物理专线与公网海缆物理光速时延极限模型',
        formulaKatex: 'RTT_{min} \\ge 2 \\cdot \\frac{D_{distance}}{c / n_{fiber}} + \\sum_{i=1}^{k} T_{switch}',
        explanation: 'D 为物理两端直线距离，c 为真空中光速（300,000 km/s），n_{fiber} 为光纤折射率（约 1.47）。沪日海缆物理单向极限约 15ms，端到端 RTT 极限约 30ms。',
        practicalExample: '上海到东京物理距离约 1800km，物理内网专线 RTT 可达 28-32ms；若走公网绕行甚至丢包重传，延迟将突破 80-150ms。'
      };
    case 'T':
      return {
        formulaName: '测速吞吐量与比特/字节换算及协议损耗系数',
        formulaKatex: 'S_{effective} = \\frac{R_{mbps}}{8} \\cdot (1 - \\gamma_{overhead}), \\quad \\gamma_{overhead} \\approx 0.05',
        explanation: '每 8 比特换算为 1 字节，减去以太网帧头、IP 头、TCP 头部与 TLS 加密层合计约 5% 的协议开销，得出真实下载有效载荷速率。',
        practicalExample: '1000 Mbps 理论带宽扣除 5% 开销后，实际下载极限速度约为 118.75 MB/s。'
      };
    case 'O':
      return {
        formulaName: '服务可用度分层五维联合概率分布',
        formulaKatex: 'A_{system} = \\prod_{i=1}^{5} A_{L_i} = A_{portal} \\cdot A_{dash} \\cdot A_{sub} \\cdot A_{node} \\cdot A_{app}',
        explanation: '整体可用性等于各层独立可用性的乘积。官网门户故障（A_{portal}=0）仅影响新购，节点通信层正常（A_{node}=1）时代理连接依旧 100% 畅通。',
        practicalExample: '即使官网遭遇域名阻断，只要本地配置未被清除，核心节点通信可用性仍可保持在 99.8% 以上。'
      };
    case 'E':
      return {
        formulaName: '综合评测多维加权打分模型',
        formulaKatex: 'Score = 0.35 \\cdot S_{peak} + 0.25 \\cdot S_{loss} + 0.20 \\cdot S_{price} + 0.10 \\cdot S_{unlock} + 0.10 \\cdot S_{sla}',
        explanation: '重点加权晚高峰稳定性（35%）与抗丢包能力（25%），价格与解锁各占 20% 与 10%，客观量化综合性能。',
        practicalExample: '高分品牌必须具备真实的专线物理抗拥塞底座，而非单纯依赖白天闲时虚高跑分。'
      };
    case 'N':
      return {
        formulaName: 'TCP 拥塞控制超时重传指数退避算法 (Exponential Backoff)',
        formulaKatex: 'RTO_{n+1} = \\min(2 \\cdot RTO_n, \\, RTO_{max}), \\quad RTO_0 = SRTT + 4 \\cdot RTTVAR',
        explanation: '当发生丢包未收到 ACK 时，重传超时时间 RTO 指数翻倍（1s -> 2s -> 4s -> 8s），导致网页在断网时呈现长达数十秒的无响应转圈。',
        practicalExample: '本地代理驱动冲突导致首包丢弃时，浏览器将连续挂起 15 秒以上方才报错。'
      };
    default:
      return {
        formulaName: '可用性评估公式',
        formulaKatex: 'A = \\frac{MTBF}{MTBF + MTTR}',
        explanation: '平均故障间隔时间（MTBF）越长，平均修复时间（MTTR）越短，服务越稳定。',
        practicalExample: '专线机房自动切换使得 MTTR 缩短至秒级，大幅降低故障体感。'
      };
  }
}

// Generate the output file
const code = `// AUTO-GENERATED TECHNICAL KNOWLEDGE BASE FOR 384 TOPIC ARTICLES
// Generated by scripts/build-knowledge-engine.js

export interface TopicKnowledgeModule {
  topicId: string;
  category: string;
  categoryName: string;
  topicName: string;
  engineeringDepth: string;
  networkLayer: string;
  ispRoutingAnalysis: {
    telecom: string;
    unicom: string;
    mobile: string;
  };
  mathematicalModel: {
    formulaName: string;
    formulaKatex: string;
    explanation: string;
    practicalExample: string;
  };
  packetCaptureAnalysis: {
    protocol: string;
    diagnosticSnippet: string;
    hexSummary: string;
  };
  cliCommandSuite: {
    os: string;
    purpose: string;
    command: string;
    expectedOutput: string;
  }[];
  stepByStepSOP: {
    phase: string;
    title: string;
    action: string;
    verification: string;
  }[];
  conversionAdvice: {
    recommendedBrandIds: string[];
    selectionLogic: string;
    budgetWarning: string;
  };
}

export const TOPIC_KNOWLEDGE_BASE: Record<string, TopicKnowledgeModule> = ${JSON.stringify(generatedModules, null, 2)};

export function getKnowledgeForArticle(article: { parentTopicId: string; parentCategory?: string; parentRoute?: string; title?: string }): TopicKnowledgeModule {
  const prefix = article.parentTopicId || 'R01';
  if (TOPIC_KNOWLEDGE_BASE[prefix]) {
    return TOPIC_KNOWLEDGE_BASE[prefix];
  }
  return TOPIC_KNOWLEDGE_BASE['R01'];
}
`;

fs.writeFileSync(path.join('src', 'lib', 'topicKnowledgeEngine.ts'), code, 'utf8');
console.log(`Successfully generated topic knowledge base with ${Object.keys(generatedModules).length} complete modules.`);
