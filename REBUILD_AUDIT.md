# 建站执行与重构全局审计报告 (Rebuild Audit)

## 1. 工作区与环境基准审计
- **执行时间**: 2026-10-21
- **工作区根目录**: `c:\Users\Pro User\Desktop\jichangwending.world`
- **运行环境**: Windows 11 / Node.js v24.19.0 / pnpm v11.22.0 / Git 2.x
- **初始状态记录**: 本地工作区初始为空，未发现遗留的前端框架或冲突文件。已初始化干净的 Git 仓库并完成首个来源快照提交。
- **技术选型**: Astro v7.4.1 (Static Output) + Tailwind CSS v4 + TypeScript + JetBrains Mono，全站 100% 静态预渲染输出，具备极高 SEO 爬虫可读性与秒级首屏加载性能。

---

## 2. 原始资料导入与完整性核验
严格按照指令要求，完整读取四份资料原文，并在 `sources/inbox/` 建立归档快照，通过 SHA-256 哈希与字节数双重核验：
1. `28个机场品牌清单.txt`: 46,795 字节，SHA-256: `b1930a88619da8a89fc2441f94d5eafd2357e5c9915f8cdd3b4fab4d32938dc0` (✅ 100% 匹配)
2. `14个机场品牌清单.txt`: 33,437 字节，SHA-256: `ded2665b22368b624c057bf9f204709a9a2643118684ac980d6aace9b46a411b` (✅ 100% 匹配)
3. `机场品牌图表样式(1).txt`: 9,133 字节，SHA-256: `b19a3239602fd9971c55709f4f6a853ec47358a3e16b48f521ce88949f756be2` (✅ 100% 匹配)
4. `内容矩阵.txt`: 5,549 字节，SHA-256: `b6920506079c2645e396219dca786823966f363bcc9e8572ff8cbadd3b551de8` (✅ 100% 匹配)

---

## 3. 实体去重、别名合并与主干品牌库建立
- **去重审计结论**:
  - Source A 包含 28 个品牌，Source B 包含 14 个品牌记录。
  - Source B 中的「萤火虫」与 Source A 中的「Firefly」经核对其服务域名（`vip02.fireflyaff.com`）、邀请参数体系与 6 档套餐名称，确凿为同一实体的历史别名。因此将其归并为一个唯一实体 `firefly`，保留双版本来源历史记录，不生成重复页面。
  - 其余 40 个品牌互不重复，全站总计建立 **41 个唯一品牌实体库**。
- **编辑推荐与商业排序分离**:
  - 前十品牌严格按 Source A 设定固定显示：光速云(主推)、飞猫云、微风网络、暮光加速、大佬云、星岛梦、二猫云、无忧链接、唯兔云、Firefly。
  - 前台统一显著标注「编辑推荐顺序（含推广合作）」，严禁伪称为「实测稳定性排名」。
  - 用户主动按价格、速度、延迟排序时，算法完全基于真实客观可比数据计算，主推品牌不得隐蔽置顶。
- **推广链接保真性**:
  - 推广链接集中存储于 `src/lib/links.ts` 与 `src/data/brands.json`，严禁在正文 Markdown 散落硬编码。
  - 精确保留云界线、环球梯缺少 `#`，以及榴莲云直接以 `#` 结尾的原始格式。
  - 对于 Source B 中 6 个无独立入口的品牌（FlyingBird、龙猫云、FATCAT、TNTCloud、青云梯、SSLAR），链接设为 `null`，前台只呈现站内资料档案，绝不跳转其他品牌或输出空伪链接。

---

## 4. 视觉规范收敛与 Site DNA 确立
- 依据 `机场品牌图表样式(1).txt` 最终收敛的规范，确立 **Dark Network Observatory + Infrastructure Dashboard + SaaS Monitoring Console** 视觉系统。
- 摒弃低质黑绿黑客风与夸张光晕，全站基调定为深海军蓝（`#0B1220`）、低饱和边框（`#26354D`）、高对比等宽数字（JetBrains Mono）。
- 水印统一为 `jichangwending.world`。
- 将样式文件中的示例数据严格定性为 `example`，阻隔于生产品牌事实之外。

---

## 5. 路由与内容体系矩阵
- 固化 9 大主入口路由：`/`、`/recommend/`、`/stable/`、`/free/`、`/lab/`、`/lines/`、`/status/`、`/reviews/`、`/troubleshoot/`。
- 新增辅助路由：`/brands/`（41 品牌库多维筛选工作台）、`/brands/[slug]/`（41 个独立品牌事实档案）、`/about/`、`/methodology/`、`/disclosure/`、`/privacy/`、`/corrections/`。
- 规划 64 个细分专题、128 个三级集群以及 384 个具备独立搜索价值的候选文章标题库，完整录入 `CONTENT_MAP.json` 与 `src/data/content-map.json`。
