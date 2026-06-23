---
layout: post
title: "Two sprints, zero engineers: An AI-accelerated design process"
excerpt: |
  With two sprints, no engineering bandwidth, and a mandate to define the northstar vision for Jewelers Mutual's mobile app, I tested how far a T-shaped designer paired with a new generation of AI tools could go. This case study documents the AI-accelerated process — research synthesis with Claude, sketching, and prototyping directly in code with Claude Code — that produced a fully interactive prototype influencing product direction conversations with senior executives.
thumbnail: "/images/jewelers-mutual/cover-ai-prototype.png"
date: 2026-06-23 13:30:00 +0200
lang: en
ref: jewelers-mutual-ai-prototype
author: Mathieu Fortune
theme: Case Study
featured: true
hero: "/images/jewelers-mutual/illus-ai-prototype-hero-jm.jpg"
summary: |
  My squad was tasked with defining the northstar vision for the Digital Vault — a secure platform giving retail jewelry customers a way to catalog and insure their pieces while maintaining their connection to their trusted jeweler — and presenting it to senior executives as input into a larger strategic plan. The constraint: two sprints, no engineering bandwidth, and a need for something real enough to put in front of actual users.

  I used this as a chance to see how far frontend and product experience, combined with a new generation of AI tools, could take a single designer. The result was a fully interactive, mobile-first React prototype built without engineering involvement that shifted executive conversations from features to strategy.
role: "Product Designer — Research synthesis, AI-assisted prototyping, Frontend implementation"
team:
  - "Product Manager"
  - "Tech Lead"
  - "Myself as Product Designer"
timeline: "Two sprints (~four weeks)"
tools: "Claude, Claude Code (+ MCP), HeroUI v3, Figma, VS Code, Microsoft Surface Whiteboard"
---

## Waiting for the right moment

For about two years, I used AI chat tools for research and synthesis while keeping them out of my design and prototyping workflow. Several months before this project, I had used Build by Reforge, a beta-phase AI prototyping tool, to explore how to modernize customer support tools for managing policy cancellation requests. I saw the potential immediately. I also saw the problem: I was spending more time tweaking prompts than making actual design progress. The tools weren't mature enough yet to be a genuine force multiplier. On projects with pressing deadlines, that time investment wasn't worth it.

So I waited. Not for the tools to become perfect, but for a moment where experimenting would also mean delivering something genuinely valuable.

That moment arrived as an ambitious constraint. My squad was tasked with defining the northstar vision for a mobile product — the Digital Vault, a secure platform giving retail jewelry customers a way to catalog and insure their pieces while maintaining their connection to their trusted jeweler — and presenting it to senior executives as input into a larger strategic plan. Two sprints. No engineering bandwidth. A need for something real enough to put in front of actual users.

I had frontend development and product management experience that most product designers on my team didn't. I wanted to see how far that background, combined with a new generation of AI tools, could take me. This case study documents what I built, how I built it, and what I learned.

## How the four weeks actually worked

Before getting into the phases: this was not a clean sequential process. Each week involved some combination of research, discovery, and design exploration. The first two weeks were heavier on synthesis and direction-setting. The last two shifted toward iterating on the prototype. Each version increased in scope, every cycle informing the next.

What follows is organized by type of work, not by strict chronology.

## Phase 1 — Using Claude to synthesize research and shape product direction

Competitive analysis, business plans, and user research had already been conducted across the organization for intersecting projects. The problem was that none of it had been synthesized into a cohesive vision anyone could act on.

I used Claude as an aggregation and synthesis engine, feeding it existing research artifacts alongside information I gathered independently from forums, social media, and industry publications, then using it as a sounding board to pressure-test emerging ideas against that context. The goal was to move faster through the problem space without losing the human judgment that makes research meaningful.

The output: structured insight summaries, sharpened problem framing, and a faster path to a PRD and requirements document to carry into the design phase.

I also connected with my Product Manager and Tech Lead early to share findings and pressure-test initial directions. They had been exploring the problem space independently, and the overlap in our conclusions gave the team a stronger shared foundation to build from.

The synthesis work in Phase 1 served a second purpose that only became clear later. The insights I developed here — about the target audience, their needs, and the design context — became the direct basis for the design principles I later embedded into Claude Code's behavior. The research didn't just inform the product direction. It shaped the quality of the prototype output.

{% include figures.html images="/images/jewelers-mutual/illus-ai-prototype-research-artifacts-jm.jpg" alt="Research artifacts synthesized with Claude" captions="Existing research, forum findings, and industry sources synthesized into structured insight summaries" tier="wide" %}

{% include pullquote.html quote="AI tools should not be granted any decision-making power. They are a remarkably capable autocomplete engine." %}

What stays human is the thinking, the judgment, and the framing of the right problem. PMs, designers, and developers who forget this aren't using AI as a tool. They're outsourcing their craft.

## Phase 2 — Sketching before prompting: why the whiteboard still comes first

Before any code was generated, I sketched.

Using a combination of physical whiteboard, Microsoft Surface digital whiteboard, and Figma wireframes, I worked through ideas before touching any AI tool. This step is non-negotiable for me. The whiteboard is where design judgment gets applied: competitive analysis, research synthesis, and experience converging into rough layouts and flow concepts.

Once an idea was worth pursuing, I'd capture it: a phone photo of a whiteboard sketch, a screenshot of the digital canvas, a quick Figma wireframe recreation. These artifacts became direct inputs to the next phase.

{% include figures.html images="/images/jewelers-mutual/illus-ai-prototype-sketches-wireframes-jm.jpg" alt="Whiteboard sketches and Figma wireframes" captions="Whiteboard sketches, Surface digital canvas, and Figma wireframes — design judgment applied before any prompting" tier="wide" %}

