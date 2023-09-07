import GestionnaireLibrairie from "./GestionnaireLibrairie.js";

export class Livre {
        #titre;
        #auteur;
        #description;
        #prix;
        #editeur;
        #pages;
        #image;
        #nouveaute;
        #categorie;

    constructor(livre) {
        this.#titre = livre.titre;
        this.#auteur = livre.auteur;
        this.#description = livre.description;
        this.#prix = livre.prix;
        this.#editeur = livre.editeur;
        this.#pages = livre.page;
        this.#image = livre.image;
        this.#nouveaute = livre.nouveaute;
        this.#categorie = livre.categorie;
        
        this.conteneur = document.querySelector('[data-js-librairie-conteneur]');
    }

    injectThumb() {
        this.conteneur.insertAdjacentHTML('beforeend', `
            <article class="book-card" data-js-book="${this.#titre}">
                <picture>
                    <img src="${this.#image}" alt="${this.#image}" data-js-trigger="book">
                </picture>
                <main>
                    <h3>${this.#titre}</h3>
                    <div>
                        <strong>${this.#prix} $</strong>
                        <button class="button-std" data-js-trigger="ajout">Ajouter</button>
                    </div>
                </main>
            </article>
        `);
        const btnAjout = this.conteneur.querySelector('[data-js-trigger="ajout"]');
        btnAjout.addEventListener('click', function() {
            const donnees = { detail: this };
            const event = new CustomEvent("ajouterPanier", donnees);
            document.dispatchEvent(event);
        }.bind(this))
    }
}