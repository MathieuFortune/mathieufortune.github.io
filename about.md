---
layout: page
title: About
permalink: /about/
header : false
type: about
---

# {{ site.data.about.uvp_title }}
{: .uvp-title .no-print}

<div class="only-print">
  <h1 class="uvp-title text-center">
    {{ site.data.about.cv.title }}
  </h1>
  <h3 class="text-center">
    {{ site.data.about.cv.desc }}
  </h3>
  <p class="text-center emphase text-large">
    {{ site.data.about.uvp_title | strip_html }}
  </p>
</div>


<div class="layout-print--8">
<section class="row">
<div class="section-title no-print" markdown="1">
## {{ site.data.about.about.title }}
</div>
<div class="content" markdown="1">
{{ site.data.about.about.desc }}
</div>
</section>


<section class="row">
<div class="section-title" markdown="1">
## {{ site.data.about.experience_heading }}
</div>
<div class="content">

{% for experiences in site.data.about.experiences %}
<div class="marg-bot-twice">
<h3 class="no-marg-bot">{{ experiences.title }}, <span class="text-small brand-color italic">{{ experiences.name }}</span></h3>
<p class="text-small">
  {{ experiences.period }}
</p>
<ul>
  <li>{{ experiences.desc }}</li>
  <li>{{ experiences.skills }}</li>
</ul>
</div>
{% endfor %}

</div>
</section>

<section class="row">
<div class="section-title" markdown="1">
## {{ site.data.about.i_have_heading }}
</div>
<div class="content" markdown="1">
{% for entries in site.data.about.i_have %}
* {{ entries }}{% endfor %}
</div>
</section>

<section class="row only-print">
<div class="section-title" markdown="1">
## {{ site.data.about.hire_me_heading }}
</div>
<div class="content" markdown="1">
* Look at my [personal website](https://mathieufortune.github.io){: target="_blank"} {% for link in site.data.about.hire_me %}
* {{ link }}{% endfor %}
</div>
</section>

</div><!-- /layout-print--8 -->
<div class="layout-print--4 aside-print">

<section class="row">
<div class="section-title" markdown="1">
## {{ site.data.about.skills_heading }}
</div>
<div class="content skills" markdown="1">

{% for skills in site.data.about.skills %}
<div markdown="1">
<p class="bold">{{ skills.title }}</p>
<ul>
{% for entries in skills.list %}
  <li>{{ entries }}</li>
{% endfor %}
</ul>
</div>
{% endfor %}

</div>
</section>

</div><!-- /layout-print--4 -->

<section class="row">
<div class="section-title" markdown="1">
## Projects
</div>
<div class="content" markdown="1">

### Product Catalog redesign project
{: .no-marg-bot }

_This project intended to re-design and develop the catalog (search, find and buy a product) of 1001pharmacies e-commerce website_

**This project is in work in progress**

* Sketch project UI (Sketch)
* Design project's user experience
* Develop with HTML5/CSS3/JS
* Sass with ITCSS pattern
* Symfony 2.8 project
* Assets treatment with Webpack and PostCss
* LEAN UX approach and Scrum methods

<br/>


### Checkout process redesign project
{: .no-marg-bot }

_This project intended to re-design and develop the checkout process (cart, delivery, payment of an order) of 1001pharmacies e-commerce website_

**Results: +5% increase on the cart transformation rate. Significantly improve user experience trough the entire checkout process**

* Sketch project UI (Sketch)
* Design project's user experience
* Develop with HTML5/CSS3/JS
* Bootstrap 3 with LESS
* Symfony 2.3 project
* Assets treatment with Gulp
* LEAN UX approach and Scrum methods

<br/>


### Checkout's UX experiments
{: .no-marg-bot }

_In order to improve checkout process, UX experiments has been performed to test and better understand users behavior_

**Results: With user testing feedbacks, I improved team's workflow and democratized user testing methods knowledge in the company**

* Analyze user tests
* Usability testing (AttrakDiff)
* Perform A/B tests and set up UX metrics
* Measure user's feedbacks

<br/>


### UX designer tasks on various projects
{: .no-marg-bot }

* Build user stories
* Create personas
* Make task flows, uses cases and scenarios
* Conduct ux methods like Visual Studio, Focus Group to improve ideation process

<br/>


### i18n Ready project
{: .no-marg-bot }

_In order to prepare 1001pharmacies's website to be i18n ready, I worked on twig templates and translation files on Symfony 2. I also use this project to move the pages responsive ready_

**Results: My work on the responsive ready optimization increase by +20% the mobile traffic part on the website. Loading time of these pages was 1.5 time faster than before moving them**

* Develop an i18n ready functionnality on Symfony 2
* Web pages templates overhaul
* Adapt pages to be mobile ready with Responsive Web Design technics

<br/>


### Marketing tools
{: .no-marg-bot }

_To help marketing actions, I was led to design and develop responsive ready newsletters and landing pages_

**Results: With these new tools, marketing team's gain in conversion rate and set up time for each campaign. I also helped to improve front-end environment knowledge of co-workers**

* Design and develop responsive ready newsletter's templates (Ink framework from Fundation)
* Design and develop auto-generated responsive ready landings with Jekyll

<br/>


### Customer account redesign project
{: .no-marg-bot }

_This project intended to re-design customer account of 1001pharmacies.com e-commerce website. It was paused after the research and ideation phase_

* Create & conduct qualitative surveys
* Prototype
* Sketch project UI


<br/>


### Events and conferences
{: .no-marg-bot }

_I enjoy sharing knowledge with people and participate in community activities_

* Provide lightning talks about popularize dev concepts for the rest of company
* Participate and animate UX workshop during MeetUp


<br/>

### Side projects
{: .no-marg-bot }

_Several side projects to test new technologies for work and also for fun :)_

* Co-develop "career" website of the company in Meteor + Angular2
* Co-develop a front assets bootstrapping tool with Gulp
* Design and develop my personal website with Jekyll and Sass


</div>
</section>

<section class="row">
<div class="section-title" markdown="1">
## {{ site.data.about.trainings_heading }}
</div>
<div class="content layout--6-12" markdown="1">
{% for trainings in site.data.about.trainings %}
<div class="marg-bot">
<h3 class="no-marg-bot">{{ trainings.title }}, <span class="text-small brand-color italic" markdown="1">{{ trainings.name }}</span></h3>
<p class="text-small">
  {{ trainings.period }}
</p>
<ul>
  <li>{{ trainings.desc }}</li>
</ul>
</div>
{% endfor %}

</div>
</section>

<section class="row">
<div class="section-title" markdown="1">
## {{ site.data.about.events_heading }}
</div>
<div class="content" markdown="1">
{% for entries in site.data.about.events %}
* {{ entries }}{% endfor %}
</div>
</section>
<section class="row no-print">
<div class="section-title" markdown="1">
## {{ site.data.about.hire_me_heading }}
</div>
<div class="content" markdown="1">
{% for link in site.data.about.hire_me %}
* {{ link }}{% endfor %}
</div>
</section>

<div class="print-me no-print">
  <button onclick="window.print(); return false;" class="btn--default btn--large"><span class="icon icon--printer">{% include icon-printer.svg %}</span> <small>Print me</small></button>
</div>

<p class="text-center no-print">
  <a href="/" title="Go Back" class="bold">Go Back</a>
</p>
