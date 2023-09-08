
import { Livre } from './Livre.js';
import { livres } from "../../data/livres.js";
import { ModalLivre } from './ModalLivre.js'
import { PanierAchat } from './PanierAchat.js';
import { Filtre } from './Filtre.js';

export default class GestionnaireLibrairie {
    static instance;

    constructor(el) {
        if (!GestionnaireLibrairie.instance) GestionnaireLibrairie.instance = this;
        else throw new Error("impossible de dupliquer cette classe");

        this.listeLivres = livres;
        this.listeObjetsLivres = [];
        this.el = el;
        this.panier = new PanierAchat();
        this.modal = new ModalLivre();
        this.filtreBox = new Filtre();
        this.init();
    }

    init(){
        document.addEventListener("filtrer", this.filtrerListe.bind(this));
        this.listeLivres.forEach((element, index) => this.listeObjetsLivres.push(new Livre(element, index)));
        this.injecterListe();
    }

    injecterListe() {
        this.listeObjetsLivres.forEach(objLivre => objLivre.injectEtInit());
    }

    filtrerListe(e) {
        this.listeObjetsLivres.forEach(objLivre => objLivre.filtrer(e.detail));
    }
}
