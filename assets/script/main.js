import GestionnaireLibrairie from './classes/GestionnaireLibrairie.js';

(function(){
    const elLibrairie = document.querySelector('[data-js-librairie]');
    new GestionnaireLibrairie(elLibrairie);
})();