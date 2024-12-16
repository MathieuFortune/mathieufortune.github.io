---
layout: post
title:  "Modernizing Mentor Collective's SaaS Platform"
excerpt: |
   This case study explores my role in transforming Mentor Collective's basic dashboard into an intuitive platform, resulting in a remarkable 116% surge in user engagement. I'll share how I blended technical expertise with user empathy to reimagine a tool crucial for higher-ed administrators. You'll see how I navigated the challenges of modernizing an existing system, fostered team synergy, and ultimately delivered a solution that significantly improved the partner experience.
thumbnail: "/images/cover-partner-experience-refresh-mentor-collective.jpg"
date:   2023-09-03 13:30:00 +0200
lang: en
ref: mentor collective
author: Mathieu Fortune
theme: Case Study
featured: true
---


{% include lazy-image.html src="/images/cover-partner-experience-refresh-mentor-collective.jpg" alt="Case study's cover image showing design frames in Figma" caption="Mentor Collective - Partner Experience Refresh Case Study Illustration" figClass="" %}

*To comply with my non-disclosure agreement, I have omitted and obfuscated any confidential information in this case study. All information presented here reflects my personal experience and does not necessarily represent the views of Mentor Collective.*

## Project Synopsis


Mentor Collective empowers higher-ed institutions to build equitable, student-centered communities through a peer-mentorship platform. This SaaS solution enables partners—university administrators—to manage and track mentorship initiatives, offering critical insights into student needs at pivotal academic moments.

However, the platform's rapid growth revealed the need for a complete redesign to enhance usability and expand features.

As Senior Product Designer, I led the end-to-end design process, from user research to delivery, utilizing tools like Dovetail, Whimsical, Figma, and Asana (later Jira/Confluence). I also leverage the new design system <a href="https://mathieufortune.github.io/MC-designsystem.html" target="_blank">I recently had championed</a>.

Our cross-functional team, including a PM, five engineers, and a UX researcher, started the project in summer 2021, launched a beta in January 2022 and iterated swiftly based on user feedback. By April, the full release delivered a user-focused, accessible, scalable platform to elevate the partner experience.


## Navigating Growth Hurdles

As Mentor Collective rapidly scaled, we encountered key challenges: improving scalability, enhancing accessibility, and closing gaps in user insights.

The MVP version of the partner dashboard needed both performance and feature upgrades to support our expanding user base. To meet evolving expectations, we prioritized compliance with WCAG AA standards to ensure a universally accessible and enjoyable experience.

However, a critical hurdle was the limited visibility into user interactions. For our data-driven team, gaining insights into user needs, pain points, and engagement patterns was essential to create a more impactful redesign.


## User-Centric Discovery

We started by investigating the needs of our partner users to better understand their challenges. At the time, our analytics offered only basic session data, leaving critical gaps in user behavior insights.

Collaborating with our UX researcher, I designed an interview script and reached out to key users. I conducted interviews with two external partners, supplemented by discussions with five internal account managers who interact with partners daily.Landing additional interviews with partners had been proven difficult due to the back-to-school season but we were confident that our internal team could fill the gap.

Using Dovetail, I documented, tagged, and analyzed transcripts, allowing us to identify recurring themes quickly and accurately.

{% include lazy-image.html src="/images/illustration-partner-experience-mentor-collective-01.jpg" alt="Screenshot showing research documented in Dovetail" caption="Research documented in Dovetail. *Illustrations purposely blurred due to confidentiality restrictions*" figClass="large-post-image" %}


### Key Takeaways

__Barriers to Data Export__: Partners struggled to export dashboard data independently. Although essential for advanced BI analysis, this data was only accessible through account managers at Mentor Collective, creating friction. This lack of direct access reduced engagement, as partners were discouraged from logging in for insights.

__Absence of “At-a-Glance” Data Views__: Partners needed quick data snapshots for reporting to decision-makers, but similarly to data export, only account managers could access these. This gap impacted engagement by limiting partners’ direct use of the platform.

__Need for Disaggregated and Time-Specific Data__: The dashboard presented aggregated “all-time” metrics, while partners needed to observe data trends over specific periods and by student demographics to understand student journeys more effectively.

These findings highlighted a critical shift: partners desired direct access to manage mentorship initiatives, marking a transition from an account manager-centered model.

The MVP’s initial reliance on account managers fulfilled early user needs, but growing demands showed the need for a more self-sufficient experience.

After reviewing these insights with my Product Manager, we established a clear design objective:

> As a point person,<br/>
I want to continuously monitor the impact of, and discern trends within, the mentorship program for specific students and student populations.<br/>
This information helps me in directing my student support initiatives.<br/>
However, aside from student alerts (Flags), the dashboard primarily showcases 'all time' metrics for the entire program.<br/>
This makes me feel the dashboard doesn’t offer timely, actionable insights, rendering frequent checks redundant.”

