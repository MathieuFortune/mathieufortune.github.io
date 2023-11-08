---
layout: post
title:  "Modernizing the Partner Experience of Mentor Collective's SaaS Platform"
excerpt: |
   Mentor Collective's journey from a basic dashboard to an intuitive platform led to a 116% user engagement surge. This case study highlights a blend of tech, user empathy, and team synergy in modernizing a tool essential for higher-ed administrators.
thumbnail: "/images/cover-partner-experience-refresh-mentor-collective.jpg"
date:   2023-09-03 13:30:00 +0200
lang: en
ref: mentor collective
author: Mathieu Fortune
theme: Case Study
---


{% include lazy-image.html src="/images/cover-partner-experience-refresh-mentor-collective.jpg" alt="Case study's cover image showing design frames in Figma" caption="Mentor Collective - Partner Experience Refresh Case Study Illustration" figClass="" %}

*To comply with my non-disclosure agreement, I have omitted and obfuscated confidential information in this case study. All information in this case study is my own and does not necessarily reflect the views of Mentor Collective.*

## Project Synopsis

Mentor Collective is an organization dedicated to facilitating student connections and bridging the equity gap in higher-education. To accomplish this mission, Mentor Collective developed a student engagement platform. This SaaS platform is designed to cultivate a nurturing community through peer-mentorship while providing higher-ed institutions with timely insights into the evolving needs of students during pivotal moments in their academic journey.

Higher-ed administrators, referred to as "partners", have access to a dashboard to manage mentorship initiatives at their institution. While the original partner experience was suitable during Mentor Collective's inception, the company's rapid evolution underscored the need for a comprehensive design overhaul. The goal was not just to modernize, but also to transform it into a user-centric, accessible platform with enhanced feature capabilities.

As the Senior Product Designer, I led the end-to-end product design process from user research and ideation to final delivery. My primary tools for this project were:
- Dovetail to document our research
- Whimsical for brainstorming and wireframing
- Figma for both low- and high-fidelity UI design
- The new design system <a href="https://mathieufortune.github.io/MC-designsystem.html" target="_blank">I recently had championed</a>
- Asana for project management and guiding engineering implementation (later on the team switched to Jira/Confluence)

My team included a Product Manager, a squad of five Software Engineers and a UX researcher for the initial problem discovery.

The project started in the summer of 2021. A beta version was rolled out to a selected number of customers in January 2022, allowing the team to quickly iterate on the designs. By April 2022, we launched the full release version, accounting for the feedback and insights gathered during the beta phase.


## Navigating Growth Hurdles

As Mentor Collective experienced rapid growth, several challenges emerged: scalability concerns, accessibility compliance, and gaps in user insights.

The initial MVP state of the partner dashboard was under strain. Both its performance and features required improvements to ensure the product could scale seamlessly to meet the need of our expanding user base.

Beyond fulfilling commitments from recent contracts, the team also wanted to redesign the partner experience to comply with WCAG AA standards. We aimed to provide an enjoyable user experience for everyone.

However, before starting this project, our team faced a significant challenge: limited insight into how users interacted with the product. For a data-driven team like ours, understanding users' needs, pain points, and usage patterns was crucial for any meaningful improvement.


## User-Centric Discovery

Our research began with learning more about the needs and challenges faced by our partner users. At the time of this project, our internal analytics was limited to device and session data; we were somewhat in the dark about the specifics of the user behavior.

To shed some light on this area, I collaborated with the UX researcher to create an interview script and reach out to our users to gather more qualitative data.

Our focus wasn’t just on our external partners but also on our internal team — specifically, account managers who engaged with our partners daily and could provide firsthand insights about their experiences with the product.

We managed to interview two partners, who represented our core user audience, and had insightful discussions with five of our internal team members. Landing interviews with additional partners had been proven difficult due to the back-to-school season but we were confident that our internal team could fill the gap.

To process and document our research, I used Dovetail, a collaborative user feedback analysis platform. Recordings of the interviews would be uploaded and transcripts tagged with keywords relevant for our project. This data-driven approach allowed us to quickly identify recurring pain points and needs.

{% include lazy-image.html src="/images/illustration-partner-experience-mentor-collective-01.jpg" alt="Screenshot showing research documented in Dovetail" caption="Research documented in Dovetail. *Illustrations purposely blurred due to confidentiality restrictions*" figClass="" %}


