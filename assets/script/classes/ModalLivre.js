/**
 * gère le modal
 */
export class ModalLivre {

    /**
     * instancier tous les éléments HTML requis, initialiser
     */
    constructor() {
        this.body = document.body;
        this.el = document.querySelector('[data-js-modal="livre"]');
        this.conteneur = this.el.querySelector('[data-js-modal="livre-conteneur"]');
        this.livre;
        this.elTitre = this.el.querySelector('[data-js-livre="titre"]');
        this.elBtnExit = this.el.querySelector('[data-js-trigger="exit-button"]');
        this.elBtnAjout = this.el.querySelector('[data-js-trigger="ajout"]');
        this.elAuteur = this.el.querySelector('[data-js-livre="auteur"]');
        this.elEditeur = this.el.querySelector('[data-js-livre="editeur"]');
        this.elPages = this.el.querySelector('[data-js-livre="pages"]');
        this.elDescription = this.el.querySelector('[data-js-livre="description"]');
        this.elImage = this.el.querySelector('img');
        this.init();
    }

    /**
     * ajouter un gest. d'événements sur son élément HTML.
     */
    init() {
        this.el.addEventListener('click', (e) => {
            if (e.target == this.el 
                || e.target == this.elBtnExit 
                || e.target == this.conteneur.closest('div')) 
            this.close();
        })
        this.elBtnAjout.addEventListener('click', () => {
            document.dispatchEvent(
                new CustomEvent("ajouterPanier", { detail: this.livre })
            )
            document.dispatchEvent(
                new CustomEvent("ajouterPop", { detail: this.livre })
            );
        });
    }

    /**
     * injecter les données du livre passé en param dans ses éléments HTML
     * @param {*} livre 
     */
    setLivre(livre) {
        this.elTitre.innerHTML = livre.titre;
        this.elAuteur.innerHTML = livre.auteur;
        this.elEditeur.innerHTML = livre.editeur;
        this.elPages.innerHTML = livre.pages;
        this.elDescription.innerHTML = livre.description;
        this.elImage.src = livre.image;
        this.elImage.title = "couverture: " + livre.titre;
        this.elImage.alt = "couverture: " + livre.titre;
    }

    /**
     * appeler setLivre avec les détails de l'événement passé en param. Changer le Css du body et de son élément HTML
     * @param {*} e 
     */
    open(e) {
        this.livre = e.detail;
        this.setLivre(this.livre);
        this.body.classList.toggle('no-scroll');
        this.el.classList.toggle('invisible');
    }

    /**
     * Changer le Css du body et de son élément HTML
     */
    close() {
        this.el.classList.toggle('invisible');
        this.body.classList.toggle('no-scroll');
    }
}