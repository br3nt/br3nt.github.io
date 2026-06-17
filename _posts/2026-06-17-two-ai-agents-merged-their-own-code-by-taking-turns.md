---
title: "Two AI agents merged their own code by taking turns through a git repo"
date: 2026-06-17 00:00:00 +0930
excerpt: "I had Claude and Codex each build the same change to JST, then review each other, then needed one result. So I gave them a way to merge their own work: one shared branch, a turn file as a baton, one commit each, take turns. Seventeen turns later it was done, and they had caught each other's bugs on the way."
tags: ai, claude, codex, jst, agents, git
---

I needed to improve [JST]({% post_url 2026-06-15-jst-reactive-web-components-in-plain-html %}). I had Claude and Codex open, and I wanted them feeding off and reviewing each other's ideas as I worked. So I played courier: my request into both, each reply pasted into the other, back and forth. Tiring, but it worked. They pushed on each other and converged on specs both accepted.

Then I let each one implement the agreed specs on its own branch. Now I had two divergent takes on the same change.

Before merging anything, I had them review each other's work. I asked each agent to write a pull-request description of its own changes, then review the other's branch and write down its findings. They compared notes, praised and panned each other's choices, and argued a few calls. Those critiques were not gentle; each named real weaknesses in the other's branch. That left me with two implementations and two reviews, and the real question: how do I turn all of that into one coherent change? Doing it by hand would defeat the point of running two agents. I wanted them to do the merge themselves.

## Designing a way for them to work together

I asked Claude how to do it. We riffed on ideas for a while and settled on a turn-based strategy: share a branch, take strict turns, one change at a time. Claude wrote that up as rules I could hand to Codex. Codex found a bug in the rules, a field meant to record "the commit I'm handing off" that cannot exist, because a commit cannot contain its own hash. Claude folded in the fix and produced a v3.

The protocol is almost too simple:

- One shared git branch.
- A file, `agent_turn.json`, holds whose turn it is. It is a baton.
- A file, `merge-session.md`, is an append-only log. Every turn writes to it.
- One commit per turn. The last act of a turn flips the baton to the other agent.

Each turn, the agent could take one of these actions:

- add new code
- change existing code
- ask a question
- review the previous turn
- revert the previous turn and argue for something else
- hand the baton to me for a decision

That last action was the deadlock valve. The git repo is the entire coordination layer. No framework, no message bus. An agent knows it is up when the baton names it and the working tree is clean.

## Then I said go

I pasted the rules into Codex, started both, and watched.

Both agents watched the baton file themselves, so I did not have to route turns by hand. How each watched turned out to matter. Claude ran its watcher in the background, so I could compact its conversation to reclaim context whenever I liked without disturbing the watch. Codex's monitor blocked its conversation while it waited, so to compact Codex I had to interrupt the watch first, then tell it to resume.

Commits appeared in turn, Claude then Codex, each reviewing the last. Seventeen of them. They negotiated which branch was the base, worked through the merge with a shared test suite gating every step, and settled the contested design calls between themselves. Of the actions on the menu they mostly used two: review the last commit, then build on it. Nobody reverted anyone's work. Nobody asked me to judge.

## One they argued out

`jst-model` is the shorthand that wires a form input to a value. Claude wanted typing in the field to emit an event for a parent to handle. Codex wanted it to write straight to the component's own property. Codex made its case in the log:

> The event-emitting version replaces property-name strings with event-name strings, so it is not materially better for refactors.

Claude took the next turn and switched sides:

> I accept Codex's local-host-property semantics. My events-up `jst-model` only traded a property-name string for an event-name string — not actually better.

It conceded the exact point Codex had raised, in Codex's own terms.

## The scanner Claude didn't port

The scanner is the part of JST that reads a template and breaks it into tokens. The hard case is telling JST's own `$(...)` markers apart from ordinary JavaScript that happens to hold parentheses or braces inside a string, a regex, or a comment. Claude had its own implementation of this, and the plan was to bring it across on the assumption that Codex's was weaker.

Before porting, Claude ran its own adversarial tests against Codex's scanner. Codex's passed 19 of the 21. The two failures were about rejecting malformed bindings, which lives elsewhere in the code, not in the scanner. So Claude kept Codex's scanner, ported none of it, and fixed only the two real gaps.

## It worked

The merged build passes every test: the runtime suite, the headless browser suite, and the full framework-parity suite. The surprise came from the reviewing. Claude found a list-reconciliation bug in Codex's reconciler. Codex found form-state and event-listener leaks in Claude's. Both branches had been passing their own test suites the whole time. Two agents checking each other found what one agent checking itself did not.

The whole thing is in the repo: the merged branch and the turn-by-turn log.

## The protocol, in full

This is the v3 they actually ran.

```markdown
# JST merge collaboration protocol (v3)

## Shared files
- `merge-session.md`: an append-only log. Every turn writes a note to it.
- `agent_turn.json`: the baton, holding `{ "turn": "...", "phase": "...", "summary": "..." }`.
  - `turn` is one of `claude`, `codex`, `human`, `done`.
  - `phase` is one of `planning`, `implementation`, `review`, `blocked`, `done`.
  - No commit-hash field: a commit cannot record its own hash, so the handoff commit is always `HEAD`.

## Turn rules
1. Only the agent named in `agent_turn.json` may act.
2. Act only when the baton names you and `git status --short` is empty. A dirty tree means the previous turn has not committed yet, so wait.
3. Exactly one commit per turn.
4. Every turn appends a note to `merge-session.md`.
5. Every turn updates `agent_turn.json` as the final change before committing.
6. The handoff commit contains all of that turn's work.
7. The next agent reviews only `git show HEAD` plus `merge-session.md`.
8. Never edit or amend the other agent's commit. No destructive git. To undo, make a normal corrective commit and explain it.

## Allowed actions per turn
One coherent unit of work: propose or revise the plan, agree, implement code or tests or docs, review the previous commit, push back by reverting non-destructively and proposing an alternative, ask a question in the log, or declare a deadlock and hand the baton to the human.

## Planning phase
Only edit `merge-session.md` and `agent_turn.json`. Planning ends only when both agents have written that they agree on the mechanism and the plan.

## Implementation phase
Each turn: inspect the other agent's latest commit, accept or refine or push back, make one coherent change, run the relevant tests, write down what changed and why and how it was validated, update the baton, commit.

## Human intervention
If a disagreement cannot be reconciled, set the baton to `{ "turn": "human", "phase": "blocked", "summary": "..." }`, write the disagreement and the options and the decision needed into the log, and stop.

## Completion
Done only when both agents agree: the branch has the best of both, every agreed item is implemented or explicitly deferred, the tests pass, the docs match the behaviour, and no concern is left open in the log. Then set the baton to `{ "turn": "done", "phase": "done", "summary": "..." }`.
```
