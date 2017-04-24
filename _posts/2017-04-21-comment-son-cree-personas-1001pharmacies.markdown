---
layout: post
title:  "Comment sont créés les personas de 1001pharmacie ?"
thumbnail: "/images/personas-casestudy-thumbnail.jpg"
date: 2017-04-21 12:00:00 +0200
lang: fr
ref: personas-case-study
author: Mathieu Fortune
theme: Cas d'étude
---

Ce cas d'édude fait suite à mon précédent article sur [qu'est-ce qu'un persona]({% post_url 2017-04-20-persona-quesaco %} "Article : Qu'est-ce qu'un persona ?") que je vous invite à lire si vous ne l'avez pas encore fait.

### Sources des données

Entrons maintenant dans le vif du sujet.

Pour construire les personas de 1001pharmacies.com, différentes sources de données ont été utilisées.

Le __top 100 des meilleurs acheteurs sur les 6 derniers mois__ à permis de fournir une première projection des différents profils clients (Nom, Prénom, Adresse, Typologie de produits achetés, fréquence …)

Les __interviews exploratoires faites en interne de l’équipe__ ont également fourni des informations sur les comportements que peuvent avoir les utilisateurs de site e-commerce étant donné que la plupart d'entre eux ont commandé plusieurs fois sur le site.

Enfin le __retour sur les appels téléphoniques__ passés aux “amnésiques” (clients ayant commandés qu’une seule fois), ont également éclairci certains comportements utilisateurs.

### Continuum à facettes

Une fois ces données agrégées, elles permettent de construire un continuum à facettes.

*C’est une représentation de caractéristiques opposées permettant de définir les différentes facettes des personas.*

Les caractéristiques sont définies en fonction du système développé et des similarités que l’on peut retrouver dans les données utilisateurs.

Une fois le continuum construit, les différents personas sont placés sur l’axe horizontal.

{% include lazy-image.html src="/images/personas-continuum-facettes.png" alt="Image Continuum à facettes des personas" caption="Continuum à facettes des personas" %}

__3 personas ont été créés.__

Ce nombre réduit permet d’éviter au concepteur de se disperser lors des différentes phases de création des systèmes.
De plus, plusieurs profils d’utilisateurs (attentes, besoins) étaient suffisamment similaires pour être regroupés en un seul personna.

### Persona primaire

Il représente l’utilisateur principal du futur produit. Il est celui pour qui le système sera conçu, celui dont les besoins et les objectifs seront entièrement satisfaits. Les fonctionnalités qui découlent de son comportement sont prioritaires sur les autres personas.

*Delphine, 30 ans, jeune maman active.*

La maman représente la majorité de la clientèle actuelle du site 1001pharmacies.com. En tant que persona primaire du site 1001pharmacies.com, ses attentes et ses besoins facilement identifiables permettent de concevoir des fonctionnalités universelles pour tout site e-commerce (recherche produit performante, filtres efficaces, performance d’affichage des pages, navigation intuitive …)

{% include lazy-image.html src="/images/persona-primaire-fr.jpg" alt="Image Card persona primaire" caption="Card persona primaire" %}

* Delphine connaît ses produits avant d’arriver sur le site.
* Son besoin se situe essentiellement sur des produits de maternité.
* Elle achète de façon régulière et recherche les meilleurs prix sur internet.
* Son besoin récurrent des mêmes produits lui permet d’anticiper ses achats, par conséquent, elle n’est pas spécialement sensible aux délais de livraison.
* Dans son parcours d’achat, elle adopte un comportement rationnel, elle s’en tient à sa liste d’achat prévu à l’avance et ne s’aventure pas dans les autres rubriques du site.
* Sa personnalité est introvertie, ce qui signifie qu’elle utilise le site comme un service sans rechercher un aspect communautaire ou un contact humain.


### Parcours type persona primaire

Pour illustrer ce persona, un parcours utilisateur type a été construit.

*Ceci n’est pas une représentation exhaustive de l’expérience qu’aurait le persona sur le site.*

Il permet au concepteur de mieux comprendre les actions du persona afin de focaliser ses efforts de conception.
Ici, le parcours représente le premier achat du persona :

{% include lazy-image.html src="/images/persona-primaire-parcours-fr.png" alt="Image parcours persona primaire" caption="Parcours persona primaire" %}

1. Delphine a un parcours linéaire du fait qu’elle connaît à l’avance les produits dont elle a besoin.
2. Elle n’a pas beaucoup de temps à consacrer à ses achats.
3. Arrive sur le site via un comparateur de prix où elle recherche son premier produit (ex: lait pour bébé) au meilleur prix.
4. Atterris sur la fiche produit et l’ajoute directement au panier, car est déjà convaincu par le produit.
5. Lance une recherche pour trouver un second produit (ex: cotopads) via la barre ou le menu.
6. Atterris sur le listing produit pour trouver son second produit.
7. Clic sur une fiche produit.
8. L’ajoute directement au panier, car est également déjà convaincu par le produit.

### Persona secondaire A

Ils partagent des objectifs et besoins communs avec le persona primaire. Ils ont néanmoins également des caractéristiques propres, mais qui ne seront pas prioritaires pour la conception du système.

