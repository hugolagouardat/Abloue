function loadDepartementSelect() {
    const selectForm = document.getElementById('departementSelect');
    const selectFiltre = document.getElementById('filterDepartementSelect');

    for (const [num, nom] of Object.entries(departements)) {
        const optionForm = document.createElement('option');
        optionForm.value = num;
        optionForm.textContent = `${num} - ${nom}`;
        selectForm.appendChild(optionForm);

        const optionFiltre = document.createElement('option');
        optionFiltre.value = num;
        optionFiltre.textContent = `${num} - ${nom}`;
        selectFiltre.appendChild(optionFiltre);
    }
}


document.getElementById('formulaireLoueur').addEventListener('submit', function(event) {
    event.preventDefault(); // empêche le rechargement

    const nom = document.getElementById('nomInput').value.trim();
    const adresse = document.getElementById('adresseInput').value.trim();
    const departement = document.getElementById('departementSelect').value;
    const tel = document.getElementById('telInput').value.trim();
    const mail = document.getElementById('mailInput').value.trim();
    const commentaire = document.getElementById('commentInput').value.trim();

    const loueur = {
        nom,
        adresse,
        departement,
        tel,
        mail,
        commentaire
    };

    console.log("Nouveau loueur :", loueur);

    this.reset();
});


document.getElementById('btnAjouter').addEventListener('click', addLoueur);