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
    loadDepartementSelect()
    window.setupFiltreEvents();
});