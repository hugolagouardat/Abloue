# Abloue

Application web de visualisation et gestion de loueurs de matériel par département français.

## 🎯 Fonctionnalités

- **Carte interactive de France** avec départements cliquables
- **Système de filtrage** par nom de loueur et département
- **Affichage en cartes** des loueurs avec leurs informations détaillées
- **Interface responsive** avec visualisation claire des données

## 🚀 Installation et utilisation

1. Clonez le dépôt :
```bash
git clone https://github.com/hugolagouardat/Abloue.git
cd Abloue
```

2. Ouvrez `abloue.html` dans votre navigateur web

Aucune installation de dépendances n'est nécessaire, l'application fonctionne directement côté client.

## 📁 Structure du projet

```
Abloue/
├── abloue.html          # Page principale
├── css/                 # Styles CSS
│   ├── abloue.css
│   ├── card.css
│   ├── carte.css
│   ├── filtre.css
│   ├── formulaire.css
│   └── modal.css
├── js/                  # Scripts JavaScript
│   ├── abloue.js        # Logique principale
│   ├── card.js          # Gestion des cartes
│   ├── filtre.js        # Système de filtrage
│   ├── formulaire.js
│   ├── modal.js
│   └── jquery.js
└── data/                # Données
    ├── departements.js  # Mapping départements
    └── loueurs.js       # Base de données loueurs
```

## 🗺️ À propos de la carte

La carte interactive de France est basée sur :
- **[Abcarte](https://github.com/Abend-core/Abcarte)** - Système de carte interactive
- **[carte-france-svg](https://github.com/regisenguehard/carte-france-svg)** par Régis Enguehard - Carte SVG de France modifiée avec ajout des départements

### Licence de la carte SVG

La carte SVG de France (incluse dans `abloue.html`) est sous :

**[Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)**

© Régis Enguehard - Modifications : ajout des départements

## 📄 Licence

Le code source de l'application Abloue (JavaScript, CSS, structure HTML hors carte SVG) est sous :

**MIT License**

Copyright (c) 2025 Hugo Lagouardat

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## 🛠️ Technologies utilisées

- HTML5
- CSS3
- JavaScript (ES6+)
- jQuery 3.x
- SVG pour la carte interactive

## 👤 Auteur

**Hugo Lagouardat** - [@hugolagouardat](https://github.com/hugolagouardat)

## 🙏 Remerciements

- [Abend-core](https://github.com/Abend-core) pour Abcarte
- [Régis Enguehard](https://github.com/regisenguehard) pour la carte SVG de France
