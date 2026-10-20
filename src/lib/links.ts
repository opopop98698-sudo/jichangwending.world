// 集中链接注册表：从品牌数据库生成的类型安全链接映射
export interface AffiliateLink {
  brandId: string;
  name: string;
  affiliateUrl: string | null;
  officialUrl: string | null;
  code: string | null;
  commissionNotice: string;
}

export const AFFILIATE_LINKS: Record<string, AffiliateLink> = {
  'lightspeed': {
    brandId: 'lightspeed',
    name: "光速云",
    affiliateUrl: "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    officialUrl: "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    code: "keqgvT5Y",
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'feimao': {
    brandId: 'feimao',
    name: "飞猫云",
    affiliateUrl: "https://guangs.flycataff.com/#/?code=6uq0Xe9y",
    officialUrl: "https://guangs.flycataff.com/#/?code=6uq0Xe9y",
    code: "6uq0Xe9y",
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'weifeng': {
    brandId: 'weifeng',
    name: "微风网络",
    affiliateUrl: "https://edp01.breezenetaff.com/#/?code=t3huofyI",
    officialUrl: "https://edp01.breezenetaff.com/#/?code=t3huofyI",
    code: "t3huofyI",
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'muguang': {
    brandId: 'muguang',
    name: "暮光加速",
    affiliateUrl: "https://varnexa.twilightaff.com/#/?code=D1LHglg3",
    officialUrl: "https://varnexa.twilightaff.com/#/?code=D1LHglg3",
    code: "D1LHglg3",
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'dalaoyun': {
    brandId: 'dalaoyun',
    name: "大佬云",
    affiliateUrl: "https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN",
    officialUrl: "https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN",
    code: "jCPLmoWN",
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'xingdaomeng': {
    brandId: 'xingdaomeng',
    name: "星岛梦",
    affiliateUrl: "https://guangs.xingdaomeng.com/#/?code=1TynBYnR",
    officialUrl: "https://guangs.xingdaomeng.com/#/?code=1TynBYnR",
    code: "1TynBYnR",
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'ermao': {
    brandId: 'ermao',
    name: "二猫云",
    affiliateUrl: "https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW",
    officialUrl: "https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW",
    code: "7mjvgGbW",
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'wuyou': {
    brandId: 'wuyou',
    name: "无忧链接",
    affiliateUrl: "https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL",
    officialUrl: "https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL",
    code: "4ZoSbLdL",
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'weitu': {
    brandId: 'weitu',
    name: "唯兔云",
    affiliateUrl: "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA",
    officialUrl: "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA",
    code: "xIutqOBA",
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'firefly': {
    brandId: 'firefly',
    name: "Firefly",
    affiliateUrl: "https://vip02.fireflyaff.com/#/?code=2n7VURre",
    officialUrl: "https://vip02.fireflyaff.com/#/?code=2n7VURre",
    code: "2n7VURre",
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'yuzhou': {
    brandId: 'yuzhou',
    name: "宇宙云",
    affiliateUrl: "https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1",
    officialUrl: "https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1",
    code: "yrThwMP1",
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'u1s1': {
    brandId: 'u1s1',
    name: "U1S1",
    affiliateUrl: "https://guangs.vipaff.cc/#/?code=xhX5X22f",
    officialUrl: "https://guangs.vipaff.cc/#/?code=xhX5X22f",
    code: "xhX5X22f",
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'lingmao': {
    brandId: 'lingmao',
    name: "灵猫网络",
    affiliateUrl: "https://vip01.civetnet.com/#/?code=8MIAyxak",
    officialUrl: "https://vip01.civetnet.com/#/?code=8MIAyxak",
    code: "8MIAyxak",
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'jilian': {
    brandId: 'jilian',
    name: "极连云",
    affiliateUrl: "https://guangs.jlyvipaff.com/#/?code=VM1rKGUu",
    officialUrl: "https://guangs.jlyvipaff.com/#/?code=VM1rKGUu",
    code: "VM1rKGUu",
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'guangnian': {
    brandId: 'guangnian',
    name: "光年梯",
    affiliateUrl: "https://guangs.gntaff.com/#/?code=X1FoxjGE",
    officialUrl: "https://guangs.gntaff.com/#/?code=X1FoxjGE",
    code: "X1FoxjGE",
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'yifan': {
    brandId: 'yifan',
    name: "一翻云",
    affiliateUrl: "https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r",
    officialUrl: "https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r",
    code: "Yr7FhB7r",
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'sogo': {
    brandId: 'sogo',
    name: "SOGO云",
    affiliateUrl: "https://guangs.sogoyunaff.cc/#/?code=327Vs0w7",
    officialUrl: "https://guangs.sogoyunaff.cc/#/?code=327Vs0w7",
    code: "327Vs0w7",
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'kexin': {
    brandId: 'kexin',
    name: "可信云",
    affiliateUrl: "https://guangs.kosingaff.com/#/register?code=UYDtNlCY",
    officialUrl: "https://guangs.kosingaff.com/#/register?code=UYDtNlCY",
    code: "UYDtNlCY",
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'sujie': {
    brandId: 'sujie',
    name: "速界",
    affiliateUrl: "https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB",
    officialUrl: "https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB",
    code: "xgXzEfZB",
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'shanyue': {
    brandId: 'shanyue',
    name: "闪跃",
    affiliateUrl: "https://vip02.flashleapaff.com/#/?code=3lgzm9mm",
    officialUrl: "https://vip02.flashleapaff.com/#/?code=3lgzm9mm",
    code: "3lgzm9mm",
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'quanqiu': {
    brandId: 'quanqiu',
    name: "全球云",
    affiliateUrl: "https://guangs.gcvipaff.com/#/?code=Ov2nvU9C",
    officialUrl: "https://guangs.gcvipaff.com/#/?code=Ov2nvU9C",
    code: "Ov2nvU9C",
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'shandianshu': {
    brandId: 'shandianshu',
    name: "闪电鼠",
    affiliateUrl: "https://qwerty.shandianshuaff.com/#/?code=rUE75iYh",
    officialUrl: "https://qwerty.shandianshuaff.com/#/?code=rUE75iYh",
    code: "rUE75iYh",
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'yunjiexian': {
    brandId: 'yunjiexian',
    name: "云界线",
    affiliateUrl: "https://qwerty.yunjiexianaff.com/?code=HBaZ91c6",
    officialUrl: "https://qwerty.yunjiexianaff.com/?code=HBaZ91c6",
    code: "HBaZ91c6",
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'liulianyun': {
    brandId: 'liulianyun',
    name: "榴莲云",
    affiliateUrl: "https://qwerty.liulianyunaff.com#/?code=hS5pvbfE",
    officialUrl: "https://qwerty.liulianyunaff.com#/?code=hS5pvbfE",
    code: "hS5pvbfE",
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'shenxing': {
    brandId: 'shenxing',
    name: "神行加速",
    affiliateUrl: "https://qwerty.shenxingaff.com/#/?code=gawDQqVE",
    officialUrl: "https://qwerty.shenxingaff.com/#/?code=gawDQqVE",
    code: "gawDQqVE",
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'huanqiuti': {
    brandId: 'huanqiuti',
    name: "环球梯",
    affiliateUrl: "https://qwerty.huanqiutiaff.com/?code=9I4KRNPH",
    officialUrl: "https://qwerty.huanqiutiaff.com/?code=9I4KRNPH",
    code: "9I4KRNPH",
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'yinxingren': {
    brandId: 'yinxingren',
    name: "隐形人",
    affiliateUrl: "https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT",
    officialUrl: "https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT",
    code: "kcyEeoJT",
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'tiziyun': {
    brandId: 'tiziyun',
    name: "梯子云",
    affiliateUrl: "https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0",
    officialUrl: "https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0",
    code: "7EmnpHs0",
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'wgetcloud': {
    brandId: 'wgetcloud',
    name: "WgetCloud",
    affiliateUrl: "https://invite.wgetcloud.ltd/auth/register?code=VLG2xb",
    officialUrl: "https://invite.wgetcloud.ltd/auth/register?code=VLG2xb",
    code: "VLG2xb",
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'baiyueguang': {
    brandId: 'baiyueguang',
    name: "白月光",
    affiliateUrl: "https://www.sibker.com/register?invite_code=gg6puAId",
    officialUrl: "https://www.sibker.com/register?invite_code=gg6puAId",
    code: "gg6puAId",
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'flyingbird': {
    brandId: 'flyingbird',
    name: "FlyingBird",
    affiliateUrl: null,
    officialUrl: null,
    code: null,
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'cyberguard': {
    brandId: 'cyberguard',
    name: "CyberGuard",
    affiliateUrl: "https://cyberguard.best/#/register?code=AxXNNYng",
    officialUrl: "https://cyberguard.best/#/register?code=AxXNNYng",
    code: "AxXNNYng",
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'longmao': {
    brandId: 'longmao',
    name: "龙猫云",
    affiliateUrl: null,
    officialUrl: null,
    code: null,
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'fatcat': {
    brandId: 'fatcat',
    name: "FATCAT",
    affiliateUrl: null,
    officialUrl: null,
    code: null,
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'tntcloud': {
    brandId: 'tntcloud',
    name: "TNTCloud",
    affiliateUrl: null,
    officialUrl: null,
    code: null,
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'qingyunti': {
    brandId: 'qingyunti',
    name: "青云梯",
    affiliateUrl: null,
    officialUrl: null,
    code: null,
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'shanshui': {
    brandId: 'shanshui',
    name: "山水云",
    affiliateUrl: "https://sldm1.ssyylf.com/#/register?code=YD5iQ888",
    officialUrl: "https://sldm1.ssyylf.com/#/register?code=YD5iQ888",
    code: "YD5iQ888",
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'lingdong': {
    brandId: 'lingdong',
    name: "灵动云",
    affiliateUrl: "https://varnexa.lingdongaff.com/#/?code=wZvEhEoI",
    officialUrl: "https://varnexa.lingdongaff.com/#/?code=wZvEhEoI",
    code: "wZvEhEoI",
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'wavenet': {
    brandId: 'wavenet',
    name: "浪网",
    affiliateUrl: "https://varnexa.wavenetaff.com/#/?code=xwAM4tTd",
    officialUrl: "https://varnexa.wavenetaff.com/#/?code=xwAM4tTd",
    code: "xwAM4tTd",
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'edgenova': {
    brandId: 'edgenova',
    name: "EdgeNova",
    affiliateUrl: "https://work.edgenovaaff.cc/#/register?code=cl3iB5YG",
    officialUrl: "https://work.edgenovaaff.cc/#/register?code=cl3iB5YG",
    code: "cl3iB5YG",
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
  'sslar': {
    brandId: 'sslar',
    name: "SSLAR",
    affiliateUrl: null,
    officialUrl: null,
    code: null,
    commissionNotice: '含推广合作链接，通过链接注册可能为本站带来佣金，不影响用户支付价格'
  },
};

export function getAffiliateLink(brandId: string): { url: string | null; commissionNote: string } {
  const item = AFFILIATE_LINKS[brandId];
  if (!item || !item.affiliateUrl) {
    return {
      url: null,
      commissionNote: '暂无独立推广入口'
    };
  }
  return {
    url: item.affiliateUrl,
    commissionNote: item.commissionNotice
  };
}

