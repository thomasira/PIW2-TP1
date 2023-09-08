import GestionnaireLibrairie from "./GestionnaireLibrairie.js";

export class Livre {

    constructor(livre) {
        const GL = GestionnaireLibrairie.instance;
        this.el;
        this.conteneurParent = GL.el.querySelector('[data-js-librairie-conteneur]');
        this.titre = livre.titre;
        this.auteur = livre.auteur;
        this.description = livre.description;
        this.prix = livre.prix;
        this.editeur = livre.editeur;
        this.pages = livre.pages;
        this.image = livre.image;
        this.nouveaute = livre.nouveaute;
        this.categorie = livre.categorie;
    }

    filtrer(filtreCourant) {
        switch (filtreCourant) {
            case "tous": 
                this.el.classList.remove("non-exist");
                break;
            case "Nouveautés":
                if (this.nouveaute) this.el.classList.remove("non-exist");
                else this.el.classList.add("non-exist");
                break;
            default:
                if (filtreCourant != this.categorie) this.el.classList.add("non-exist");
                else this.el.classList.remove("non-exist");
        }
    }

    injectEtInit() {
        const HTML = `
            <article class="book-card" data-js-conteneur data-js-book="${this.titre}">
                <picture>
                    <img src="${this.image}" alt="${this.image}" data-js-trigger="book">
                </picture>
                <main>
                    <h3>${this.titre}</h3>
                   <div>
                        <strong>${this.prix} $</strong>
                        <button class="button-std" data-js-trigger="ajout">Ajouter</button>
                    </div>
                </main>
            </article>`;
        this.conteneurParent.insertAdjacentHTML('beforeend', HTML);
        this.el = this.conteneurParent.lastElementChild;
        this.#btnsInit();
    }

    #btnsInit() {
        const btnAjout = this.el.querySelector('[data-js-trigger="ajout"]');
        const btnImg = this.el.querySelector('img');

        btnImg.addEventListener('click', () => {
            document.dispatchEvent(
                new CustomEvent("ouvrirModal", { detail: this })
            );
        });

        btnAjout.addEventListener('click', () => {
            document.dispatchEvent(
                new CustomEvent("ajouterPanier", { detail: this })
            );
        });
    }
}