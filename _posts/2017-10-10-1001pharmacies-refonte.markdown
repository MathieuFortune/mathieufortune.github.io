---
layout: post
title:  "Refonte du site e-commerce @ 1001pharmacies"
excerpt: |
    1001pharmacies.com est une marketplace de produit de santé et de parapharmacies. Elle a pour but de mettre en relation les consommateurs avec les pharmaciens en leur permettant d’accéder directement à leurs catalogues de produits en ligne. Chaque pharmacie peut gérer son propre catalogue et ses stocks.
thumbnail: "/images/case-study-1001pharmacies-thumb.jpg"
date:   2017-10-10 12:00:00 +0200
lang: fr
ref: catalog-project
author: Mathieu Fortune
theme: Cas d'étude
---

{:.table-case-study}
| Client        | 1001pharmacies.com |
| Projet           | Refonte du site e-commerce de 1001pharmacies |
| Date du projet      | Été 2017        |
| Durée du projet  | 6 mois           |
| URL du projet       | [https://www.1001pharmacies.com](https://www.1001pharmacies.com "URL du projet") |
| Rôle              | UX designer & Front-end developer |
| Responsabilités  | UX Designer (personas, wireframe, test d'utilisabilité) & Front-end developer (HTML, Sass, Javascript) dans une équipe Agile Scrum |
| Technologies utilisées | HTML5, Sass, Javascript, Webpack, PostCSS |
| Libraries/Framework | Symfony 2, ITCSS, LEAN UX |


{% include lazy-image.html src="/images/animated-1001pharmacies-home.gif" alt="Couverture de l'article" caption="" figClass="" %}

1001pharmacies.com est une marketplace de produit de santé et de parapharmacies. Elle a pour but de mettre en relation les consommateurs avec les pharmaciens en leur permettant d’accéder directement à leurs catalogues de produits en ligne. Chaque pharmacie peut gérer son propre catalogue et ses stocks.

Ce projet a été initié dans le but d'améliorer les performances, l'utilisabilité et l'expérience utilisateur général du site e-commerce de 1001pharmacies.

### L'équipe

Ce projet était la seconde implémentation de la méthode Agile Scrum.

Grâce à l'expérience accumulé lors du précédent projet de refonte du panier, l'équipe a été capable de gérer et de résoudre plus rapidement les problématiques rencontrés durant la durée du projet.

L'équipe était composée de 8 personnes. Un product owner, un Scrum master, 3 développeur back-end, une directrice artistique, un développeur front-end et moi-même en tant que développeur front-end et UX designer.

### Problème

Le précédent site e-commerce de 1001pharmacies.com avait un design veillissant, manqué d'identité de marque, avait de mauvaises performances et démontré dans les test utilisateur réalisés une difficulté à comprendre le site et trouver son produit.

L'architecture du code était également maladroite et nécessitée de longue maintenance à chaque intervention *#Code spaghetti*.
Techniquement parlant, le site tournait sur un code-igniter monolithique encapsulé dans un module Symfony 2.

<blockquote>
Tandis que le trafic et le revenue de 1001pharmacies.com augmenté rapidement (1M de visites par mois), il était devenu indispensable de refondre l'interface et le back afin de soutenir la croissance.
</blockquote>

### Approche

L'approche de l'équipe était de clarifier la navigation, ré-écrire de zéro le code en se focalisant sur les fonctionnalités de base d'un site e-commerce :

- Rechercher un produit (via la barre de recherche ou à travers les listes catégories/marques)
- Le trouver (liste produit)
- L'identifier (fiche produit)
- L'ajouter au panier (call to action)
- Passer une commande et/ou continuer son shopping (tunnel de commande)

Dans un premiers la priorité était de sortir ce build et de se concentrer ensuite sur des fonctionnalités plus complexes (ex: filtres, recommendation produit, ...).

*J'ai personnellement travaillé sur la première itération de la refonte. Une nouvelle équipe s'occupe désormais de la suite du projet*

### Rôle et processus

Ce projet fut l'occasion pour moi d'expérimenter une grande partie de mes compétences.

Mon premier rôle était de diriger l'équipe UX :

Celle-ci était composé de la [directrice artistique](https://twitter.com/annsod "Twitter de Anne-So"){:target="_blank"}, du product owner et durant certains sprint de la [directrice marketing](https://twitter.com/AudreylambertAl "Twitter de Audrey Lambert"){:target="_blank"}.

- Préparer et réaliser les interviews utilisateur
- [Créer et présenté les personas à l'équipe projet]({% post_url 2017-04-21-comment-son-cree-personas-1001pharmacies %} "Article sur les personas"){:target="_blank"}.
- Organiser des ateliers design studio afin d'aider l'équipe pendant les boucles d'idéation
- Faire les wireframes des différents templates

Je faisais aussi équipe avec [@iTweetScor](https://twitter.com/iTweetScor "Twitter de iTweetScor"){:target="_blank"} pour écrire le code du front-end :

- HTML5
- Sass
- Javascript ES6
- Twig (Symfony3)

Et pour finir, j'aidé à designer les interface utilisateur avec la directrice artistique en me focalisant sur le point de vue de l'UX designer.

### Quelques captures d'écrans du résultat

<div class="col-half--left" markdown="1">

#### AVANT

{% include lazy-image.html src="/images/case-study-1001pharmacies-home-before.jpg" alt="Screenshot Précédent page d'acceuil 1001pharmacies.com" caption="Précédent page d'acceuil 1001pharmacies.com" figClass="" %}
</div>
<div class="col-half--right" markdown="1">

#### APRÈS

{% include lazy-image.html src="/images/case-study-1001pharmacies-home-after.jpg" alt="Screenshot Nouvelle page d'acceuil 1001pharmacies.com" caption="Nouvelle page d'acceuil 1001pharmacies.com" figClass="" %}

</div>
<div class="clearfix"></div>

<div class="col-half--left" markdown="1">
{% include lazy-image.html src="/images/case-study-1001pharmacies-listing-before.jpg" alt="Screenshot Précédent listing produit 1001pharmacies.com" caption="Précédent listing produit 1001pharmacies.com" figClass="" %}
</div>
<div class="col-half--right" markdown="1">
{% include lazy-image.html src="/images/case-study-1001pharmacies-listing-after.jpg" alt="Screenshot new product listing 1001pharmacies.com" caption="Nouveau listing produit 1001pharmacies.com" figClass="" %}
</div>
<div class="clearfix"></div>

<div class="col-half--left" markdown="1">
{% include lazy-image.html src="/images/case-study-1001pharmacies-product-before.jpg" alt="Screenshot Précédente page produit 1001pharmacies.com" caption="Précédente page produit 1001pharmacies.com" figClass="" %}
</div>
<div class="col-half--right" markdown="1">
{% include lazy-image.html src="/images/case-study-1001pharmacies-product-after.jpg" alt="Screenshot Nouvelle page produit 1001pharmacies.com" caption="Nouvelle page produit 1001pharmacies.com" figClass="" %}
</div>
<div class="clearfix"></div>