export default class GestionnaireDonnees {
    // fonction statique disponible partout sans avoir à faire new
    //LocalStorage
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


    static enregistrerDonneesSession(cle, valeur) {}

    static recupererDonneesSession(cle) {}

    static supprimerDonneesSession(cle) {}

    static supprimerToutesDonneesSession() {}
}

