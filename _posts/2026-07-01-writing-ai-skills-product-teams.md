---
layout: post
title: "Writing AI Skills Your Product Team Will Actually Use"
excerpt: |
  A practical guide for Product Managers and Product Designers on writing good, reusable AI "skills," the instruction sets that make an agent do the same job well, every time. Inspired by Matt Pocock's four-part framework and Philipp Schmid's skill evals talk, reframed through a product lens, with one complete skill you can lift and use this week.
thumbnail: "/images/cover-ai-skills.png"
date: 2026-07-01 13:30:00 +0200
lang: en
ref: product-ai-skills-guide
author: Mathieu Fortune
theme: Article
---

If you use AI chat every day, you've probably faced this situation: You paste in a document, ask for the key insights, get something decent back, and then do it again with the next document, re-typing the same instructions each time.

That was me at Jewelers Mutual, staring at a pile. Competitive analyses, business plans, user research, and market scans had all been done across the organization for intersecting projects, and none of it had been synthesized into something a team could actually act on. By the fifth document I was copy-pasting a whole paragraph of instructions ahead of every prompt. *Don't jump to solutions, separate what you observed from what you recommend, cite the source.*

That paragraph was the prototype of a skill. I just hadn't written it down properly yet. 

If you've encountered this issue or never written a skill, I'm going to show you how to do so here.

{% include sidebar.html heading="What's a skill?" text="A **skill** is a reusable, version-controlled set of instructions that an agent loads on demand, a recipe that says \"here's how we do this particular job, and here's what good looks like.\" At its simplest it's markdown you paste anywhere; at full strength it's a folder holding those instructions plus the templates, checklists, and scripts they pull in as needed. Either way it's portable, working across Claude (Skills, Projects, Claude Code), OpenAI (Custom GPTs, a saved system prompt), and Google (Gemini Gems). Write it once, and every teammate who runs it gets your best version of the task instead of their improvised one." %}

It helps to know there are two kinds of skills, because you'll mostly write one of them. **Capability skills** teach the model something it can't reliably do yet, like pulling clean, structured findings out of a messy survey or interview export. Those are temporary; as models improve, you retire them. **Preference skills** encode *how your team does things*, your definition of a good insight, your house voice, your review checklist. A foundation model will never absorb what's specific to your org, so preference skills stay valuable indefinitely. Almost everything a PM or designer writes is a preference skill, and that's exactly why it's worth the effort: you're not waiting for the model to catch up, because on your team's particular taste it never will.

The catch is that most skills people write are bloated, vague, and unreliable and until recently there was no shared way to tell a good one from a bad one.

### Credit where it's due

The tips in this article are influenced by two people. The spine comes from **Matt Pocock**, whose "Missing Manual: How to Write Great Skills" talk gives the cleanest framework I've found for the problem. Matt maintains one of the most-used engineering skill sets out there, and his [skills repo](https://github.com/mattpocock/skills) is worth your time. His own `grill-with-docs` skill is part of my daily workflow. The four-part spine below (**Trigger, Structure, Steering, Pruning**) is entirely his. The second voice is **Philipp Schmid**, a Staff Engineer at Google DeepMind, whose talk "Don't Ship Skills Without Evals" and its [companion write-up](https://www.philschmid.de/testing-skills) shaped how I think about *proving* a skill works, telling a good one from a bad one and knowing when to retire it, and sharpened a few of the foundations along the way. So the framework is Matt's and the evals thinking is Philipp's; what's mine is the translation. Both pitched this to engineers, and I want to hand it to the Product Managers and Product Designers I work with. The product lens, the examples, and the mistakes are mine.

I'll thread one example through the whole piece (a **research-synthesis skill**, born from that Jewelers Mutual pile) so you watch it mature, and at one point split in two, instead of juggling disconnected snippets. I also included two shorter examples for when a concept needs a second angle.

{% include eyebrow.html label="1. Trigger" heading="How the skill gets invoked" %}

