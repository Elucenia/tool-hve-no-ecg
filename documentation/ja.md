<!-- ELUCENIA technical documentation · hve-no-ecg · ja · no clinical/professional/rights approval -->

# 左室肥大の心電図電位基準

[条件・出典・許諾](https://elucenia.org/ja/tools/hve-no-ecg)

## 使い方

ポータルでツールを使用するか、ローカルHTTPサーバー経由でindex.htmlを開いてください。言語を選択し、項目を入力して計算してください。

## 入力項目と単位

### 性別

`sexo`

- `F` — 女性
- `M` — 男性

### V1のS波

`sv1`

mm · 範囲: 0–60

### V5のR波

`rv5`

mm · 範囲: 0–60

### V6のR波

`rv6`

mm · 範囲: 0–60

### aVLのR波

`ravl`

mm · 範囲: 0–40

### V3のS波

`sv3`

mm · 範囲: 0–60

### QRS幅（Cornell積用）

`qrs`

ms · 任意 · 範囲: 60–250

### ECG校正10 mm/mVと測定値を確認しましたか？

`contexto`

- `0` — いいえ
- `1` — はい

## 方法の版

Sokolow–Lyon 1949；Cornell 1987；Cornell積（LIFE）

## 記載された計算式

Sokolow–Lyon：SV1 + max(RV5,RV6) ≥ 35 mm。R aVL ≥ 11 mm。Cornell：男性RaVL + SV3 \> 28 mm、女性\> 20 mm。Cornell積：（Cornell + 女性で6 mm）× QRS \> 2440 mm·ms。

## 限界・対象集団

出力は陽性基準の数であり、左室肥大の診断や否定ではありません。積は女性で+6 mmを加えるLIFEの規約を使用します。他の版では異なる規約があります。

## 参考文献

- [Okin et al. · LIFE 2004 · Cornell積の計算規約](https://jamanetwork.com/journals/jama/fullarticle/199807)

- [Sokolow M, Lyon TP. The ventricular complex in left ventricular hypertrophy as obtained by unipolar precordial and limb leads. Am Heart J, 1949.](https://doi.org/10.1016/0002-8703(49)90562-1)

- [Casale PN et al. Improved sex-specific criteria of left ventricular hypertrophy for clinical and computer interpretation of electrocardiograms: validation with autopsy findings. Circulation, 1987.](https://doi.org/10.1161/01.CIR.75.3.565)

- [Okin PM et al. Electrocardiographic identification of increased left ventricular mass by simple voltage-duration products. J Am Coll Cardiol, 1995.](https://doi.org/10.1016/0735-1097(94)00371-V)

## 技術テストの再現

このリポジトリのルートディレクトリでnode test.cjsを実行すると、記録された合成ケースを再実行できます。元の入力、期待結果、許容誤差は保持されています。技術テストは臨床的検証を意味しません。

```sh
node test.cjs
```

tool.jsonには出典、版、確認範囲が記録されています。examples.jsonには合成入力と期待結果が保持され、results.jsonには実際に得られた結果が記録されています。

[記録・参考文献](../tool.json) · [JavaScriptコード](../calculator.js) · [参照ケース](../examples.json) · [results.json](../results.json)

## 確認状況と使用条件

独立した臨床レビューは実施されていません。

このインターフェースは独自に作成した翻訳であり、公式版や認証済みの版ではありません。独立した臨床レビュー、専門家による言語レビュー、評価尺度等の権利許諾の確認は実施されていません。

式または分類の結果です。解釈、対応、適用可能性は専門家による評価と選択した出典に依存します。

## ライセンスと帰属表示

Apache-2.0はELUCENIAのコードにのみ適用されます。評価尺度等、出版物、翻訳、データの権利は、それぞれの権利者に帰属します。LICENSEとNOTICEを保持してください。

ELUCENIA · Felipe Guedes · Copyright © 2026
