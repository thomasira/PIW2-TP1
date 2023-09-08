export default class GestionnaireDonnees {

    static enregistrerDonneesLocales(cle, valeur) {
        let valeurStr = JSON.stringify(valeur);
        localStorage.setItem(cle, valeurStr);
    }

    static recupererDonneesLocales(cle) {
        let valeurStr = localStorage.getItem(cle);
        return JSON.parse(valeurStr);
    }

    static supprimerDonneesLocales(cle) {
        localStorage.removeItem(cle);
    }

    static supprimerToutesDonneesLocales() {
        localStorage.clear();
    }
}

