<div align="center">

<img src="public/avatar.jpg" alt="稳定机场指南 Logo" width="100" height="100" style="border-radius: 50%; box-shadow: 0 4px 20px rgba(56, 189, 248, 0.35); border: 3px solid #38BDF8;" />

# 稳定机场指南 (jichangwending.world)

**基于可追溯测速、晚高峰微抖动样本、专线物理拓扑与网络排障的跨境通信可观测性知识平台**

[![Astro](https://img.shields.io/badge/Astro-v7.4-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4.3-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-v7.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![SEO Health Score](https://img.shields.io/badge/SEO%20Health-99.2%2F100-10B981?style=flat-square&logo=google&logoColor=white)](https://jichangwending.world)
[![Static Pages](https://img.shields.io/badge/Static%20Pages-442%20Built-6366F1?style=flat-square)](https://jichangwending.world/sitemap.xml)
[![Affiliate Compliance](https://img.shields.io/badge/Affiliate%20Rel-100%25%20Compliant-0ea5e9?style=flat-square)](https://jichangwending.world/disclosure/)

[🌐 访问生产站点](https://jichangwending.world) • [📊 测速实验室](https://jichangwending.world/lab/) • [🏢 41品牌档案库](https://jichangwending.world/brands/) • [🛠 网络排障中心](https://jichangwending.world/troubleshoot/) • [👨‍💻 专家主理人](https://jichangwending.world/author/)

</div>

---

## 📖 项目简介 (Overview)

市面上 90% 的机场推荐博客充斥着虚假截图、被遮蔽的测试环境以及夸大的“万兆秒开”营销话术。**稳定机场指南（jichangwending.world）** 旨在打破黑盒推荐陷阱，建立在严格的端到端网络分层观测基础之上。

本站实行**“商业展示与客观测速彻底解耦”**治理准则，不仅收录全网 41 个主流与平价品牌的真实事实档案，更深度拆解三大运营商（电信 AS4134/联通 AS4837/移动 AS9808）骨干网出口拥塞机理、IPLC/IEPL 物理专线传输拓扑，并提供 7 大浏览器端排障决策与换算工具。

---

## ⚡️ 核心架构与技术亮点 (Key Features)

### 1. 纯静态极致性能 (Zero-JS Readable & Core Web Vitals)
- **Astro 7.4 SSG**：全站 442 个页面全静态编译输出，构建耗时仅 ~2.3 秒。
- **SEO 友好与首屏瞬开**：关键内容与技术白皮书在关闭 JavaScript 的极简浏览器中依然 100% 完整可读。
- **CLS 布局防抖**：全站所有 `<img>` 均配置明确的物理宽高（`width` / `height`）与 `loading="lazy"` 策略，防止累积布局偏移。

### 2. 生产级 SEO 基础设施 (SEO Score: 99.2 / 100)
- **多引擎蜘蛛原生兼容**：`robots.txt` 显式适配 `Googlebot`、`bingbot`、`Baiduspider`（百度）、`yisouspider`（神马/UC/夸克）、`Applebot` 以及 AI 检索蜘蛛 `OAI-SearchBot`、`PerplexityBot`。
- **动态增量 Sitemap**：自动生成 `sitemap.xml`、`sitemap-index.xml` 与 `sitemap-0.xml`，注入纳秒级 ISO `<lastmod>`、`weekly` 抓取频次与分级权重（1.0 / 0.9 / 0.8）。
- **384 篇深度白皮书去模板化**：按 8 大主频道（商业 SLA、晚高峰抖动、安全风险、物理拓扑、计量偏差、BGP 自愈、双向压测、因果定界）设计专属引论演绎模型，彻底消除同质化判定。
- **精准结构化数据 (JSON-LD)**：全量覆盖 `WebSite`、`Organization`、`CollectionPage`、`Product`、`Review`、`Article`、`FAQPage`、`ItemList` 与四级闭环 `BreadcrumbList`。
- **E-E-A-T 具名专家档案**：增设 [`/author/`](https://jichangwending.world/author/) 资深网络架构师林楚成 (CCIE #58921) 专页，详细公开评测实验室探针机房硬件拓扑（MikroTik CCR2004、广州电信 10G 等）。

### 3. 7 大网络工程与排障交互工具集
| 工具组件 | 适用场景与技术能力 |
| :--- | :--- |
| **需求选型决策器** (`RequirementSelector`) | 按预算、流媒体、AI 开发、游戏等场景即时打分与匹配 |
| **晚高峰效能度量计算器** (`MetricCalculator`) | 基于 Mathis 公式计算不同丢包率下 TCP 实际最大吞吐 |
| **带宽与速率单位换算器** (`BandwidthConverter`) | 换算 Mbps、MB/s，并对比真实单线程与多线程测速落差 |
| **双品牌参数即时对照工具** (`TwoBrandCompare`) | 白盒对比两家机场的起步价、专线类型、节点数与历史冲突记录 |
| **品牌库多维筛选器** (`BrandFilter`) | 按协议（Shadowsocks/VLESS/Hysteria 2）、价格与平台即时过滤 |
| **网络排障决策树** (`TroubleshootTree`) | 针对节点全红、TUN 冲突、401 报错等提供步骤化自愈 SOP |
| **端到端网络传输拓扑图** (`NetworkPathDiagram`) | 可视化呈现数据包经国内 BGP 入口到跨国专线至落地 IDC 的流转 |

---

## 🗂 目录结构 (Repository Structure)

```text
jichangwending.world/
├── public/                     # 静态公共资源 (头像、图标等)
│   ├── avatar.jpg              # 平台主理人头像 / Logo
│   └── evidence/               # 真实测速图与解锁凭证存证库
├── scripts/                    # 自动化 SEO 审计与构建维护脚本工具
│   ├── run-seo-health-audit.js # 全站 442 页穿透式 SEO 健康自动化审计引擎
│   ├── check-true-broken-links # 全站内部死链深度检测脚本 (0 Dead Links)
│   ├── mirror-sitemap.js       # 构建期自动镜像 sitemap.xml 兼容工具
│   └── verify-index-control.js # 索引控制 (noindex / nofollow) 准入验证
├── src/
│   ├── components/             # Astro 视图与交互组件
│   │   ├── tools/              # 7 大交互决策与排障诊断工具
│   │   ├── BrandSnapshot.astro # 品牌卡片组件
│   │   ├── Header.astro        # 顶栏导航 (语义化 <a> 标签)
│   │   ├── Footer.astro        # 底部导航与透明度合规声明
│   │   └── SEOHead.astro       # 核心 SEO Head 系统 (OG/Meta/Schema)
│   ├── config/
│   │   └── siteVerification.ts # Google/Bing/百度/神马验证 Meta 统一管理
│   ├── data/                   # 核心结构化数据源
│   │   ├── brands.json         # 41 个唯一品牌事实档案数据库
│   │   └── content-map.json    # 384 篇三级专题规划与搜索意图矩阵
│   ├── layouts/
│   │   └── BaseLayout.astro    # 全局基础布局模版
│   └── pages/                  # 静态路由页面 (442 Routes)
│       ├── [category]/articles/# 384 篇三级长尾技术白皮书
│       ├── brands/             # 41 品牌库聚合与单品牌详情页
│       ├── recommend/          # 机场推荐 (场景与预算选型)
│       ├── stable/             # 稳定机场 (晚高峰低丢包依据)
│       ├── free/               # 免费机场 (试用与零付款核验)
│       ├── lab/                # 测速实验室 (计量学与原始快照)
│       ├── lines/              # 线路研究 (IPLC/IEPL/BGP 原理)
│       ├── status/             # 机场状态 (可用性观测与事件追踪)
│       ├── reviews/            # 深度评测 (多维横评与双品牌对照)
│       ├── troubleshoot/       # 网络排障 (五层定界决策树)
│       ├── author.astro        # 专家 E-E-A-T 档案页
│       ├── 404.astro           # 静态 404 容错自愈页
│       ├── index.astro         # 首页
│       └── robots.txt.ts       # 动态爬虫访问控制端点
├── astro.config.mjs            # Astro 站点配置与 Sitemap 增量序列化
├── package.json                # 项目依赖与自动化 npm 脚本
├── seo-health-report.md        # 完整 SEO 技术质量审计报告 (Artifact)
└── tailwind.config.mjs         # Tailwind CSS 主题配置
```

---

## 🚀 本地开发与构建 (Getting Started)

### 前置要求 (Prerequisites)
- [Node.js](https://nodejs.org/) `>= 18.17.0`
- 包管理器：`npm` (或 `pnpm`)

### 1. 克隆代码仓库
```bash
git clone https://github.com/opopop98698-sudo/jichangwending.world.git
cd jichangwending.world
```

### 2. 安装依赖
```bash
npm install
```

### 3. 启动本地开发服务
```bash
npm run dev
```
本地服务将运行于：`http://localhost:4321/`

### 4. 生产环境构建与测试
```bash
npm run build
```
该命令会自动完成：
1. `astro build`：构建 442 个纯静态 HTML 与资源文件至 `dist/`；
2. `@astrojs/sitemap`：生成增量 `sitemap-index.xml` 与 `sitemap-0.xml`；
3. `postbuild`：自动将 `sitemap-index.xml` 镜像为 `sitemap.xml`，实现所有搜索引擎 100% 兼容。

### 5. 启动生产预览
```bash
npm run preview
```

### 6. 执行全站自动化 SEO 审计验证
```bash
node scripts/run-seo-health-audit.js
node scripts/check-true-broken-links.js
```
控制台将输出穿透式检测报告（死链数必须恒为 0，Canonical 异常数必须恒为 0）。

---

## 🛡 联盟推广合规与道德声明 (Affiliate & Editorial Independence)

> [!IMPORTANT]
> **商业合作隔离原则**：
> 1. 本站收录的部分品牌包含推广合作注册链接（Affiliate Links），全站出站商业推广链接 100% 严格标记 `rel="nofollow sponsored noopener"`，杜绝 PageRank 异常传递。
> 2. 商业推广链接**绝不增加用户的实际支付价格**，所有优惠码均来自品牌方官方公开发布。
> 3. 编辑推荐区（前十固定展示）与客观测速实验室、延迟排序彻底解耦，绝不因商务合作修改任何测速数据或伪造评测星级。

---

## 📈 部署指南 (Deployment)

推荐使用 [Cloudflare Pages](https://pages.cloudflare.com/) 进行零成本全静态自动化部署：

1. **Framework Preset**：选择 `Astro`
2. **Build command**：`npm run build`
3. **Build output directory**：`dist`
4. **环境变量（可选，用于站长平台 Meta 注入）**：
   - `PUBLIC_GOOGLE_SITE_VERIFICATION`
   - `PUBLIC_BING_SITE_VERIFICATION`
   - `PUBLIC_SHENMA_SITE_VERIFICATION`
   - `PUBLIC_BAIDU_SITE_VERIFICATION`
5. **重定向规则**：在 Cloudflare 规则中配置将 `www.jichangwending.world` 301 永久重定向至裸域名 `https://jichangwending.world/`。

---

## 📄 开源许可证 (License)

本项目代码部分遵循 [MIT License](LICENSE) 开源协议。数据快照、测速图片存证与长篇技术白皮书版权归 **稳定机场指南实验室** 所有。
