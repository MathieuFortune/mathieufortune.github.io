---
layout: post
title:  "Championing the Design System at Mentor Collective"
excerpt: |
    Leading the creationg of a cohesive and accessible design system at Mentor Collective, streamlining B2C & B2B product deliveries with visual and functional consistency.
thumbnail: "/images/thumbnail-design-system-mentor-collective.jpg"
date:   2023-09-01 13:30:00 +0200
lang: en
ref: mentor collective
author: Mathieu Fortune
theme: Case Study
---

{% include lazy-image.html src="/images/cover-design-system-mentor-collective.jpg" alt="Case study's cover image showing a dashboard with UI elements" caption="Mentor Collective - Design System Illustration" figClass="" %}

*To comply with my non-disclosure agreement, I have omitted and obfuscated confidential information in this case study. Screenshots will be displayed throughout this case study for illustration purposes and might not represent the final work.*

## The genesis

When I joined Mentor Collective, the design and visual idenity of the product was fragmented. Throughout it's early development years, the company's story had been written by design contractors and product enthusiasts who weren't strictly designers. This meant a product dotted with inconsistent user experiences and visual identity. 

I quickly identified a need for design system to create an unified voice, and allow us to scale rapidly and efficiently.

The pace of Mentor Collective's growth was intense. Our product had to cater to both B2C and B2B audiences.
I believed that a design system would equip our product and engineering teams to handle the looming complexity, ensuring swift and consistent delivery of user value.

## Assessing our unique needs
I started this project by assessing Mentor Collective's Product team needs. Given the company's mission to help millions of students and higher-ed administrators bridge the equity gap in post-secondary education, the emphasis was clear: 
- a robust dashboard design capable of handling large datasets to enable higher-ed administrators's work
- a performant and mobile friendly application to connect students and manage communities
- an accessible product that everyone can use 

Another key step was to align the design system with our Engineering stack for smooth integration.
I probed engineers for collaboration. They provided valuable insights about which technology they were using and workflows they were following.

Finnaly, I integrated the recently hired Design Lead's insights about the future trajectory of the design team to also inform our decision.

## Key components & principles
Creating a design system from scratch for both the design and engineering team is no small feat. For this reason, we elected to start with an open-source system that would give us a head start.

I elected guiding principles to help in my search:
- Seamless React integration
- WCAG AA compliance of color and components
- Figma friendly 
- A focus on dashboard designs
- Can be used for both mobile and web use cases

After review with the rest of the team, we landed with Uber's Base design system. Its React-friendly nature coupled with built-in accessibility made it stand out from other alternatives. 
However, despite it's solid techincal foundation, we weren't content with a simple adaptation of Uber's visual identity and design principles. 

### Colors
I introduced a new color palette to align with Mentor Collective's brand, ensuring contrast, usability and WCAG AA accessibility.
To give us more flexibility with the color, I came up with a comprehensive set of colors broken down into three categories, greys, primary/secondary and supporting/accent.

{% include lazy-image.html src="/images/illustration-design-system-mentor-collective-01.jpg" alt="Screenshot of new color palette" caption="Newly introduced color palette" figClass="" %}

{% include lazy-image.html src="/images/illustration-design-system-mentor-collective-02.jpg" alt="Screenshot of color contrast and color blind tests" caption="Expanding shades and testing color blindness" figClass="" %}

{% include lazy-image.html src="/images/illustration-design-system-mentor-collective-02-bis.jpg" alt="Screenshot of UI color tests in Figma" caption="Color test with UI elements to validate results" figClass="" %}


### Typography
Typography was not skipped, we tested different font famillies and typographic scales to ensure our product would be accessible and usable on every devices. I also researched and picked an icon library (IBM carbon icons) that would fit our new typographic style and suit our needs for dashboard designs.

{% include lazy-image.html src="/images/illustration-design-system-mentor-collective-03.jpg" alt="Screenshot of typography research in Figma" caption="Researching various font famillies and typographic scales" figClass="" %}

### Data visualization
With the help of engineers, I picked a data visualization library (Airbnb's VisX). I worked on creating the various chart type that would be needed in our product as well as making sure to test colors to guarantee accessibility compliance.

{% include lazy-image.html src="/images/illustration-design-system-mentor-collective-04.jpg" alt="Screenshot of data vizualisation color tests in Figma" caption="Early color and chart type tests" figClass="" %}

### Component tweaking and usage rules

Besides colors and typography, I also made sure that every components would fit our product needs by tweaking and adding new ones where needed.

With feedback from the team and researched UX best practices, I iteratively implemented usage rules and other documentations to each component.

{% include lazy-image.html src="/images/illustration-design-system-mentor-collective-05.jpg" alt="Screenshot of button components in Figma" caption="Button components and usage rules" figClass="" %}

{% include lazy-image.html src="/images/illustration-design-system-mentor-collective-06.jpg" alt="Screenshot of input components in Figma" caption="Input components and usage rules" figClass="" %}

## Promotion & adoption
While my engineering team was thrilled about the design system, its realization was a collaborative effort. 

As Mentor Collective's first design hire, I enjoyed a unique trust from the broader organization. They believed in my ability to implement essential tools to scale the company's product. 

Throughout the process of creating this design system, I regularly held presentations and rubber-ducking sessions, briefing teams about our milestones and offering hands-on tutorials, especially on Figma for developers. 

Challenges arose during technical implementations, but I navigated them through close-knit teamwork with engineers and quality control during our projects.

### Maintaining the momentum
Ensuring the design system remained updated and relevant was vital to its long-term success. Alongside a few engineers, we set up a "Frontend guild" at Mentor Collective. This group facilitated monthly discussions around the system's evolution based on product squads' needs and challenges. This initiative became the nexus for feedback, critique, and evolution of our design system.

## The impact
The new design system transformed Mentor Collective's design narrative. It paved the way for consistent product roll-outs, even as our team expanded. A testimonial from a Senior Software Engineer capture this transformation:

> "One of Mathieu’s most impactful early contributions to the team was collaborating with engineering to establish a thoughtful design system... This new design system was quickly used to redesign a highly visible dashboard... and saw a notable increase in visitor engagement after launch." - Full quote available on Linkedin.

Reflecting on the first project where it was introduced, the design system's influence was key. It streamlined processes, decisions, and most importantly, it ensured a cohesive visual narrative. The Vice President of Product aptly summarized its significance:

> "Mathieu championed the need for a more modern design system... The look and feel of the Mentor Collective platform (and the ability to scale it up) is a direct result of Mathieu's efforts."

In essence, the design system wasn't just a toolkit — it was Mentor Collective's design voice, and I was privileged to be its main architect.
