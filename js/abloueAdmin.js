var jq = jQuery.noConflict();

function ajusterTailleBody() {
    const largeur = jq(window).width();
    const hauteur = jq(window).height();

    jq('body').css({
        width: largeur + 'px',
        height: hauteur + 'px'
    });
}

jq(function() {
    ajusterTailleBody();

    jq(window).on('resize', ajusterTailleBody);

    loueurs = chargerDonnees();
    show(loueurs);
    loadDepartementSelect();
    setupFiltreEvents();
});

function chargerDonnees() {
    const lignes = nettoyerLignes(loueurs);
    return parserCSV(lignes);
}

function nettoyerLignes(text) {
    return text
        .trim()
        .split('\n')
        .map(function(l) {
            return l.trim();
        })
        .filter(function(l) {
            return l && l !== '§§§§§§';
        });
}

function parserCSV(lignes) {
    const entetes = lignes[0].split('§').map(function(e) {
        return e.trim().toLowerCase();
    });
    const champsObligatoires = ['loueur', 'adresse', 'departement', 'ordre', 'tel', 'mail'];
    
    return lignes.slice(1).map(function(ligne) {
        const valeurs = ligne.split('§').map(function(v) {
            return v.trim();
        });
        const obj = {};
        
        if (valeurs.length < entetes.length - 1) {
            return null; 
        }
        
        let estValide = true;
        jq.each(entetes, function(i, entete) {
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
    }).filter(function(obj) {
        return obj !== null;
    });
}
