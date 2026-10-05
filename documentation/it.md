<!-- ELUCENIA technical documentation · hve-no-ecg · it · no clinical/professional/rights approval -->

# Criteri di voltaggio ECG per l’ipertrofia ventricolare sinistra

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/hve-no-ecg)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Sesso

`sexo`

- `F` — Femminile
- `M` — Maschile

### Onda S in V1

`sv1`

mm · intervallo: 0–60

### Onda R in V5

`rv5`

mm · intervallo: 0–60

### Onda R in V6

`rv6`

mm · intervallo: 0–60

### Onda R in aVL

`ravl`

mm · intervallo: 0–40

### Onda S in V3

`sv3`

mm · intervallo: 0–60

### Durata del QRS (per il prodotto di Cornell)

`qrs`

ms · facoltativo · intervallo: 60–250

### ECG con calibrazione di 10 mm/mV e misure verificate?

`contexto`

- `0` — No
- `1` — Sì

## Edizione del metodo

Sokolow–Lyon 1949; Cornell 1987; prodotto di Cornell (LIFE)

## Formula documentata

Sokolow–Lyon: SV1 + max(RV5,RV6) ≥ 35 mm. R aVL ≥ 11 mm. Cornell: RaVL + SV3 \> 28 mm negli uomini o \> 20 mm nelle donne. Prodotto di Cornell: (Cornell + 6 mm nelle donne) × QRS \> 2440 mm·ms.

## Limiti e popolazione

L’output è il numero di criteri positivi, senza diagnosi di IVS né dichiarazione della sua assenza. Il prodotto usa la convenzione LIFE di +6 mm nelle donne; altre versioni usano convenzioni diverse.

## Riferimenti

- [Okin et al. · LIFE 2004 · convenzione del prodotto di Cornell](https://jamanetwork.com/journals/jama/fullarticle/199807)

- [Sokolow M, Lyon TP. The ventricular complex in left ventricular hypertrophy as obtained by unipolar precordial and limb leads. Am Heart J, 1949.](https://doi.org/10.1016/0002-8703(49)90562-1)

- [Casale PN et al. Improved sex-specific criteria of left ventricular hypertrophy for clinical and computer interpretation of electrocardiograms: validation with autopsy findings. Circulation, 1987.](https://doi.org/10.1161/01.CIR.75.3.565)

- [Okin PM et al. Electrocardiographic identification of increased left ventricular mass by simple voltage-duration products. J Am Coll Cardiol, 1995.](https://doi.org/10.1016/0735-1097(94)00371-V)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