### Key Takeaways

__Barriers to export data__: Partners faced challenges when trying to export data from the dashboard. While they often needed to incorporate sections of data into their BI tool for advanced analysis, their only recourse was to request this information from account managers. This introduced undue friction, especially because the data was readily available in our system but not directly accessible to partners. This lack of direct download capability deterred them from logging in, decreasing user engagement with our product.

__Lack of “At-a-glance” data view__: Quick data checks or "at-a-glance" views, which partners used for reporting to their financial decision-makers, were difficult to perform. This data was available in our system, but once again, only account managers had access to this information. This issue also negatively affected user engagement.

__Need for disaggregated and over time data__: The dashboard only displayed aggregated “all-time” data. However, our partners were interested in observing data trends over specific time frames and wanted detailed breakdowns segmented by student populations to better understand their students' journeys and needs.

Collectively, these insights underscored the following needs:
> Partners wanted a more hands-on approach in managing their mentorship initiatives by directly accessing the data the platform generated.

The initial partner experience was designed with the account manager as the conduit of data communication, which temporarily met the needs of users given the MVP nature of the platform. However, over time, user needs evolved, and our research highlighted the need for a more hands-on approach.

After sharing these findings with my Product Manager, we defined a clear objective to guide the design phase. We articulated this objective as a user story:

> As a point person,<br/> 
I want to continuously monitor the impact of, and discern trends within, the mentorship program for specific students and student populations.<br/>
This information helps me in directing my student support initiatives.<br/>
However, aside from student alerts (Flags), the dashboard primarily showcases 'all time' metrics for the entire program.<br/>
This makes me feel the dashboard doesn’t offer timely, actionable insights, rendering frequent checks redundant.”

To facilitate conversation and transparency around our work to internal stakeholders, I crafted a storyboard showcasing this user story:

{% include lazy-image.html src="/images/illustration-partner-experience-mentor-collective-01-bis.png" alt="Storyboard telling a story around the partner's pain point" caption="Storyboard helping convey the user's pain point to internal stakeholders" figClass="" %}


## Design Process

With these learnings in hand, I switched to the design phase, here’s a breakdown of my process:

### Understanding the current state of the product
My starting point was diving deep into the existing product to learn its systems. Having been designed by a design contractor during the company's early stage, there was a knowledge gap within the team about this part of the product. This step was pivotal in understanding both its strengths and the areas needing improvements.

### From Challenge to Creativity: The Brainwriting Session
With the main user need identified and a better knowledge of the current product, I initiated a remote brainwriting exercise using Whimsical and “How Might We” questions to facilitate the flow of ideas.

Recognizing the value of diverse perspectives, I invited internal team members who interact with our users at various stages of their journey. This  group comprised a salesperson, two account managers, an engineer, and two members from the product team: the Director of Curriculum and the Product Manager. The exercise ensured a rich pool of ideas, drawing from each participant's unique experiences and insights with our users.

{% include lazy-image.html src="/images/illustration-partner-experience-mentor-collective-02.jpg" alt="Screenshot showing brainstorming notes" caption="Brainwriting notes in Whimsical. *Illustrations purposely blurred due to confidentiality restrictions*" figClass="" %}

### From Insight to Ideation
With the initial brainstorming phase completed, I transitioned to several rounds of ideation and sketching. 

I laid out a journey map to help us visualize the paths our user would take to accomplish certain tasks and crafted wireframes of the new partner experience. To guide my process, I asked myself questions:
- What data points currently in our system could be surfaced to the user?
- How to display these data points in a way that make sense to the user?
- What layouts should be used to comprehensively present information?
- etc...

Leveraging Whimsical, I collaborated seamlessly with my Product Manager and Lead Engineer to gather their feedback.

{% include lazy-image.html src="/images/illustration-partner-experience-mentor-collective-03.jpg" alt="Screenshot showing ideation work in Whimsical" caption="User Journey Map and Wireframes in Whimsical. *Illustrations purposely blurred due to confidentiality restrictions*" figClass="" %}

I then reconnected with the internal team members previously interviewed to walk them through the wireframes. Presenting the wireframes to them served a dual purpose:
- ensuring our direction aligned with their insights
- confirming that our solutions addressed their highlighted pain points

### Guiding with Principles

