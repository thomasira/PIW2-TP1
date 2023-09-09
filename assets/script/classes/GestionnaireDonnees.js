
/**
 * gère le local storage
 */
export default class GestionnaireDonnees {

    /**
     * enregistrer les données passées en param dans le local storage
     * 
     * @param {*} cle 
     * @param {*} valeur 
     */
    static enregistrerDonneesLocales(cle, valeur) {
        let valeurStr = JSON.stringify(valeur);
        localStorage.setItem(cle, valeurStr);
    }

    /**
     * retourner les données du local storage associé à la clé passée en param
     * 
     * @param {*} cle 
     * @returns données du locla storage reconvertit
     */
    static recupererDonneesLocales(cle) {
        let valeurStr = localStorage.getItem(cle);
        return JSON.parse(valeurStr);
    }

    /**
     * supprime les données du local storage associé à à la clé passée en param
     * 
     * @param {*} cle 
     */
    static supprimerDonneesLocales(cle) {
        localStorage.removeItem(cle);
    }

    /**
     * supprime toutes les données du local storage
     */
    static supprimerToutesDonneesLocales() {
        localStorage.clear();
    }
}