To communicate our vision and secure buy-in, I developed a storyboard illustrating this user story for internal stakeholders.

{% include lazy-image.html src="/images/illustration-partner-experience-mentor-collective-01-bis.png" alt="Storyboard telling a story around the partner's pain point" caption="Storyboard helping convey the user's pain point to internal stakeholders" figClass="large-post-image" %}


## Design Process

With our findings in hand, I transitioned into the design phase. Here’s a breakdown of my approach:

### Understanding the Current Product
I began by thoroughly analyzing the existing product, which had been designed by an external contractor in the company’s early days. This step was essential to uncover both strengths and areas for improvement, addressing the team’s knowledge gap.

### From Challenge to Creativity: The Brainwriting Session
Armed with user needs and a solid understanding of the product, I facilitated a remote brainwriting session using Whimsical and “How Might We” prompts.

To ensure diverse input, I included a range of internal stakeholders—sales, account managers, engineering, and product team members. This cross-functional session generated a wealth of ideas grounded in real user insights.

{% include lazy-image.html src="/images/illustration-partner-experience-mentor-collective-02.jpg" alt="Screenshot showing brainstorming notes" caption="Brainwriting notes in Whimsical. *Illustrations purposely blurred due to confidentiality restrictions*" figClass="large-post-image" %}

### From Insight to Ideation
With brainstorming complete, I moved into ideation and sketching. I created a journey map to visualize key user tasks, followed by wireframes of the new partner experience. To guide the design, I posed questions like:

- Which data points should be surfaced to users?
- How can these data points be displayed intuitively?
- What layouts will best present the information?

Using Whimsical, I collaborated closely with my Product Manager and Lead Engineer, incorporating their feedback throughout this iterative process.

{% include lazy-image.html src="/images/illustration-partner-experience-mentor-collective-03.jpg" alt="Screenshot showing ideation work in Whimsical" caption="User Journey Map and Wireframes in Whimsical. *Illustrations purposely blurred due to confidentiality restrictions*" figClass="large-post-image" %}

I then reconnected with the partner users I’d previously interviewed, walking them through the wireframes. This served two purposes:

- Ensuring alignment between our direction and their insights
- Validating that our solutions addressed their highlighted pain points

### Guiding with Principles

With a clear direction, I entered the next design phase, setting guiding principles before moving to high-fidelity designs in Figma:

__Keep it clean__: Prioritize a clean, minimalist design to make data more accessible and enable future scalability.

__Respect user’s time__: Research showed that users experience high cognitive load throughout their day, making their time valuable. The designs should prioritize clarity and conciseness, ensuring they meet user needs efficiently.

__Leverage the design system__: Utilize our recently established design system for accessibility, scalability, and streamlined implementation.

### A Modernized and Enhanced Partner Experience

Before showcasing some of the solutions implemented in this project, here is what the partner experience looked like before this project:

{% include lazy-image.html src="/images/illustration-partner-experience-mentor-collective-08-bis.jpg" alt="Screenshot showcasing user interfaces of the initial partner experience" caption="Screenshots showcasing the partner experience before this project" figClass="large-post-image" %}

<br/> All the research and rounds of low-fi ideation culminated in a series of comprehensive, accessible and user-centric design solutions:

#### Program Intelligence Chart 
Expanded access to and visualization of data on the dashboard.

{% include lazy-image.html src="/images/illustration-partner-experience-mentor-collective-08.jpg" alt="Screenshot showing high-fidelity user interfaces in Figma" caption="" figClass="large-post-image" %}

<br/>
#### Filters and enhanced tables
Added filters and data tables for managing large datasets, enabling users to drill down into specific student populations.

{% include lazy-image.html src="/images/illustration-partner-experience-mentor-collective-09.jpg" alt="Screenshot showing high-fidelity user interfaces in Figma" caption="" figClass="large-post-image" %}

<br/>
#### Export options
Introduced an “Exports” page, embedding export CTAs at key touchpoints.
{% include lazy-image.html src="/images/illustration-partner-experience-mentor-collective-10.jpg" alt="Screenshot showing high-fidelity user interfaces in Figma" caption="" figClass="large-post-image" %}

<br/>
#### Layout & navigation changes
Modernized layout for better accessibility, making it responsive to desktop and tablet sizes based on usage data.

{% include lazy-image.html src="/images/illustration-partner-experience-mentor-collective-11.jpg" alt="Screenshot showing high-fidelity user interfaces in Figma" caption="" figClass="large-post-image" %}

<br/>
#### Additional UI Tweaks
Updated brand identity, redesigned the activities page, introduced in-app notifications, and refreshed the UI.

{% include lazy-image.html src="/images/illustration-partner-experience-mentor-collective-04.jpg" alt="Screenshot showing high-fidelity user interfaces in Figma" caption="" figClass="large-post-image" %}
<br/>

