import GestionnaireLibrairie from "./GestionnaireLibrairie.js";

export class Popup {

    constructor() {
        const GL = GestionnaireLibrairie.instance;
        this.el = GL.el.querySelector('[data-js-popup]');
        this.textbox = this.el.querySelector('span');
        this.isTimed = false;
        this.isOn = false;
        this.init();
    }

    init() {
        document.addEventListener('ajouterPop', (e) => {
            this.textbox.textContent = e.detail.titre + " a été ajouté au panier"
            this.el.classList.remove('invisible');
            this.isTimed = true;
            setTimeout(() => {
                if (!this.isTimed) this.isOn = true;
                console.log(this.isOn)
                if (!this.isOn) this.el.classList.add('invisible');
                this.isOn = false;
                this.isTimed = false;
            }, 3000);
        }) 
    }
}