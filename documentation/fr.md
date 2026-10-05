<!-- ELUCENIA technical documentation · hve-no-ecg · fr · no clinical/professional/rights approval -->

# Critères de voltage d’HVG à l’ECG

[conditions, sources et autorisations](https://elucenia.org/fr/outils/hve-no-ecg)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Sexe

`sexo`

- `F` — Féminin
- `M` — Masculin

### Onde S en V1

`sv1`

mm · intervalle: 0–60

### Onde R en V5

`rv5`

mm · intervalle: 0–60

### Onde R en V6

`rv6`

mm · intervalle: 0–60

### Onde R en aVL

`ravl`

mm · intervalle: 0–40

### Onde S en V3

`sv3`

mm · intervalle: 0–60

### Durée du QRS (pour le produit de Cornell)

`qrs`

ms · facultatif · intervalle: 60–250

### ECG calibré à 10 mm/mV et mesures vérifiées ?

`contexto`

- `0` — Non
- `1` — Oui

## Édition de la méthode

Sokolow–Lyon 1949 ; Cornell 1987 ; produit de Cornell (LIFE)

## Formule documentée

Sokolow–Lyon : SV1 + max(RV5,RV6) ≥ 35 mm. R aVL ≥ 11 mm. Cornell : RaVL + SV3 \> 28 mm chez l’homme ou \> 20 mm chez la femme. Produit de Cornell : (Cornell + 6 mm chez la femme) × QRS \> 2440 mm·ms.

## Limites et population

La sortie est le nombre de critères positifs, sans diagnostic d’HVG ni déclaration de son absence. Le produit utilise la convention LIFE de +6 mm chez la femme ; d’autres versions emploient des conventions différentes.

## Références

- [Okin et al. · LIFE 2004 · convention du produit de Cornell](https://jamanetwork.com/journals/jama/fullarticle/199807)

- [Sokolow M, Lyon TP. The ventricular complex in left ventricular hypertrophy as obtained by unipolar precordial and limb leads. Am Heart J, 1949.](https://doi.org/10.1016/0002-8703(49)90562-1)

- [Casale PN et al. Improved sex-specific criteria of left ventricular hypertrophy for clinical and computer interpretation of electrocardiograms: validation with autopsy findings. Circulation, 1987.](https://doi.org/10.1161/01.CIR.75.3.565)

- [Okin PM et al. Electrocardiographic identification of increased left ventricular mass by simple voltage-duration products. J Am Coll Cardiol, 1995.](https://doi.org/10.1016/0735-1097(94)00371-V)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
