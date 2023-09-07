import {livres} from '../data/livres.js';
import {Livre} from './classes/Livre.js';
import GestionnaireLibrairie from './classes/GestionnaireLibrairie.js';


(function(){

    const elLibrairie = document.querySelector('[data-js-librairie]');
    new GestionnaireLibrairie(elLibrairie);
/* 
    const conteneurLivre = document.querySelector('[data-js-librairie]');
    livres.forEach(livre => {
        new Livre(livre, conteneurLivre);
        console.log(Livre);
    }); */

})();