A skill only helps once something invokes it, and that's easier to get wrong than it sounds. If invoking it is left to you, a good skill can sit unused because you forgot it was there. If the agent invokes it for you, it can fire on the wrong task, running your research rules over a copy-editing job.

There are two ways a skill can fire. **Deliberate** invocation is when *you* call it. You type its name, pick it from a menu, or paste it in. **Automatic** invocation is when the *agent* decides to load it, based on a short description that always sits in its context. (The industry usually calls these *user-invoked* and *model-invoked*) The agent reads that description, thinks "this fits," and pulls the skill in on its own.

Automatic sounds strictly better (the agent helps even when you forget) but every automatic skill has a cost Matt calls **context load**. Its description takes up room in the agent's context on every single request, and, more importantly, it's one more thing the agent has to weigh every time it decides what to do. Ten automatic skills is ten descriptions the model is juggling before it even starts your task. Deliberate skills have the opposite cost, **cognitive load on you**. Nothing fires unless you remember it exists and choose it, so you carry that burden yourself instead of handing it to the agent.

Neither is free. My rule of thumb, borrowed from Matt's preference: **default to deliberate.** Automatic invocation is convenient, but it's less predictable. Even a perfectly-matched skill might just not get picked, and now you're debugging *why the agent didn't do the thing* instead of doing the work. I'd rather carry a bit more in my own head and know exactly what's running.

For the research-synthesis skill, deliberate is obviously right. I don't want it firing when I ask the agent to draft a Slack message. I want to summon it, by name, when I sit down with a stack of documents. Reserve automatic invocation for skills that should quietly apply everywhere (an accessibility guardrail that flags issues on any design you review, say) where forgetting is the real risk.

Either way, every skill you write gets a one-line **description**. For an automatic skill that line does real work: it's the trigger the agent reads to decide whether to fire, so write it to discriminate, and to discriminate in *both* directions. Philipp Schmid, who runs evals on skills at Google DeepMind, found that more than half of all skill failures trace back to the description: the skill either doesn't fire when it should, or hijacks a task it has no business touching. So say what the skill is for *and* what it isn't. "For synthesizing existing research, not planning new studies" beats "for research." For a deliberate skill the same line is just a label that reminds *you* what the skill is for.

To guarantee a skill stays deliberate, add `disable-model-invocation: true` to its frontmatter, which keeps the description out of the agent's context entirely so it only ever shows to you. That flag is part of the open skill-file format the ecosystem is converging on, honored across a growing set of tools.

{% include eyebrow.html label="2. Structure" heading="Steps and reference, kept small" %}

Skills tend to grow. You add a caveat here, an example there, and before long the file is long enough that the agent starts skimming it and skipping instructions buried in the middle. Keeping that from happening is mostly a matter of how you organize the file.

The reason organization matters so much comes down to how skills load, a pattern called **progressive disclosure**. A skill reveals itself in three layers, each read only when it's needed. Layer one is the **description**, always in the agent's context, so it's pure overhead you pay on every single request. Layer two is the **body** of the skill file, pulled in only once the skill actually fires. Layer three is any **reference files** the body points to, read only when the task reaches for them. Each layer down is cheaper, because the agent doesn't pay for it until it needs it. That's the quiet logic under half the advice in this post: a short description, a lean file, references behind a pointer, and later the no-ops you delete and the skills you retire are all the same move, keeping the agent's attention (and your token budget) on what the task needs right now instead of what it doesn't. 

Almost every good skill is made of two kinds of elements. **Steps** are the procedure, the ordered walk-through of the job. **Reference** is the supporting material the steps lean on (a template, a checklist, a definition). Keeping the two separate in your head makes the rest of skill-writing much clearer. My first draft of the research-synthesis skill had three steps (read and tag each source, synthesize patterns, *then* recommend) leaning on two bits of reference, an output template, and a short definition of the terms it used. (That "then recommend" step is a hinge we'll come back to in Steering; it's why this one skill eventually became two.)

The constraint that keeps a skill effective is this: **keep the main skill file as small as possible.** Small skills are easier to read, easier to maintain, and cheaper to run. Every word you cut is tokens saved on every use.

