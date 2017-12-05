---
layout: post
title:  "Redesign the front-end e-commerce application @ 1001pharmacies"
thumbnail: "/images/case-study-1001pharmacies-thumb.jpg"
date:   2017-10-10 12:00:00 +0200
lang: en
ref: catalog-project
author: Mathieu Fortune
theme: Case studies
---

{:.table-case-study}
| Client        | 1001pharmacies.com |
| Project           | Front-end e-commerce application redesign |
| Project date      | Summer 2017        |
| Project duration  | 6 months           |
| Project URL       | [https://www.1001pharmacies.com](https://www.1001pharmacies.com "Project URL") |
| Role              | UX designer & Front-end developer |
| Responsabilities  | UX Designer (personas, wireframe, usability tests) & Front-end developer (HTML, Sass, Javascript) in a Scrum Agile team |
| Technologies used | HTML5, Sass, Javascript, Webpack, PostCSS |
| Library/Framework | Symfony 2, ITCSS, LEAN UX |


{% include lazy-image.html src="/images/animated-1001pharmacies-home.gif" alt="Picture cover of the article" caption="" figClass="" %}

1001pharmacies.com is an online marketplace in the health and well-being activity. Its purpose is to connect pharmacists directly with their customers through an access to their products online. Each pharmacy can manage its own drugstore catalog and its stock.

*This project was initiated in order to improve performances, usability and overall user experience of the front-end e-commerce application.*

### Team

This project was the second implementation of an Agile Scrum workflow.

Thanks to the previous experience gained with the checkout redesign project, we were able to better and faster tackled each problematics we've encountered.

The team that worked on this project consisted of 8 people. A product owner, a scrum master, 3 back-end devs, a artistic director, a front-end dev bud and myself as front-end dev & UX designer.

### Problem

The previous front-end application of 1001pharmacies.com was old fashionned, lacked of brand identity, had poor performances and shown during usability tests that users had an hard time figuring out how to find products.

The code architecture was also clunky and was causing a lot of maintenance time *#spaghettiCode*.
Technically speaking, the website was running on a monolithic code-igniter core which was encapsuled in a Synfony 2 module.

<blockquote>
As 1001pharmacies.com traffic and revenue was rapidly increasing (1M views each month), it had become essential to redone the website in order to substain growth.
</blockquote>

### Approach

The team approach was to clarify the navigation, re-start from scratch by stycking only to the core features of an e-commerce website :

- Search a product (via a search bar or through categories/brands listings)
- Find it (product listing)
- Review it (product page)
- Add it to cart (call to action)
- Make and order and/or continue shopping (checkout process)

Release this build then iterate on it to add more complex features (eg: filters, product recommendations, ...).

*I was personnaly rattached to the first iteration of the redesign. A new team is now working on the following of this project.*

### Roles and process

This project was the occasion for me to experiment a lot of different aspects of my skills.

My main role was to lead the UX team :

Composed of the [Artistic Director](https://twitter.com/annsod "Anne-So twitter account"){:target="_blank"}, the Product owner and during some sprint the [Director of digital marketing](https://twitter.com/AudreylambertAl "Audrey Lambert twitter account"){:target="_blank"}.

- Prepare and perform users interviews
- [Create personas and present them to the rest of the team]({% post_url 2017-04-21-how-are-created-personas-1001pharmacies %} "Personas article"){:target="_blank"}.
- Design studio workshops to help the team during ideation loop
- Wireframing of page templates

I was also teaming with my buddy [@iTweetScor](https://twitter.com/iTweetScor "iTweetScor twitter account"){:target="_blank"} to write the front-end bit of code :

- HTML5
- Sass
- Javascript ES6
- Twig (Symfony3)

Finally, I had to help designing the UI with the Artistic Director based on my UX point of view.

### Some result screenshots

<div class="col-half--left" markdown="1">

#### Before

{% include lazy-image.html src="/images/case-study-1001pharmacies-home-before.jpg" alt="Screenshot previous home 1001pharmacies.com" caption="Previous Home 1001pharmacies.com" figClass="" %}
</div>
<div class="col-half--right" markdown="1">

#### After

{% include lazy-image.html src="/images/case-study-1001pharmacies-home-after.jpg" alt="Screenshot new home 1001pharmacies.com" caption="New Home 1001pharmacies.com" figClass="" %}

</div>
<div class="clearfix"></div>

<div class="col-half--left" markdown="1">
{% include lazy-image.html src="/images/case-study-1001pharmacies-listing-before.jpg" alt="Screenshot previous product listing 1001pharmacies.com" caption="Previous product listing 1001pharmacies.com" figClass="" %}
</div>
<div class="col-half--right" markdown="1">
{% include lazy-image.html src="/images/case-study-1001pharmacies-listing-after.jpg" alt="Screenshot new product listing 1001pharmacies.com" caption="New product listing 1001pharmacies.com" figClass="" %}
</div>
<div class="clearfix"></div>

<div class="col-half--left" markdown="1">
{% include lazy-image.html src="/images/case-study-1001pharmacies-product-before.jpg" alt="Screenshot previous product page 1001pharmacies.com" caption="Previous product page 1001pharmacies.com" figClass="" %}
</div>
<div class="col-half--right" markdown="1">
{% include lazy-image.html src="/images/case-study-1001pharmacies-product-after.jpg" alt="Screenshot new product page 1001pharmacies.com" caption="New product page 1001pharmacies.com" figClass="" %}
</div>
<div class="clearfix"></div>