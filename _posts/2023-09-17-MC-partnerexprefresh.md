---
layout: post
title:  "Modernizing the Partner Experience of Mentor Collective's SaaS Platform"
excerpt: |
    Mentor Collective's journey from a basic dashboard to an intuitive platform saw a 116% user engagement surge. This case study highlights a blend of tech, user empathy, and team synergy in modernizing a tool essential for higher-ed administrators.
thumbnail: "/images/cover-partner-experience-refresh-mentor-collective.jpg"
date:   2023-09-03 13:30:00 +0200
lang: en
ref: mentor collective
author: Mathieu Fortune
theme: Case Study
---

{% include lazy-image.html src="/images/cover-partner-experience-refresh-mentor-collective.jpg" alt="Case study's cover image showing design frames in Figma" caption="Mentor Collective - Partner Experience Refresh Case Study Illustration" figClass="" %}

*To comply with my non-disclosure agreement, I have omitted and obfuscated confidential information in this case study. All information in this case study is my own and does not necessarily reflect the views of Mentor Collective.

## Overview

Mentor Collective is an organization dedicated to facilitating student connections and bridging the equity gap in post-secondary education. To accomplish this mission, Mentor Collective developed a student engagement platform. This SaaS platform is designed to cultivate a nurturing community through peer-mentorship while providing higher-ed institutions with timely insights into the evolving needs of students during pivotal moments in their academic journey.

Higher-ed administrators, referred to as partners, have access to a dashboard to manage their mentorship initiatives. While the original partner experience was suitable during Mentor Collective's inception, the company's rapid evolution underscored the need for a comprehensive design overhaul. The goal was not just to modernize, but also to transform it into a user-centric, accessible platform with enhanced feature capabilities.

As the Senior Product Designer, I led the project's end-to-end product design process from user research and ideation to final delivery, ensuring a user-centric and visually compelling product. I used Dovetail to document our research, Whimsical for brainstorming and wireframing, Figma for both low- and high-fidelity UI design, integrated the new design system I recently had championed, and utilized Asana for project management and guiding engineering implementation.
My team included a Product Manager, a squad of five Software Engineers and a UX researcher for the initial problem discovery.

The project started in the summer of 2021. A beta version was rolled out to a selected number of customers in January 2022, allowing the team to quickly iterate on the designs. By April 2022, we launched the fully realized version, accounting for the feedback and insights gathered during the beta phase. 

For the sake of brevity, this case study will focus on the initial development phase leading to the release of the beta version. To comply with my non-disclosure agreement, I have omitted and obfuscated confidential information in this case study. All information in this case study is my own and does not necessarily reflect the views of Mentor Collective.


## Problem statement

As Mentor Collective experienced rapid growth, several challenges emerged: scalability concerns, accessibility compliance, and gaps in user insights. 

The initial MVP state of the partner dashboard was under strain. Both its performance and features required improvements to ensure the product could scale seamlessly with our expanding user base.

Beyond fulfilling commitments from recent contracts, the team also wanted to redesign the dashboard to comply with WCAG AA standards. We aimed to provide an enjoyable user experience for everyone.

When we started the project, our team faced a significant challenge: limited insight into how users interacted with the product. For a data-driven team like ours, understanding their needs, pain points, and usage patterns was crucial for any meaningful improvement.


## Research

Our research kicked off with the aim to learn more about the needs and challenges faced by our partner users. At the time of this project, our internal analytics was quite limited, we were somewhat in the dark about the specifics of the user experience.

To shed some light on this area, the UX researcher and I collaborated to create an interview script and reach out to our users to gather more qualitative data. Our focus wasn’t just on our external partners but also on our internal team — specifically, account managers who engaged with our partners daily and could provide firsthand insights about their experiences with the product.

We managed to interview 2 partners representative of our core user audience and had insightful discussions with 5 of our internal team members. 

To process and document this round of research, I collaborated with the UX researcher using Dovetail, a collaborative user feedback analysis platform. We would upload the recordings of the interviews and tag the transcripts with keywords relevant for our project. This data-driven approach allowed us to quickly identify recurring pain points and needs.

{% include lazy-image.html src="/images/illustration-partner-experience-mentor-collective-01.jpg" alt="Screenshot showing research documented in Dovetail" caption="Research documented in Dovetail. *Illustrations are intentionally non-specific due to confidentiality restrictions*" figClass="" %}


## Learnings

- Partners struggled when attempting to extract data from their dashboard. They frequently needed to download portions of data to integrate them into their BI tool for deeper analysis. However, the only way to obtain this data was by requesting their account managers to retrieve it for them. This process created unnecessary friction, especially when the data was already available in our system but wasn't directly accessible to the users. This lack of direct download capability deterred them from logging in, adversely affecting user engagement with our product.

- Quick data checks or "at-a-glance" views, especially when reporting to their financial decision-makers, was difficult to perform. This data was available in our system, but once again, only account managers had visibility on it. This issue was also negatively affecting user engagement.