The lever for staying small is **branching**. Think about the different ways a skill gets used. If a chunk of reference is only needed on *one* of those paths, it doesn't belong in the main file. It belongs behind a **pointer** to a separate document the agent loads only when that path is taken.

A design-critique skill makes this concrete. It branches: sometimes you want a **heuristic review**, sometimes an **accessibility audit**. Those are different checklists, and jamming both into the main file means the agent wades through the accessibility checklist even when you asked for a heuristic pass. So the main file stays thin and points outward:

```markdown
---
name: design-critique
description: Review a design for usability or accessibility issues. Use when reviewing a specific screen or flow; not for copy or content edits.
---

Ask which review the user wants, then load the matching checklist.

## Steps
1. Confirm the scope: **heuristic review** or **accessibility audit**?
2. Load the matching checklist:
   - Heuristic review → see `heuristics.md`
   - Accessibility audit → see `a11y-checklist.md`
3. Walk the checklist screen by screen. Cite the specific element for each issue.
4. Group findings by severity, not by checklist order.
```

The checklists live in `heuristics.md` and `a11y-checklist.md`, bundled alongside the skill, pulled in only when that branch runs. If your skill only ever does one thing, skip this; one branch means all the reference belongs in the file. Branching is the tool for skills that do *several* things. And if it only ever does one thing *the exact same way every time*, it isn't a skill at all, it's a script: skills are for judgment, scripts are for fixed procedures.

{% include eyebrow.html label="3. Steering" heading="Making the agent actually do what you want it to" %}

Sometimes you write an instruction, you're sure it was clear, and the agent still doesn't follow it. It's probably the most common frustration in skill-writing.

The fix is **leading words**, a short, loaded phrase that packs a lot of meaning into very little space. The mechanism is simple: when you put a strong phrase in the skill, the agent repeats it back to itself, in its reasoning and its output and the way it frames the work. Because it keeps repeating the phrase, and the phrase describes what you want, its behavior follows.

A product-copy skill is the clearest demonstration. The behavior I want is copy that sells the outcome, not the mechanism. I could write a paragraph explaining that. Instead I give it one leading phrase and repeat it:

```markdown
---
name: product-copy
description: Rewrite product copy so every line sells a benefit, not a feature.
---

# Product copy

The rule for every line you write: **benefit, not feature.**

Describe what the user gets to do, not what the system does.
Before finalizing, re-read each line and ask: is this a benefit, or a feature?
Rewrite any feature as a benefit.
```

"Benefit, not feature" is a phrase writers already understand, so it triggers the agent's prior instead of relying on my explanation. And you can *tell* it worked: watch the reasoning trace and you'll see the agent say "this line is a feature. Let me make it a benefit." When a skill isn't landing, the fix is usually to find a sharper, more consistent leading word rather than to add another paragraph. English is a wide API; there are always more phrases to try, and the agent is good at helping you find them.

One habit sharpens every leading word: phrase it as a directive, not a suggestion. Philipp Schmid makes the same point from the eval side: a model follows "always X" far more reliably than "X is recommended," which it reads as trivia and ignores. In the research skill that's the difference between "always cite the source for every claim" and "sourcing is encouraged".

The second steering lever is **leg work**, how much effort the agent puts into a given step. Agents love to rush to the finish. Ask them to "explore, then decide" and they'll do a thin exploration and leap to the decision, because they can see the decision is the goal. This is exactly the failure I kept hitting with the Jewelers Mutual pile: paste a document, and the agent would skim it and immediately hand me *recommendations*, skipping the actual synthesis.

The obvious fix (put "recommend" in a later step and tell the agent to wait) doesn't fully work, because the agent still *reads* that later step before it starts the first one. The finish line is right there on the page; it just knows to sprint to it. Matt's fix is more radical: when leg work matters more than anything, don't separate the *steps*. Separate the *skills.* He refused to build a two-step "plan mode" for exactly this reason: "ask clarifying questions" always got shortchanged because "make the plan" was sitting visible right below it. So he split it into two skills (`grill-with-docs`, then `to-tickets`) and the agent only ever sees the step it's on.

