import GestionnaireLibrairie from "./GestionnaireLibrairie.js";

/**
 * gère l'affichage du Popup
 */
export class Popup {

    /**
     * utiliser l'instance de GL pour instancier ses éléments HTML, initialise
     */
    constructor() {
        const GL = GestionnaireLibrairie.instance;
        this.el = GL.el.querySelector('[data-js-popup]');
        this.textbox = this.el.querySelector('p');
        this.isTimed = false;
        this.timeOut;
        this.init();
    }

    /**
     * sélectionner un sous élément HTML de sa boîte de texte. ajouter des gest. d'événements sur le document.
     */
    init() {
        let elText = this.textbox.querySelector('strong');
        
        /* changer les classes Css, commencer le Timer */
        document.addEventListener('ajouterPop', (e) => {
            this.el.classList.add('ajout');
            this.el.classList.remove('supprime');
            elText.textContent = e.detail.titre;
            this.startTimer();
        });

        /* changer les classes Css, commencer le Timer */
        document.addEventListener('enleverPop', (e) => {
            this.el.classList.add('supprime');
            this.el.classList.remove('ajout');
            elText.textContent = e.detail.titre;
            this.startTimer();
        });
    }

    /**
     * valider si un timer est actif, le supprimer cas échéant. Changer la classe Css de son élément HTML. Démarrer un timer et fixer l'activité à true;
     */
    startTimer() {
        if (this.isTimed) clearTimeout(this.timeOut);
        this.el.classList.remove('invisible');
        this.isTimed = true;
        this.timeOut = setTimeout(this.timer.bind(this), 2000);
    }

    /**
     * changer la classe Css. Fixer l'activité à false
     */
    timer() {
        this.el.classList.add('invisible');
        this.isTimed = false;
    }
}