- The dashboard only displayed aggregated “all-time” data. However, our partners were interested in observing data trends over specific time frames and wanted detailed breakdowns segmented by student populations to better understand their students' journeys and needs.

Collectively, these insights underscored a prevailing desire: users wanted a more hands-on approach in managing their mentorship initiatives by directly accessing the data the platform generated. The initial partner experience was designed with the account manager as the central conduit (a comprehensive choice given its MVP nature). However, over time, user needs had evolved, and our research also highlighted a pressing requirement for a more scalable solution.

After sharing these findings with my product manager, we defined a clearer objective to guide the design ideation phase. We articulated this objective as a user story:

> “As a point person (partner interacting with the dashboard), I want to continuously monitor the impact of, and discern trends within, the MC mentorship program for specific students and student populations. This information helps me in directing my student support initiatives. However, aside from **offuscasted**, the dashboard primarily showcases 'all time' metrics for the entire program. This makes me feel the dashboard doesn’t offer timely, actionable insights, rendering frequent checks redundant.”


## Design Process

With these learnings in hand, I switched to the ideation phase, here’s a breakdown of my process:

Understanding the current state of the product
My starting point was diving deep into the existing dashboard. Having been designed by a design contractor during the company's early stage, there was a knowledge gap within the team about this part of the product. This step was pivotal in understanding both its strengths and the areas needing improvements.

### Collaborative brainstorming
With the main user need identified and a better knowledge of the current product, I initiated a remote brainwriting exercise using Whimsical and “How Might We” questions to facilitate the flow of ideas. Recognizing the value of diverse perspectives, I strategically invited internal team members who interact with our users at various stages of their journey. This eclectic group comprised a salesperson, two account managers, an engineer, and two members from the product team: the Director of Curriculum and a Product Manager. The exercise ensured a rich pool of ideas, drawing from each participant's unique experiences and insights with our users.

{% include lazy-image.html src="/images/illustration-partner-experience-mentor-collective-02.jpg" alt="Screenshot showing brainstorming notes" caption="Brainwriting notes in Whimsical. *Illustrations are intentionally non-specific due to confidentiality restrictions*" figClass="" %}

### Journey map and sketching
With the initial brainstorming phase completed, I transitioned to several rounds of ideation and sketching. I laid out a journey map to help us visualize the paths our user would take to accomplish certain tasks and crafted wireframes of the new partner experience. Leveraging Whimsical, a versatile online tool, I collaborated seamlessly with my Product Manager and Lead Engineer to gather their feedback.

{% include lazy-image.html src="/images/illustration-partner-experience-mentor-collective-03.jpg" alt="Screenshot showing ideation work in Whimsical" caption="User Journey Map and Wireframes in Whimsical. *Illustrations are intentionally non-specific due to confidentiality restrictions*" figClass="" %}

### User Validation
I then reconnected with the internal team members previously interviewed to walk them through the wireframes. Presenting the wireframes to them served a dual purpose: ensuring our direction aligned with their insights and confirming that our solutions addressed their highlighted pain points.

### High-Fidelity UIs
With increased confidence in our direction, I transitioned into a more granular design phase. Using Figma, the wireframes evolved into detailed, high-fidelity user interfaces, reflecting both aesthetics and functionality.

At the heart of these designs was a comprehensive dashboard page, detailed with data visualization charts. To account for the large datasets of our users, I designed a robust data table, equipped with extensive filtering capabilities, ensuring effective management of participants, mentorships, and program activities. An alert and notification system was improved to allow partners to more easily identify students in need of immediate support. A participant profile was showcasing individual data with data widgets and filterable tables. User data revealed that the vast majority of our users accessed our platform via desktop. Given the project's timeline and budget constraints, I chose to ensure the mobile experience was functional but not fully optimized.

{% include lazy-image.html src="/images/illustration-partner-experience-mentor-collective-04.jpg" alt="Screenshot showing high-fidelity user interfaces in Figma" caption="High-fidelity UIs in Figma. *Illustrations are intentionally non-specific due to confidentiality restrictions*" figClass="" %}

### Integration with Design System
In crafting these refined UIs, I leaned heavily on a design system that I had recently championed at Mentor Collective, seamlessly integrating its elements— from the accessible color palette and clear typography to the streamlined layout and components— into the dashboard's new look.

{% include lazy-image.html src="/images/illustration-partner-experience-mentor-collective-05.jpg" alt="Screenshot showing design system in Figma" caption="Excerpt of Design System in Figma. *Illustrations are intentionally non-specific due to confidentiality restrictions*" figClass="" %}

### Preparation for Implementation
Following the completion of the high-fidelity UIs, I collaborated closely with the Product Manager and Engineering Lead. To ensure my designs were easy to follow, I recorded a video walkthrough detailing their key elements. This approach, combined with discussions with the Product Manager, enabled us to write a clear set of requirements for the engineering team that would subsequently be used to create the engineering plan.

