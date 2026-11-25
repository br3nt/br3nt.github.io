---
title: "Skills are process docs"
excerpt: "An agent skill is a process document an LLM can follow. Build one by doing the work once with the agent, have it write down what happened, then improve it every time it runs. It's the old organisational idea of turning people's ad hoc work into processes, with AI agents as the ones following them."
tags: [ai, agents, skills, process, anthropic]
---

Everyone is writing agent skills at the moment. Look inside one and it's a markdown file that says: when this comes up, do these steps, in this order, and watch out for these traps.

That's a process document. Organisations have been writing them for a long time. What's new is who reads them.

## Resources, processes, priorities

Clayton Christensen had a simple model for what an organisation can do. Its capabilities sit in three places: **resources** (people, money, tools), **processes** (the repeatable ways work gets done) and **priorities** (what it chooses to spend effort on).

A young organisation runs on resources. A few capable people do things ad hoc, in their heads, differently each time. That works until one of them is sick, leaves, or gets too busy. The knowledge walks out the door with them.

As the organisation matures, the repeated work gets turned into processes: written steps that anyone can follow and get the same result. That's what lets it scale. It gives you:

- **scale**: more people can do the work, not only the one who invented it
- **organisational knowledge**: the how-to lives somewhere other than one person's memory
- **continuity**: the work keeps happening when the person who did it moves on

A process trades a bit of flexibility for repeatability. You get predictable outcomes because the steps are the same every time.

Agent skills are the same trade. You take something you do ad hoc and turn it into steps an agent follows the same way every time. Same benefits, too: the skill outlives the conversation, other people can run it, and it doesn't depend on you remembering how you did it last quarter.

## How to build one

Don't start by writing the skill. Start by doing the work.

1. **Delegate the ad hoc task to the agent.** Pick something you've done before and will do again. Ask the agent to do it with you.
2. **Walk through it together.** Wherever you'd normally do something by hand (look something up, click through a UI, copy a number from one place to another, make a judgement call), describe it. Then get the agent to do that step instead of you.
3. **Finish the task.** Get to a real result, not a demo.
4. **Get the agent to analyse the run.** Once it's done, ask it to look back over what you both did and what came out: the steps, the inputs, the decisions, the dead ends, the corrections you had to make.
5. **Build the skill from that analysis.** Now the agent writes the skill, from evidence, not from what you imagine the process is.

That last point matters. Your mental model of a process is never the process. Step 4 finds the steps you didn't know you did.

<!-- TODO: a real example from one of my own skills -->

## Inputs, outputs and cadence

Some skills are self-contained. Many aren't. A lot of real processes need the **output of the previous run plus some new input**: last month's report and this month's numbers, last week's triage list and this week's inbox.

So when you write the skill, write down:

- what it takes as input, and where that comes from
- what it produces, and where that goes, so the next run can find it
- how often it runs

Cadence varies a lot. Some run daily or weekly. Some run monthly. Some are ad hoc but frequent. Some run once a year, which are the ones that benefit most, because nobody remembers how the annual thing was done twelve months ago.

## Every run improves it

A skill isn't finished when you write it. Each time it runs, something will go a bit wrong: a step was ambiguous, an edge case turned up, an input changed shape, the agent took a shortcut you didn't want.

Fix it then. Update the skill straight after the run, while the problem is fresh.

That's the agile loop applied to process: ship a working version, use it, learn, improve, repeat. The skill gets better in small increments instead of you trying to design the perfect process up front.

## Share it

Once a skill works for you, it works for anyone. Put it where your team can use it. Then the wider organisation.

This is where the organisational-knowledge benefit becomes real. A skill in a shared repo is a process document that also gets executed, so it can't quietly drift out of date the way a wiki page does. If it's wrong, the next run shows it.

## Compose them

Big processes are made of small ones. Skills are the same.

Break a skill into smaller ones that each do one thing well. Then combine them:

- **in serial**: one skill's output is the next one's input
- **in parallel**: independent skills run at once and the results get merged
- **stacked**: a higher-level skill calls lower-level ones
- **complementary**: two skills that cover different parts of the same job

Small skills are easier to test, easier to fix, and easier to reuse in processes you haven't thought of yet.

## Move the deterministic steps into code

Some steps don't need an LLM at all. Fetching a file, transforming data, calling an API, checking a value against a rule: if the step should do exactly the same thing every time, it belongs in a script or an API, not in prose.

Once it's code, you can test it, validate it and version it like any other code. The skill then calls the script, and the agent spends its effort on the parts that need judgement.

A good skill ends up as a thin layer of instructions around a set of tested tools. The more of the process that's deterministic, the more predictable the whole thing is.

## Measure it: statistical process control for agents

Here's the part I find most interesting.

If skills are processes, we should measure them the way we measure processes. Agent evals can check the quality of the agent's work when it uses a skill, and they're useful in two places:

- **at dev time**: when you change the skill, does it still do the job? Did the fix break something else?
- **at production time**: on every real run, is it still producing what it should?

Manufacturing solved this problem decades ago with **statistical process control**. You don't inspect every widget by hand. You measure a few things about each run, plot them over time, and watch for the process drifting out of its normal range. Walter Shewhart's control charts, from the 1920s, are the classic tool: a centre line, upper and lower limits, and rules for spotting when something has changed.

Swap the machine for an agent and the same idea works. Depending on what the skill does, an eval might check that a metric is:

- **increasing** toward a target (accuracy creeping up as the skill improves)
- **holding steady** within its control limits (quality isn't drifting)
- **never occurring** (zero leaked secrets, zero writes to the wrong place)
- **occurring below a threshold** (a few flaky retries are fine, a spike is not)

That last pair maps directly onto the defect charts used on production lines: count the bad events per run and alert when the count goes over the line. And the trend rules apply too: a slow drift over several runs tells you something has changed (the model, the inputs, the world) even if no single run failed.

## The short version

- A skill is a process document an agent can follow.
- Build it by doing the work with the agent first, then having it write down what happened.
- Write down inputs, outputs and cadence.
- Improve it on every run.
- Share it.
- Keep skills small and compose them.
- Move deterministic steps into tested, versioned code.
- Measure it like a production line.

Organisations spent the last century learning how to turn individual know-how into processes. Skills are the same work, done for agents.
