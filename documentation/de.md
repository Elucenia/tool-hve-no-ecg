<!-- ELUCENIA technical documentation · hve-no-ecg · de · no clinical/professional/rights approval -->

# EKG-Voltagekriterien für linksventrikuläre Hypertrophie

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/hve-no-ecg)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Geschlecht

`sexo`

- `F` — Weiblich
- `M` — Männlich

### S-Zacke in V1

`sv1`

mm · Bereich: 0–60

### R-Zacke in V5

`rv5`

mm · Bereich: 0–60

### R-Zacke in V6

`rv6`

mm · Bereich: 0–60

### R-Zacke in aVL

`ravl`

mm · Bereich: 0–40

### S-Zacke in V3

`sv3`

mm · Bereich: 0–60

### QRS-Dauer (für das Cornell-Produkt)

`qrs`

ms · optional · Bereich: 60–250

### EKG mit Kalibrierung 10 mm/mV und Messwerte geprüft?

`contexto`

- `0` — Nein
- `1` — Ja

## Fassung der Methode

Sokolow–Lyon 1949; Cornell 1987; Cornell-Produkt (LIFE)

## Dokumentierte Formel

Sokolow–Lyon: SV1 + max(RV5,RV6) ≥ 35 mm. R aVL ≥ 11 mm. Cornell: RaVL + SV3 \> 28 mm bei Männern oder \> 20 mm bei Frauen. Cornell-Produkt: (Cornell + 6 mm bei Frauen) × QRS \> 2440 mm·ms.

## Grenzen und Population

Ausgabe ist die Anzahl positiver Kriterien, ohne LVH-Diagnose oder Aussage, dass keine LVH vorliegt. Das Produkt nutzt die LIFE-Konvention von +6 mm bei Frauen; andere Versionen nutzen andere Konventionen.

## Referenzen

- [Okin et al. · LIFE 2004 · Konvention für das Cornell-Produkt](https://jamanetwork.com/journals/jama/fullarticle/199807)

- [Sokolow M, Lyon TP. The ventricular complex in left ventricular hypertrophy as obtained by unipolar precordial and limb leads. Am Heart J, 1949.](https://doi.org/10.1016/0002-8703(49)90562-1)

- [Casale PN et al. Improved sex-specific criteria of left ventricular hypertrophy for clinical and computer interpretation of electrocardiograms: validation with autopsy findings. Circulation, 1987.](https://doi.org/10.1161/01.CIR.75.3.565)

- [Okin PM et al. Electrocardiographic identification of increased left ventricular mass by simple voltage-duration products. J Am Coll Cardiol, 1995.](https://doi.org/10.1016/0735-1097(94)00371-V)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026
