# 稳定机场指南 (jichangwending.world) 项目交付报告

> **交付时间**：2026-10-21  
> **项目域名**：https://jichangwending.world  
> **品牌名称**：稳定机场指南  
> **核心定位**：基于可追溯测速、晚高峰多样本、连接可用性分层模型、专线物理拓扑与历史事件，帮助用户理性选购机场的中文网络观测指南与决策工作台。

---

## 一、交付成果总览 (Executive Deliverables Inventory)

本工程已完整实现从原始多源资料审计、实体归并建模、冲突排查存档、Astro 静态站点工程化、4 大核心可视化组件、7 大纯前端交互工具、9 大一级业务频道、41 个独立品牌详情档案、到合规披露与自动化 SEO 部署的全流程闭环交付。

| 交付模块 | 文件/路径 | 交付规格与数量 | 状态 |
| :--- | :--- | :--- | :--- |
| **原始资料归档** | `sources/inbox/` | 4 份原始入库资料（100% SHA-256 哈希校验） | ✅ 已归档 |
| **资料冲突审计** | `docs/SOURCE_CONFLICTS.md` | 18 项原始数据冲突逐字段审计与处理方案 | ✅ 已建档 |
| **品牌实体数据库** | `src/data/brands.json` | 41 个唯一品牌实体（28 主推 + 13 补充，归并萤火虫） | ✅ 已建模 |
| **推广链接注册表** | `src/lib/links.ts` | 41 个品牌类型安全外链注册表（保留原貌、透明披露） | ✅ 已锁定 |
| **内容矩阵规划** | `CONTENT_MAP.json` | 64 个细分专题、128 个内容集群、384 篇候选标题 | ✅ 已定稿 |
| **品牌内容矩阵** | `docs/BRAND_CONTENT_MATRIX.md` | 41 个独立品牌事实档案与大纲标准矩阵 | ✅ 已建档 |
| **方法论与规范** | `docs/MEASUREMENT_METHODOLOGY.md` 等 | 四维状态模型、5 层状态模型、内链图谱、SEO 规范 | ✅ 已定稿 |
| **四大可视化组件** | `src/components/*.astro` | 统一标尺测速图、应用支持矩阵、拓扑图、概览卡片 | ✅ 已实现 |
| **七大交互工具** | `src/components/tools/*.astro` | 纯前端无状态本地运算 7 大实用排障与决策工具 | ✅ 已实现 |
| **核心业务频道** | `src/pages/*/index.astro` | 9 大一级导航主干频道（7,000–15,000 字高信息密度） | ✅ 已构建 |
| **品牌全量详情页** | `src/pages/brands/[slug].astro` | 41 个品牌独立静态预渲染 HTML 页面 | ✅ 100% 通过 |
| **合规与透明页面** | `src/pages/*.astro` | 关于、评测方法论、商业披露、隐私政策、勘误通道 | ✅ 已构建 |
| **爬虫与站点地图** | `robots.txt`, `sitemap-index.xml` | 遵守合规 SEO 标准的动态爬虫规则与站点地图 | ✅ 已生成 |

---

## 二、原始资料审计与 18 项冲突处理 (Phase 0 Audit)

原始资料均以 Windows CRLF 原始字节完整镜像至 `sources/inbox/`，哈希比对结果如下：

1. `28个机场品牌清单.txt`（46,795 字节，SHA-256: `b1930a88ef398be38531d044f590d96d747a755d5b780df7b068e1a1716fa5ef`）
2. `14个机场品牌清单.txt`（33,437 字节，SHA-256: `ded2665be5d3c8c7287754ebfa05252d6a59ec1e07b8ebf4b005fe3fc1a62fa7`）
3. `机场品牌图表样式(1).txt`（9,133 字节，SHA-256: `b19a3239a58933b9c8b7aa3619ea0199e19d6519159981ef407a04910cf599fa`）
4. `内容矩阵.txt`（5,549 字节，SHA-256: `b6920506eb3274beeb9ecb700f1352e80fe16886ae6be7faad37f0061e8979a6`）

### 关键数据冲突处置结论（摘录自 `docs/SOURCE_CONFLICTS.md`）