This is the moment my running example stops being one skill and becomes two. The recommendation step gets cleaved off into its own skill entirely. What's left (read, tag, synthesize) never mentions recommendations at all, so there's no finish line to sprint to. The agent sits in the problem because, as far as it can tell, sitting in the problem *is* the whole job. Two leading phrases hold it there: **"observation, not recommendation"** and **"sit in the problem."** Only once that synthesis exists do I invoke the second skill to turn it into recommendations. It's the same instinct as the copy skill's leading words, taken further. With the copy skill you steer the agent by what you put in; here you steer it by what you leave out.

{% include eyebrow.html label="4. Pruning" heading="Keeping the skill lean over time" %}

A skill that was tight the day you wrote it can be a mess six months later. Keeping one lean is an ongoing job, not something you finish when you first write it.

Here's the discipline that makes the rest of this section work: keep a few real examples on hand and re-run them. For the research-synthesis skill I keep three document stacks from past projects, a competitive analysis, a batch of user-research notes, and a market scan, and any time I change the skill I run all three through it. That tiny fixed set is the difference between *guessing* a change helped and *seeing* it. It matters more than it sounds: Philipp Schmid found that skills a model generates for itself, unchecked, can score *8 to 11 points worse* than using no skill at all.

Pruning is a set of failure modes to hunt for. Big skills are usually a symptom of one of these:

- **Repetition.** Every piece of a skill should have a single source of truth. If your definition of "an insight" appears in three places, you'll update one and leave the other two stale. 
- **Sediment.** When a team shares a skill, people add to it and nobody feels brave enough to *delete*. Layers pile up, half of it stale, some of it irrelevant to what the skill even does anymore. Sediment is a structure problem: figure out which branch each layer belongs to, move it there, and kill outright anything that's just old.
- **No-ops.** These are lines that *look* like they're doing something but change nothing. The test is simple. **Delete it and see**, against your saved examples, not your memory. Remove "write a clear, thorough summary," re-run your three stacks, and if the summaries come out just as good, that line was a no-op. "Just as good compared to what?" is the whole point, and the saved examples are the answer. Agents (and well-meaning teammates) love adding no-ops. Delete-and-check is how skills stay small.

The stewardship mindset matters most here. A skill isn't written once and shelved. Like a component in a design system, it needs an owner, a single source of truth, and the discipline to *retire* it when it's stale. A skill nobody trusts is worse than no skill, because someone will run it anyway.

And "stale" isn't a feeling, it's something you can test. Run your saved examples *with the skill and without it*. If the outputs come out just as good without it, the base model has caught up and absorbed whatever the skill was teaching, and you can retire it and stop paying its cost. This with-and-without check has a name, an *ablation*, and it's the only honest way to know a skill is still earning its place. Capability skills especially don't live forever; the models keep improving underneath them, and you'll be surprised how fast one you needed six months ago becomes dead weight.

One honest limit on all of this. Everything above, eyeballing three saved stacks, delete-and-check, ablation by hand, works because *you are* the one running the skill and reading the output. You're the human in the loop, and you catch the misfires. The day this skill moves behind a customer-facing agent, that safety net is gone: your customer won't notice a misfire and re-prompt, they'll just get a worse answer and leave. At that point hand-checking stops being enough and you need real, automated evals, a proper test suite that runs on every change. That's a bigger topic and a different post. But it starts exactly here, with three saved examples and the habit of re-running them.

{% include eyebrow.html label="The payoff" heading="The two skills, ready to lift" %}

Here's everything above, shipped as the pair the split produced. Both are deliberately invoked (Trigger), each is small and single-purpose with only the reference it needs (Structure), the first is stripped of any finish line to force the leg work (Steering), and both are small enough to audit in a minute (Pruning). The handoff is what makes the pair work: the first skill's output template *is* the second skill's input. The only frontmatter is a one-line description, which every platform has a slot for. Paste them into a Claude Skill, a Custom GPT, a Gemini Gem, a Project, or a saved system prompt.

