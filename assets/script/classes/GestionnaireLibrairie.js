
import { Livre } from './Livre.js';
import { livres } from "../../data/livres.js";
import { ModalLivre } from './ModalLivre.js'
import { PanierAchat } from './PanierAchat.js';

export default class GestionnaireLibrairie {
    static instance;
    conteneurHTML;

    constructor(conteneurHTML) {
        if (!GestionnaireLibrairie.instance) GestionnaireLibrairie.instance = this;
        else throw new Error("impossible de dupliquer cette classe");

        this.listeLivres = livres;
        this.listeObjetsLivres = [];
        this.conteneurHTML = conteneurHTML;
        this.panier = new PanierAchat();
        this.init();
    }

    init(){
        this.listeLivres.forEach((element, index) => {
            this.listeObjetsLivres.push(new Livre(element, index));
        });
        this.injectList();
    }

    injectList() {
        this.listeObjetsLivres.forEach(objLivre => {
            objLivre.injectThumb();
        });
    }
}