### Integrating the Design System
I leveraged a <a href="https://mathieufortune.github.io/MC-designsystem.html" target="_blank">design system that I had recently championed at Mentor Collective</a>, embedding its accessible color palette, typography, and streamlined layouts into the dashboard.

{% include lazy-image.html src="/images/illustration-partner-experience-mentor-collective-05.jpg" alt="Screenshot showing design system in Figma" caption="Excerpts of the design system I championned at Mentor Collective" figClass="" %}

### Implementation Preparation
After finalizing high-fidelity UIs, I collaborated with the Product Manager and Engineering Lead, providing a video walkthrough to guide the engineering team. We also documented clear requirements for development.

### Developer Collaboration
To ensure accurate implementation, I provided detailed hand-off notes, the design walkthrough video, and conducted quality control tests. These resources were housed in Figma and Asana for easy access. Throughout development, I worked closely with engineers to maintain design integrity, functionality, and WCAG AA compliance.

{% include lazy-image.html src="/images/illustration-partner-experience-mentor-collective-06.jpg" alt="Screenshot showing design hand-off notes in Figma" caption="Early version of design hand-off notes provided to engineers" figClass="" %}


## Implementation and Launch

### Tackling Design Challenges
During implementation, the data visualization feature presented unforeseen challenges. When integrated with real data, adjustments were needed to ensure clarity. Leveraging my front-end development experience, I collaborated closely with engineering for quick, effective resolutions.

As one of the Senior Software Engineer I worked with noted:
> "What sets Mathieu apart is his ability to be a creative thought partner when it comes to bridging the gap between design and engineering, demonstrating a commitment to collaboration and teamwork. He consistently engaged in productive dialogue with engineers to improve design handoff processes and sprint workflows, and excelled in finding innovative design workarounds to technical limitations, which makes him an invaluable asset to any project. — Lindsay W. - Senior Software Engineer"

### Beta Insights & Iterations
Upon completing the implementation, we launched a beta for select users, allowing quick iterations on this complex project. While most changes were minor, user feedback highlighted a significant issue: a revamped feature had diverged from familiar workflows, increasing friction and errors. Addressing this, I revised the navigation and validated the new design with stakeholders, significantly reducing errors post-beta.

{% include lazy-image.html src="/images/illustration-partner-experience-mentor-collective-07.jpg" alt="Screenshot showing design iteration in Figma" caption="Design iterations in Figma around the Flags page" figClass="" %}

### The Impact of Our Revamp
As part of this project, we implemented new analytics tools, including Pendo.io and Hotjar, to track key performance indicators (KPIs) and evaluate the impact of our redesign.

We focused on monitoring:

- Net Promoter Score (NPS)
- Monthly Active Users (MAU)
- Feature Adoption Rates
- Average Session Duration
- User Retention Rate

The beta release to key customers received positive feedback from the start, with feature adoption showing early momentum. After a few months, the data confirmed the redesign’s success:

- **NPS** increased by **5 points**, reaching the **80-point range**.
- **Monthly Active Users** (MAU) grew by **136% year-over-year** (YoY).
- Overall **user engagement** rose by **116%**.

Beyond the hard data, invaluable **feedback from NPS surveys** painted a more vivid picture:

A partner from North Carolina A&T shared,
> “Since working with Mentor Collective we're able to get those specific metrics and data, and we have the dashboard – which we absolutely love – to see exactly what's going on and tailor specific programs or initiatives to be able to help the students."

Another partner from the University of Delaware added,
> "We can’t underestimate the power of one person. It’s been really exciting to see through the information on the dashboard and through the Flags just how powerful one mentor can be to a student and how impactful they can be.”


## Reflecting On This Project

Reflecting on this project, collaboration emerged as the key to our success. From the outset, understanding our partner users’ needs required coordinated efforts with both external partners and internal stakeholders. With support from our UX researcher, I gathered qualitative insights that enriched our understanding of the user experience.

During brainstorming, involving cross-functional team members—sales, account management, and product—generated diverse ideas. Each participant's insights added depth to our perspective on challenges and solutions.

Collaboration extended into the design phase, where tools like Whimsical enabled seamless feedback loops with the Product Manager and Lead Engineer to refine wireframes. We validated directions through iterative input, ensuring alignment with initial insights.

In implementation, close teamwork with engineers, especially on design challenges, was invaluable. My front-end experience allowed us to tackle issues effectively, while beta testing underscored the value of continuous feedback, driving user-focused adjustments.

Ultimately, our multifaceted collaboration bridged understanding, ideation, and execution. This collective approach fueled project success, reflected in higher engagement and positive feedback post-launch.


## Let's Connect!

Ready to elevate your product’s user experience?
<a href="mailto:pro.mathieu.fortune@gmail.com">Reach out</a>, and let’s work together to craft user-centric solutions that make a difference.