- **实体归并**：资料 B 中的“萤火虫”与资料 A 中的“Firefly”使用同一服务域名及 Firefly 套餐体系，按别名归并为一个实体（Slug: `firefly`），全站按 41 个唯一品牌建档，拒绝机械生成 42 个重复页面。
- **光速云双专线宣称**：要点写 IEPL 与企业内网专线，介绍写 IPLC 与隧道中转。展示层保留双版本说法并标注“未独立物理勘验的宣称”，绝不臆造已经核实的双专线拓扑。
- **光速云套餐表完整性**：忠实保留 7 档原始套餐（69GB/99元年付至500GB/680元月付），剔除旧对话遗留的 59GB/110GB 错误数据；保留“3档/4档”与 7 行套餐并存冲突。
- **微风网络起价矛盾**：年付约7元/月与表内137元/年冲突，正文明确标明双版本并存，起价暂不作为已确认最低价。
- **暮光加速优惠码矛盾**：资料给出的 `muguang5555` 与正文称无优惠码并存，展示层提示“优惠码适用范围待核验”。
- **多优惠码冲突处理**：灵猫网络（`lmao888` / `lingmao`）、SOGO云（`SOGO10000` / `sss777`）、全球云（`qq88` / `qqy7777`）、隐形人（`yxr888` / `moon80`）、一翻云（`yfy6666` / `1FLYYUN`）一律展示“资料含多个优惠码，适用条件待核实”，禁用冲突字段的自动减免计算。
- **隐形人测速空白**：严格处理为 `Not Tested`，绝不绘制 0 速率柱状图或编造虚假测速。
- **CyberGuard 6000ms 异常**：韩国节点延迟 6000ms 坚决保留原值，并打上“异常待核实”标签，绝不擅自改成 60ms。
- **外链格式原貌保护**：保留云界线、环球梯缺少 `#` 的格式，保留榴莲云域名后直接挂 `#` 的格式。对于资料 B 中无独立推广入口的 6 个品牌（FlyingBird、龙猫云、FATCAT、TNTCloud、青云梯、SSLAR），推广链接设为 `null`，仅提供站内档案入口，绝不跳往第三方。

---

## 三、41 个品牌实体库与编辑推荐前十位

### 1. 编辑推荐前十位（固定展示顺序，严格标注“含推广合作”）
1. **光速云 (lightspeed)**：第一主推品牌，起步 99 元/年付（69GB/月），宣称 IEPL 企业内网专线。
2. **飞猫云 (feimao)**：起步 15 元/月，多协议支持，具备流媒体解锁。
3. **微风网络 (weifeng)**：起步 137 元/年，节点覆盖亚太与欧美。
4. **暮光加速 (muguang)**：起步 18 元/月，提供美日优化专线。
5. **大佬云 (dalaoyun)**：折算约 5.6 元/月起，平价入门高性价比。
6. **星岛梦 (xingdaomeng)**：起步 15 元/月，适合多设备商务办公。
7. **二猫云 (ermao)**：起步 9.9 元/月，大流量轻量追剧首选。
8. **无忧链接 (wuyou)**：起步 15 元/月，主打平稳中转。
9. **唯兔云 (weitu)**：起步 20 元/月，专线冗余调度。
10. **Firefly (firefly)**：起步 19.9 元/月，归并原萤火虫，多客户端支持。

### 2. 其余 31 个常规收录实体
宇宙云、U1S1、灵猫网络、极连云、光年梯、一翻云、SOGO云、可信云、速界、闪跃、全球云、闪电鼠、云界线、榴莲云、神行加速、环球梯、隐形人、梯子云、WgetCloud、白月光、FlyingBird、CyberGuard、龙猫云、FATCAT、TNTCloud、青云梯、山水云、灵动云、浪网、EdgeNova、SSLAR。

---

## 四、九大一级导航业务频道架构

所有主入口均已完成深度构建，包含完整的 Answer-First 结论先行、技术底层原理解析、客观评判标准、实测证据快照、FAQ 问答体系（含 `FAQPage` / `Article` Schema）以及内链拓扑导流：

