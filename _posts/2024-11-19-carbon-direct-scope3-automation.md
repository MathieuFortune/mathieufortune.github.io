---
layout: post
title:  "Designing AI-Powered Workflows: Streamlining Scope 3 Emissions at Carbon Direct"
excerpt: |
    Designing an AI-powered workflow at Carbon Direct to streamline Scope 3 emissions calculations, reducing manual corrections by 20% and improving data ingestion efficiency by 15%, while enhancing usability for internal teams.
thumbnail: "/images/illus-AI-scope3-cov.jpg"
date:   2024-11-19 13:30:00 +0200
lang: en
ref: carbon direct
author: Mathieu Fortune
theme: Case Study
featured: false
---

{% include lazy-image.html src="/images/illus-AI-scope3-cov.jpg" alt="" figClass="" %}

## Overview
When I joined Carbon Direct, a company dedicated to science-backed carbon management solutions, I knew I’d be tackling complex challenges with significant implications.

Carbon Direct’s  helps businesses and governments measure, reduce, and remove their carbon emissions. For a company serving Fortune 500 businesses, high-growth startups, and heavy industries, precision and efficiency weren’t just nice-to-haves—they were mission-critical.

One of my first projects was to streamline and optimize the process for ingesting and calculating Scope 3 spend-based emissions. This was a fascinating opportunity to combine user research, design, and emerging technologies like AI and machine learning (ML) to solve a significant bottleneck.

## The Challenge: A Time-Consuming Bottleneck
At the time, calculating spend-based emissions consumed 50% of the total time required to produce a carbon footprint. This created a significant hurdle for internal teams tasked with delivering these critical insights to customers.

The existing workflow involved ingesting raw spend data, cleaning it, and assigning NAICS codes (the classification system that powers emission factor calculations). While engineers had developed a proof-of-concept using Large Language Models (LLMs) and ML to automate parts of this process, the UX was almost inexistent, and the automation’s error rate was high enough to require extensive manual review.

The project had two main objectives:
- Improve the UX flow for carbon accountants and analysts, making the process faster, more intuitive, and efficient.
- Leverage AI and refine ML to automate repetitive tasks, introducing a reinforced learning mechanism for data categorization.

Ultimately, the goal was to **free up internal teams to focus on higher-value activities and reduce the overall cost of processing data**.

## My Role: Designing for Humans and Machines
As the Senior Product Designer, **I owned the end-to-end design process for this project**, collaborating with a Product Manager and a team of five engineers.

My approach included:
- **User Research**: Conducted interviews and workflow analyses with carbon accountants and data analysts to identify pain points and understand their ideal workflows.
- **Design Deliverables**: Created wireframes, flow diagrams, incremental improvements, and detailed specifications that were both user-friendly and technically feasible.
- **Collaboration**: Facilitated regular design reviews to incorporate feedback from stakeholders and engineers, ensuring alignment and buy-in.
- **Advocacy**: Documented design decisions to highlight the design team’s impact, building trust with leadership.

## Key Features Delivered
Here are some of the core solutions I helped deliver:

**Multi-Step Data Ingestion and Cleanup Flow**

A streamlined process with tools for formatting data, CSV templates, mapping functionality, and visual tables to show automation results.
This eliminated much of the manual prep work and made the workflow more intuitive for the team.

**Automated Categorization with AI**

We used large language models (LLMs) to categorize spend line items by NAICS codes based on chart of account categories, a data point provided in the raw spend data.
This significantly reduced manual effort and errors while speeding up the process.

**Manual Correction Tool with an ML Feedback Loop**

I designed tables and forms where users could review and correct the AI’s categorization.
Every correction fed back into the ML model, improving its accuracy and effectiveness over time.

**User-Centered Research and Prototypes**

I organized insights using Miro and prioritized solutions that addressed the biggest user pain points.
The final UIs were developed in Figma alongside a rapid prototype, allowing us to quickly validate usability and align across teams.

## The Design Process
The following screenshots highlight parts of my design process:

#### Mapping the Current Workflow in Miro
I started by documenting the internal team's existing flow using Miro, identifying areas for improvement. Early sketches were linked to this flow to better communicate ideas and foster collaboration with the team.
{% include lazy-image.html src="/images/illus-AI-scope3-01.png" alt="" caption="" figClass="large-post-image" %}

<br/>
#### Wireframing the Ideal Solution
Next, I transitioned into a wireframing session to design an ideal-world solution. This involved creating a multi-step process that connected existing UI components in a more efficient and intuitive way.
{% include lazy-image.html src="/images/illus-AI-scope3-02.png" alt="" caption="" figClass="large-post-image" %}

<br/>
#### Developing High-Fidelity Designs
After gathering feedback on the wireframes, I focused on designing a high-fidelity version of one of my sketches. This iteration illustrated the main solution concept in detail, ensuring alignment across the team.
{% include lazy-image.html src="/images/illus-AI-scope3-03.jpg" alt="" caption="" figClass="large-post-image" %}

<br/>
#### Creating a Flow Diagram to Address Scope Creep
To counter scope creep and provide clarity, I created a flow diagram highlighting the improved workflow, prioritized by milestones. This approach helped limit scope creep, collect feedback, and align stakeholders.
{% include lazy-image.html src="/images/illus-AI-scope3-04.png" alt="" caption="" figClass="large-post-image" %}

<br/>
#### Usability Testing and Engineer Hand-Off
With the first milestone prioritized, I designed high-fidelity UIs with clear flows, turned them into a simple prototype for usability testing, and shared the finalized designs with engineers for seamless implementation.
{% include lazy-image.html src="/images/illus-AI-scope3-05.jpg" alt="" caption="" figClass="large-post-image" %}

## Overcoming Challenges
This wasn’t a straightforward project—there were significant hurdles along the way:

**Building Trust Under Tight Timelines**
With the design team recently reorganized, leadership was eager for results. To demonstrate value, I tailored my communication to stakeholders, anchored deliverables in an iterative approach, and focused on delivering impact quickly.

**Understanding Carbon Science**
Carbon footprint reporting required a deep understanding of carbon science, a field I was new to. I immersed myself in EPA guidelines, GHG Protocols, and collaborated with subject matter experts to ensure the designs met rigorous standards.

**Leveraging Machine Learning**
Initially, it wasn’t clear how the ML algorithm would interact with spend data. By working closely with engineers and learning the basics of ML, I designed workflows that made the AI more user-friendly and effective.

## The Results
The project delivered measurable improvements:

- **15% Faster Data Ingestion**: Automated repetitive tasks, significantly reducing processing time.
- **20% Fewer Manual Corrections**: Minimized errors and improved confidence in outputs.
- **Simpler, Smarter UX**: Redesigned workflows empowered internal teams to work more effectively.
- **Positive Stakeholder Feedback**: Leadership praised the improved efficiency and usability, strengthening trust in the restructured design team.

## Reflection
This project challenged me to dive headfirst into a technically complex process and transform it into an intuitive user experience. By combining a user-centered approach with cutting-edge technology, we delivered a solution that not only addressed business needs but also empowered the team to work more effectively.

For me, it demonstrated how design can drive meaningful impact, even in highly technical and data-intensive environments. It reinforced my belief that the best design isn’t just functional—it’s human.
