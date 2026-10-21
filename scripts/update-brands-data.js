import fs from 'fs';
import path from 'path';

const brandsPath = 'src/data/brands.json';
const brands = JSON.parse(fs.readFileSync(brandsPath, 'utf8'));

// Logo mappings
const logoMap = {
  lightspeed: '/logos/光速云主图.png',
  feimao: '/logos/飞猫云主图.png',
  ermao: '/logos/2mao_logo.webp',
  xingdaomeng: '/logos/xdm_logo.webp',
  yifan: '/logos/1fly_logo.webp',
  u1s1: '/logos/u1s1主图.png',
  sogo: '/logos/sogo.webp',
  yuzhou: '/logos/yuzhou_logo.webp',
  jilian: '/logos/极连云主图.png',
  guangnian: '/logos/光年梯主图.png',
  quanqiu: '/logos/全球云主图.png',
  sujie: '/logos/sujie_logo.webp',
  tiziyun: '/logos/梯子云256x256.png',
  yinxingren: '/logos/隐形人256x256.png',
  lingdong: '/logos/灵动云256x256.png',
  flyingbird: '/logos/flyingbird.webp',
  tntcloud: '/logos/TNT.webp',
  qingyunti: '/logos/qyt_logo.webp',
  edgenova: '/logos/edgenova_logo.webp',
  fatcat: '/logos/fclogo.webp',
  longmao: '/logos/totoro.webp',
  cyberguard: '/logos/kuku_logo.webp',
  baiyueguang: '/logos/echo_logo.webp',
  yunjiexian: '/logos/yinyun_logo.webp',
  firefly: '/logos/flyv机场256x256.png',
  weifeng: '/logos/bee_logo.webp'
};

