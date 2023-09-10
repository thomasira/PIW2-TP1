PWI2-TP1  
Thomas Aucoin-Lo

# Projet librairie

Le projet est une page de librairie cataloguant une liste de livre. Il est possible de filtrer la liste de livres selon la catégorie choisie dans le panel *filtre* ainsi que d'ajouter et supprimer un livre de la liste du *panier d'achat*, celle-ci enregistrée dans le *local storage*.

## Entités et fonctionnalités

- Livre
    - affiche les données d'un livre de la liste de livre
    - ouvre le modal pour le livre séléctionné
    - ajoute le livre séléctionné au panier d'achat

- Panier d'achat
    - le panier offre différent affichage selon le contenu de la liste de livre
    - chaque item peut être supprimé indivuellement  
    - le liste de livre peut être vider en entier

- Panel filtre
    - liste toutes les catégories disponibles
    - filtre la liste de livre du panneau de livres selon la catégorie séléctionnée

- Modal livre  
    - affiche les données du livre déclencheur

- Popup
    - affiche un message lors de l'ajout ou la suppression d'un livre du panier d'achat

## Architecture de classes

Les différentes classes réprésentées par chacune des entités listée ci-haut sont gérées et instanciées par une classe *Maître* -> **GestionnaireLibraire**.  
Elles se référent à la classe *maître* pour instancier leur éléments HTML et peuvent, ou non, déclencher des événements personnalisées sur le document afin de communiquer entre-elles. Le **GestionnaireLibrairie** récupere ces différents événements et appele la classe et méthode requise. De ce fait, et le plus possible, toutes les entités et actions du projet passent par le **GL**.

>la classe **GestionnaireDonnées** non listée ci-haut gère les données associée au *local storage*, elle est appélé par la classe **PanirAchat**.

## structure HTML


### commentaires