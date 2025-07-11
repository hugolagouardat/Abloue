jq('#formulaireLoueur').on('submit', function(event) {
    event.preventDefault();

    const nom = jq('#nomInput').val().trim();
    const adresse = jq('#adresseInput').val().trim();
    const departement = jq('#departementSelect').val();
    const tel = jq('#telInput').val().trim();
    const mail = jq('#mailInput').val().trim();
    const ordre = jq('#ordreInput').val().trim();
    const commentaire = jq('#commentInput').val().trim();

    const loueur = {
        nom,
        adresse,
        departement,
        tel,
        mail,
        commentaire,
        ordre
    };

    console.log("Nouveau loueur :", loueur);

    this.reset();
});

jq('#btnAjouter').on('click', addLoueur);
