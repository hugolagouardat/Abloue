// Gestion de l'affichage des cartes

// Affichage de la liste triée
function show(liste) {
  const listeTriee = liste
    .slice()
    .sort((a, b) => {
      if (a.ordre == null && b.ordre == null) return 0;
      if (a.ordre == null) return 1;
      if (b.ordre == null) return -1;
      return a.ordre - b.ordre;
    });

  const container = jq('#cardsContainer');
  container.empty();

  jq.each(listeTriee, function(_, objet) {
    const cardElement = card(objet);
    container.append(cardElement);
  });
}

// Création d'une carte individuelle
function card(loueur) {
  const nomDepartement = departements[String(loueur.departement)] + " (" + loueur.departement + ")" || `Département ${loueur.departement}`;

  return jq(`
    <div class="module-card">
      <span class="module-index">${loueur.ordre}</span>
      <div class="card-content">
        <h3>${loueur.loueur}</h3>
        <p><strong>Adresse:</strong> ${loueur.adresse}</p>
        <p><strong>Département:</strong> ${nomDepartement}</p>
        ${loueur.commentaire ? `<p><strong>Commentaire:</strong> ${loueur.commentaire}</p>` : ''}
        <p><strong>Téléphone:</strong> ${loueur.tel}</p>
        <p><strong>Mail:</strong> <a href="mailto:${loueur.mail}">${loueur.mail}</a></p>
      </div>
    </div>
  `);
}