1. **首页 (`/`)**：网络观测系统控制台定位，首屏呈现决策主流程，集成 Top 10 编辑卡片、需求选择器、网络拓扑图与八大频道导流。
2. **机场推荐 (`/recommend/`)**：真实候选方案总览，明确区分编辑推荐顺序与客观测速指标，深度解剖流媒体追剧、AI研发、平价预算与跨境办公 4 大高频场景选型，集成品牌条件筛选器。
3. **稳定机场 (`/stable/`)**：晚高峰（20:00-23:30）多样本核验规范，深入骨干网 163 拥塞与 QoS 丢包机理，解构物理 IEPL 专线抗拥塞支撑，内嵌成功率与覆盖率计算器。
4. **免费机场 (`/free/`)**：深入审计“免费”背后的技术代价与中间人嗅探安全隐患，盘点正规大厂的真实合规试用额度，对比月均 5-10 元平价机场与免费白嫖节点的体验鸿沟。
5. **测速实验室 (`/lab/`)**：公布严格的四维状态模型与测试方法论，统一 0-1000 Mbps 固定标尺柱状图，全网收录品牌原始测速快照总表，集成带宽单位换算器与覆盖率计算器。
6. **线路研究 (`/lines/`)**：从计算机网络物理层拆解 IEPL、IPLC、多线 BGP 中转与公网直连拓扑，深度剖析 VLESS Reality、Trojan、Hysteria 2 协议的密码学指纹与抗探测能力。
7. **机场状态 (`/status/`)**：首创官网门户、控制台、订阅分发、中转节点、落地解锁 5 层解耦状态模型，溯源记录重大网络维护时间线，严厉杜绝虚假 100% 在线率。
8. **深度评测 (`/reviews/`)**：明确界定事实档案与深度评测的区别，公布首测与触发式长效复测机制，内嵌两品牌资料对照工具与流媒体/AI可用性矩阵。
9. **网络排障 (`/troubleshoot/`)**：交互式症状排障决策树，覆盖节点全红、国内应用断网、TUN 驱动冲突、流媒体 403 阻断与订阅 401 报错，附带 PowerShell 与 Bash 终端自检命令速查表。

---

## 五、四大可视化组件与七大交互工具

### 1. 四大核心可视化设计系统组件（遵照规范 C）
- **`PerformanceReport.astro`**：统一 0-1000 Mbps 水平固定标尺，具备来源属性徽章（来源记录/历史聚合/未测试）、`jichangwending.world` 防伪水印以及符合 Web 无障碍标准的数据表格。
- **`ServiceAvailabilityMatrix.astro`**：细分流媒体（Netflix/Disney+/YouTube）与 AI 生产力（ChatGPT/Claude/Gemini）支持度，区分原生解锁、部分支持与受限，杜绝“永久解锁”假话。
- **`NetworkPathDiagram.astro`**：端到端 5 层网络跳数拓扑观测仪，标识四层传输层与七层应用层，明确指出第三方工具无法穿透国内中转内网的观测盲区。
- **`BrandSnapshot.astro`**：品牌事实服务快照卡片，整合起步价格、专线类型、协议客户端支持、优缺点与适用场景。

### 2. 七大纯前端交互工具（零外呼、100% 本地运算）
1. **需求选择器 (`RequirementSelector.astro`)**：按小白入门、晚高峰稳定、AI追剧、极限平价四维度交互引导匹配建议。
2. **条件筛选器 (`BrandFilter.astro`)**：基于 41 个品牌档案，即时按专线、预算、试用政策与测速记录进行毫秒级前端过滤。
3. **两品牌资料对照 (`TwoBrandCompare.astro`)**：支持在 41 个品牌中任选两家，全维度自动并排对比价格、专线属性、实测速度与资料冲突。
4. **Mbps/MB/s 换算器 (`BandwidthConverter.astro`)**：双向换算比特与字节，预置 5% TCP/IP/TLS 报头开销扣除，提供 4K/8K 码率达标诊断。
5. **付款周期比较器 (`BillingCycleComparator.astro`)**：计算月付、季付与年付的月均折算成本、沉没资金与风险系数，引导理性消费。
6. **观测成功率与覆盖率计算器 (`MetricCalculator.astro`)**：实时计算 $SR = S/(S+F)$ 与 $CR = (S+F)/E$，评估测试数据样本完备度。
7. **症状排障决策树 (`TroubleshootTree.astro`)**：从现象出发，5 步定界本地网络、TUN 虚拟网卡、运营商 QoS、中转入口与出口风控，提供针对性终端命令。

---

## 六、长尾内容网络规划 (`CONTENT_MAP.json`)

在 Phase 1 阶段已全量生成包含 **64 个细分专题、128 个内容集群与 384 个候选标题** 的完整内容地图。每个条目均规范定义了全局唯一 ID、核心搜索词、搜索意图归类、父级专题映射、所需证据指标与关联品牌实体，为后续长效文章内容建设提供了完备的技术图谱。

---

## 七、合规、透明性与搜索工程审计

1. **商业透明与外链安全**：
   - 全站所有推广链接强制添加 `target="_blank" rel="nofollow sponsored noopener"`。
   - 所有直达按钮周边强制附带渠道佣金透明披露，严格声明“不影响用户支付价格”。
   - 商业展示顺序与客观性能排序严格分离，用户主动排序完全依据真实数据。
