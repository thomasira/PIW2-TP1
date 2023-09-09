import GestionnaireLibrairie from "./GestionnaireLibrairie.js";

export class Popup {

    constructor() {
        const GL = GestionnaireLibrairie.instance;
        this.el = GL.el.querySelector('[data-js-popup]');
        this.textbox = this.el.querySelector('p');
        this.isTimed = false;
        this.timeOut;
        this.init();
    }

    init() {
        document.addEventListener('ajouterPop', (e) => {
            this.textbox.querySelector('strong').textContent = e.detail.titre;
            if (this.isTimed) clearTimeout(this.timeOut);
            this.el.classList.remove('invisible');
            this.el.classList.add('ajout');
            this.isTimed = true;
            this.timeOut = setTimeout(this.timer.bind(this), 2000);
        }) 
    }

    timer() {
        this.el.classList.add('invisible');
        this.isTimed = false;
    }
}

