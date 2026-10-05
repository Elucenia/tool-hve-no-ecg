<!-- ELUCENIA technical documentation · hve-no-ecg · ar · no clinical/professional/rights approval -->

# معايير الجهد في تخطيط القلب لتضخم البطين الأيسر

[الشروط والمصادر والأذونات](https://elucenia.org/ar/tools/hve-no-ecg)

## كيفية الاستخدام

استخدم الأداة في البوابة أو افتح index.html عبر خادم HTTP محلي. اختر اللغة، وأكمل الحقول، ثم أجرِ الحساب.

## المدخلات والوحدات

### الجنس

`sexo`

- `F` — أنثى
- `M` — ذكر

### موجة S في V1

`sv1`

mm · النطاق: ٠–٦٠

### موجة R في V5

`rv5`

mm · النطاق: ٠–٦٠

### موجة R في V6

`rv6`

mm · النطاق: ٠–٦٠

### موجة R في aVL

`ravl`

mm · النطاق: ٠–٤٠

### موجة S في V3

`sv3`

mm · النطاق: ٠–٦٠

### مدة QRS (لحاصل Cornell)

`qrs`

ms · اختياري · النطاق: ٦٠–٢٥٠

### هل عُيّر ECG إلى ١٠ mm/mV وفُحصت القياسات؟

`contexto`

- `0` — لا
- `1` — نعم

## إصدار الطريقة

Sokolow–Lyon 1949؛ Cornell 1987؛ حاصل ضرب Cornell (LIFE)

## المعادلة الموثقة

Sokolow–Lyon: SV1 + max(RV5,RV6) ≥ 35 mm. R aVL ≥ 11 mm. Cornell: RaVL + SV3 \> 28 mm لدى الرجال أو \> 20 mm لدى النساء. حاصل ضرب Cornell: (Cornell + 6 mm لدى النساء) × QRS \> 2440 mm·ms.

## الحدود والفئة السكانية

المخرَج هو عدد المعايير الإيجابية، دون تشخيص تضخّم البطين الأيسر أو إعلان غيابه. يستخدم حاصل الضرب اصطلاح LIFE بإضافة +6 mm لدى النساء؛ وتستخدم إصدارات أخرى اصطلاحات مختلفة.

## المراجع

- [Okin et al. · LIFE 2004 · قاعدة حساب حاصل Cornell](https://jamanetwork.com/journals/jama/fullarticle/199807)

- [Sokolow M, Lyon TP. The ventricular complex in left ventricular hypertrophy as obtained by unipolar precordial and limb leads. Am Heart J, 1949.](https://doi.org/10.1016/0002-8703(49)90562-1)

- [Casale PN et al. Improved sex-specific criteria of left ventricular hypertrophy for clinical and computer interpretation of electrocardiograms: validation with autopsy findings. Circulation, 1987.](https://doi.org/10.1161/01.CIR.75.3.565)

- [Okin PM et al. Electrocardiographic identification of increased left ventricular mass by simple voltage-duration products. J Am Coll Cardiol, 1995.](https://doi.org/10.1016/0735-1097(94)00371-V)

## إعادة إجراء الاختبارات التقنية

شغّل node test.cjs في المجلد الجذري لهذا المستودع لتكرار الحالات الاصطناعية المسجلة. تُحفظ المدخلات والنتائج المتوقعة وحدود التفاوت الأصلية. لا تُعدّ الاختبارات التقنية تحققًا سريريًا.

```sh
node test.cjs
```

يحتوي tool.json على المصادر والإصدار ونطاق المراجعة. يحتفظ examples.json بالمدخلات والنتائج المتوقعة للحالات الاصطناعية؛ ويسجل results.json النتائج التي تم الحصول عليها.

[السجل والمراجع](../tool.json) · [شيفرة JavaScript](../calculator.js) · [حالات مرجعية](../examples.json) · [results.json](../results.json)

## المراجعة وشروط الاستخدام

لم تُجرَ مراجعة سريرية مستقلة.

هذه الواجهة ترجمة أعدّها مؤلفوها، وليست إصدارًا رسميًا أو معتمدًا. لم تُجرَ مراجعة سريرية مستقلة أو مراجعة لغوية مهنية، ولم تُستكمل الموافقة على حقوق استخدام الأدوات.

نتيجة المعادلة أو التصنيف. يعتمد التفسير والتصرف ومدى الانطباق على التقييم المهني والمصدر المحدد.

## الترخيص ونسبة العمل إلى أصحابه

ينطبق Apache-2.0 على كود ELUCENIA فقط. تبقى حقوق الأدوات والمنشورات والترجمات والبيانات لأصحابها المعنيين. احتفظ بملفّي LICENSE وNOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
