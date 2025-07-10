function ajusterTailleBody() {
    const largeur = window.innerWidth;
    const hauteur = window.innerHeight;

    document.body.style.width = largeur + 'px';
    document.body.style.height = hauteur + 'px';
}

document.addEventListener('DOMContentLoaded', () => {
    ajusterTailleBody();

    window.addEventListener('resize', ajusterTailleBody);
    loueurs = chargerDonnees();
    show(loueurs)
});

function chargerDonnees() {
		const lignes = nettoyerLignes(loueurs);
		return parserCSV(lignes);
	}

	function nettoyerLignes(text) {
		return text
			.trim()
			.split('\n')
			.map(l => l.trim())
			.filter(l => l && l !== '§§§§§§');
	}

	function parserCSV(lignes) {
		const entetes = lignes[0].split('§').map(e => e.trim().toLowerCase());
		const champsObligatoires = ['loueur', 'adresse', 'departement', 'ordre', 'tel', 'mail'];
		
		return lignes.slice(1).map(ligne => {
			const valeurs = ligne.split('§').map(v => v.trim());
			const obj = {};
			
			if (valeurs.length < entetes.length - 1) {
				return null; 
			}
			
			let estValide = true;
			entetes.forEach((entete, i) => {
				let val = valeurs[i] ?? '';
				if (entete === 'departement' || entete === 'ordre') {
					val = parseInt(val, 10);
					if (isNaN(val)) estValide = false;
				}
				obj[entete] = val;
				
				if (champsObligatoires.includes(entete) && (val === '' || val === null)) {
					estValide = false;
				}
			});
			
			return estValide ? obj : null;
		}).filter(obj => obj !== null); 
	}