With increased confidence in our direction, I transitioned into the next design phase. Before jumping into high-fidelity user interfaces in Figma, I elected some design principles that would serve as guiding principles:

__Keep it clean__: The primary goal of this project is to improve visibility into a program’s data, at scale. Maintaining a clean, minimalist look would allow the partner experience to be easily scaled up in the future.

__Respect user’s time__: Our research informed us that user’s cognitive load is fairly high throughout their workday and their time is precious. The designs need to strive for unambiguity and be mindful of the user needs.

__Leverage the design system__: The designs should lean on the design system recently introduced to maximize accessibility, scalability and streamline implementation.

### A Modernized and Enhanced Partner Experience

Before showcasing some of the solutions implemented in this project, here is what the partner experience looked like before this project:

{% include lazy-image.html src="/images/illustration-partner-experience-mentor-collective-08-bis.jpg" alt="Screenshot showcasing user interfaces of the initial partner experience" caption="Screenshots showcasing the partner experience before this project" figClass="large-post-image" %}

<br/> All the research and rounds of low-fi ideation culminated in a series of comprehensive, accessible and user-centric design solutions:

#### Program Intelligence Chart 
Expand access to data and enhance visualization of this data in the dashboard.

{% include lazy-image.html src="/images/illustration-partner-experience-mentor-collective-08.jpg" alt="Screenshot showing high-fidelity user interfaces in Figma" caption="" figClass="large-post-image" %}

<br/>
#### Filters and enhanced tables
Allow data to be filtered and display in clear data tables to account for larger datasets and provide users with tool to drill down on a specific student population.

{% include lazy-image.html src="/images/illustration-partner-experience-mentor-collective-09.jpg" alt="Screenshot showing high-fidelity user interfaces in Figma" caption="" figClass="large-post-image" %}

<br/>
#### Export options
A brand new “Exports” page and made sure to provide export CTAs throughout key touchpoints in the partner experience.
{% include lazy-image.html src="/images/illustration-partner-experience-mentor-collective-10.jpg" alt="Screenshot showing high-fidelity user interfaces in Figma" caption="" figClass="large-post-image" %}

<br/>
#### Layout & navigation changes
Modernize the layout to make information on each page more accessible. Ensure the design is responsive to accommodate various desktop and tablet sizes, as revealed by the quantitative data.

{% include lazy-image.html src="/images/illustration-partner-experience-mentor-collective-11.jpg" alt="Screenshot showing high-fidelity user interfaces in Figma" caption="" figClass="large-post-image" %}

<br/>
#### Miscellaneous tweaks 
Update brand identity, increase relevance of activities page, introduce in-app notification, modernize UI, ...

{% include lazy-image.html src="/images/illustration-partner-experience-mentor-collective-04.jpg" alt="Screenshot showing high-fidelity user interfaces in Figma" caption="" figClass="large-post-image" %}
<br/>

### Drawing from the Design System
In crafting these refined UIs, I leaned heavily on a <a href="https://mathieufortune.github.io/MC-designsystem.html" target="_blank">design system that I had recently championed at Mentor Collective</a>, seamlessly integrating its elements — from the accessible color palette and clear typography to the streamlined layout and components — into the dashboard's new look.

{% include lazy-image.html src="/images/illustration-partner-experience-mentor-collective-05.jpg" alt="Screenshot showing design system in Figma" caption="Excerpts of the design system I championned at Mentor Collective" figClass="" %}

### Preparation for Implementation
Upon completing the high-fidelity UIs, I consulted with the Product Manager and Engineering Lead, providing a video overview of the designs to streamline their work. 
Together with the Product Manager, we crafted detailed requirements for the engineers' implementation.

### Collaboration with Developers
Ensuring seamless transition to the implementation phase, I provided meticulous hand-off notes accompanied by the design walkthrough video. These resources were conveniently housed in Figma, adjacent to the high-fidelity UIs as well as in Asana.

Throughout the implementation phase, I regularly engaged in quality control tests, collaborating closely with engineers to guarantee accurate representation of my designs, functional integrity, and full accessibility (WCAG AA) compliance.

{% include lazy-image.html src="/images/illustration-partner-experience-mentor-collective-06.jpg" alt="Screenshot showing design hand-off notes in Figma" caption="Early version of design hand-off notes provided to engineers" figClass="" %}


## Implementation and Launch

