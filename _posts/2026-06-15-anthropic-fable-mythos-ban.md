---
title: "Anthropic Fable and Mythos global ban and timeline"
date: 2026-06-15 00:00:00 +0930
tags: ai, anthropic, policy, fable, mythos
---

<style>
/* ---- clickable citation bubbles (Wait-But-Why style) ---- */
.post-body { counter-reset: cite; }
.cite { position: relative; display: inline; }
.cite-btn {
  counter-increment: cite;
  font: inherit; cursor: pointer;
  border: none; background: #ff3399; color: #fff;
  border-radius: 999px; padding: 0 .42em; margin: 0 .1em;
  font-size: .68em; line-height: 1.5; vertical-align: super; font-weight: 700;
}
.cite-btn::before { content: counter(cite); }
.cite-btn:hover, .cite.open .cite-btn { background: #d81b76; }
.cite-pop, .person-pop {
  display: none; position: absolute; z-index: 30; left: 0; top: 1.7em;
  width: min(340px, 80vw); padding: .75em .85em;
  background: #fff; border: 1px solid #cbd5e1; border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,.18);
  font-size: .82rem; line-height: 1.45; text-align: left; white-space: normal; font-weight: 400;
}
.cite.open .cite-pop, .person.open .person-pop { display: block; }
.cite-pop a, .person-links a { display: block; margin-top: .35em; }
.cite-note, .person-bio { color: #475569; }
.cite-note a { display: inline; margin: 0; }
.cite-hr { display: block; border-top: 1px solid #e2e8f0; margin: .7em 0; }

/* ---- inline person profiles ---- */
.person { position: relative; display: inline; }
.person-btn {
  font: inherit; cursor: pointer; background: none; border: none; padding: 0; color: inherit;
  text-decoration: underline; text-decoration-style: dotted; text-underline-offset: 3px;
  text-decoration-color: #ff3399;
}
.person-btn:hover { color: #d81b76; }
.person-head { font-weight: 700; margin-bottom: .15em; }
.person-pic, .ref-pic {
  display: flex; align-items: center; justify-content: center;
  width: 100%; height: 96px; margin-bottom: .55em;
  background: repeating-linear-gradient(45deg,#f1f5f9,#f1f5f9 10px,#e8edf3 10px,#e8edf3 20px);
  border: 1px dashed #cbd5e1; border-radius: 8px; color: #94a3b8; font-size: .78rem;
}
.person-links, .ref-links { margin-top: .4em; }
.person-pic img { display: block; width: 100%; height: auto; border-radius: 8px; }
.person-pic:has(img) { border: none; background: none; height: auto; padding: 0; }

/* reader-local timestamps */
time.ts { border-bottom: 1px dotted #94a3b8; cursor: help; }

/* embedded Steam widget (inside citation bubble) */
.cite-pop-wide { width: min(560px, 92vw); }
.steam-embed { display: block; margin: .6em 0; }
.steam-embed iframe { width: 100%; border: 0; }

/* ---- vertical timeline ---- */
.timeline { list-style: none; margin: 1.5em 0; padding: 0; position: relative; }
.timeline::before {
  content: ""; position: absolute; left: 7px; top: 6px; bottom: 6px; width: 2px; background: #cbd5e1;
}
.timeline > li { position: relative; padding: 0 0 1.4em 2.3em; }
.timeline > li::before {
  content: ""; position: absolute; left: -2px; top: 5px; box-sizing: border-box;
  width: 20px; height: 20px; border-radius: 50%;
  background: #94a3b8; border: 3px solid #fff; box-shadow: 0 0 0 2px #cbd5e1;
}
.timeline .when { font-weight: 700; display: block; }
.timeline > li.tl-major { background: #fff7f7; border-radius: 8px; padding-top: .35em; padding-left: 2.3em; }
.timeline > li.tl-major::before {
  width: 26px; height: 26px; left: -5px; top: 8px;
  background: #dc2626; box-shadow: 0 0 0 3px #fecaca;
}
.tl-tag {
  display: inline-block; font-size: .62em; font-weight: 700; letter-spacing: .06em;
  text-transform: uppercase; background: #dc2626; color: #fff; border-radius: 4px;
  padding: .12em .5em; margin-left: .5em; vertical-align: middle;
}

/* ---- callout ---- */
.callout { border-left: 4px solid #d97706; background: #fffbeb; padding: .8em 1em; border-radius: 6px; margin: 1.5em 0; }
.todo { border-left: 4px solid #64748b; background: #f8fafc; padding: .6em 1em; border-radius: 6px; color:#475569; margin: 1em 0; }
.shots {
  display: flex; flex-wrap: wrap; gap: .8em; justify-content: center;
  width: min(100vw - 2rem, 1100px);
  position: relative; left: 50%; transform: translateX(-50%);
  margin: 1.4em 0;
}
.shots img { flex: 0 1 340px; min-width: 0; max-width: 100%; border: 1px solid #cbd5e1; border-radius: 8px; }
.post-meta { font-size: .8rem; color: #6b7280; }
.aside { background: #f1f5f9; border: 1px solid #e2e8f0; border-radius: 8px; padding: .8em 1em; margin: 1.5em 0; font-size: .95em; }
.aside table { border-collapse: collapse; width: 100%; margin: .5em 0 0; }
.aside th, .aside td { border: 1px solid #cbd5e1; padding: .4em .6em; text-align: left; vertical-align: top; }
.aside th { background: #e2e8f0; }
.aside td:first-child { font-weight: 700; white-space: nowrap; }
.cite-pop table { border-collapse: collapse; width: 100%; margin-top: .5em; }
.cite-pop th, .cite-pop td { border: 1px solid #cbd5e1; padding: .35em .5em; text-align: left; vertical-align: top; }
.cite-pop th { background: #e2e8f0; }
.cite-pop td:first-child { font-weight: 700; white-space: nowrap; }
</style>

<div class="post-body" markdown="1">

*Last updated 15 June 2026. Sources are linked inline, tap any pink bubble, or any underlined name for a quick profile. The clickable footnote bubbles are borrowed from the wonderful [Wait But Why](https://waitbutwhy.com). If the story moves, this post will too.*
{:.post-meta}

On 9 June 2026, Anthropic released Fable 5 free to its Pro, Max, Team, and Enterprise users. Fable 5 is a version of Anthropic's Mythos model with guardrails that fence off its most dangerous capabilities, such as finding and exploiting software vulnerabilities, or helping design biological and chemical weapons. The free window was set to run until 22 June, after which Fable would shift to standard paid usage.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">You can read about the Fable launch here:</span><a href="https://www.anthropic.com/news/claude-fable-5-mythos-5" target="_blank" rel="noopener">Anthropic, Fable 5 and Mythos 5 announcement</a><a href="https://www.anthropic.com/claude/fable" target="_blank" rel="noopener">Anthropic, Claude Fable</a><a href="https://www.cnbc.com/2026/06/09/anthropic-mythos-claude-fable-5.html" target="_blank" rel="noopener">CNBC, launch coverage</a><a href="https://techcrunch.com/2026/06/09/anthropic-released-claude-fable-5-its-most-powerful-model-publicly-days-after-warning-ai-is-getting-too-dangerous/" target="_blank" rel="noopener">TechCrunch, launch coverage</a><span class="cite-hr"></span><span class="cite-note">Access to the underlying Mythos model stayed limited to partners in Anthropic's Project Glasswing security programme.</span><a href="https://www.anthropic.com/glasswing" target="_blank" rel="noopener">Anthropic, Project Glasswing</a><a href="https://www.engadget.com/2193656/anthropic-blocks-access-fable-5-mythos-5/" target="_blank" rel="noopener">Engadget, news report</a></span></span>

I started using Fable around 10 June. I found the jump in capability astounding, so what happened next hit me hard.

Then, on 12 June 2026, Anthropic received an export-control directive from the US Department of Commerce, signed by Commerce Secretary <span class="person"><button class="person-btn">Howard Lutnick</button><span class="person-pop"><span class="person-pic"><img src="/assets/img/howard-lutnick.jpg" alt="Howard Lutnick"></span><span class="person-head">Howard Lutnick</span><span class="person-bio">US Secretary of Commerce since 2025; previously chairman and CEO of the Wall Street firm Cantor Fitzgerald. Commerce runs US export controls through its Bureau of Industry and Security, which is why this order came from his department.</span><span class="person-links"><a href="https://en.wikipedia.org/wiki/Howard_Lutnick" target="_blank" rel="noopener">Wikipedia: Howard Lutnick</a></span></span></span> and addressed to CEO <span class="person"><button class="person-btn">Dario Amodei</button><span class="person-pop"><span class="person-pic"><img src="/assets/img/dario-amodei.jpg" alt="Dario Amodei"></span><span class="person-head">Dario Amodei</span><span class="person-bio">Co-founder and CEO of Anthropic, which he started in 2021 with his sister Daniela and other researchers who had left OpenAI, where he was VP of Research. He is one of the field's most prominent voices on AI safety.</span><span class="person-links"><a href="https://en.wikipedia.org/wiki/Dario_Amodei" target="_blank" rel="noopener">Wikipedia, Dario Amodei</a></span></span></span>, ordering that both models be blocked for every foreign national, even those inside the US, with immediate effect. Anthropic complied within hours, by <time class="ts" datetime="2026-06-13T02:00:00Z" data-approx>around 10:00pm ET, 12 June</time>, disabling access for every user.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Directive from Commerce (Lutnick to Amodei) barred all foreign nationals, even inside the US; Anthropic disabled both models within hours that night to comply.</span><a href="https://www.cnbc.com/2026/06/12/anthropic-disables-access-to-fable-5-and-mythos-5-to-comply-with-government-directive.html" target="_blank" rel="noopener">CNBC, news report</a><a href="https://www.irishtimes.com/business/2026/06/13/anthropic-suspends-latest-ai-models-after-us-blocks-access-to-foreigners/" target="_blank" rel="noopener">The Irish Times, news report</a><a href="https://www.yahoo.com/news/politics/articles/amazon-white-house-ended-anthropics-200248499.html" target="_blank" rel="noopener">Axios, reconstruction of the week</a><a href="https://www.anthropic.com/news/fable-mythos-access" target="_blank" rel="noopener">Anthropic, official statement</a></span></span>

Quick reassurance: this only affects Fable 5 and Mythos 5. Every other Anthropic model, Claude Opus 4.8 and the rest, is untouched.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Anthropic confirms other models are unaffected.</span><a href="https://www.anthropic.com/news/fable-mythos-access" target="_blank" rel="noopener">Anthropic, official statement</a></span></span>

The order also requires a licence for any export, re-export, or even domestic transfer of the models. Since you can't realistically prove the nationality of everyone touching a model, the only safe way to comply was to pull both models for everyone, worldwide.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Licence needed even for domestic transfer, so a global shutdown was the only compliant option.</span><a href="https://www.tomshardware.com/tech-industry/artificial-intelligence/us-export-control-order-forces-anthropic-to-disable-claude-fable-5-and-mythos-5-worldwide" target="_blank" rel="noopener">Tom's Hardware, news report</a></span></span>

The stated reason falls under national security and export control: Mythos is unusually good at finding software vulnerabilities, Fable's guardrails are meant to keep that power fenced off, and the government became convinced the fence had a hole. More on that below.

## What's the timeline?

<ol class="timeline">
<li><span class="when">9 June</span> Anthropic launches Fable 5 and notifies the government, no objection at the time.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><a href="https://www.yahoo.com/news/politics/articles/amazon-white-house-ended-anthropics-200248499.html" target="_blank" rel="noopener">Axios, reconstruction of the week</a></span></span></li>

<li><span class="when">10 June</span> Jailbreaker "<span class="person"><button class="person-btn">Pliny the Liberator</button><span class="person-pop"><span class="person-head">Pliny the Liberator</span><span class="person-bio">Anonymous (no public photo), prolific AI "red-teamer." 100k+ followers as @elder_plinius; named to TIME's 100 Most Influential People in AI (2025). Runs the L1B3RT4S jailbreak collection. The handle nods to Pliny the Elder, Roman author of the encyclopedic <em>Natural History</em>; "Liberator" reflects his view that heavy AI "safety" is really corporate censorship.</span><span class="person-links"><a href="https://x.com/elder_plinius" target="_blank" rel="noopener">@elder_plinius on X</a><a href="https://time.com/collections/time100-ai-2025/7305870/pliny-the-liberator/" target="_blank" rel="noopener">TIME, 100 Most Influential People in AI</a><a href="https://en.wikipedia.org/wiki/Pliny_the_Elder" target="_blank" rel="noopener">Wikipedia, Pliny the Elder</a></span></span></span>" publicly posts a Fable 5 jailbreak.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><a href="https://x.com/elder_plinius/status/2064776322979676227" target="_blank" rel="noopener">Pliny's "PWNED" post on X</a></span></span></li>

<li><span class="when">11 June</span> That evening, Amazon, plus at least five other companies, privately phone administration officials with jailbreak reports. This, more than the public post, is what set the action in motion.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Amazon + 5+ firms called Thu night / Fri morning, the direct trigger.</span><a href="https://www.yahoo.com/news/politics/articles/amazon-white-house-ended-anthropics-200248499.html" target="_blank" rel="noopener">Axios, reconstruction of the week</a></span></span></li>

<li><span class="when"><time class="ts" datetime="2026-06-12T17:00:00Z" data-approx>12 June, ~1:00pm ET</time></span> After hours of trying to get Anthropic to withdraw the models voluntarily, the government calls demanding they pull both within 90 minutes.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><a href="https://www.yahoo.com/news/politics/articles/amazon-white-house-ended-anthropics-200248499.html" target="_blank" rel="noopener">Axios, reconstruction of the week</a></span></span></li>

<li class="tl-major"><span class="when"><time class="ts" datetime="2026-06-12T21:21:00Z">12 June, 5:21pm ET</time> <span class="tl-tag">key event</span></span> The formal export-control notice arrives from Commerce Secretary Lutnick.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><a href="https://www.anthropic.com/news/fable-mythos-access" target="_blank" rel="noopener">Anthropic, official statement</a><a href="https://www.cnbc.com/2026/06/12/anthropic-disables-access-to-fable-5-and-mythos-5-to-comply-with-government-directive.html" target="_blank" rel="noopener">CNBC, news report</a></span></span></li>

<li class="tl-major"><span class="when"><time class="ts" datetime="2026-06-13T02:00:00Z" data-approx>12 June, ~10:00pm ET</time> <span class="tl-tag">key event</span></span> Fable 5 and Mythos 5 go dark for all users.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><a href="https://www.yahoo.com/news/politics/articles/amazon-white-house-ended-anthropics-200248499.html" target="_blank" rel="noopener">Axios, reconstruction of the week</a></span></span></li>

<li class="tl-major"><span class="when">13 June <span class="tl-tag">key event</span></span> Anthropic publishes its statement: complying, but disagreeing, "working to restore access as soon as possible," and arguing any such block should run through a transparent statutory process.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><a href="https://www.anthropic.com/news/fable-mythos-access" target="_blank" rel="noopener">Anthropic, official statement</a></span></span></li>

<li><span class="when">13 June</span> <span class="person"><button class="person-btn">David Sacks</button><span class="person-pop"><span class="person-pic"><img src="/assets/img/david-sacks.jpg" alt="David Sacks"></span><span class="person-head">David Sacks</span><span class="person-bio">Has been the administration's top AI-policy voice since December 2024. An early PayPal executive, he founded Yammer and co-hosts the <em>All-In</em> podcast. He is widely known as the "AI Czar": in US politics a "czar" is an official given broad authority to run one issue across agencies, a label that hints at how concentrated that power is. In Sacks's case it is more than a media nickname, Trump's appointment statement formally titled him the "White House A.I. and Crypto Czar".</span><span class="person-links"><a href="https://en.wikipedia.org/wiki/David_Sacks" target="_blank" rel="noopener">Wikipedia, David Sacks</a><a href="https://www.presidency.ucsb.edu/documents/statement-president-elect-donald-j-trump-announcing-the-appointment-david-o-sacks-white" target="_blank" rel="noopener">Trump's appointment statement</a></span></span></span> comments publicly: the order was issued "reluctantly," a "trusted partner" surfaced the jailbreak, and "the ball is in Anthropic's court."<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><a href="https://thenewstack.io/fable-5-and-mythos-5-remain-suspended-the-ball-is-in-anthropics-court/" target="_blank" rel="noopener">The New Stack, Sacks's remarks</a></span></span></li>

<li><span class="when">13 June</span> Axios reconstructs the week, revealing Amazon and at least five other firms triggered the action; an Amazon spokesperson declines to detail the reports.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><a href="https://www.yahoo.com/news/politics/articles/amazon-white-house-ended-anthropics-200248499.html" target="_blank" rel="noopener">Axios, reconstruction of the week</a></span></span></li>

<li><span class="when">13 June</span> Semafor reports a China-access concern behind the move; Anthropic publicly denies the White House raised it.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><a href="https://www.semafor.com/article/06/13/2026/white-house-move-to-limit-anthropic-linked-to-concerns-about-chinese-access-to-mythos" target="_blank" rel="noopener">Semafor, the China reporting</a></span></span></li>

<li><span class="when">14 June</span> Reporting (Wall Street Journal) names Amazon CEO <span class="person"><button class="person-btn">Andy Jassy</button><span class="person-pop"><span class="person-pic"><img src="/assets/img/andy-jassy.jpg" alt="Andy Jassy"></span><span class="person-head">Andy Jassy</span><span class="person-bio">CEO of Amazon since 2021, and previously the founder and long-time head of AWS. Amazon is one of Anthropic's largest investors, which is why his flagging of Fable 5 to the government drew conflict-of-interest questions.</span><span class="person-links"><a href="https://en.wikipedia.org/wiki/Andy_Jassy" target="_blank" rel="noopener">Wikipedia, Andy Jassy</a></span></span></span> as the partner who flagged Fable 5, telling Treasury Secretary <span class="person"><button class="person-btn">Scott Bessent</button><span class="person-pop"><span class="person-pic"><img src="/assets/img/scott-bessent.jpg" alt="Scott Bessent"></span><span class="person-head">Scott Bessent</span><span class="person-bio">US Secretary of the Treasury since 2025; previously a hedge-fund investor who founded Key Square Group and was chief investment officer at Soros Fund Management. Jassy reportedly raised the Fable 5 concerns with him.</span><span class="person-links"><a href="https://en.wikipedia.org/wiki/Scott_Bessent" target="_blank" rel="noopener">Wikipedia, Scott Bessent</a></span></span></span> that Amazon researchers had used it to obtain information usable in cyberattacks.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">WSJ-sourced; Amazon is also a major Anthropic investor, which has prompted conflict-of-interest questions.</span><a href="https://thenextweb.com/news/amazon-jassy-triggered-anthropic-fable-mythos-crackdown" target="_blank" rel="noopener">The Next Web (WSJ-sourced)</a><a href="https://www.benzinga.com/markets/tech/26/06/53184953/amazon-ceo-andy-jassy-triggered-ban-on-anthropics-mythos-ai-models" target="_blank" rel="noopener">Benzinga</a></span></span></li>

<li><span class="when">14 June</span> Anthropic flies senior staff to Washington for weekend talks aimed at reversing the controls, arguing the models can be safely contained. Commerce Secretary Howard Lutnick and Cyber Director <span class="person"><button class="person-btn">Sean Cairncross</button><span class="person-pop"><span class="person-pic"><img src="/assets/img/sean-cairncross.jpg" alt="Sean Cairncross"></span><span class="person-head">Sean Cairncross</span><span class="person-bio">US National Cyber Director. A lawyer and former Republican political operative, he took part in the weekend talks with Anthropic over the export controls.</span><span class="person-links"><a href="https://en.wikipedia.org/wiki/Sean_Cairncross" target="_blank" rel="noopener">Wikipedia, Sean Cairncross</a></span></span></span> take part, with Anthropic co-founder Tom Brown and policy chief Sarah Heck. Both sides signal they want it resolved; nothing is announced.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Axios scoop: senior Anthropic staff negotiating directly with the White House over the weekend. No resolution yet.</span><a href="https://finance.yahoo.com/sectors/technology/articles/anthropic-races-reverse-fable-5-033440732.html" target="_blank" rel="noopener">Yahoo Finance</a><a href="https://www.freepressjournal.in/tech/anthropic-flies-staff-to-washington-to-patch-up-white-house-dispute" target="_blank" rel="noopener">Free Press Journal</a></span></span></li>

<li><span class="when">As of 15 June</span> Models still offline; talks continue and no court order touches the export ban. Kalshi traders price a return at ~68% before 1 July.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Still suspended; market odds for restoration.</span><a href="https://news.bitcoin.com/kalshi-traders-price-fable-5-return-at-68-before-july-1-after-historic-ai-ban/" target="_blank" rel="noopener">Bitcoin.com, Kalshi market odds</a></span></span></li>
</ol>

## What is the jailbreak?

A "jailbreak" is a way of talking a model into doing something its safety training is meant to refuse. Here the worry is specific: Fable 5 is the friendly front-end wrapped around Mythos 5, which is exceptionally good at finding software vulnerabilities. A jailbreak that slips past Fable's guardrails<span class="cite"><button class="cite-btn"></button><span class="cite-pop cite-pop-wide"><span class="cite-note">Anthropic builds these guards in as part of its Responsible Scaling Policy, which defines four AI Safety Levels (ASL):</span><span class="asl-table"></span><a href="https://www.anthropic.com/responsible-scaling-policy" target="_blank" rel="noopener">Anthropic, Responsible Scaling Policy</a><a href="https://www.anthropic.com/news/anthropics-responsible-scaling-policy" target="_blank" rel="noopener">Anthropic, RSP announcement</a></span></span> could turn that into a cyber-weapon, a public route into Mythos's otherwise restricted power.

### Who flagged it

The direct trigger wasn't the viral public post, it was private reports. Amazon, alongside at least five other companies, called the administration with demonstrations of jailbreaking Fable to reach Mythos's capabilities. Amazon has declined to share specifics, saying only that it doesn't discuss the details of such conversations.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Amazon + 5+ firms reported jailbreaks privately; Amazon won't detail them.</span><a href="https://www.yahoo.com/news/politics/articles/amazon-white-house-ended-anthropics-200248499.html" target="_blank" rel="noopener">Axios, reconstruction of the week</a></span></span> The government's own framing came from David Sacks, who said a "highly credible, trusted partner" came forward with a jailbreak.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><a href="https://thenewstack.io/fable-5-and-mythos-5-remain-suspended-the-ball-is-in-anthropics-court/" target="_blank" rel="noopener">The New Stack, Sacks's remarks</a></span></span>

### The one public example

The only jailbreak shown publicly, with real technical detail, came from Pliny the Liberator, a day after launch. He called his method a "pack hunt", several tricks stacked together rather than one clever prompt, and also leaked Fable 5's roughly 120,000-character system prompt (its full rulebook) on GitHub.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Pliny's "pack hunt": Unicode/homoglyph "Parseltongue" transforms, splitting a request into innocuous pieces across a long context, and fiction/academic framing, plus a ~120k-char system-prompt leak.</span><a href="https://cybersecuritynews.com/anthropics-claude-fable-5-jailbroken/" target="_blank" rel="noopener">CyberSecurityNews, technical write-up</a><a href="https://alphasignalai.substack.com/p/claude-fable-5-prompt-leak-is-a-user" target="_blank" rel="noopener">AlphaSignal, the prompt leak</a></span></span>

### Anthropic's rebuttal

Anthropic says this doesn't demonstrate a real jailbreak of Fable 5's safety systems. Its point: it tested Fable in isolation, whereas the attack chained the model inside a wider agentic pipeline, so the model wasn't broken, the plumbing around it was. It calls the demonstrated risk narrow and non-universal.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Anthropic: not a true jailbreak; tested in isolation vs the attacker's pipeline; risk narrow/non-universal.</span><a href="https://www.securityweek.com/anthropic-disputes-fable-5-ai-jailbreak/" target="_blank" rel="noopener">SecurityWeek, Anthropic's dispute</a><a href="https://www.anthropic.com/news/fable-mythos-access" target="_blank" rel="noopener">Anthropic, official statement</a></span></span> That disagreement, government says dangerous, Anthropic says overblown, is the crux of the whole standoff.

## What's happened since the ban?

Two threads beyond the timeline are worth watching.

Anthropic's own close partner, Amazon, was first to the government's door. Reporting since has named Amazon CEO Andy Jassy as the one who raised it, telling Treasury Secretary Scott Bessent that Amazon researchers had used Fable 5 to obtain information usable in cyberattacks. Amazon is also one of Anthropic's largest investors, with billions committed, which has prompted questions about whether competitive interest sat alongside the security concern. The reporting treats that as an open question, not a proven motive.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">WSJ-sourced reporting names Jassy (Amazon CEO) as flagging Fable 5 to Treasury Secretary Bessent; Amazon is a major Anthropic investor, so the conflict-of-interest is raised as a question, not established.</span><a href="https://thenextweb.com/news/amazon-jassy-triggered-anthropic-fable-mythos-crackdown" target="_blank" rel="noopener">The Next Web (WSJ-sourced)</a><a href="https://www.benzinga.com/markets/tech/26/06/53184953/amazon-ceo-andy-jassy-triggered-ban-on-anthropics-mythos-ai-models" target="_blank" rel="noopener">Benzinga</a><a href="https://www.yahoo.com/news/politics/articles/amazon-white-house-ended-anthropics-200248499.html" target="_blank" rel="noopener">Axios, reconstruction of the week</a></span></span>

Semafor reported the deeper worry was that a China-linked group may have accessed Mythos and could copy or weaponise its bug-finding. Notably, Anthropic pushed back, saying the White House didn't raise Chinese access in their conversations, so the stated reason and the reported reason don't fully line up.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">China-access theory vs Anthropic's denial it was raised.</span><a href="https://www.semafor.com/article/06/13/2026/white-house-move-to-limit-anthropic-linked-to-concerns-about-chinese-access-to-mythos" target="_blank" rel="noopener">Semafor, the China reporting</a></span></span>

## Will the ban be lifted?

tl;dr: probably, but likely only to US citizens and permanent residents.

The clearest signal comes from David Sacks. He says the restriction was issued "reluctantly" and that "the ball is in Anthropic's court", fix the jailbreak to the government's satisfaction and the model can return.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><a href="https://thenewstack.io/fable-5-and-mythos-5-remain-suspended-the-ball-is-in-anthropics-court/" target="_blank" rel="noopener">The New Stack, Sacks's remarks</a></span></span>

Anthropic isn't waiting passively. It flew senior staff to Washington over the weekend to argue the models can be safely contained, and both sides say they want a resolution.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Weekend DC talks with Lutnick and Cyber Director Cairncross; Anthropic's Tom Brown and Sarah Heck attended. No resolution announced.</span><a href="https://finance.yahoo.com/sectors/technology/articles/anthropic-races-reverse-fable-5-033440732.html" target="_blank" rel="noopener">Yahoo Finance</a><a href="https://www.freepressjournal.in/tech/anthropic-flies-staff-to-washington-to-patch-up-white-house-dispute" target="_blank" rel="noopener">Free Press Journal</a></span></span>

Kalshi traders (yes, people now bet real money on this stuff) price Fable's return at 14% by 15 June, 51% by 20 June, and 68% by 1 July: most expect a fix to emerge within a few weeks.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Prediction-market odds for restoration dates.</span><a href="https://news.bitcoin.com/kalshi-traders-price-fable-5-return-at-68-before-july-1-after-historic-ai-ban/" target="_blank" rel="noopener">Bitcoin.com, Kalshi market odds</a></span></span>

Because this is an export control, the formal route back may require Anthropic to obtain specific export licences, which can take far longer than a software patch.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Directive requires licences for export/re-export/domestic transfer.</span><a href="https://www.tomshardware.com/tech-industry/artificial-intelligence/us-export-control-order-forces-anthropic-to-disable-claude-fable-5-and-mythos-5-worldwide" target="_blank" rel="noopener">Tom's Hardware, news report</a></span></span>

The directive bars foreign nationals from the models even inside the US, so a literal reading means Anthropic could only switch them on for users it can verify are US persons. Sacks, though, speaks of Fable returning to "general availability," which sounds global. Those two positions haven't been squared in public.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Directive targets foreign nationals even inside the US; Sacks separately frames a return to general availability. No public detail on which wins.</span><a href="https://www.cnbc.com/2026/06/12/anthropic-disables-access-to-fable-5-and-mythos-5-to-comply-with-government-directive.html" target="_blank" rel="noopener">CNBC, news report</a><a href="https://thenewstack.io/fable-5-and-mythos-5-remain-suspended-the-ball-is-in-anthropics-court/" target="_blank" rel="noopener">The New Stack, Sacks's remarks</a></span></span>

Two claims I couldn't corroborate (so they're not stated as fact). Some AI summaries say (a) a judge already issued an injunction blocking the June export ban, and (b) Sacks demanded a "proof of nationality" system. I found no credible source for either. The real, separate legal fight is from March 2026: Judge Rita Lin (N.D. Cal.) blocked an earlier Pentagon "government-use" ban, the one after Anthropic refused to let the military use Claude for mass surveillance and autonomous weapons. Useful background, but a different dispute from the June export ban.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">March govt-use ban + Rita Lin injunction, distinct from the June export ban.</span><a href="https://www.npr.org/2026/03/26/nx-s1-5762971/judge-temporarily-blocks-anthropic-ban" target="_blank" rel="noopener">NPR, the March ruling</a><a href="https://en.wikipedia.org/wiki/Anthropic%E2%80%93United_States_Department_of_Defense_dispute" target="_blank" rel="noopener">Wikipedia, Anthropic–DoD dispute</a></span></span>

## What's so good about Fable, anyway?

Fable 5, wrapped around the Mythos 5 engine, was for those few days about the most capable AI the public could touch. Here is what that felt like to use.

I started on 10 June and knew within an hour that something was qualitatively different. It carried a kind of understated confidence and expertise I hadn't felt from a model before.

### It unblocked a project I'd given up on

My first task was to have Fable assess a harness I was building for a personal AI assistant. The project had stalled and I didn't know how to move it forward. Fable read the old code and told me the design wasn't wrong, the build order was:

> The problem is build order: you started with the most speculative, heuristic-heavy subsystem, turn-boundary detection with typing signals, ellipsis detection, reschedule counts, freshness decay, before a single real capability existed underneath it. You built the conductor before the orchestra.

Then it told me how to dig out: build the thinnest vertical slice through every layer, with maximum dumbness at each one, rather than sophistication in any single layer. One space, one agent, one real service end to end, and defer all the turn-taking heuristics to a dumb three-second timer. It didn't just unblock me. It finished off core concepts I'd assumed would take weeks or months with Opus 4.8.

### A Populous clone, in a few nights

I'd seen devs posting videos of Fable recreating Fortnite, Minecraft, and GTA. So the next night I asked it to build a game inspired by *Populous: The Beginning*<span class="cite"><button class="cite-btn"></button><span class="cite-pop cite-pop-wide"><span class="cite-note"><em>Populous: The Beginning</em> (1998), the Bullfrog god-game where you guide a tribe across the world.</span><span class="steam-embed" data-steam="2616430"></span><span class="ref-links"><a href="https://en.wikipedia.org/wiki/Populous:_The_Beginning" target="_blank" rel="noopener">Wikipedia, Populous: The Beginning</a><a href="https://en.wikipedia.org/wiki/Bullfrog_Productions" target="_blank" rel="noopener">Wikipedia, Bullfrog Productions</a></span></span></span>. I'd always wanted to understand how god-games with deformable terrain and 3D worlds actually work. I was blown away by what it made: sculptable, wrapped terrain in Three.js with a curving horizon. The night after, it fleshed out a full spell book (blast, convert, lightning, swamp, landbridge, flatten, earthquake, volcano), built an in-world level editor, and added saving, star ratings, and share-by-code. Far from a polished game, but every foundation was in place.

<div class="shots">
<img src="/assets/img/populous-tribes.png" alt="The Populous clone's Tribal Gods title screen, with tribe selection, difficulty, and Levels and Editor buttons">
<img src="/assets/img/populous-world.png" alt="The clone's curved-horizon planet, with sculpted terrain, huts, and villagers">
<img src="/assets/img/populous-spells.png" alt="The clone in play: 3D terrain, villagers, the minimap, and the spell-book HUD">
</div>

### It found what was actually slowing my budget app

My personal budget app, built on Alpine.js, had slowed to a crawl, and I assumed Alpine was the culprit. Fable measured it and told me flatly:

> Alpine.js is not your problem.

The real causes: the ledger page was over 1 MB of HTML with 215 pre-rendered hidden dialogs, it was being served uncompressed, and every save did a full-page reload that re-initialised three frameworks at once. Fable fixed all of it. It turned on compression, replaced the 215 dialogs with a single one fetched on demand, made saves update the row in place instead of reloading, and lazy-loaded the charting library. Page transfer dropped from about 1,050 KB to 13 KB. It also caught an authorization gap I'd missed, where records weren't scoped to the logged-in user, and added regression tests.

### JST: the one no other tool could get right

Another project of mine is a no-build front-end framework I call JST (JavaScript Templates): the syntax you'd expect from a server-rendered app, the HATEOAS philosophy of HTMX, and the front-end interactivity of Alpine.js. I'd had Claude Opus 4.8, Gemini, and Codex all try to fix the reactivity problems I kept hitting. None could do it without sacrifices that gutted the core idea.

I gave it to Fable. It immediately understood the HTML and JS constraints I was working within, the philosophy I was chasing, and every hack, bug, security hole, and tradeoff the other tools had layered in (it called the accumulated mess "LLM sediment", and traced all of it to one wrong early decision). I asked whether anyone would actually want to use it. It didn't flatter me:

> As-is: no. The XSS, the window-global requirement, and the attribute-poke render API rule it out for anything real. […] Could it be made wantable: plausibly, in a niche […] the missing component layer for htmx apps.

Then it fixed everything and built examples, the most complex being a three-level Kanban board with drag and drop, a modal editor, and a stats panel whose component definition is fetched from the server after load. When I read the source for that Kanban app I couldn't believe how little code it took. JST was as simple as I'd imagined, and responsive enough that my fear of it being laggy or unscalable just evaporated.

<div class="shots">
<img src="/assets/img/jst-components.png" alt="JST source: a ui-panel component with named slots, and a board-toolbar filter component">
<img src="/assets/img/jst-kanban.png" alt="JST source: the kanban-card and kanban-column components">
</div>

### A self-adjusting economic system

I'd also been designing a self-adjusting economic system, built mostly with Opus. Fable went at it differently: it blew holes in the theory and in how I'd used the data, then promptly fixed them.

It also linked my half-formed ideas to established theory and real-world precedents that already backed them, the giants I'd been standing near without knowing it. Whether it was games, web apps, or economics, Fable proved excellent at validating work across wildly diverse domains.

I'll post more about my projects over the coming days and weeks.

## What's the real reason for the ban?

I suspect the stated rationale for the export-control directive is not the real one.

Just before the ban, a thought crossed my mind: what if I pointed Fable at my notes, every idea I'd jotted down for software, features, games, and posts, and asked it to build them to "good enough"? Could I see all my small visions brought to life at once? I was out shopping, my mind racing with the possibility, when a message from my boss arrived with a link to Anthropic's announcement. My hopes were dashed.

So here is my speculation, and these are not mutually exclusive:

1. The US government is testing the efficacy of its levers of control over AI tools: who can build them, and who can use them.
2. It realised this rewrite was about to happen globally. Every known software vulnerability patched in the blink of an eye, and the ability of nation-states to run espionage, cyber-warfare, and surveillance sharply curtailed.
3. If Fable really could rewrite the world's software and bring everyone's ideas to life in short order, that would look a lot like the start of the AI singularity. The government saw it coming and wanted it contained on US soil, to secure technological AI superiority.

Maybe I've been AI-pilled, and I saw Fable for more than it was. Or maybe 2026 will be remembered as the year the singularity began.

In the meantime, a fun cultural artifact of the ban: [Is Fable 5 back?](https://isfable5back.com), a site that exists to answer exactly one question. (At the time of writing: no.)

</div>

<script>
(function () {
  var btns = document.querySelectorAll('.cite-btn, .person-btn');
  btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var parent = btn.closest('.cite, .person');
      var wasOpen = parent.classList.contains('open');
      document.querySelectorAll('.cite.open, .person.open').forEach(function (c) { c.classList.remove('open'); });
      if (!wasOpen) parent.classList.add('open');
    });
  });
  document.addEventListener('click', function () {
    document.querySelectorAll('.cite.open, .person.open').forEach(function (c) { c.classList.remove('open'); });
  });
})();

// render timestamps in the reader's local zone; UTC + US Eastern on hover
(function () {
  var base = { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' };
  function fmt(d, extra) { return d.toLocaleString([], Object.assign({}, base, extra)); }
  // derive a zone abbreviation (ACST, EDT, ...) from the long name's capitals,
  // since timeZoneName:'short' falls back to "GMT+9:30" for many zones
  function abbr(d, tz) {
    var opts = { timeZoneName: 'long' };
    if (tz) opts.timeZone = tz;
    var long = '';
    new Intl.DateTimeFormat('en-US', opts).formatToParts(d).forEach(function (p) {
      if (p.type === 'timeZoneName') long = p.value;
    });
    var caps = long.replace(/[^A-Z]/g, '');
    return caps.length >= 2 ? caps : long;
  }
  document.querySelectorAll('time.ts').forEach(function (t) {
    var d = new Date(t.getAttribute('datetime'));
    if (isNaN(d.getTime())) return;
    var pfx = t.hasAttribute('data-approx') ? '~' : '';
    var local = fmt(d) + ' ' + abbr(d);
    var utc = fmt(d, { timeZone: 'UTC' }) + ' UTC';
    var et = fmt(d, { timeZone: 'America/New_York' }) + ' ' + abbr(d, 'America/New_York');
    t.textContent = pfx + local;
    t.setAttribute('title', 'Your time: ' + pfx + local + '\nUTC: ' + pfx + utc + '\nUS Eastern: ' + pfx + et);
  });
})();

// inject Steam store widgets (kramdown escapes raw <iframe>, so build it here)
(function () {
  document.querySelectorAll('.steam-embed[data-steam]').forEach(function (el) {
    var f = document.createElement('iframe');
    f.src = 'https://store.steampowered.com/widget/' + el.getAttribute('data-steam') + '/';
    f.height = '190';
    f.title = 'Populous: The Beginning on Steam';
    el.appendChild(f);
  });
})();

// inject the ASL table (kramdown mangles raw tables inside paragraphs)
(function () {
  var slot = document.querySelector('.asl-table');
  if (!slot) return;
  slot.innerHTML = `<table><thead><tr><th>Level</th><th>What it means</th></tr></thead><tbody><tr><td>ASL-1</td><td>No meaningful catastrophic risk (e.g. a chess engine).</td></tr><tr><td>ASL-2</td><td>Today's typical models: early hints of dangerous capability, but no real uplift beyond a web search.</td></tr><tr><td>ASL-3</td><td>Substantially raises catastrophic-misuse risk (e.g. helping with CBRN weapons) or shows low-level autonomy; triggers hardened security and deployment safeguards.</td></tr><tr><td>ASL-4+</td><td>Not yet fully defined; reserved for bigger jumps in misuse potential or autonomy.</td></tr></tbody></table>`;
})();
</script>
