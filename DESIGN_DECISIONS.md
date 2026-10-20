# 设计决策与视觉系统设计规范 (Design Decisions)

## 1. 核心设计语言：Dark Network Observatory

根据 `机场品牌图表样式(1).txt` 的最终收敛规范，本站严格采用 **Dark Network Observatory + Infrastructure Dashboard + SaaS Monitoring Console** 风格，参考 Cloudflare Radar、Grafana、现代数据中心 NOC (Network Operations Center) 及云基础设施控制台的专业交互语言。

### 设计禁区
- ❌ 坚决禁止廉价黑绿黑客风 (Hacker Matrix / Terminal)。
- ❌ 坚决禁止游戏 HUD、赛博朋克大面积发光光晕。
- ❌ 坚决禁止 VPN 消费级广告海报、促销大横幅 Banner。
- ❌ 坚决禁止无真实监测数据时绘制虚假的“30天全绿在线状态格子”或伪造“99.99%可用率”。

---

## 2. 设计令牌 (Design Tokens)

### 基础色彩系统 (Dark Network Palette)
- **Deep Navy Background (整站背景)**: `#0B1220`
- **Elevated Console Panel (面板与卡片)**: `#111C2E`
- **Sub-panel / Input / Active Surface (次级面板)**: `#17253D`
- **Console Grid Border (边框与网格线)**: `#26354D`
- **Primary Text (主正文高对比)**: `#E6EDF6`
- **Muted Text (辅助说明/技术参数)**: `#A7B6CC`
- **Observatory Accent (科技点缀蓝)**: `#38BDF8` (Cyan/Sky Blue)

### 系统状态语义规范 (System Status Language)
图表与状态指示器不单纯依赖 Emoji，采用明确的系统状态语言与多模态呈现（文字 + 徽章 Badge + 状态点 + 细色条）：
- **Measured / Operational (已测 / 正常)**: `#10B981` (Emerald)
- **Partial / Warning (部分支持 / 区域限制 / 异常待核)**: `#F59E0B` (Amber)
- **Unavailable / Failure (不支持 / 故障)**: `#EF4444` (Rose Red)
- **Vendor Data (品牌自称 / 待实测验证)**: `#818CF8` (Indigo)
- **Not Tested (未测试 / 暂无样本)**: `#64748B` (Slate)
- **Conflicting (数据冲突待核)**: `#EC4899` (Pink)

### 字体规范 (Typography)
- **技术参数与等宽数字**: `JetBrains Mono`, `SFMono-Regular`, `Consolas`, monospace。用于测速数值、延迟毫秒数、价格、日期、IP 与协议。
- **正文与标题**: 系统默认无衬线字体栈 (`system-ui`, `-apple-system`, `BlinkMacSystemFont`, `'Segoe UI'`, `Roboto`, `'PingFang SC'`, `'Microsoft YaHei'`, sans-serif)。
- **排版原则**: 标题紧凑收敛 (`tracking-tight`)，长文正文拥有充足行高 (`leading-relaxed` / 1.75) 与合理字号 (15px-16px)，确保长时间技术阅读不疲劳。

---

## 3. 四个核心图表组件架构

### A. PerformanceReport (测速表现报告组件)
- **呈现形式**：确定性 HTML/SVG 进度条与高对比数字，同屏展示节点名称、网络协议、TLS RTT (ms)、下载吞吐量 (Mbps/MB/s 切换)。
- **核心元数据区**：强制展示测试日期（如 `2026-10-19 非晚高峰`）、采样限制、来源属性 (`supplied_record` / `historical_aggregate` / `not_tested`)。
- **对照组尺度**：统一坐标基准（0-600 Mbps），严禁把 10Mbps 缩放成满格欺骗用户。

### B. ServiceAvailabilityMatrix (服务可用性矩阵组件)
- **分区网格**：清晰划分为「AI 生产力平台」（ChatGPT、Claude、Gemini）与「全球流媒体平台」（Netflix、Disney+、YouTube 4K、HBO Max、TikTok、Spotify）。
- **状态语义**：支持 `原生解锁 (Native)`、`部分节点可用 (Partial)`、`区域受限 (Restricted)`、`不支持/整节点失败 (Failed)`、`暂无独立测试 (Not Tested)`。
- **移动端适配**：桌面端网格布局，移动端自动流式降级为带标签的技术列表，确保无横向溢出。

### C. NetworkPathDiagram (网络路径观测与拓扑图)
- **拓扑分层**：
  1. `用户端 (Client Device)`：手机 / PC / 路由器 (协议加密 VLESS / Trojan / SS)
  2. `国内中转入口 (Ingress Relay)`：BGP 多线优化入口，隐藏真实源站
  3. `跨境传输链路 (Transit Backbone)`：IEPL 专线 / IPLC 专线 / 直连公网，采用不同线型明确区分声明类型与实测类型
  4. `海外落地入口 (Overseas Egress)`：香港 / 日本 / 新加坡 / 美国落地
  5. `目标应用生态 (Target Services)`：AI 服务与流媒体
- **规范说明**：标明“示意拓扑图根据品牌公开资料声明绘制，不作为物理线路实测证明”。

### D. BrandSnapshot (品牌基础设施概览快照)
- **紧凑参数网格**：运营年限、协议支持、客户端生态（专属客户端 vs 通用订阅导入）、节点覆盖区域、计费入门门槛、数据核验日期、商业推广标识。
- **证据状态标签**：直接呈现数据可信度评分与资料缺口提示。

---

## 4. 水印与引用合规
- 重新排版的数据图表右下角统一使用 `jichangwending.world` 作为可观测性实验室水印（透明度 20%）。
- 原始证据引用保留原出处说明，明确标注“据来源资料整理”，绝不冒充为本站自研原创实验。
