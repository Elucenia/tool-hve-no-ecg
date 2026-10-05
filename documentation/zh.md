<!-- ELUCENIA technical documentation · hve-no-ecg · zh · no clinical/professional/rights approval -->

# 左心室肥厚的心电图电压标准

[条件、来源与许可](https://elucenia.org/zh/tools/hve-no-ecg)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 性别

`sexo`

- `F` — 女性
- `M` — 男性

### V1 导联 S 波

`sv1`

mm · 范围: 0–60

### V5 导联 R 波

`rv5`

mm · 范围: 0–60

### V6 导联 R 波

`rv6`

mm · 范围: 0–60

### aVL 导联 R 波

`ravl`

mm · 范围: 0–40

### V3 导联 S 波

`sv3`

mm · 范围: 0–60

### QRS 时限（用于 Cornell 乘积）

`qrs`

ms · 选填 · 范围: 60–250

### ECG 校准为 10 mm/mV，测量已核对？

`contexto`

- `0` — 否
- `1` — 是

## 方法版本

Sokolow–Lyon 1949；Cornell 1987；Cornell乘积（LIFE）

## 已记录的公式

Sokolow–Lyon：SV1 + max(RV5,RV6) ≥ 35 mm。R aVL ≥ 11 mm。Cornell：男性RaVL + SV3 \> 28 mm，女性\> 20 mm。Cornell乘积：（Cornell + 女性6 mm）× QRS \> 2440 mm·ms。

## 限制与适用人群

输出为阳性标准的数量，不诊断左心室肥厚，也不声明其不存在。乘积使用LIFE约定，对女性加+6 mm；其他版本使用不同约定。

## 参考文献

- [Okin et al. · LIFE 2004 · Cornell乘积计算约定](https://jamanetwork.com/journals/jama/fullarticle/199807)

- [Sokolow M, Lyon TP. The ventricular complex in left ventricular hypertrophy as obtained by unipolar precordial and limb leads. Am Heart J, 1949.](https://doi.org/10.1016/0002-8703(49)90562-1)

- [Casale PN et al. Improved sex-specific criteria of left ventricular hypertrophy for clinical and computer interpretation of electrocardiograms: validation with autopsy findings. Circulation, 1987.](https://doi.org/10.1161/01.CIR.75.3.565)

- [Okin PM et al. Electrocardiographic identification of increased left ventricular mass by simple voltage-duration products. J Am Coll Cardiol, 1995.](https://doi.org/10.1016/0735-1097(94)00371-V)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026