Le premier de ces personas secondaires est :

*Julie, 28ans, indépendante et curieuse.*

Ce persona représente une autre part importante de la clientèle de 1001pharmacies.com.
Acheteur/se de produits de parapharmacies par plaisir et conviction que ces produits sont de qualité supérieure aux produits de grande surface.

Les fonctionnalités relatives à ce persona concernent l’aspect séduction du site et des produits (mise en avant des nouveautés, fonction filtre avancé, mise en place de plans de parrainage et/ou de fidélité …)

{% include lazy-image.html src="/images/persona-secondaireA-fr.jpg" alt="Card persona secondaire Julie" caption="Card persona secondaire Julie" %}

* Julie est convaincue de la qualité des produits de parapharmacies.
* Cependant, elle n’a pas une grande connaissance des gammes de produits présente en parapharmacie.
* Elle sait ce qu’elle ne veut pas et reste donc ouverte aux nouveautés.
* Son rapport à l’achat plaisir compulsif est important. Un délai de livraison raisonnable est important.
* Sa fréquence d’achat varie en fonction du besoin ou de l’offre promotionnelle disponible.
* Elle apprécie de partager ses découvertes et achats avec ses amies. Sa personnalité extravertie lui fait rechercher un aspect communautaire et humain dans le branding du site.
* Sa connaissance des produits n’étant pas grande, des fiches produits avec du contenu de qualité et des conseils (filtres, avis) peuvent l’aider dans ses achats.

### Parcours type persona secondaire A

{% include lazy-image.html src="/images/persona-secondaireA-parcours-fr.png" alt="Image parcours persona secondaire A" caption="Parcours persona secondaire A" %}

Julie n’a pas le nom précis des produits qu’elle recherche. Elle connaît seulement leur marque.
Son parcours est plus sinueux que celui de Delphine.
1. Elle trouve 1001pharmacie via son positionnement sur les marques.
2. Arrive sur une page marque depuis un résultat naturel.
3. Ouvre plusieurs onglets de fiches produits pour identifier et comparer les produits qui semblent similaires.
4. Prends peu de temps pour identifier ceux qui correspondent à ses attentes et sont directement ajoutés au panier, les autres non.
5. Lance une nouvelle recherche (nom d’une marque).
6. Arrive sur le listing produit.
7. Trouve le second produit recherché.
8. Corresponds à ses attentes, ajoute le produit au panier.

### Persona secondaire B

Le second persona secondaire est :

*Claire, 31ans, éthique et responsable*

Ce persona représente la potentiel future cible de 1001pharmacies.com en accord avec les valeurs à véhiculer.

Acheteuse de produits de parapharmacies qui souhaite prendre soin d’elle en restant responsable et éthique vis-à-vis des compositions produits utilisées et des marques auxquels elle fait confiance.

Les fonctionnalités relatives à ce persona concernent l’aspect communautaire du site, la qualité des contenus et l’approche responsable autour de la sélection des produits et marque proposée. (fiche produit de qualité, page marque développée, branding du site transparent et en accords sur ses valeurs ...)

{% include lazy-image.html src="/images/persona-secondaireB-fr.jpg" alt="Image Card persona secondaire Claire" caption="Card persona secondaire Claire" %}

* Claire est exigeante avec les produits et les marques qu’elle utilise.
* Elle cherche du sens dans ses achats et n’hésite pas à remettre en question les trends en cours.
* Elle suit l’actualité des produits, visite des blogs et forums de parapharmacies. Elle est en quelques sortes une version plus hardcore du persona Julie.
* Sa fréquence d’achat reste irrégulière au gré de ses besoins et plaisirs du moment. Cependant elle prend le temps de lire les compositions des produits et ne laisse pas séduire par un packaging ou une communication alléchante.
* Son rapport à l’aspect communautaire du site est très fort, elle apprécie les formes de communication émergente et le rapport humain.
* Sa connaissance des produits varie, mais elle prend toujours le temps d’être convaincue de son achat avant de prendre une décision.


### Parcours type persona secondaire B

{% include lazy-image.html src="/images/persona-secondaireB-parcours-fr.png" alt="Image parcours persona secondaire Claire" caption="Parcours persona secondaire Claire" %}

Claire a également un parcours assez sinueux.
1. Elle atterrit sur 1001pharmacies depuis une page marque de niche à la suite d’un article de blog qu’elle vient de lire. Une blogueuse séduite par nos valeurs et notre approche à partager une page marque que nous proposons.
2. S’attarde à connaître l’historique de la marque pour savoir si ses valeurs correspondent avec les siennes.
3. Ouvre plusieurs fiches produits et prend le temps de lire la composition de ces derniers pour faire son choix de manière responsable et rationnel.
4. Lance une nouvelle recherche pour trouver d’autres produits.
5. Répète le même schéma pour cette nouvelle marque et ses produits.

### Usages

En conclusion, la création de ces personas et leur utilisation à contribuer à la refonte de la marketplace de 1001pharmacies (actuellement en beta ouverte).

En donnant un visage et une personnalité stéréotypée aux utilisateurs du système, l'équipe de conception est en mesure d'identifier et de prioriser les fonctionnalités attendu sur la plateforme.
