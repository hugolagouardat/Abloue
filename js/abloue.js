var jq = jQuery.noConflict();

jq(async function() {
  ajusterTailleBody();

  jq(window).on('resize', ajusterTailleBody);

  await loaderElement(); // attendre que tout soit chargé

  loueurs = chargerDonnees();
  show(loueurs);
  jq('#credit').on('click', () => loadModal('credit'));
  loadDepartementSelect();
  setupFiltreEvents();
});


function ajusterTailleBody() {
  const largeur = jq(window).width();
  const hauteur = jq(window).height();

  jq('body').css({
    width: largeur + 'px',
    height: hauteur + 'px'
  });
}

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
  }).filter(obj => obj !== null);
}

function loadPage(element, page) {
  return new Promise((resolve, reject) => {
    jq(element).load('./components/element/' + page + '.html', function(response, status, xhr) {
      if (status == "error") {
        reject(xhr);
      } else {
        resolve();
      }
    });
  });
}


function loaderElement() {
  return Promise.all([
    loadPage('#carte', 'carte'),
    loadPage('#filtreur', 'filtre')
  ]);
}

