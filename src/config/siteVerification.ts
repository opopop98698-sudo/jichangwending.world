/**
 * 搜索引擎站长平台所有权验证配置
 * 
 * 留空时不会在 HTML 源码中输出空标签。
 * 当站长平台生成验证 Meta 时，直接填入对应字段字符串即可（无需包含 meta 标签本身）。
 * 也可以通过构建环境变量注入（例如 PUBLIC_GOOGLE_SITE_VERIFICATION）。
 */
export const siteVerificationConfig = {
  // Google Search Console: <meta name="google-site-verification" content="xxx" />
  google: process.env.PUBLIC_GOOGLE_SITE_VERIFICATION || '',

  // Bing Webmaster Tools: <meta name="msvalidate.01" content="xxx" />
  bing: process.env.PUBLIC_BING_SITE_VERIFICATION || '',

  // 神马站长平台 (yisouspider): <meta name="shenma-site-verification" content="xxx" />
  shenma: process.env.PUBLIC_SHENMA_SITE_VERIFICATION || '',

  // 百度搜索资源平台: <meta name="baidu-site-verification" content="xxx" />
  baidu: process.env.PUBLIC_BAIDU_SITE_VERIFICATION || ''
};
