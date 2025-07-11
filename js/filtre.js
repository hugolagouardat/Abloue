function loadDepartementSelect() {
  console.log('je load')
    const selectFiltre = jq('#filterDepartementSelect');
  console.log(selectFiltre)
    jq.each(departements, function(num, nom) {

        const optionFiltre = jq('<option></option>').val(num).text(`${num} - ${nom}`);
        selectFiltre.append(optionFiltre);
    });
    console.log(departements)
}


function setupFiltreEvents() {
  const nomInput = jq('#filterNomInput');
  const departementSelect = jq('#filterDepartementSelect');

  // quand on tape dans le champ texte
  nomInput.on('input', filtrerEtAfficher);

  // quand on change la sélection dans le select
  departementSelect.on('change', filtrerEtAfficher);
}

function filtrerEtAfficher() {
  const nomFilterValue = jq('#filterNomInput').val().trim().toLowerCase();
  const departementFilterValue = jq('#filterDepartementSelect').val();

  // on part de la liste globale complète
  let filtered = loueurs;

  if (nomFilterValue) {
    filtered = filtered.filter(function(loueur) {
      return loueur.loueur && loueur.loueur.toLowerCase().includes(nomFilterValue);
    });
  }

  if (departementFilterValue) {
    filtered = filtered.filter(function(loueur) {
      return loueur.departement === Number(departementFilterValue);
    });
  }

  show(filtered);
}

function filtrer(element) {
  const jqElement = jq(element);
  const numDepartement = jqElement.attr('data-numerodepartement');

  jq('path').removeClass('active');
  jqElement.addClass('active');

  const recherche = departements[String(numDepartement)] + " (" + numDepartement + ")";
  const resultat = loueurs.filter(function(item) {
    return item.departement == numDepartement;
  });

  jq('#cardsTitre').text(`Recherche : ${recherche}, nombre de loueurs : ${resultat.length}`);
  show(resultat);
}

// On exporte la fonction d'initialisation
window.setupFiltreEvents = setupFiltreEvents;
