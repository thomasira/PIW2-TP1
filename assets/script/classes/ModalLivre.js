

export class ModalLivre {
    constructor() {
        this.body = document.body;
        this.conteneur = document.querySelector('[data-js-modal="livre"]');
        this.elTitre = this.conteneur.querySelector('[data-js-livre="titre"]');
        this.elAuteur = this.conteneur.querySelector('[data-js-livre="auteur"]');
        this.elEditeur = this.conteneur.querySelector('[data-js-livre="editeur"]');
        this.elPages = this.conteneur.querySelector('[data-js-livre="pages"]');
        this.elDescription = this.conteneur.querySelector('[data-js-livre="description"]');
        this.elImage = this.conteneur.querySelector('img');
        this.isVisible = false;
    }

    setLivre(livre) {
        this.elTitre.insertAdjacentHTML('beforeend', livre.titre);
        this.elAuteur.insertAdjacentHTML('beforeend', livre.auteur);
        this.elEditeur.insertAdjacentHTML('beforeend', livre.editeur);
        this.elPages.insertAdjacentHTML('beforeend', livre.pages);
        this.elDescription.insertAdjacentHTML('beforeend', livre.description);
        this.elImage.innerHTML = livre.image;
    }

    open() {
        if (this.conteneur.classList.contains('invisible')) this.conteneur.classList.remove('invisible');
        this.body.classList.add('no-scroll');
    }

    close() {
        this.conteneur.classList.add('invisible');
        if (this.body.classList.contains('no-scroll')) this.body.classList.remove('no-scroll');
    }
}