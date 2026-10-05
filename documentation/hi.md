<!-- ELUCENIA technical documentation · hve-no-ecg · hi · no clinical/professional/rights approval -->

# बाएँ निलय की अतिवृद्धि के लिए ECG वोल्टेज मानदंड

[शर्तें, स्रोत और अनुमतियाँ](https://elucenia.org/hi/tools/hve-no-ecg)

## उपयोग कैसे करें

पोर्टल पर उपकरण का उपयोग करें या स्थानीय HTTP सर्वर के माध्यम से index.html खोलें। भाषा चुनें, फ़ील्ड भरें और गणना करें।

## इनपुट और इकाइयाँ

### लिंग

`sexo`

- `F` — महिला
- `M` — पुरुष

### V1 में S तरंग

`sv1`

mm · सीमा: 0–60

### V5 में R तरंग

`rv5`

mm · सीमा: 0–60

### V6 में R तरंग

`rv6`

mm · सीमा: 0–60

### aVL में R तरंग

`ravl`

mm · सीमा: 0–40

### V3 में S तरंग

`sv3`

mm · सीमा: 0–60

### QRS अवधि (Cornell उत्पाद हेतु)

`qrs`

ms · वैकल्पिक · सीमा: 60–250

### क्या ECG कैलिब्रेशन 10 mm/mV और माप जाँचे हैं?

`contexto`

- `0` — नहीं
- `1` — हाँ

## विधि का संस्करण

Sokolow–Lyon 1949; Cornell 1987; Cornell गुणनफल (LIFE)

## दस्तावेज़ित सूत्र

Sokolow–Lyon: SV1 + max(RV5,RV6) ≥ 35 mm। R aVL ≥ 11 mm। Cornell: पुरुषों में RaVL + SV3 \> 28 mm या महिलाओं में \> 20 mm। Cornell गुणनफल: (Cornell + महिलाओं में 6 mm) × QRS \> 2440 mm·ms।

## सीमाएँ और जनसमूह

आउटपुट सकारात्मक मानदंडों की संख्या है, बाएँ निलय अतिवृद्धि का निदान या उसकी अनुपस्थिति की घोषणा नहीं। गुणनफल महिलाओं में LIFE की +6 mm की परंपरा उपयोग करता है; अन्य संस्करणों की परंपराएँ अलग हैं।

## संदर्भ

- [Okin et al. · LIFE 2004 · Cornell गुणनफल की परिपाटी](https://jamanetwork.com/journals/jama/fullarticle/199807)

- [Sokolow M, Lyon TP. The ventricular complex in left ventricular hypertrophy as obtained by unipolar precordial and limb leads. Am Heart J, 1949.](https://doi.org/10.1016/0002-8703(49)90562-1)

- [Casale PN et al. Improved sex-specific criteria of left ventricular hypertrophy for clinical and computer interpretation of electrocardiograms: validation with autopsy findings. Circulation, 1987.](https://doi.org/10.1161/01.CIR.75.3.565)

- [Okin PM et al. Electrocardiographic identification of increased left ventricular mass by simple voltage-duration products. J Am Coll Cardiol, 1995.](https://doi.org/10.1016/0735-1097(94)00371-V)

## तकनीकी परीक्षण दोहराएँ

दर्ज कृत्रिम मामलों को दोहराने के लिए इस रिपॉज़िटरी की मूल निर्देशिका में node test.cjs चलाएँ। मूल इनपुट, अपेक्षित परिणाम और सहनशीलता सीमाएँ सुरक्षित रखी गई हैं। तकनीकी परीक्षण नैदानिक सत्यापन नहीं हैं।

```sh
node test.cjs
```

tool.json में स्रोत, संस्करण और समीक्षा का दायरा दिया गया है। examples.json में कृत्रिम इनपुट और अपेक्षित परिणाम सुरक्षित हैं; results.json में प्राप्त परिणाम दर्ज हैं।

[रिकॉर्ड और संदर्भ](../tool.json) · [JavaScript कोड](../calculator.js) · [संदर्भ मामले](../examples.json) · [results.json](../results.json)

## समीक्षा और उपयोग की शर्तें

स्वतंत्र नैदानिक समीक्षा नहीं की गई है।

यह इंटरफ़ेस लेखकों द्वारा किया गया अनुवाद है, कोई आधिकारिक या प्रमाणित संस्करण नहीं। स्वतंत्र नैदानिक समीक्षा, पेशेवर भाषाई समीक्षा और उपकरणों के अधिकारों की अनुमति की प्रक्रिया पूरी नहीं हुई है।

सूत्र या वर्गीकरण का परिणाम। व्याख्या, कार्यवाही और उपयुक्तता पेशेवर मूल्यांकन और चुने गए स्रोत पर निर्भर है।

## लाइसेंस और श्रेय

Apache-2.0 केवल ELUCENIA के कोड पर लागू होता है। उपकरणों, प्रकाशनों, अनुवादों और डेटा के अधिकार उनके संबंधित अधिकारधारकों के पास रहते हैं। LICENSE और NOTICE सुरक्षित रखें।

ELUCENIA · Felipe Guedes · Copyright © 2026
