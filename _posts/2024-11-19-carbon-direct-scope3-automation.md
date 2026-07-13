---
layout: post
title: "Human-in-the-loop AI for carbon accounting: automating Scope 3 emissions at Carbon Direct"
excerpt: |
  How I designed a human-in-the-loop AI workflow for Scope 3 spend-based emissions at Carbon Direct. LLMs categorized the spend data, analysts corrected the results, and every correction trained the model. Ingestion got 15% faster and manual corrections dropped 20%.
thumbnail: "/images/illus-AI-scope3-cov.jpg"
date: 2024-11-19 13:30:00 +0200
lang: en
ref: carbon-direct-scope3-automation
author: Mathieu Fortune
theme: Case Study
featured: false
hero: "/images/illus-AI-scope3-cov.jpg"
summary: |
  Carbon Direct helps businesses and governments measure, reduce, and remove their carbon emissions. When I joined, calculating spend-based Scope 3 emissions consumed half the time needed to produce a customer's carbon footprint. Engineers had built a machine learning proof of concept, but its error rate was high and it had almost no UX.

  As Senior Product Designer, I owned the end-to-end design of a new workflow that paired AI categorization with a correction tool where every analyst fix trained the model. Data ingestion got 15% faster and manual corrections dropped 20%.
role: "Sr. Product Designer, covering UX research, workflow mapping, interaction design, prototyping, and usability testing"
team:
  - "Product Manager"
  - "5 Engineers"
  - "Myself as Sr. Product Designer"
timeline: "Q2 2024 (~3 months)"
tools: "Miro, Figma, Google Sheets"
---

{% include eyebrow.html label="Context" heading="Half of every carbon footprint went to one step" %}

Carbon Direct provides science-backed carbon management to Fortune 500 companies, high-growth startups, and heavy industries. These customers use their carbon footprints for reporting, compliance, and decarbonization planning, so the numbers have to be right.

The most demanding step in producing a footprint was Scope 3 spend-based accounting: take a customer's spend data, assign each line item a NAICS industry code, and apply the matching emission factor. The spend files arrived messy and held thousands of line items. Coding them correctly took domain judgment, backed by EPA guidance and the GHG Protocol. When I joined, this one step consumed 50% of the total time needed to produce a footprint.

Engineers had built a proof of concept that used large language models and machine learning to automate parts of the process. It showed promise, but the error rate was high enough to require extensive manual review, and the UX was almost nonexistent.

The project had two objectives: make the workflow faster and more intuitive for the carbon accountants and analysts who used it every day, and refine the automation so it could learn from their corrections. The end goal was to free the internal team for higher-value work and lower the cost of processing data.

{% include eyebrow.html label="Discovery" heading="Mapping how carbon accountants actually worked" %}

I started by interviewing carbon accountants and data analysts and walking through their workflow step by step. I documented the current flow in Miro, flagged the areas causing the most friction, and linked early sketches directly to the map so the team could react to ideas in context.

This phase was also where I learned the domain. Carbon accounting was new to me, so I read EPA guidelines and the GHG Protocol and leaned on subject matter experts to check my understanding. I needed that base to design anything useful. I couldn't simplify steps I didn't understand.

{% include figures.html images="/images/illus-AI-scope3-01.png" alt="The existing Scope 3 workflow mapped in Miro" captions="The internal team's existing workflow documented in Miro, with early sketches linked to the map" tier="wide" %}

{% include eyebrow.html label="Process" heading="Design the ideal, then cut ruthlessly" %}

With the current state mapped, I wireframed an ideal-world solution: a multi-step process that connected existing UI components in a more efficient and intuitive way, without worrying yet about what we could ship first.

{% include figures.html images="/images/illus-AI-scope3-02.png" alt="Wireframes of the ideal multi-step ingestion flow" captions="Wireframing the ideal-world solution as a multi-step process" tier="wide" %}

After gathering feedback on the wireframes, I designed a high-fidelity version of the strongest concept. That gave the team something concrete to align on.

{% include figures.html images="/images/illus-AI-scope3-03.jpg" alt="High-fidelity exploration of the main solution concept" captions="A high-fidelity pass on the main concept, used to align the team on direction" tier="wide" %}

The ideal version was too big to build in one go, so I drew a flow diagram of the improved workflow and split it into prioritized milestones. The diagram made feedback easier to collect and gave stakeholders a clear picture of what would ship when.

{% include figures.html images="/images/illus-AI-scope3-04.png" alt="Flow diagram of the improved workflow split into milestones" captions="The improved workflow as a flow diagram, prioritized by milestone to contain scope" tier="wide" %}

{% include eyebrow.html label="Solution" heading="A workflow where every correction trains the model" %}

The shipped design follows the data through three stages.

**Ingestion and cleanup.** A multi-step flow with CSV templates, mapping functionality, and formatting tools turned messy spend files into clean, structured data. Visual tables showed the results of each automated step, so analysts always knew what the system had done. This removed most of the manual prep work.

**AI categorization.** Large language models assigned NAICS codes to each spend line item, using the chart of account categories already present in the raw data. Analysts no longer had to code thousands of lines by hand.

**Correction with a feedback loop.** This was the heart of the project. I designed tables and forms where analysts could review the AI's categorization and fix what it got wrong. Every correction fed back into the ML model, so the same mistakes showed up less often over time.

To validate the design, I turned the high-fidelity UIs into a simple Figma prototype, ran usability tests with the internal team, and handed the finalized flows to engineering with detailed specifications.

{% include figures.html images="/images/illus-AI-scope3-05.jpg" alt="Final UIs prepared for usability testing and engineering handoff" captions="Final high-fidelity UIs, prototyped for usability testing and handed off to engineering" tier="wide" %}

Three challenges ran through the whole project.

<div class="cs-grid wide">
  {% include callout.html variant="compact" heading="Earning trust" text="The design team had just been restructured and leadership wanted results. I delivered in small increments and tailored my communication to each stakeholder." %}
  {% include callout.html variant="compact" heading="Learning carbon science" text="Footprint reporting demands scientific rigor. I studied EPA guidelines and the GHG Protocol and worked with subject matter experts to keep the designs accurate." %}
  {% include callout.html variant="compact" heading="Learning ML" text="How the model would interact with spend data was unclear at first. I learned the basics of ML with the engineers so I could design a workflow the model could actually support." %}
</div>

{% include eyebrow.html label="Outcomes" heading="What the automation moved" %}

<div class="cs-stats wide">
  {% include stat.html value="50%" label="of footprint time" support="went to this one step before the redesign" %}
  {% include stat.html value="+15%" label="faster data ingestion" support="through automated prep and cleanup" %}
  {% include stat.html value="-20%" label="manual corrections" support="as the model learned from analyst fixes" %}
</div>

The redesigned workflow also gave the internal team a process they could trust and build on. Leadership pointed to the project as proof of what the restructured design team could deliver.

{% include eyebrow.html label="Reflection" heading="Designing for humans and machines" %}

I had to learn two hard domains at once, carbon science and machine learning, then design a workflow that experts could trust. The experience convinced me that the best AI workflows keep people in charge. The model does the repetitive work, and the experts stay in control of the results.

Two years later at Jewelers Mutual, I took this work further and used AI to [build an interactive prototype without engineers]({% post_url 2026-06-23-jewelers-mutual-ai-prototype-case-study %}).

{% include pullquote.html quote="The analysts were not cleaning up after the AI. They were training it to need them less." %}
