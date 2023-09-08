import GestionnaireLibrairie from "./GestionnaireLibrairie.js";

export class Popup {

    constructor() {
        const GL = GestionnaireLibrairie.instance;
        this.el = GL.el.querySelector('[data-js-popup]');
        this.isTimed = false;
        this.init();
    }

    init() {
        document.addEventListener('ajouterPop', () => {
            this.el.classList.remove('invisible');

            this.isTimed = true;
            console.log(this.isTimed)
            setTimeout(() => {
                this.isTimed = false;
                console.log(this.isTimed)
                /* if(!this.el.classList.contains('invisible')) this.el.classList.add('invisible'); */
            }, 3000);
        })
    }

}