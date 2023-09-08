

export class ModalLivre {
    constructor() {
        this.body = document.body;
        this.el = document.querySelector('[data-js-modal="livre"]');
        this.conteneur = this.el.querySelector('[data-js-modal="livre-conteneur"]');
        this.elTitre = this.el.querySelector('[data-js-livre="titre"]');
        this.elBtnExit = this.el.querySelector('[data-js-trigger="exit-button"]')
        this.elAuteur = this.el.querySelector('[data-js-livre="auteur"]');
        this.elEditeur = this.el.querySelector('[data-js-livre="editeur"]');
        this.elPages = this.el.querySelector('[data-js-livre="pages"]');
        this.elDescription = this.el.querySelector('[data-js-livre="description"]');
        this.elImage = this.el.querySelector('img');
        this.init();
    }

    init() {
        document.addEventListener('ouvrirModal', this.open.bind(this));
        this.el.addEventListener('click', (e) => {
            if (e.target == this.el || e.target == this.elBtnExit) this.close();
        })
    }

    setLivre(livre) {
        this.elTitre.innerHTML = livre.titre;
        this.elAuteur.innerHTML = livre.auteur;
        this.elEditeur.innerHTML = livre.editeur;
        this.elPages.innerHTML = livre.pages;
        this.elDescription.innerHTML = livre.description;
        this.elImage.src = livre.image;
        this.elImage.alt = livre.titre;
    }

    open(e) {
        this.setLivre(e.detail);
        this.body.classList.toggle('no-scroll');
        this.el.classList.toggle('invisible');
    }

    close() {
        this.el.classList.toggle('invisible');
        if (this.body.classList.contains('no-scroll')) this.body.classList.remove('no-scroll');
    }
}