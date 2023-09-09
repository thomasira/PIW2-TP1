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

        this.listeLivres = livres;
        this.listeObjetsLivres = [];
        this.el = el;
        new PanierAchat;
        this.modal = new ModalLivre;
        new Filtre;
        new Popup;
        this.init();
    }

    init(){
        document.addEventListener("filtrer", this.filtrerListe.bind(this));
        document.addEventListener('ouvrirModal', this.modal.open.bind(this.modal));
        this.listeLivres.forEach(livre => this.listeObjetsLivres.push(new Livre(livre)));
        this.injecterListe();
    }

    injecterListe() {
        this.listeObjetsLivres.forEach(objLivre => objLivre.injectEtInit());
    }

    filtrerListe(e) {
        this.listeObjetsLivres.forEach(objLivre => objLivre.filtrer(e.detail));
    }
}
