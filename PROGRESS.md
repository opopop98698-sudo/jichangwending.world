# 项目执行进度记录表 (Progress Tracker)

## 当前阶段状态概览

- [x] **阶段 0：资料与环境审计 (Phase 0: Sources & Workspace Audit)**
  - [x] 工作区环境审计与 Git 干净仓库初始化
  - [x] 四份原始资料 100% 字节与 SHA-256 哈希校验导入至 `sources/inbox/`
  - [x] 品牌去重与实体映射（28+14 -> 41 唯一实体，萤火虫归并至 Firefly）
  - [x] 18 项原始数据冲突审计逐项建档 (`SOURCE_CONFLICTS.md`)
  - [x] 路由责任与意图边界确定 (`INTENT_OWNERSHIP.md`)
  - [x] 评测方法论与状态分层规范定稿 (`MEASUREMENT_METHODOLOGY.md`, `STATUS_POLICY.md`)
  - [x] SEO、GEO 与搜索合规审计定稿 (`SEO_GEO_AUDIT.md`)

- [x] **阶段 1：实体与内容网络规划 (Phase 1: Entity & Content Architecture)**
  - [x] 41 个唯一品牌结构化数据建模 (`src/data/brands.json`)
  - [x] 集中推广链接注册表生成 (`src/lib/links.ts`，含佣金披露与格式原貌)
  - [x] 64 个细分专题、128 个内容集群与 384 个候选标题库建立 (`CONTENT_MAP.json`, `src/data/content-map.json`)
  - [x] 41 个品牌独立内容大纲矩阵生成 (`BRAND_CONTENT_MATRIX.md`)
  - [x] 内部链接拓扑与权重流向定义 (`INTERNAL_LINK_GRAPH.md`)

- [x] **阶段 2：工程搭建与核心可观测性组件 (Phase 2: Astro Engineering & Observatory Components)**
  - [x] Astro v7.4.1、Tailwind CSS v4 Dark Network Observatory 设计系统集成
  - [x] 基础布局 `BaseLayout.astro`、Header/Navigation（9 大一级导航）、Footer、SEOHead
  - [x] 四大核心图表组件实现：
    - `PerformanceReport.astro`（统一 0-1000Mbps 固定标尺、来源徽章、防伪水印、无障碍表格）
    - `ServiceAvailabilityMatrix.astro`（流媒体与 AI 解锁细分矩阵）
    - `NetworkPathDiagram.astro`（端到端 5 层网络拓扑与观测盲区示意）
    - `BrandSnapshot.astro`（服务快照卡片）
  - [x] 用光速云（单次测速记录）、WgetCloud（历史地区聚合）、隐形人（未测试 Not Tested）三组代表性数据验证界面表现

- [x] **阶段 3：主干商业入口与品牌库实现 (Phase 3: Core Entry Points & Brand Profiles)**
  - [x] 首页 (`/`) 综合选购工作台与八大栏目导流
  - [x] 机场推荐 (`/recommend/`) 场景与预算选购（严格分离商业顺序与性能排序）
  - [x] 稳定机场 (`/stable/`) 稳定性与晚高峰依据选购主页
  - [x] 品牌库汇总 (`/brands/`) 交互式即时搜索、多维标签筛选与可比排序
  - [x] 41 个独立品牌详情页 (`/brands/[slug]/`) 静态预渲染全部通过

- [x] **阶段 4：专业实验室、线路、状态、排障与轻量工具 (Phase 4: Labs, Lines, Status, Troubleshoot & Tools)**
  - [x] 测速实验室 (`/lab/`) 方法论与原始数据快照总表
  - [x] 线路研究 (`/lines/`) 专线拓扑、协议密码学与机制解析
  - [x] 机场状态 (`/status/`) 5层解耦模型、可用度与历史事件时间线
  - [x] 深度评测 (`/reviews/`) 评测索引、两品牌对标与长效复测机制
  - [x] 网络排障 (`/troubleshoot/`) 症状诊断决策树与排障命令速查
  - [x] 免费机场 (`/free/`) 零元/试用核验与安全边界
  - [x] 实现全部 7 个轻量纯前端交互工具：
    1. 需求选择器 (`RequirementSelector.astro`)
    2. 品牌筛选器 (`BrandFilter.astro`)
    3. 两品牌资料对照 (`TwoBrandCompare.astro`)
    4. Mbps/MB/s 换算器 (`BandwidthConverter.astro`)
    5. 付款周期比较器 (`BillingCycleComparator.astro`)
    6. 观测成功率与覆盖率计算器 (`MetricCalculator.astro`)
    7. 症状排障决策树 (`TroubleshootTree.astro`)

- [x] **阶段 5：合规、透明性页面与静态构建核验 (Phase 5: Compliance & Build Verification)**
  - [x] 编制 `/about/`（关于本站与五项原则）
  - [x] 编制 `/methodology/`（评测方法论与数学模型）
  - [x] 编制 `/disclosure/`（商业推广与佣金透明披露）
  - [x] 编制 `/privacy/`（隐私保护与无状态运算）
  - [x] 编制 `/corrections/`（公开数据勘误与提报通道）
  - [x] 动态生成符合规范的 `/robots.txt`
  - [x] 生成 `@astrojs/sitemap` 站点地图 (`sitemap-index.xml`)
  - [x] 全站 56 个静态路由预渲染构建 100% 成功通过 (`npx astro build`)
  - [x] 自动化产物审计脚本 `scripts/audit-dist.js` 验证 100% 通过
