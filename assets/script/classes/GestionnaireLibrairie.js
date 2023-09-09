import { Livre } from './Livre.js';
import { livres } from "../../data/livres.js";
import { ModalLivre } from './ModalLivre.js'
import { PanierAchat } from './PanierAchat.js';
import { Filtre } from './Filtre.js';
import { Popup } from './Popup.js';

/**
 * gère tout les modules associés à la librairie
 */
export default class GestionnaireLibrairie {
    static instance;

    /**
     * limiter l'instance de cette classe. Utiliser le param pour instancier le conteneur. Instancier les classes des différents modules et initialiser
     * 
     * @param {*} el 
     */
    constructor(el) {
        if (!GestionnaireLibrairie.instance) GestionnaireLibrairie.instance = this;
        else throw new Error("impossible de dupliquer cette classe");
        
        this.el = el;
        this.listeLivres = livres;
        this.objsLivre = [];
        this.panier = new PanierAchat;
        this.modal = new ModalLivre;
        this.popup = new Popup;
        new Filtre;
        this.init();
    }

    /**
     * ajouter des gest. d'événements au document. Instancier un objet Livre pour chaque item de la liste de livres. Injecter la liste et filtrer la liste
     */
    init(){
        document.addEventListener("filtrer", this.filtrerListe.bind(this));
        document.addEventListener('ouvrirModal', this.modal.open.bind(this.modal));
        document.addEventListener('ajouterPanier', this.panier.onHandleEvent.bind(this.panier));

        this.listeLivres.forEach(livre => this.objsLivre.push(new Livre(livre)));
        this.injecterListe();
        this.filtrerListe({detail: "tous"});
    }

    /**
     * appeler l'injectionHTML et init pour chaque objet Livre de la liste objsLivre
     */
    injecterListe() {
        this.objsLivre.forEach(objLivre => objLivre.injectEtInit());
    }

    /**
     * valider et appliquer la classe Css à l'élément HTML associé au detail passé en param. Appeler le filtrage sur chaque objet Livre de la liste objsLivbre
     * @param {*} e 
     */
    filtrerListe(e) {
        const filtre = e.detail;
        const elFiltres = this.el.querySelectorAll(`[data-js-filtre]`);
        elFiltres.forEach(elFiltre => {
            if (elFiltre.dataset.jsFiltre == e.detail) elFiltre.classList.add('selected');
            else elFiltre.classList.remove('selected');
        });
        this.objsLivre.forEach(objLivre => objLivre.filtrer(filtre));
    }
}
