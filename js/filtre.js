function loadDepartementSelect() {
    const selectFiltre = jq('#filterDepartementSelect');
    jq.each(departements, function(num, nom) {
        const optionFiltre = jq('<option></option>').val(num).text(`${num} - ${nom}`);
        selectFiltre.append(optionFiltre);
    });
}

function resetFilters() {
    jq('#filterNomInput').val('');
    jq('#filterDepartementSelect').val('');
    jq('path').removeClass('active');
    jq('#cardsTitre').text('');
    show(loueurs);
}

function setupFiltreEvents() {
    const nomInput = jq('#filterNomInput');
    const departementSelect = jq('#filterDepartementSelect');

    nomInput.on('input', filtrerEtAfficher);
    departementSelect.on('change', filtrerEtAfficher);
    jq('#resetFilters').on('click', resetFilters);
}

function filtrerEtAfficher() {
    const nomFilterValue = jq('#filterNomInput').val().trim().toLowerCase();
    const departementFilterValue = jq('#filterDepartementSelect').val();
    jq('path').removeClass('active');
    jq('path').each(function() {
        if (jq(this).attr('data-numerodepartement') == departementFilterValue) {
            jq(this).addClass('active');
        }
    });
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

    if (departementFilterValue) {
        const recherche = departements[String(departementFilterValue)] + " (" + departementFilterValue + ")";
        jq('#cardsTitre').text(`Recherche : ${recherche}, nombre de loueurs : ${filtered.length}`);
    } else {
        jq('#cardsTitre').text(`Recherche : Tous, nombre de loueurs : ${filtered.length}`);
    }

    show(filtered);
}

function filtrer(element) {
    const jqElement = jq(element);
    const numDepartement = jqElement.attr('data-numerodepartement');

    jq('#filterDepartementSelect option').each(function() {
        if (jq(this).attr('value') == numDepartement) {
            jq(this).prop('selected', true);
        }
    });

    jq('path').removeClass('active');
    jqElement.addClass('active');

    const recherche = departements[String(numDepartement)] + " (" + numDepartement + ")";
    const resultat = loueurs.filter(function(item) {
        return item.departement == numDepartement;
    });

    jq('#cardsTitre').text(`Recherche : ${recherche}, nombre de loueurs : ${resultat.length}`);
    show(resultat);
}

window.setupFiltreEvents = setupFiltreEvents;