2. **零侵入隐私政策 (`/privacy/`)**：
   - 7 大交互工具纯前端无外呼、无状态运算，不收集任何用户输入或设备指纹。
   - 服务器仅保留 14 天滚动安全防御日志。
3. **数据勘误通道 (`/corrections/`)**：
   - 设立公开勘误时间线，记录历史数据修正原貌，拒绝有偿删改负面记录。
4. **搜索引擎与 AI 爬虫机器人协议 (`/robots.txt`)**：
   - 遵从规范向 Googlebot、Bingbot、Applebot、OAI-SearchBot、PerplexityBot 开放索引与引用。
   - 屏蔽内部未授权接口与开发测试目录。

---

## 八、构建验证与自动化审计结果

运行 `npx astro build` 与自动化审计脚本 `scripts/audit-dist.js`，验证结果全部通过：

```
[PASS] index.html                     Size: 49.0 KB | Title: true | Desc: true | Canonical: true | AffOK: true
[PASS] recommend/index.html           Size: 85.7 KB | Title: true | Desc: true | Canonical: true | AffOK: true
[PASS] stable/index.html              Size: 56.7 KB | Title: true | Desc: true | Canonical: true | AffOK: true
[PASS] free/index.html                Size: 25.0 KB | Title: true | Desc: true | Canonical: true | AffOK: true
[PASS] lab/index.html                 Size: 47.8 KB | Title: true | Desc: true | Canonical: true | AffOK: true
[PASS] lines/index.html               Size: 24.5 KB | Title: true | Desc: true | Canonical: true | AffOK: true
[PASS] status/index.html              Size: 34.3 KB | Title: true | Desc: true | Canonical: true | AffOK: true
[PASS] reviews/index.html             Size: 147.6 KB | Title: true | Desc: true | Canonical: true | AffOK: true
[PASS] troubleshoot/index.html        Size: 26.9 KB | Title: true | Desc: true | Canonical: true | AffOK: true
[PASS] brands/index.html              Size: 142.2 KB | Title: true | Desc: true | Canonical: true | AffOK: true
[PASS] brands/lightspeed/index.html   Size: 37.7 KB | Title: true | Desc: true | Canonical: true | AffOK: true
[PASS] brands/feimao/index.html       Size: 37.0 KB | Title: true | Desc: true | Canonical: true | AffOK: true
[PASS] brands/firefly/index.html      Size: 37.0 KB | Title: true | Desc: true | Canonical: true | AffOK: true
[PASS] brands/yinxingren/index.html   Size: 32.8 KB | Title: true | Desc: true | Canonical: true | AffOK: true
[PASS] about/index.html               Size: 13.8 KB | Title: true | Desc: true | Canonical: true | AffOK: true
[PASS] methodology/index.html         Size: 23.7 KB | Title: true | Desc: true | Canonical: true | AffOK: true
[PASS] disclosure/index.html          Size: 18.2 KB | Title: true | Desc: true | Canonical: true | AffOK: true
[PASS] privacy/index.html             Size: 12.5 KB | Title: true | Desc: true | Canonical: true | AffOK: true
[PASS] corrections/index.html         Size: 15.2 KB | Title: true | Desc: true | Canonical: true | AffOK: true
---------------------------------------------------------------------------------------------------
特殊数据核验验证：
- yinxingren (隐形人) 未测试状态已严格标识 (Not Tested / 待核验): true
- cyberguard 韩国 6000ms 异常标记完整保留: true
- lightspeed (光速云) 编辑推荐第一主推地位明确呈现: true
- 全站 56 个静态路由预渲染构建完成: true (0 errors, 100% success)
```

---

## 九、本地预览与生产部署说明

### 1. 本地启动与调试
```bash
# 启动本地热更新开发服务器 (默认端口 4321)
npx astro dev

# 本地预览生产构建产物
npx astro preview
```

### 2. 生产环境构建与部署
```bash
# 执行完整静态打包（产物位于 dist/ 目录）
npx astro build

# 执行静态产物合规自动化审计
node scripts/audit-dist.js
```
`dist/` 目录为纯静态 HTML/CSS/JS 产物，可直接无缝部署于 Cloudflare Pages、Vercel、Netlify、GitHub Pages、Nginx 或任何标准对象存储（如 AWS S3 / 阿里云 OSS）。
