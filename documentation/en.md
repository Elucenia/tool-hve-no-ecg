<!-- ELUCENIA technical documentation · hve-no-ecg · en · no clinical/professional/rights approval -->

# ECG voltage criteria for LVH

[conditions, sources and permissions](https://elucenia.org/en/tools/hve-no-ecg)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Sex

`sexo`

- `F` — Female
- `M` — Male

### S wave in V1

`sv1`

mm · range: 0–60

### R wave in V5

`rv5`

mm · range: 0–60

### R wave in V6

`rv6`

mm · range: 0–60

### R wave in aVL

`ravl`

mm · range: 0–40

### S wave in V3

`sv3`

mm · range: 0–60

### QRS duration (for the Cornell product)

`qrs`

ms · optional · range: 60–250

### ECG with 10 mm/mV calibration and measurements checked?

`contexto`

- `0` — No
- `1` — Yes

## Method edition

Sokolow–Lyon 1949; Cornell 1987; Cornell product (LIFE)

## Documented formula

Sokolow–Lyon: SV1 + max(RV5,RV6) ≥ 35 mm. R aVL ≥ 11 mm. Cornell: RaVL + SV3 \> 28 mm in men or \> 20 mm in women. Cornell product: (Cornell + 6 mm in women) × QRS \> 2440 mm·ms.

## Limits and population

Output is the number of positive criteria, not an LVH diagnosis or a statement that LVH is absent. The product uses the LIFE convention of +6 mm in women; other versions use different conventions.

## References

- [Okin et al. · LIFE 2004 · Cornell product convention](https://jamanetwork.com/journals/jama/fullarticle/199807)

- [Sokolow M, Lyon TP. The ventricular complex in left ventricular hypertrophy as obtained by unipolar precordial and limb leads. Am Heart J, 1949.](https://doi.org/10.1016/0002-8703(49)90562-1)

- [Casale PN et al. Improved sex-specific criteria of left ventricular hypertrophy for clinical and computer interpretation of electrocardiograms: validation with autopsy findings. Circulation, 1987.](https://doi.org/10.1161/01.CIR.75.3.565)

- [Okin PM et al. Electrocardiographic identification of increased left ventricular mass by simple voltage-duration products. J Am Coll Cardiol, 1995.](https://doi.org/10.1016/0735-1097(94)00371-V)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
