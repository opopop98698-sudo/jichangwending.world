# 41 个品牌实体映射与归并审计表 (Brand Entity Map)

本文档定义全站收录的 41 个唯一品牌实体、别名映射、来源归属、规范 Slug、编辑展示权重以及注册推广链接审计规范。

---

## 1. 实体去重与映射原则
- **输入规模**：Source A 包含 28 个品牌记录，Source B 包含 14 个品牌记录。
- **归并审计**：
  - Source B 中的「萤火虫」与 Source A 中的「Firefly」使用相同的服务根域 `vip02.fireflyaff.com`，且具有完全相同的 6 档套餐体系命名（Firefly年付版、Firefly Lite、Firefly Plus、Firefly Blaze、Firefly Nova、Firefly不限时）。二者被确认为同一实体的不同历史版本与中文别名。
  - 归并策略：合并为一个唯一实体 `firefly`，保留中文别名「萤火虫」，Source A 作为当前现行版本，Source B 作为 2026-08-09 的历史档案保留，不生成 2 个重复页面。
  - 其余 40 个品牌互不重复，形成 **41 个唯一品牌实体库**。

---

## 2. 完整 41 品牌实体登记表

| 序号 | 品牌主名称 | 规范 Slug | 来源归属 | 编辑位次 | 线路声明 | 现行起步价/计费周期 | 推广链接状态 | 推广代码/特征 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | **光速云** | `lightspeed` | Source A | **Top 1 (主推)** | IEPL / 企业内网 | ¥99/年 (69GB/月) | 有效 | `keqgvT5Y` / 优惠码 `AMM` |
| 2 | **飞猫云** | `feimao` | Source A | **Top 2** | 专线 / 客户端 | ¥84/年 (50GB/月) | 有效 | `6uq0Xe9y` / 优惠码 `flycat888` |
| 3 | **微风网络** | `weifeng` | Source A | **Top 3** | IEPL / VLESS | ¥137/年 (100GB/月) | 有效 | `t3huofyI` / 优惠码 `flat888` |
| 4 | **暮光加速** | `muguang` | Source A | **Top 4** | BGP / 专线出口 | ¥20/月 (120GB/月) | 有效 | `D1LHglg3` / 优惠码 `muguang5555` |
| 5 | **大佬云** | `dalaoyun` | Source A | **Top 5** | IEPL / VLESS | 约¥5.6/月 (60GB/月) | 有效 | `jCPLmoWN` / 优惠码 `dly888` |
| 6 | **星岛梦** | `xingdaomeng` | Source A | **Top 6** | IEPL / Trojan | ¥96/年 (60GB/月) | 有效 | `1TynBYnR` / 优惠码 `nmw888` |
| 7 | **二猫云** | `ermao` | Source A | **Top 7** | IEPL / VLESS | ¥20/月 (130GB/月) | 有效 | `7mjvgGbW` / 优惠码 `ermao5555` |
| 8 | **无忧链接** | `wuyou` | Source A | **Top 8** | 中转 / 客户端 | ¥19/月 (100GB/月) | 有效 | `4ZoSbLdL` / 优惠码 `wuyou666` |
| 9 | **唯兔云** | `weitu` | Source A | **Top 9** | IPLC / Trojan | ¥14.9/月 (100GB/月) | 有效 | `xIutqOBA` / 优惠码 `weitu666` |
| 10 | **Firefly** (别名: 萤火虫) | `firefly` | Source A+B | **Top 10** | IPLC / VLESS | ¥96/年 (60GB/月) | 有效 | `2n7VURre` / 优惠码 `firefly` |
| 11 | **宇宙云** | `yuzhou` | Source A | 常规收录 | IEPL / VLESS | ¥96/年 (流量待核) | 有效 | `yrThwMP1` / 优惠码 `YUZHOU553` |
| 12 | **U1S1** | `u1s1` | Source A | 常规收录 | IPLC 专线 | ¥20/月 (120GB/月) | 有效 | `xhX5X22f` / 优惠码 `akaka` |
| 13 | **灵猫网络** | `lingmao` | Source A | 常规收录 | 中转优化 | ¥25/月 (150GB/月) | 有效 | `8MIAyxak` / 优惠码 `lingmao` / `lmao888` |
| 14 | **极连云** | `jilian` | Source A | 常规收录 | IEPL 专线 | ¥18/月 (100GB/月) | 有效 | `VM1rKGUu` / 优惠码 `ji8888` |
| 15 | **光年梯** | `guangnian` | Source A | 常规收录 | IEPL / VLESS | ¥18/月 (110GB/月) | 有效 | `X1FoxjGE` / 优惠码 `gnt6666` |
| 16 | **一翻云** | `yifan` | Source A | 常规收录 | IEPL / 原生住宅 | ¥20/月 (150GB/月) | 有效 | `Yr7FhB7r` / 优惠码 `yfy6666` / `1FLYYUN` |
| 17 | **SOGO云** | `sogo` | Source A | 常规收录 | IEPL / BGP优化 | ¥25/月 (150GB/月) | 有效 | `327Vs0w7` / 优惠码 `SOGO10000` / `sss777` |
| 18 | **可信云** | `kexin` | Source A | 常规收录 | IEPL / VLESS | ¥25/月 (150GB/月) | 有效 | `UYDtNlCY` / 优惠码 `kkk333` |
| 19 | **速界** | `sujie` | Source A | 常规收录 | IEPL / VLESS | ¥25/月 (150GB/月) | 有效 | `xgXzEfZB` / 优惠码 `sss1111` |
| 20 | **闪跃** | `shanyue` | Source A | 常规收录 | 纯 IPLC 专线 | ¥24/月 (150GB/月) | 有效 | `3lgzm9mm` / 优惠码 `shanyue` |
| 21 | **全球云** | `quanqiu` | Source A | 常规收录 | IPLC/IEPL 中转 | ¥20/月 (120GB/月) | 有效 | `Ov2nvU9C` / 优惠码 `qq88` / `qqy7777` |
| 22 | **闪电鼠** | `shandianshu` | Source A | 常规收录 | IEPL / VLESS | 约¥5.6/月 (60GB/月) | 有效 | `rUE75iYh` / 优惠码 `sd88` |
| 23 | **云界线** | `yunjiexian` | Source A | 常规收录 | IEPL / VLESS | 约¥5.6/月 (60GB/月) | 有效(特殊格式) | `HBaZ91c6` (缺少 `#`) / `yjx888` |
| 24 | **榴莲云** | `liulianyun` | Source A | 常规收录 | IEPL 专线 | 约¥5.6/月 (60GB/月) | 有效(特殊格式) | `hS5pvbfE` (`#`直连域名) / `ll88` |
| 25 | **神行加速** | `shenxing` | Source A | 常规收录 | IEPL / VLESS | 约¥14/月 (120GB/月) | 有效 | `gawDQqVE` / 优惠码 `xs0077` |
| 26 | **环球梯** | `huanqiuti` | Source A | 常规收录 | IEPL / VLESS | 约¥5.6/月 (60GB/月) | 有效(特殊格式) | `9I4KRNPH` (缺少 `#`) / `HQ66` |
| 27 | **隐形人** | `yinxingren` | Source A | 常规收录 | 企业级 IPLC | ¥24/月 (144GB/月) | 有效 | `kcyEeoJT` / 优惠码 `moon80` / `yxr888` |
| 28 | **梯子云** | `tiziyun` | Source A | 常规收录 | IEPL / VLESS | 约¥7.4/月 (60GB/月) | 有效 | `7EmnpHs0` / 优惠码 `tiziyun` |
| 29 | **WgetCloud** | `wgetcloud` | Source B | 补充历史库 | 优质专线 / Trojan | ¥297/季 (230GB/月) | 有效 | `VLG2xb` |
| 30 | **白月光** | `baiyueguang` | Source B | 补充历史库 | Shadowsocks 多地区 | ¥66/季 (100GB/月) | 有效 | `gg6puAId` |
| 31 | **FlyingBird** | `flyingbird` | Source B | 补充历史库 | 全专线 IPLC / SS | ¥15/月 (100GB/月) | **无 (null)** | 历史优惠码 `theo` / `year85` |
| 32 | **CyberGuard** | `cyberguard` | Source B | 补充历史库 | Trojan / VLESS | ¥32/月 (350GB/月) | 有效 | `AxXNNYng` |
| 33 | **龙猫云** | `longmao` | Source B | 补充历史库 | SS + IPLC 全专线 | ¥15/月 (100GB/月) | **无 (null)** | 历史梯级折扣 |
| 34 | **FATCAT** | `fatcat` | Source B | 补充历史库 | 企业级 IEPL/IPLC | ¥20/月 (120GB/月) | **无 (null)** | 历史梯级折扣 |
| 35 | **TNTCloud** | `tntcloud` | Source B | 补充历史库 | IPLC 内网专线 | ¥20/月 (110GB/月) | **无 (null)** | 历史优惠码 `TNT85` |
| 36 | **青云梯** | `qingyunti` | Source B | 补充历史库 | SS + 企业级 IPLC | ¥25/月 (150GB/月) | **无 (null)** | 历史优惠码 `qyt85` / `qyt80` |
| 37 | **山水云** | `shanshui` | Source B | 补充历史库 | 多地区中转 | ¥15/月 (100GB/月) | 有效 | `YD5iQ888` |
| 38 | **灵动云** | `lingdong` | Source B | 补充历史库 | IEPL / VLESS | ¥20/月 (100GB/月) | 有效 | `wZvEhEoI` |
| 39 | **浪网** | `wavenet` | Source B | 补充历史库 | IEPL 专线 | ¥30/月 (截150GB) | 有效 | `xwAM4tTd` |
| 40 | **EdgeNova** | `edgenova` | Source B | 补充历史库 | 直连/IPLC 调度 | ¥15/月 (72GB/月) | 有效 | `cl3iB5YG` / 优惠码 `TH888` |
| 41 | **SSLAR** | `sslar` | Source B | 补充历史库 | 企业级 IEPL+BGP | ¥17/月 (100GB/月) | **无 (null)** | 历史优惠码 `ko3eTt0w` |

---

## 3. 推广链接格式特殊性审计
为防止自动化脚本或格式化工具破坏商家的特定推广参数，必须保留以下格式原貌：
1. **云界线 (`yunjiexian`)**：`https://qwerty.yunjiexianaff.com/?code=HBaZ91c6`（确实缺少 `#` 符号，完全保留）。
2. **环球梯 (`huanqiuti`)**：`https://qwerty.huanqiutiaff.com/?code=9I4KRNPH`（确实缺少 `#` 符号，完全保留）。
3. **榴莲云 (`liulianyun`)**：`https://qwerty.liulianyunaff.com#/?code=hS5pvbfE`（域名末尾直接接 `#`，无斜杠，完全保留）。
4. **历史缺入口品牌**（FlyingBird、龙猫云、FATCAT、TNTCloud、青云梯、SSLAR）：`affiliateUrl: null`，`officialUrl: null`，前台只提供站内资料及评测入口，严禁转跳到其他品牌或使用 `#` 伪链接。
