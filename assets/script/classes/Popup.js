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

            
            if(!this.isTimed) this.el.classList.add('invisible');
            this.isTimed = true;
            setTimeout(() => {
                if(!this.isTimed) this.isTimed = false;
            }, 3000);
            

        })
    }

}