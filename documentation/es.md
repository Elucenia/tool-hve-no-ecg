<!-- ELUCENIA technical documentation · hve-no-ecg · es · no clinical/professional/rights approval -->

# Criterios de voltaje para HVI en el ECG

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/hve-no-ecg)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Sexo

`sexo`

- `F` — Femenino
- `M` — Masculino

### Onda S en V1

`sv1`

mm · intervalo: 0–60

### Onda R en V5

`rv5`

mm · intervalo: 0–60

### Onda R en V6

`rv6`

mm · intervalo: 0–60

### Onda R en aVL

`ravl`

mm · intervalo: 0–40

### Onda S en V3

`sv3`

mm · intervalo: 0–60

### Duración del QRS (para el producto de Cornell)

`qrs`

ms · opcional · intervalo: 60–250

### ¿ECG con calibración de 10 mm/mV y medidas comprobadas?

`contexto`

- `0` — No
- `1` — Sí

## Edición del método

Sokolow–Lyon 1949; Cornell 1987; producto de Cornell (LIFE)

## Fórmula documentada

Sokolow–Lyon: SV1 + max(RV5,RV6) ≥ 35 mm. R aVL ≥ 11 mm. Cornell: RaVL + SV3 \> 28 mm en hombres o \> 20 mm en mujeres. Producto de Cornell: (Cornell + 6 mm en mujeres) × QRS \> 2440 mm·ms.

## Límites y población

La salida es el número de criterios positivos, sin diagnosticar HVI ni declarar su ausencia. El producto usa la convención LIFE de +6 mm en mujeres; otras versiones usan convenciones distintas.

## Referencias

- [Okin et al. · LIFE 2004 · convención del producto de Cornell](https://jamanetwork.com/journals/jama/fullarticle/199807)

- [Sokolow M, Lyon TP. The ventricular complex in left ventricular hypertrophy as obtained by unipolar precordial and limb leads. Am Heart J, 1949.](https://doi.org/10.1016/0002-8703(49)90562-1)

- [Casale PN et al. Improved sex-specific criteria of left ventricular hypertrophy for clinical and computer interpretation of electrocardiograms: validation with autopsy findings. Circulation, 1987.](https://doi.org/10.1161/01.CIR.75.3.565)

- [Okin PM et al. Electrocardiographic identification of increased left ventricular mass by simple voltage-duration products. J Am Coll Cardiol, 1995.](https://doi.org/10.1016/0735-1097(94)00371-V)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
