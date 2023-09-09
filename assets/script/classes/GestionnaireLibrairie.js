import { Livre } from './Livre.js';
import { livres } from "../../data/livres.js";
import { ModalLivre } from './ModalLivre.js'
import { PanierAchat } from './PanierAchat.js';
import { Filtre } from './Filtre.js';
import { Popup } from './Popup.js';


export default class GestionnaireLibrairie {
    static instance;

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

    init(){
        document.addEventListener("filtrer", this.filtrerListe.bind(this));
        document.addEventListener('ouvrirModal', this.modal.open.bind(this.modal));
        document.addEventListener('ajouterPanier', this.panier.onHandleEvent.bind(this.panier));

        this.listeLivres.forEach(livre => this.objsLivre.push(new Livre(livre)));
        this.injecterListe();
    }

    injecterListe() {
        this.objsLivre.forEach(objLivre => objLivre.injectEtInit());
    }

    filtrerListe(e) {
        const filtre = e.detail;
        this.objsLivre.forEach(objLivre => objLivre.filtrer(filtre));
    }
}
