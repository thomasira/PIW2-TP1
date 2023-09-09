import GestionnaireLibrairie from "./GestionnaireLibrairie.js";
import GestionnaireDonnees from "./GestionnaireDonnees.js";

export class PanierAchat {
    constructor() {
        this.panier = [];
        const GL = GestionnaireLibrairie.instance;
        this.modalBtn = GL.el.querySelector('[data-js-trigger="panier"]');
        this.modalBox = GL.el.querySelector('[data-js-modal="panier"]');
        this.listeLivre = this.modalBox.querySelector('[data-js-liste-panier]');
        this.elTotal = this.modalBox.querySelector('[data-js-total]');
        this.btnVider = this.modalBox.querySelector('[data-js-trigger="vider"]');
        this.prixTotal;
        this.init();
    }

    init() {
        this.modalBtn.addEventListener('click', this.afficherPanier.bind(this));
        this.btnVider.addEventListener('click', this.viderPanier.bind(this));

        const livres = GestionnaireDonnees.recupererDonneesLocales('panier');
        if(livres) livres.forEach(livre => this.ajouterAuPanier(livre));
        this.setPanierHTML();
    }

    onHandleEvent(e) {
        this.ajouterAuPanier(e.detail);
    }

    setPanierHTML() {
        this.prixTotal = 0;
        this.listeLivre.innerHTML = '';
        this.panier.forEach((livre, index) => {
            this.prixTotal += livre.prix;
            const livreInfo = `
                <div class="item-panier">
                    <small>${livre.titre}</small>
                    <div class="prix">${livre.prix}$</div>
                    <img data-js-jeter="${index}" src="./assets/icon/trash.png" alt="icon-poubelle" title="enlever l'item">
                </div>`;
            this.listeLivre.insertAdjacentHTML('beforeend', livreInfo);
            if (this.listeLivre.lastElementChild) this.#btnInit(index);
        });
        this.#afficherTotal();
/*         if(prixTotal == 0) this.elPrix.textContent = "Votre panier est vide.";
        else this.elPrix.textContent = "Total: " + prixTotal + " $"; */
    }

    ajouterAuPanier(livre) {
        this.panier.push(livre);
        GestionnaireDonnees.enregistrerDonneesLocales('panier', this.panier);
        this.setPanierHTML();
    }

    afficherPanier() {
        this.modalBox.classList.toggle('invisible');
    }

    viderPanier() {
        GestionnaireDonnees.supprimerDonneesLocales('panier');
        this.panier = [];
        this.setPanierHTML();
    }

    #btnInit(index) {
        const btnEnlever = this.listeLivre.lastElementChild.querySelector(`[data-js-jeter]`);
        btnEnlever.addEventListener('click', (e) => {
            this.panier.splice(index, 1);
            GestionnaireDonnees.enregistrerDonneesLocales('panier', this.panier);
            this.setPanierHTML();
        });
    }

    #afficherTotal() {
        let totalHTML;
        const taxes = this.calculerTaxes();
        const total = this.calculerTotal();
        if (this.panier.length == 0) totalHTML = `<p>Votre panier est vide.</p>`;
        else totalHTML = `
            <p>Sous total: ${this.prixTotal} $</p>
            <p>Taxes: ${taxes} $</p>
            <p>Total: ${total} $</p>
        `;
        this.elTotal.innerHTML = totalHTML;
    }
    calculerTaxes() {
        return (this.prixTotal * .15).toFixed(2);
    }
    calculerTotal() {
        return (this.prixTotal * 1.15).toFixed(2);
    }
}
