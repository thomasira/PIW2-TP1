import GestionnaireLibrairie from "./GestionnaireLibrairie.js";

/**
 * gère l'affichage et les données associé à un livre
 */
export class Livre {

    /**
     * utiliser la donnée passé en param pour instancier les prop. Utiliser l'instance de GL pour instancier le conteneur parent
     * 
     * @param {*} livre 
     */
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

    /**
     * injecter ses données dans le HTML du conteneur. Utiliser le conteneur parent pour instancier son élément HTML. Initialiser ses boutons
     */ 
    injectEtInit() {
        const HTML = `
            <article class="book-card" data-js-conteneur data-js-book="${this.titre}">
                <picture>
                    <img src="${this.image}" alt="${this.image}" title="voir le livre" data-js-trigger="book">
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

        /* récuperér son élément HTML, facilite le reste des manipulations HTML*/
        this.el = this.conteneurParent.lastElementChild;
        this.#btnsInit();
    }

    /**
     * utiliser son élément HTML pour séléctionner ses boutons. Ajouter des gest. d'événements pour chaque action requise
     */
    #btnsInit() {
        const btnAjout = this.el.querySelector('[data-js-trigger="ajout"]');
        const btnImg = this.el.querySelector('img');

        /* créer un événement personnalisés suivant le clic */
        btnImg.addEventListener('click', () => {
            document.dispatchEvent(
                new CustomEvent("ouvrirModal", { detail: this })
            );
        });

        /* créer des événements personnalisés suivant le clic */
        btnAjout.addEventListener('click', () => {
            document.dispatchEvent(
                new CustomEvent("ajouterPanier", { detail: this })
            );
            document.dispatchEvent(
                new CustomEvent("ajouterPop", { detail: this })
            );
        });
    }

    /**
     * valider et changer la classe Css de son élément HTML selon la donnée du param.
     * @param {*} filtreCourant 
     */
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
}