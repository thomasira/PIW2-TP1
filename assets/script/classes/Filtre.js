import GestionnaireLibrairie from "./GestionnaireLibrairie.js";

export class Filtre {

    constructor() {
        const GL = GestionnaireLibrairie.instance;
        this.filtreBox = GL.el.querySelector('[data-js-filtreBox]');
        this.init();
    }

    init() {
        this.filtreBox.addEventListener('click', this.dispatchFiltre)
    }

    dispatchFiltre(e) {
        let filtre;
        if (e.target.dataset.jsFiltre) {
            filtre = e.target.dataset.jsFiltre;
            const data = { detail: filtre };
            const event = new CustomEvent("filtrer", data);
            document.dispatchEvent(event);
        }
    }
}