// Speedtest PNG mappings
const speedtestMap = {
  lightspeed: {
    file: '/evidence/speedtest/光速云-节点测速实测.png',
    testedAt: '2026-08-11T14:32:56+08:00',
    backend: '珠海联通 5Gbps / 32线程',
    protocol: 'Shadowsocks / VLESS',
    maxSpeedMbps: 624.5,
    avgSpeedMbps: 218.4,
    avgLatencyMs: 38.5
  },
  feimao: {
    file: '/evidence/speedtest/飞猫云-节点测速实测.png',
    testedAt: '2026-08-11T08:52:30+08:00',
    backend: '珠海联通 5Gbps / 32线程',
    protocol: 'Shadowsocks',
    maxSpeedMbps: 580.2,
    avgSpeedMbps: 195.6,
    avgLatencyMs: 42.1
  },
  weifeng: {
    file: '/evidence/speedtest/微风-节点测速实测.png',
    testedAt: '2026-08-11T11:20:15+08:00',
    backend: '珠海联通 5Gbps / 32线程',
    protocol: 'Shadowsocks',
    maxSpeedMbps: 450.8,
    avgSpeedMbps: 162.3,
    avgLatencyMs: 48.0
  },
  muguang: {
    file: '/evidence/speedtest/幕光加速-节点测速实测.png',
    testedAt: '2026-08-11T16:15:20+08:00',
    backend: '珠海联通 5Gbps / 32线程',
    protocol: 'Shadowsocks',
    maxSpeedMbps: 512.0,
    avgSpeedMbps: 184.2,
    avgLatencyMs: 39.8
  },
  xingdaomeng: {
    file: '/evidence/speedtest/星岛梦-节点测速实测.png',
    testedAt: '2026-08-11T01:48:13+08:00',
    backend: '珠海联通 5Gbps / 32线程',
    protocol: 'Shadowsocks',
    maxSpeedMbps: 540.6,
    avgSpeedMbps: 178.5,
    avgLatencyMs: 45.2
  },
  ermao: {
    file: '/evidence/speedtest/二猫云-节点测速实测.png',
    testedAt: '2026-08-11T10:45:27+08:00',
    backend: '珠海联通 5Gbps / 32线程',
    protocol: 'Shadowsocks',
    maxSpeedMbps: 480.2,
    avgSpeedMbps: 155.0,
    avgLatencyMs: 52.3
  },
  weitu: {
    file: '/evidence/speedtest/唯兔云-节点测速实测.png',
    testedAt: '2026-08-11T13:55:08+08:00',
    backend: '珠海联通 5Gbps / 32线程',
    protocol: 'Shadowsocks',
    maxSpeedMbps: 495.1,
    avgSpeedMbps: 168.4,
    avgLatencyMs: 46.7
  },
  yuzhou: {
    file: '/evidence/speedtest/宇宙云-节点测速实测.png',
    testedAt: '2026-08-11T21:04:24+08:00',
    backend: '珠海联通 9Gbps / 32线程',
    protocol: 'VLESS',
    maxSpeedMbps: 610.8,
    avgSpeedMbps: 205.3,
    avgLatencyMs: 36.2
  },
  u1s1: {
    file: '/evidence/speedtest/U1S1-节点测速实测.png',
    testedAt: '2026-08-11T22:33:29+08:00',
    backend: '珠海联通 5Gbps / 32线程',
    protocol: 'Shadowsocks',
    maxSpeedMbps: 430.5,
    avgSpeedMbps: 142.1,
    avgLatencyMs: 58.4
  },
  lingmao: {
    file: '/evidence/speedtest/灵猫网络-节点测速实测.png',
    testedAt: '2026-08-11T18:45:40+08:00',
    backend: '珠海联通 5Gbps / 32线程',
    protocol: 'Shadowsocks',
    maxSpeedMbps: 410.0,
    avgSpeedMbps: 138.6,
    avgLatencyMs: 55.0
  },
  jilian: {
    file: '/evidence/speedtest/极连云-节点测速实测.png',
    testedAt: '2026-08-11T22:46:50+08:00',
    backend: '珠海联通 5Gbps / 32线程',
    protocol: 'Shadowsocks',
    maxSpeedMbps: 465.3,
    avgSpeedMbps: 152.0,
    avgLatencyMs: 49.3
  },
  guangnian: {
    file: '/evidence/speedtest/光年梯-节点测速实测.png',
    testedAt: '2026-08-11T14:38:04+08:00',
    backend: '珠海联通 5Gbps / 32线程',
    protocol: 'Shadowsocks',
    maxSpeedMbps: 390.2,
    avgSpeedMbps: 125.4,
    avgLatencyMs: 62.1
  },
  yifan: {
    file: '/evidence/speedtest/一翻云-节点测速实测.png',
    testedAt: '2026-08-11T00:21:30+08:00',
    backend: '珠海联通 5Gbps / 32线程',
    protocol: 'Shadowsocks',
    maxSpeedMbps: 440.8,
    avgSpeedMbps: 148.9,
    avgLatencyMs: 53.6
  },
  sogo: {
    file: '/evidence/speedtest/SOGO云-节点测速实测.png',
    testedAt: '2026-08-11T18:57:59+08:00',
    backend: '珠海联通 5Gbps / 32线程',
    protocol: 'Shadowsocks',
    maxSpeedMbps: 472.0,
    avgSpeedMbps: 160.2,
    avgLatencyMs: 47.8
  },
  kexin: {
    file: '/evidence/speedtest/可信云-节点测速实测.png',
    testedAt: '2026-08-11T15:32:35+08:00',
    backend: '珠海联通 5Gbps / 32线程',
    protocol: 'Shadowsocks',
    maxSpeedMbps: 425.4,
    avgSpeedMbps: 139.0,
    avgLatencyMs: 56.2
  },
  sujie: {
    file: '/evidence/speedtest/速界-节点测速实测.png',
    testedAt: '2026-08-11T15:39:36+08:00',
    backend: '珠海联通 5Gbps / 32线程',
    protocol: 'Shadowsocks',
    maxSpeedMbps: 520.1,
    avgSpeedMbps: 172.8,
    avgLatencyMs: 44.0
  },
  quanqiu: {
    file: '/evidence/speedtest/全球云-节点测速实测.png',
    testedAt: '2026-08-11T15:50:43+08:00',
    backend: '珠海联通 5Gbps / 32线程',
    protocol: 'Shadowsocks',
    maxSpeedMbps: 458.0,
    avgSpeedMbps: 150.5,
    avgLatencyMs: 51.0
  }
};

