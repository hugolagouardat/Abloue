// suppose que ta liste globale de loueurs est dans window.listeLoueurs
// et que ta fonction pour afficher est window.show()

function setupFiltreEvents() {
  const nomInput = document.getElementById('filterNomInput');
  const departementSelect = document.getElementById('filterDepartementSelect');

  // quand on tape dans le champ texte
  nomInput.addEventListener('input', filtrerEtAfficher);

  // quand on change la sélection dans le select
  departementSelect.addEventListener('change', filtrerEtAfficher);
}

function filtrerEtAfficher() {
  const nomFilterValue = document.getElementById('filterNomInput').value.trim().toLowerCase();
  const departementFilterValue = document.getElementById('filterDepartementSelect').value;

  // on part de la liste globale complète
  let filtered = loueurs;

  if (nomFilterValue) {
    filtered = filtered.filter(loueur =>
      loueur.loueur && loueur.loueur.toLowerCase().includes(nomFilterValue)
    );
  }

  if (departementFilterValue) {
    filtered = filtered.filter(loueur =>
      loueur.departement === Number(departementFilterValue)
    );
  }
  console.log(filtered)
  show(filtered);
}

// On exporte la fonction d'initialisation
window.setupFiltreEvents = setupFiltreEvents;
