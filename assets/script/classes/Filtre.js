import GestionnaireLibrairie from "./GestionnaireLibrairie.js";

/**
 * gère la séléction de filtre
 */
export class Filtre {

    /**
     * utiliser le GL afin d'instancier le conteneur. Initialiser
     */
    constructor() {
        const GL = GestionnaireLibrairie.instance;
        this.filtreConteneur = GL.el.querySelector('[data-js-filtreConteneur]');
        this.init();
    }

    /**
     * ajouter un gest. d'événements sur son conteneur
     */
    init() {
        this.filtreConteneur.addEventListener('click', this.dispatchFiltre)
    }

    /**
     * envoyer un événement personnalisé sur le document, contenant le dataset js-filtre du target de l'événement
     * 
     * @param {*} e 
     */
    dispatchFiltre(e) {
        let filtre;
        if (e.target.dataset.jsFiltre) {
            filtre = e.target.dataset.jsFiltre;
            document.dispatchEvent(
                new CustomEvent("filtrer", { detail: filtre })
            );
        }
    }
}