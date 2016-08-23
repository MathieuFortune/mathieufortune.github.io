---
layout: page
title: About Me / Resume
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
## {{ site.data.about.projects_heading }}
</div>
<div class="content projects" markdown="1">

{% for projects in site.data.about.projects %}
<div class="item" markdown="1">

### {{ projects.title }}
{: .no-marg-bot }

_{{ projects.description }}_

{% if projects.results != empty %}
**{{ projects.results }}**
{% endif %}

<ul>
{% for entries in projects.list %}
  <li>{{ entries }}</li>
{% endfor %}
</ul>

</div>
{% endfor %}

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