## Phase 3 — Connecting the pipeline: Claude Code, HeroUI, and the design system decision

Several months before this project, a colleague and I had conducted extensive research into what design system approach to recommend for our organization — build from scratch, fork an open-source foundation, or license a solution. We chose HeroUI v3, an open-source system built on React and Tailwind CSS and designed to be compatible with AI code generation tools. We then collaborated with other designers to establish a custom theme on top of it. By the time this project started, HeroUI was being used across the design team on multiple projects.

My Product Manager and Tech Lead were also building AI prototypes in parallel. Theirs showed the telltale signs of AI output without a design system: heavy emoji usage, random color combinations, messy information architecture. They were stitching feature ideas into loose prompts without any design system connection or intentional IA work.

My prototype iterations were anchored in the company's brand identity. The navigation and information architecture were crafted deliberately, as if building a real app. The design system gave the prototype visual coherence and the structural credibility needed to put in front of executives.

{% include figures.html images="/images/jewelers-mutual/illus-ai-prototypes-comparison-jm.jpg" alt="Comparison of AI prototype approaches" captions="Left: AI output without a design system. Right: a prototype anchored in HeroUI v3 and the company's brand identity" tier="wide" %}

To go beyond the design system, I paired Claude Code with two additional inputs:

- A **CLAUDE.md file** containing context about the business and the target audience.
- A **design principles skill** listing specific instructions I had developed based on my understanding of the audience's needs and pain points.

Before connecting these, Claude Code's output showed predictable AI biases: inconsistent design patterns, heavy emoji usage, an inexplicable affinity for gold tones. After connecting HeroUI v3 via MCP and pairing it with both context files, the output quality changed dramatically. Prototypes were visually consistent, neutrally styled, and structurally sound.

## Phase 4 — Iterating in code: how frontend skills changed the workflow

Rather than attempting to generate an entire prototype in one prompt, I structured Claude Code inputs as small, targeted, feature-specific prompts, one flow or component at a time. This kept outputs manageable and reviewable, and it optimized token consumption.

After each generation cycle, I used VS Code directly to make lightweight adjustments: spacing, typography, layout composition. Most designers would reflexively reach for Figma here, introducing the friction of jumping between tools or burning through tokens prompting the AI repeatedly until the output is close enough. Being a T-shaped designer removed that bottleneck entirely.

For two straight weeks, I barely opened Figma except to reference existing sketches and wireframes. Of everything this process changed about how I work, that felt like the most significant shift.

One deliberate choice shaped this phase: I kept the generated code clean enough to be a viable basis for an engineering handoff, even though production-readiness wasn't the goal. The gap between test-ready and ship-ready code is real, but I didn't want that gap to be a conversation-ender if an opportunity arose to take the prototype further.

The generated code contained occasional inline styles instead of proper React component calls and minor structural inconsistencies, but it was more than sufficient for the stated purpose.

{% include figures.html images="/images/jewelers-mutual/illus-ai-prototype-final-jm.jpg" alt="Final mobile prototype screens" captions="Screens from the final mobile-first React prototype of the Digital Vault" tier="wide" %}

## What shipped: a prototype, executive alignment, and an honest accounting

The result was a fully interactive, mobile-first React prototype representing the northstar vision for the product, built without engineering involvement across four weeks. I managed the code review, environment setup, and technical decisions myself.

That speed-to-fidelity ratio mattered enormously for a project aimed at aligning senior executives and stress-testing product direction before any build investment.

**The prototype was presented to a group of 12 senior executives and stakeholders.** The shift in conversation quality was immediate. In previous reviews, discussion had circled around features (outputs) without reaching the harder questions of business model and product strategy.

In this session, one business stakeholder stopped mid-presentation and began suggesting concrete ways to expand features and create synergies with partner jewelers. The conversation moved from abstract speculation about what the product should do to practical thinking about how to monetize it. Executives who typically struggle to engage with abstract product direction had something real to react to, and that changed what they were able to contribute.

It also addressed a recurring structural challenge: a dynamic where executives fill knowledge gaps with opinions rather than engaging with the work directly. A tangible, interactive artifact shifted that dynamic.

## A note on what "fast" actually means here

AI tools make it dangerously easy to rush toward a solution. The prototype-generation phase feels productive, even exciting, and that feeling can seduce designers and stakeholders alike into skipping the harder work of problem definition. I've watched stakeholders pick up these tools and immediately start generating screens, bypassing research entirely. The output looks convincing. The thinking behind it often isn't.

I was able to move quickly because I had been embedded in the problem space for several months. I could draw on existing research, prior discovery work, and accumulated context that made the design phase feel fast without actually being rushed. The AI accelerated execution. The research made that execution credible.

## Where this workflow goes next

The token cost of this approach is real. Agentic AI workflows — where the model makes multiple sequential decisions — can consume significant compute. Organizations need to be honest about the ROI calculus before scaling this kind of process.

For a next run, I'd apply the same pipeline to smaller-scope iterations aimed at building a production-ready MVP to test product/market fit for new ideas. The workflow suits early-stage validation where speed of learning matters more than code quality.

Since this project, generative AI and prototyping tools have become a permanent part of my daily workflow, and they have tremendously sped up my design process. I reach for them across research, exploration, and building — including for this very portfolio, which I'm actively refactoring with the same AI-assisted approach. What started as a deliberate experiment under constraint is now simply how I work.

Each phase required deliberate human decisions: the research, the sketching, the prompting, the tweaking. The AI accelerated execution. It didn't replace the thinking that made execution worth doing.

{% include pullquote.html quote="The tooling was the accelerant. Human judgment was the engine." %}
