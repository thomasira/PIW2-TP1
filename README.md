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

## Architecture de classes JS

Les différentes classes réprésentées par chacune des entités listée ci-haut sont gérées et instanciées par une classe *Maître* -> **GestionnaireLibraire**.  
Elles se référent à la classe *maître* pour instancier leur éléments HTML et peuvent, ou non, déclencher des événements personnalisées sur le document afin de communiquer entre-elles. Le **GestionnaireLibrairie** récupere ces différents événements et appele la classe et méthode requise. De ce fait, et le plus possible, toutes les entités et actions du projet passent par le **GL**.

>la classe **GestionnaireDonnées** non listée ci-haut gère les données associée au *local storage*, elle est instanciée par la classe **PanirAchat**.

### Sur la structure HTML

La structure HTML est composé d'un corps presque complet, c.à.d. les éléments injectés dynamiquement sont minimes et se limitent le plus possible à la donnée dynamique. Les éléments *statiques* à affichage dynamique sont cachés(css) lorsque non-requis. Des traces sous formes de data-set sont appliquées aux éléments HTML afin de les retrouver lors de l'éxécution du script JS.

### Sur le Css

Le Css est organisé minimalement en dossiers et fichiers. Certains composants peuvent bénéficier d'optimisation du code(voir panier-modal et autres).

>-  Les classes *states* réprésentent les différents états d'affichage requis. Elles sont appliqués dynamiquement dans le HTML au travers du script JS.
>-  @display -> ++1400px -650px(break) *fixer panier achat et filtre @media

### commentaires

- **JS**. Les événements personnalisés sont très efficaces pour communiquer les données d'une entité à l'autre.  
- **HTML + JS**. Le marquage data-set dans la structure HTML pourrait être plus uniforme et concise.
- **CSS**. Le nom des classes css pourraient êtres revus afin d'uniformiser le projet(un peu de *franglais*, désolé).
- **CSS**. l'organisation des classes Css pourrait être plus logique et ordonné
- **CSS**. Toujours aucunes solutions pour bien gérer la dernière rangée d'un flex row wrap. I.e -> flex-grow pour les kids mais dernière rangée du parent même hauteur que les précédantes (*voir dernière rangée du projet entre 1400px et 650px*). Display grid avec media query serait une solution possible mais non désirée