### Collaboration with Developers:
Ensuring seamless transition to the implementation phase, I provided meticulous hand-off notes accompanied by the design walkthrough video. These resources were conveniently housed in Figma, adjacent to the high-fidelity UIs as well as in Asana. Throughout the build phase, I regularly engaged in quality control tests, collaborating closely with engineers to guarantee accurate representation of my designs.

{% include lazy-image.html src="/images/illustration-partner-experience-mentor-collective-06.jpg" alt="Screenshot showing design hand-off notes in Figma" caption="Design Hand-off Notes for engineers. *Illustrations are intentionally non-specific due to confidentiality restrictions*" figClass="" %}


## Implementation and Launch

### Addressing Design Challenges
During implementation, the data visualization feature presented some unexpected challenges. When real data was integrated into the designs, certain charts warranted adjustments for clearer data presentation. Leveraging my frontend development background, I was able to work hand-in-hand with the engineering team, ensuring clear communication and a quick resolution.

### Testing and Iteration
With the easy to follow set of requirements set by the Product Manager and myself, engineers crafted comprehensive unit tests. Both of us also carried out quality checks, ensuring near pixels-perfect implementation and functional integrity. 
Once the implementation completed, a beta version of the redesigned partner experience was rolled out to a select group of users. We identified part of the product that needed refinement. This beta rollout was greatly helpful to the team to ensure quick and efficient iterations of this complex and extensive project.
While many iterations focused on refining UX copy and naming conventions, feedback from our users pinpointed a significant issue: a revamped feature had strayed too far from the familiar user flow, inadvertently increasing friction and user errors.
Promptly acting on this feedback, I revisited the wireframes and adjusted the navigation and flow for the problematic feature. We then validated this new design with our internal stakeholders, progressed to high-fidelity UIs, and set clear requirements for our engineers. Following this process and re-releasing the feature to our beta users, we observed a marked decrease in both friction and user errors.

{% include lazy-image.html src="/images/illustration-partner-experience-mentor-collective-07.jpg" alt="Screenshot showing design iteration in Figma" caption="Design iterations in Figma. *Illustrations are intentionally non-specific due to confidentiality restrictions*" figClass="" %}

### Post-Launch Monitoring and Results
Alongside introducing the beta of the refreshed partner experience, we integrated a new analytics tool to meticulously track pivotal KPIs and evaluate the project's impact. Metrics such as NPS, DAU, MAU, feature adoption rates, and average session duration were at the forefront of our monitoring, aiming to determine any enhancements in user engagement and product stickiness.

A few months following the full release, the results spoke volumes: _user engagement soared by a staggering 116%_. Beyond the hard data, invaluable feedback from our NPS surveys painted a vivid picture. 

A partner from North Carolina A&T shared, 
> “Since working with Mentor Collective we're able to get those specific metrics and data, and we have the dashboard – which we absolutely love – to see exactly what's going on and tailor specific programs or initiatives to be able to help the students."

Another commendation from the University of Delaware echoed, 
> "We can’t underestimate the power of one person. It’s been really exciting to see through the information on the dashboard and through the Flags just how powerful one mentor can be to a student and how impactful they can be.”

## Wrapping up

In retrospect, collaboration was the linchpin of our project's success. From the get-go, the necessity to deeply understand the needs and challenges of our partner users meant that our team had to collaboratively engage with both external partners and internal stakeholders. With the help of the UX researcher, I could effectively dive into the heart of the user's experience, gathering invaluable qualitative insights.

My approach to brainstorming, which involved cross-functional team members, highlighted the essence of collaboration. By bringing together a diverse set of individuals, from salespeople and account managers to product team members, I was able to generate a rich pool of ideas. Each participant's unique touchpoints with our users enriched our understanding and provided a more holistic view of the challenges and possible solutions.

I also leaned heavily on collaboration during the design phase. With Whimsical, I was able to engage seamlessly with the Product Manager and Lead Engineer to refine our wireframes. User validation was a collaborative effort where I ensured our directions resonated with the initial insights of the internal team.
Collaboration was present even in the implementation phase. Working hand-in-hand with engineers, especially when addressing design challenges, was crucial. Their feedback, combined with my frontend development knowledge, allowed us to find quick solutions to complex problems. The beta rollout and subsequent iterations showcased the benefits of ongoing collaborative feedback, leading to more user-centric refinements.

In essence, without the multifaceted collaboration – both internally and with our users – the success we achieved would not have been possible. Our ability to collectively bridge gaps in understanding, ideate, design, and iterate was central to our project's outcome, as evidenced by the soaring user engagement and positive feedback post-launch.

## Let's get in touch

Interested in elevating your product's user experience? Let's collaborate and drive tangible results, as showcased in this case study. 
<a href="mailto:pro.mathieu.fortune@gmail.com">Reach out</a>, and together, let's craft solutions that resonate with your audience.