// Lightspeed unlock images
const lightspeedUnlockImages = [
  '/evidence/unlock/lightspeed_photo_2026-08-19_12-13-01.jpg',
  '/evidence/unlock/lightspeed_photo_2026-08-19_12-13-50.jpg',
  '/evidence/unlock/lightspeed_photo_2026-08-19_12-13-58.jpg',
  '/evidence/unlock/lightspeed_photo_2026-08-19_12-18-40.jpg',
  '/evidence/unlock/lightspeed_photo_2026-08-19_12-20-10.jpg'
];

brands.forEach(b => {
  // 1. Assign Logo
  if (logoMap[b.id]) {
    b.logo = logoMap[b.id];
  } else {
    b.logo = null;
  }

  // 2. Assign Speedtest Image & Metadata
  if (speedtestMap[b.id]) {
    b.speedtestEvidence = speedtestMap[b.id];
  }

  // 3. Special Upgrade for Lightspeed (光速云)
  if (b.id === 'lightspeed') {
    b.unlockEvidence = {
      images: lightspeedUnlockImages,
      testedAt: '2026-08-19T12:20:00+08:00',
      testedFeatures: [
        '跨境电商专有网络保障',
        'TikTok 直播极速推流',
        '海外社媒投放与推广防封',
        '远程办公 / 企业内网超低时延访问',
        'Netflix / Disney+ / YouTube 4K/8K 原生解锁',
        'OpenAI ChatGPT / Claude 全面解锁'
      ]
    };
    b.officialUrl = 'https://sahude.gsyvipaff.com/#/?code=keqgvT5Y';
    b.affiliateUrl = 'https://sahude.gsyvipaff.com/#/?code=keqgvT5Y';
    b.affiliateCode = 'keqgvT5Y';
    b.couponCodes = [
      {
        code: 'AMM',
        discount: '新人专享优惠券 / 立减可用',
        notes: '适用于轻量版、极速版及常规周期订阅方案'
      }
    ];
    b.pricingStarting = {
      amount: 99,
      period: '年付',
      monthlyEquivalent: 8.25,
      trafficGB: 69,
      isApproximate: false
    };
    b.plans = [
      {
        name: '光速云 · 致敬斯诺克147永久套餐',
        billing: '一次性付费（无过期时间）',
        price: 147,
        trafficGB: 247,
        cycle: '永久有效 / 不限时不过期',
        features: [
          '原生稳定节点，单节点最高 2.5Gbps',
          '不限设备数量同时在线',
          '覆盖香港×20、台湾×5、日本×10、新加坡×10、美国×10等全球机房',
          '适合轻度办公、邮件、资料查阅、聊天与应急备用'
        ]
      },
      {
        name: '光速云 · 轻量版',
        billing: '年付 99 元（折合 8.25 元/月）',
        price: 99,
        trafficGB: 69,
        cycle: '每月 69GB 重置',
        features: [
          '原生稳定节点，不限并发设备',
          '年付折算单价极低，性价比极高',
          '解锁跨境电商、社媒投放与流媒体高清播放'
        ]
      },
      {
        name: '光速云 · 极速版',
        billing: '月付 25 元（半年9折/年付8折/两年75折/三年7折）',
        price: 25,
        trafficGB: 168,
        cycle: '每月 168GB 重置',
        features: [
          '全球 IPLC 物理专线支撑，全节点 1 倍率',
          '单节点最高 2.5Gbps 突发带宽，不限在线设备',
          '7×24 小时专业运维与低延迟流媒体/AI 原生解锁'
        ]
      },
      {
        name: '光速云 · 定制版',
        billing: '月付 680 元（可享半年至三年折扣）',
        price: 680,
        trafficGB: 500,
        cycle: '每月 500GB 独享重置',
        features: [
          '独享原生 IP / 独立物理专线带宽，按需独立部署',
          '全 IPLC 专线接入，超低时延与高隔离隐私保护',
          '客服一对一专属保障，TikTok 直播与跨境电商企业首选'
        ]
      }
    ];
  }
});

fs.writeFileSync(brandsPath, JSON.stringify(brands, null, 2), 'utf8');
console.log('Successfully updated brands.json with Logos, Speedtest, and Lightspeed upgrades!');
