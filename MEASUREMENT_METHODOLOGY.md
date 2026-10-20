# 测速与稳定性测量方法论 (Measurement Methodology)

本文档严格界定本站所有测速数据、网络性能指标与稳定性观测的计算模型、数值换算规则与事实边界。严禁将离散探测伪造成时间可用率，严禁在缺乏长期数据时伪造 99.9% 或 30 天全绿状态格。

---

## 1. 四维状态数据模型规范

在底层数据存储与前台展示中，任何性能与状态记录必须严格分离为四个独立维度，不得使用单一状态字段混淆：

```typescript
export interface DataPointModel<T> {
  rawValue: any;                 // 原始数值
  rawUnit: string;               // 原始单位 (如 "MB/s", "ms", "折")
  normalizedValue: T | null;     // 规范化数值 (如 Mbps, 毫秒数, 小数)
  sourceRef: string;             // 来源文件及行号定位 (如 "Source A #1", "Source B 2026-05-02")
  recordedAt: string;            // 原始记录发生时间 (ISO 8601 或 YYYY-MM-DD)
  verifiedAt: string;            // 本站人工核验确认时间
  applicableEnvironment: string; // 适用网络环境说明 (如 "非晚高峰单次", "珠海联通9Gbps")

  // 四大独立状态维度
  provenance: 'vendor' | 'supplied_record' | 'third_party' | 'self_measured' | 'example';
  verification: 'verified' | 'unverified' | 'conflicting' | 'incomplete';
  freshness: 'current_verified' | 'dated' | 'stale' | 'unknown';
  result: 'success' | 'failure' | 'partial' | 'not_tested' | 'indeterminate';
}
```

### 维度取值解释：
1. **Provenance (来源溯源)**:
   - `vendor`: 商家口头宣传或官网自我声称（如“晚高峰0丢包”、“1小时修复”）。
   - `supplied_record`: 输入资料中已有的现成测速记录（如 Source A 2026-10-19 测速）。
   - `third_party`: 独立第三方监测平台或站长公开采样记录（如 Source B 历史测速）。
   - `self_measured`: 本站实验环境亲自受控实测。
   - `example`: Source C 等样式文件中的演示设计数值，**绝对严禁**流入生产品牌数据。
2. **Verification (核验状态)**:
   - `verified`: 已核对无误。
   - `unverified`: 尚未取得交叉证据。
   - `conflicting`: 资料内存在明确矛盾（如价格冲突、优惠码冲突）。
   - `incomplete`: 资料存在缺失（如只有月付价格而流量被遮挡）。
3. **Freshness (时效生命周期)**:
   - `current_verified`: 30 天内有效核验。
   - `dated`: 具有明确历史时间戳但已超过 30 天。
   - `stale`: 超过 180 天未有新数据。
   - `unknown`: 缺乏明确时间戳。
4. **Result (结果语义)**:
   - `success`: 成功连接且吞吐正常。
   - `failure`: 彻底超时或连接被重置。
   - `partial`: 部分节点可用或仅部分功能支持。
   - `not_tested`: 未进行该项测试（严格如实呈现，不补 0）。
   - `indeterminate`: 无法做出确定判定。

---

## 2. 价格与资费口径规范
- **当次实付 (Actual Out-of-pocket)**: 用户在结算时实际需支付的人民币扣款总额。
- **月均单价 (Monthly Equivalent)**: 明确周期的总价除以对应的月份数（例如年付 120 元，月均 10 元/月；季付 66 元，月均 22 元/月）。
- **真月付 (True Monthly Plan)**: 用户可以按单月付费购买，次月无需强制绑定的套餐。
- **约数处理法则**: 原文为“年付约 5.6 元/月”或“年付约 7 元/月”时，**严禁**乘以 12 反推“年付精确实付 67.2 元”，必须如实标注为约数，并提醒用户以官网当前账单为准。

---

## 3. 测速与吞吐量计算模型
- **单位换算**: 1 Byte = 8 bits。$1\text{ MB/s} = 8\text{ Mbps}$。
  - 数据模型中同时保留原始值（如 `57.75 MB/s`）与换算值（如 `462.00 Mbps`）。
  - 禁止使用已经四舍五入后的数值去反向臆测原始精确日志。
- **延迟指标拆分**:
  - `ICMP Ping`: 本地网卡到目标 IP 的网络层往返时间。
  - `TCP Handshake RTT`: 传输层 SYN/ACK 握手往返时间。
  - `TLS 1.3 RTT`: 包含密码学密钥交换的端到端安全握手时间。
  - 原文未注明的延迟一律如实标注为“类型未注明”，严禁把应用层延迟假冒为专线物理延迟。
- **晚高峰标定约定**:
  - 晚高峰研究时间窗口设定为：`20:00 – 23:00 (Asia/Shanghai)`。
  - 只有实际采样时间戳精确落在该窗口内的测试，才被允许打上“晚高峰实测”标签。非晚高峰测试（如 Source A 的 2026-10-19 测速）必须明确标识为非晚高峰快照，严禁进入晚高峰推荐排行动摇客观性。

---

## 4. 稳定性、可用率与覆盖率严密模型

本站采用数学上完备的状态离散采样评估模型：

设在一段观测周期内，针对某节点预先规划了 $E$ 个唯一采样时间槽位 (Planned Observation Slots)：
- $S$: 明确探测成功次数 (Success)
- $F$: 明确探测失败次数 (Failure)
- $U$: 未知状态（探针自身故障或网络中断无法采样）(Unknown)
- $K$: 主动跳过（如机房已知计划维护并提前备案）(Skipped)

根据网络可观测性标准：
$$\text{有效观测成功率 (Observed Success Rate)} = \frac{S}{S + F} \times 100\%$$
$$\text{计划覆盖率 (Plan Coverage)} = \frac{S + F}{E} \times 100\%$$

### 约束准则：
1. **分母保护**: 若 $S + F = 0$（即尚无有效采样），成功率显示为 `不可计算 (N/A)`，并同步展示计划覆盖率为 $0\%$。严禁在无样本时显示 $100\%$ 或 $0\%$。
2. **重试处理**: 探针自动重试（如 3 次重试）属于单次计划槽位内的诊断行为，不得在成功后人为放大 $S$ 的分母。
3. **可用率真实性**: 离散探测成功率（如 10 次探测成功 9 次）只能称为“探测成功率 90%”，**绝对禁止**等同于“本月时间在线率 90%”，更不得据此推导虚假的 30 天无故障时间 (MTBF/MTTR)。
4. **故障不能静默剔除**: 偶发失败必须真实计入 $F$，严禁为了美化图表将偶然断网从历史记录中删除。
