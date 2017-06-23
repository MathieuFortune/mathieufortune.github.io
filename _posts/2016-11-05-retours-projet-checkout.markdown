---
layout: post
title:  "Refonte du tunnel de commande @ 1001pharmacies"
thumbnail: "/images/case-study-checkout-preview.jpg"
date:   2016-11-24 13:45:01 +0200
lang: fr
ref: checkout-project
author: Mathieu Fortune
theme: Cas d'étude
---

{:.table-case-study}
| Client        | 1001pharmacies.com |
| Projet           | "Checkout", refonte tunnel de commande |
| Date projet      | Hiver 2016        |
| Durée projet  | 3 mois           |
| URL projet       | [http://www.1001pharmacies.com/panier](http://www.1001pharmacies.com/panier "Project URL") |
| Rôle              | UX designer & développeur Front-end |
| Responsabilités  | Design, test d'utilisabilité et développement responsive du front-end de l'application dans une équipe Agile Scrum |
| Technologies utilisées | HTML5, LESS, Javascript, Gulp |
| Librarie/Framework | Bootstrap 3, Synfony 2 |

{% include lazy-image.html src="/images/case-study-checkout-preview.jpg" alt="Couverture cas d'étude nouveau tunnel de commande 1001pharmacies.com" %}

1001pharmacies.com est une marketplace de produit de santé et de parapharmacies. Elle a pour but de mettre en relation les consommateurs avec les pharmaciens en leur permettant d’accéder directement à leurs catalogues de produits en ligne. Chaque pharmacie peut gérer son propre catalogue et ses stocks.

_Le projet “checkout” a été créé afin d’améliorer l’utilisabilité et l’expérience utilisateur du tunnel de commande._


### Équipe

Ce projet a permis la première mise en place concrête d'une équipe Agile Scrum dans le processus de développement.

À cette occasion, nous avons été accompagnés par [Stephane Langlois](http://scopyleft.fr/ "Visiter le site de Stephane Langlois"){:target="_blank"}, à qui je dis un grand MERCI pour ses conseils et son accompagnement.

L'équipe en charge de ce projet était consistuée de 6 personnes. Un product owner, un scrum master, 3 développeurs back-end et moi-même.

### Problème

Grâce aux données d’utilisation que nous avions regroupée, le taux d’abandon du panier était élevé. Nous avions également détecté plusieurs problèmes d’utilisabilité tout au long du tunnel.

Certaines tentatives d’amélioration du tunnel de commande avaient été mises en place par le passé sans réel succès.

Plusieurs A/B tests avait été effectués afin de résoudre les  difficultés rencontrées par les utilisateurs, mais il était devenus clair que le processus d’achat nécessité des changements plus profonds pour satisfaire leurs besoins.

### Recherches

Afin de nous aider dans le processus de recherche, différentes supports et méthodes ont été utilisés.

Nous avons conduit des recherches sur les profils de nos clients afin de mieux comprendre leurs caractéristiques, leurs besoins spécifiques et leur perception du tunnel de commande actuel.

Ces recherches on prit la forme de questionnaires exploratoires et d'interviews utilisateurs avec nos clients les plus fidèles.

J'ai été en charge de ces recherches étant l'UX designer attitré de ce projet.

Nous avons utilisé le livre du groupe OpQuast _“Qualité web”_. C'est un livre fantastique qui liste plus de 200 best practices autour de l'accessibilité, navigation, e-commerce, mobile, performances, ... Ces best practices sont tellement concrêtes qu'elles ont permis de créer des user stories directement à partir de celles-ci.

Nous avons également utilisé le _“E-commerce checkout usability study”_ de l'institut Baymard. J'ai découvert cette étude durant ma veille technologique sur Smashing Magazine en lisant [l'article de Christian Holst](https://www.smashingmagazine.com/2011/04/fundamental-guidelines-of-e-commerce-checkout-design/ "Lire l'article de Christian Holst sur Smashing Magazine"){:target="_blank"}, co-auteur de l'étude. Cette étude solide fournit des guidelines d'utilisabilité sur le tunnel de commande e-commerce.

À l'occasion de la SmashingConf Barcelone de 2016, j'ai eu l'opportunité de rencontrer en personne Christian Holst. Nous avons pu échanger sur cette étude et les résultats que nous avons eus grâce à elle. Une personne très accessible.

### Approche

Refondre le tunnel de commande du site sans suspendre son activité était obligatoire.

Dans une approche Agile, nous avons mis en place des livraisons continues d'un produit minimum viable (MVP) visant à permettre de passer une commande complète avec un minimum de fonctionnalité.

Pour focaliser nos efforts, la méthode LEAN nous a permis de mettre en place un objectif clair :

<blockquote>
  Un utilisateur n'étant pas habitué à acheter en ligne doit pouvoir passer une commande en toute confiance et simplicité sur notre site.
</blockquote>

### Design et développement

_J'étais UX Designer et Front-end developper sur ce projet.
J'avais la responsabilité de concevoir, faire des tests d'utilisabilité et développer le front-end responsive de la refonte du tunnel de commande._

__Dans le rôle d'UX designer__, j'ai suivis l'idée du design thinking et la méthode LEAN UX.

Je laissais le design émergé au fur et à mesure que les user stories étaient présentées puis j'itéré avec les retours des utilisateurs et des stakeholders pour m'assurer de rencontrer leurs besoins.

Durant chaque sprint, je faisais mes sketchs sur une tableau blanc dans l'open space afin de permettre à toutes l'équipe et aux stakeholders de participer dans le processus de conception de chaque user stories.

__Dans le rôle de développeur front-end__, ma stack technique était en adéquation avec le fait de permettre aux développeurs back-end d'être confortable avec les langages utilisésen front.

C'est pour cela que j'ai utilisé le framework Bootstrap en LESS et du Javascript Vanilla.

### Prototypes démo

À des fins de démonstration, vous pouvez trouver un [prototype](https://marvelapp.com/1fcb351/screen/16618571 "Prototypes du projet checkout"){:target="_blank"} sur Marvel.

Marvel est une solution Saas que j'utilise pour partager les prototypes et sketchs avec les membres de l'équipe.

### Block étape du checkout

Voici un exemple de comment une user story a été développée.

Tout d'abord, le product owner propose une user story qui peut être interprétée comme un besoin, un "pourquoi".
<blockquote>En tant qu'acheteur, je peux connaître où je trouve dans le panier afin d'être rassuré les étapes suivantes.</blockquote>

L'équipe réponds à ce "pourquoi" avec un "comment". Et cela commence par mon sketch :


{% include lazy-image.html src="/images/case-study-cart-sketch.jpg" alt="Sketch block étape du panier" caption="Sketch block étape du panier" %}


Lorsqu'une version est validée, je construit le composant HTML/CSS :

<p data-height="265" data-theme-id="0" data-slug-hash="PbwjZw" data-default-tab="css,result" data-user="mathieu_fortune" data-embed-version="2" data-pen-title="Snippet - Checkout steps block" class="codepen">See the Pen <a href="http://codepen.io/mathieu_fortune/pen/PbwjZw/">Snippet - Checkout steps block</a> by FrontEnd Matt (<a href="http://codepen.io/mathieu_fortune">@mathieu_fortune</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Après cela, les développeurs back-end implémente la fonctionnalité dans le projet symfony.

Puis le product owner et moi-même testons auprès des utilisateurs et stakeholders la fonctionnalité dans un test d'utilisabilité.

### Amélioration progressive

Lorsque je construis un site internet, je n'assume pas que les utilisateurs aient Javascript d'activé, utilise la dernière version flamboyante de leur navigateur web et ont une connexion internet puissante et stable.

C'est pourquoi j'ai une __approche d'amélioration progressive__ lorsque je conçois et développe les interfaces. D'autant plus quand cela correspond à l'objectif du MVP comme pour ce projet "Checkout".

Je commence donc chaque user story en développant le __composent avec du HTML/CSS résilient, cross-browser compatible et quasiment aucun Javascript__. Cela permet à l'équipe de se concentrer sur des fondations solides pour construire les fonctionnalités puis d'itérer afin d'améliorer l'expérience.

_Par exemple, le modificateur de quantité d'un produit dans le panier a été premièrement conçus avec un bouton "appliquer" sans Javascript puis, en itérant, avec un reload automatique via Javascript._

Nous voulions nous assurer de la compatibilité du panier avec le Javascript désactivé car l'ancienne version du tunnel de commande n'était pas utilisable sans celui-ci et même pire, il provoqué des crashs sous internet explorer à cause d'erreurs de script.

### Test d'utilisabilité

J'ai écrit un [article]({% post_url 2016-06-10-atelier-uxflupa %} "Retour sur l'atelier UX FLUPA") au sujet du MeetUp UX que j'ai coorganisé. À cette occasion, le tunnel de commande a été testé dans différents ateliers UX.

{% include lazy-image.html src="/images/flupa-photos-1.jpg" alt="Photo atelier UX FLUPA" %}