### Addressing Design Challenges
During implementation, the data visualization feature presented some unexpected challenges. When real data was integrated into the charts, some adjustments were warranted for clearer data presentation. Leveraging my frontend development background, I was able to work hand-in-hand with the engineering team, ensuring clear communication and a quick resolution.

In the words of one of my colleagues, reflecting on this collaboration and my broader approach to design:
> "What sets Mathieu apart is his ability to be a creative thought partner when it comes to bridging the gap between design and engineering, demonstrating a commitment to collaboration and teamwork. He consistently engaged in productive dialogue with engineers to improve design handoff processes and sprint workflows, and excelled in finding innovative design workarounds to technical limitations, which makes him an invaluable asset to any project. — Lindsay W. - Senior Software Engineer"

### Beta Insights & Iterations
Once the implementation completed, a beta version of the new partner experience was rolled out to a select group of users. This beta rollout was essential to the team to ensure quick and efficient iterations of this complex and extensive project.

While many iterations focused on minor tweaks and refining UX copy, feedback from our users pinpointed a significant issue:
- a revamped feature had strayed too far from the familiar user flow, inadvertently increasing friction and user errors.

Promptly acting on this feedback, I revisited the wireframes and adjusted the navigation and flow for the problematic feature. We then validated this new design with our internal stakeholders, progressed to high-fidelity UIs, and set clear requirements for our engineers. Following this process and re-releasing the feature to our beta users, we observed a marked decrease in both friction and user errors.

{% include lazy-image.html src="/images/illustration-partner-experience-mentor-collective-07.jpg" alt="Screenshot showing design iteration in Figma" caption="Design iterations in Figma around the Flags page" figClass="" %}

### Beyond the Design: The Tangible Impact of Our Revamp
Alongside introducing the beta of the redesigned partner experience, we integrated a new analytics tool to meticulously track pivotal KPIs and evaluate the project's impact. Metrics such as NPS, DAU, MAU, feature adoption rates, and average session duration were at the forefront of our monitoring, aiming to determine any improvements in user engagement and product stickiness.

A few months following the full release, the results spoke volumes: __user engagement soared by a staggering 116%__. Beyond the hard data, invaluable feedback from our NPS surveys painted a vivid picture.

A partner from North Carolina A&T shared,
> “Since working with Mentor Collective we're able to get those specific metrics and data, and we have the dashboard – which we absolutely love – to see exactly what's going on and tailor specific programs or initiatives to be able to help the students."

Another feedback from the University of Delaware echoed,
> "We can’t underestimate the power of one person. It’s been really exciting to see through the information on the dashboard and through the Flags just how powerful one mentor can be to a student and how impactful they can be.”


## Reflecting On This Project

In retrospect, collaboration was the linchpin of our project's success. From the get-go, the necessity to deeply understand the needs and challenges of our partner users meant that our team had to collaboratively engage with both external partners and internal stakeholders. With the help of the UX researcher, I could effectively dive into the heart of the user's experience, gathering invaluable qualitative insights.

My approach to brainstorming, which involved cross-functional team members, highlighted the essence of collaboration. By bringing together a diverse set of individuals, from salespeople and account managers to product team members, I was able to generate a rich pool of ideas. Each participant's unique touchpoints with our users enriched our understanding and provided a more holistic view of the challenges and possible solutions.

I also leaned heavily on collaboration during the design phase. With Whimsical, I was able to engage seamlessly with the Product Manager and Lead Engineer to refine our wireframes. User validation was a collaborative effort where I ensured our directions resonated with the initial insights of the internal team.

Collaboration was present even in the implementation phase. Working hand-in-hand with engineers, especially when addressing design challenges, was crucial. Their feedback, combined with my frontend development knowledge, allowed us to find quick solutions to emerging issues. The beta rollout and subsequent iterations showcased the benefits of ongoing collaborative feedback, leading to more user-centric refinements.

In essence, without the multifaceted collaboration – both internally and with our users – the success we achieved would not have been possible. Our ability to collectively bridge gaps in understanding, ideate, design, and iterate was central to our project's outcome, as evidenced by the soaring user engagement and positive feedback post-launch.


## Let's Get in Touch!

Interested in elevating your product's user experience? Let's collaborate and drive tangible results, as showcased in this case study.
<a href="mailto:pro.mathieu.fortune@gmail.com">Reach out</a>, and together, let's craft solutions that resonate with your audience.