**Skill 1, synthesis. It stops before recommending anything:**

```markdown
---
name: research-synthesis
description: Turn a stack of scattered research into a clear map of what the sources actually say.
---

## Leading principles
- **Observation, not recommendation.** Capture only what the sources say.
  No solutions, no "we should," no next steps, not here.
- **Sit in the problem.** Depth before breadth. Understand each source fully
  before pattern-matching across them.

## Steps
1. **Read and tag each source, one at a time.** For each document, list its
   key observations. Tag every observation with its source and mark it as
   *evidence* (something the source shows) or *claim* (something the source
   asserts). Do not synthesize across sources yet.

2. **Synthesize patterns across sources.** Look across everything tagged in
   Step 1. Group observations into themes. For each theme, note how many
   independent sources support it and flag any contradictions. You are
   describing the landscape, not fixing it.

## Reference: evidence vs. claim
- **Evidence**, something a source shows ("7 of 12 interviewees abandoned
  onboarding at the vault-setup step").
- **Claim**, something a source asserts without showing ("users want more
  automation"). Weight evidence over claims when you build themes.

## Output template  (this is the input to research-report)
### Sources reviewed
- [list each source]
### Themes
- [theme], supported by [sources]; contradicted by [sources]; evidence or claim
```

**Skill 2, the report. It only ever sees a finished synthesis, never the raw pile:**

```markdown
---
name: research-report
description: Turn a finished research synthesis into product insights and recommended next steps.
---

## Leading principle
- **Every recommendation traces to a theme.** If a next step doesn't map back
  to a supported theme from the synthesis, cut it.

## Steps
1. **Turn each theme into an insight.** State the product implication, the
   "so what." An insight is a theme plus its consequence for the product.
2. **Recommend one next step per insight.** Keep it concrete and testable.
   Flag which insights rest on strong evidence and which rest on thinner
   claims, so the reader can weight them.

## Output template
### Insights & recommended next steps
- [theme → insight (implication) → next step → confidence]
```

Run these against a stack of documents and you get what I couldn't get by re-typing instructions every time: the first skill sits in the problem and hands back a clean, traceable synthesis, and (because it never saw the recommendation step coming) it doesn't shortcut the work. Only then does the second skill turn that synthesis into the recommendations I needed to move the Jewelers Mutual vision forward.

{% include eyebrow.html label="Start here" heading="Write your first skill this week" %}

Don't overthink the first one. Pick a task you've done in an AI chat more than twice, the one where you keep re-typing the same setup. Then run it through the checklist:

- **Trigger.** Deliberate or automatic? Default to deliberate; reserve automatic for skills that should quietly apply everywhere.
- **Structure.** Write the steps, then the reference. Keep the main file tiny. Branch anything used on only one path out behind a pointer.
- **Steering.** Find one leading word that captures the behavior you want, and repeat it. Where the agent rushes, hide the finish line, and when leg work matters most, split the step into its own skill so the finish line disappears entirely.
- **Pruning.** Keep a few real examples and re-run them. Delete every line that survives delete-and-check against them unchanged. Give it a single source of truth. To decide whether to retire it, run those examples with and without the skill; if they're just as good without it, let it go.

A skill scaffold to start from:

```markdown
---
name: [skill-name]
description: [One line: what it does and when to use it.]
---

## Leading principles
- **[Loaded phrase]**, [what it means]

## Steps
1. [First step, force leg work here if the agent tends to rush]
2. [...]

## Reference
[Only what the steps need. Branch out anything path-specific.]
```

The Jewelers Mutual pile is what convinced me this was worth doing. Re-typing the same instructions on every prompt kept AI stuck at clever autocomplete; a sharp, shared skill (or two that hand off cleanly) turned it into something the team could rely on. So write your first one down, then cut it down, and hand it to someone else to run.

For the framework, the deeper cuts, and a "writing great skills" skill you can run over your own work, go to [Matt Pocock's newsletter and skills repo](https://www.aihero.dev/). Then write your first one this week.
