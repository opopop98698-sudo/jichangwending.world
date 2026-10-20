# SEO、GEO (生成式引擎优化) 与搜索工程合规审计 (SEO & GEO Audit)

本文档规范本站（https://jichangwending.world）在搜索引擎爬虫（Googlebot, Bingbot）、AI 搜索与引用引擎（PerplexityBot, OAI-SearchBot, Applebot）以及现代结构化数据标准下的实施准则。

---

## 1. GEO / AEO (Answer Engine Optimization) 内容表达策略

现代大语言模型（如 ChatGPT Search, Perplexity, Gemini）和 Google AI Overviews 优先提取具有高信息密度、逻辑明确、条件清晰的结构化回答。本站所有长文与品牌页面强制推行 **Answer-First (结论先行)** 结构：

1. **直接结论 (Immediate Answer)**: 首屏第一自然段直接给出带条件的判定（例如：“针对个人日常办公和流媒体追剧，若月预算在 20 元以内且看重 IEPL 专线，光速云或二猫云是更优候选；但若用于高频批量 AI 接口调用，其节点需视平台规则手动切换”）。
2. **定义与指标边界 (Definitions & Constraints)**: 紧接着列出结论适用的具体网络环境、测试工具、数据获取日期与范围。
3. **真实证据数据 (Evidentiary Tables)**: 表格必须标注具体物理单位（Mbps、ms、元）、样本数量、记录来源及核验日期。
4. **优缺点与限制并置 (Pros & Cons Proximity)**: 限制条件（Cons）紧挨着优势说明，严禁把关键缺陷隐藏在看不见的页脚免责声明里。
5. **真实问答 (Genuine FAQ)**: FAQ 仅收录正文中真实被解答的客观问题，绝不为了堆砌 Schema 虚构低质问答。

---

## 2. 技术 SEO 与 Astro 静态架构标准

1. **静态 HTML 优先 (Zero-JS Content Accessibility)**:
   - 所有品牌基础信息、套餐价格表、测速数据表、内容大纲和核心正文，全部在 Astro 服务端预渲染阶段编译为静态 HTML。
   - 禁用 JavaScript 的网络爬虫与视障读屏软件均能 100% 完整读取所有核心内容与内链。
2. **唯一性元标签与自引用 Canonical**:
   - 每个路由具有独一无二的 `<title>`（不超过 60 字符，核心关键词前置）、`<meta name="description">`（120-160 字符，包含行动召唤与差异点）和唯一 `<h1>`。
   - 严格配置自引用规范链接 `<link rel="canonical" href="https://jichangwending.world/..." />`，避免重复索引。
3. **Sitemap 与 Lastmod 真实性准则**:
   - 禁止在每次构建或部署时机械刷新所有页面的 `lastmod` 时间戳。
   - 仅在对应文章或品牌事实数据发生实质性内容修订时，更新 `modifiedDate`。
4. **筛选参数不产生无限索引 (Faceted Navigation Control)**:
   - 品牌库的筛选、标签组合与排序纯在客户端静态过滤或使用查询参数，禁止为筛选组合生成无限的深层动态 URL，避免蜘蛛陷入爬取黑洞。
5. **结构化数据同源规范 (Schema.org / JSON-LD)**:
   - 首页：`WebSite` + 真实发布者 `Organization`。
   - 品牌库：`CollectionPage` + `ItemList` 结构化呈现 41 个品牌实体。
   - 品牌详情页：`Article` / `ItemPage`，在具备明确付费与服务条款时接入 `Product` / `Offer`（标注实付价格与币种 CNY）。
   - 全站各级页面：`BreadcrumbList` 面包屑导航。
   - **底线禁区**: 没有真实用户评星前**绝不使用** `aggregateRating`；没有开放数据许可**绝不标榜** `Dataset`；普通 FAQ 不冒用 `QAPage`。

---

## 3. 搜索引擎与 AI 爬虫机器人策略 (`robots.txt`)

本站公开内容面向全网主流合法爬虫开放索引与检索，同时根据公开标准区分搜索引擎抓取与大模型离线训练用途：

```
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Applebot
Allow: /

# AI 搜索与引用引擎
User-agent: OAI-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

# 禁止抓取未通过校验的开发测试与后台路径
User-agent: *
Allow: /
Disallow: /api/
Disallow: /scratch/
Disallow: /admin/

Sitemap: https://jichangwending.world/sitemap-index.xml
```

---

## 4. 严禁虚假背书与数据造假红线

- 严禁虚构“本站获国际网络实验室认证”、“拥有10年资深红客站长”、“超10万付费学员口碑推荐”等虚假权威背书。
- 严禁假造官方媒体报道、伪造用户头像与假评论。
- 品牌无 Logo 时，一律使用统一的技术字符标识（Monogram Badge），严禁仿造或冒用非官方授权的商标图像。
