<!-- ELUCENIA technical documentation · hve-no-ecg · pt-BR · no clinical/professional/rights approval -->

# Critérios de voltagem para HVE no ECG

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/hve-no-ecg)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Sexo

`sexo`

- `F` — Feminino
- `M` — Masculino

### Onda S em V1

`sv1`

mm · intervalo: 0–60

### Onda R em V5

`rv5`

mm · intervalo: 0–60

### Onda R em V6

`rv6`

mm · intervalo: 0–60

### Onda R em aVL

`ravl`

mm · intervalo: 0–40

### Onda S em V3

`sv3`

mm · intervalo: 0–60

### Duração do QRS (para o produto de Cornell)

`qrs`

ms · opcional · intervalo: 60–250

### ECG com calibração de 10 mm/mV e medidas conferidas?

`contexto`

- `0` — Não
- `1` — Sim

## Edição do método

Sokolow–Lyon 1949; Cornell 1987; produto de Cornell (LIFE)

## Fórmula documentada

Sokolow–Lyon: SV1 + max(RV5,RV6) ≥ 35 mm. R aVL ≥ 11 mm. Cornell: RaVL + SV3 \> 28 mm em homens ou \> 20 mm em mulheres. Produto de Cornell: (Cornell + 6 mm em mulheres) × QRS \> 2440 mm·ms.

## Limites e população

Saída é número de critérios positivos, sem diagnóstico de HVE ou declaração de ausência de HVE. Produto usa convenção LIFE de +6 mm em mulheres; outras versões usam convenções distintas.

## Referências

- [Okin et al. · LIFE 2004 · convenção do produto de Cornell](https://jamanetwork.com/journals/jama/fullarticle/199807)

- [Sokolow M, Lyon TP. The ventricular complex in left ventricular hypertrophy as obtained by unipolar precordial and limb leads. Am Heart J, 1949.](https://doi.org/10.1016/0002-8703(49)90562-1)

- [Casale PN et al. Improved sex-specific criteria of left ventricular hypertrophy for clinical and computer interpretation of electrocardiograms: validation with autopsy findings. Circulation, 1987.](https://doi.org/10.1161/01.CIR.75.3.565)

- [Okin PM et al. Electrocardiographic identification of increased left ventricular mass by simple voltage-duration products. J Am Coll Cardiol, 1995.](https://doi.org/10.1016/0735-1097(94)00371-V)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
