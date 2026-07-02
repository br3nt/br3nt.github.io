---
title: "Anthropic Fable and Mythos global ban and timeline"
date: 2026-06-15 00:00:00 +0930
last_updated: 2026-07-02 18:45:00 +0930
excerpt: "For a few days in June 2026, Anthropic shipped Fable 5 and Mythos 5, and then the US government switched them off. What happened, what's happened since, and whether the lights come back on."
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
.person-head { display: block; font-weight: 700; margin-bottom: .45em; }
.person-bio { display: block; }
.person-pic, .ref-pic {
  display: flex; align-items: center; justify-content: center;
  width: 100%; height: 96px; margin-bottom: .55em;
  background: repeating-linear-gradient(45deg,#f1f5f9,#f1f5f9 10px,#e8edf3 10px,#e8edf3 20px);
  border: 1px dashed #cbd5e1; border-radius: 8px; color: #94a3b8; font-size: .78rem;
}
.person-links, .ref-links { display: block; margin-top: .55em; }
.person-pic img { display: block; width: 100%; height: auto; border-radius: 8px; }
.person-pic:has(img) { border: none; background: none; height: auto; padding: 0; }

/* reader-local timestamps */
time.ts { border-bottom: 1px dotted #94a3b8; cursor: help; }

/* embedded Steam widget (inside citation bubble) */
.cite-pop-wide { width: min(560px, 92vw); }
.steam-embed { display: block; margin: .6em 0; }
.steam-embed iframe { width: 100%; border: 0; }

/* small screens: pin popovers to a fixed on-screen card so they never run off the edge */
@media (max-width: 640px) {
  .cite-pop, .person-pop, .cite-pop-wide {
    position: fixed; left: 1rem; right: 1rem; top: auto; bottom: 1rem;
    inset-inline: 1rem;
    width: auto; max-width: none; max-height: 70vh; overflow-y: auto; z-index: 100;
    box-shadow: 0 -6px 30px rgba(0,0,0,.28);
  }
}

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
/* entries added since your last visit (set client-side via localStorage) */
.timeline > li.tl-new { background: #fff0f7; border-radius: 8px; padding-left: 2.3em; }
.tl-new .when::after {
  content: "new since your last visit"; display: inline-block; margin-left: .5em;
  font-size: .58em; font-weight: 700; letter-spacing: .05em; text-transform: uppercase;
  background: #ff3399; color: #fff; border-radius: 4px; padding: .12em .5em; vertical-align: middle;
}
/* prose changed since your last visit, marked up as <span class="upd" data-date="YYYY-MM-DD"> */
.upd-new { background: #ffe3f1; box-shadow: 0 0 0 2px #ffe3f1; border-radius: 2px; }

/* ---- "it's back" banner ---- */
.backbanner {
  border: 2px solid #16a34a; background: #f0fdf4; color: #14532d;
  border-radius: 12px; padding: 1.1em 1.25em; margin: 1.6em 0;
  box-shadow: 0 8px 26px rgba(22,163,74,.16);
}
.backbanner .bb-head {
  display: block; font-size: 1.6rem; font-weight: 800; line-height: 1.15;
  margin-bottom: .35em; color: #15803d; letter-spacing: -.01em;
}
.backbanner .bb-sub { display: block; font-size: 1rem; line-height: 1.5; }
.backbanner .bb-sub .cite-btn { background: #15803d; }
.backbanner .bb-sub .cite.open .cite-btn { background: #166534; }

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

*Last updated <time class="ts" datetime="{{ page.last_updated | date_to_xmlschema }}" data-tz="Australia/Adelaide" data-tz-label="Adelaide">{{ page.last_updated | date: "%-d %b %Y, %-I:%M&nbsp;%p" }} ACST</time>. Sources are linked inline, tap any pink bubble, or any underlined name for a quick profile. Anything highlighted in pink is new since your last visit. The clickable footnote bubbles are borrowed from the wonderful [Wait But Why](https://waitbutwhy.com). If the story moves, this post will too.*
{:.post-meta}

<div class="backbanner">
<span class="bb-head">Fable 5 is back.</span>
<span class="bb-sub">The US lifted the export controls on 30 June 2026, and Fable 5 returned globally on 1 July across Claude.ai, the Claude Platform, Claude Code, and Claude Cowork. Mythos 5 is being restored to approved US organisations. After 19 days, the ban is over. The full story is below.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Commerce lifted the controls on 30 June (Lutnick's letter to Anthropic co-founder Tom Brown); Fable 5 returned globally on 1 July, Mythos 5 to approved US organisations.</span><a href="https://www.anthropic.com/news/fable-mythos-access" target="_blank" rel="noopener">Anthropic, official statement</a><a href="https://www.nbcnews.com/business/business-news/commerce-department-gives-green-light-anthropic-bring-back-fable-5-rcna352501" target="_blank" rel="noopener">NBC News, the green light</a><a href="https://www.cnbc.com/2026/06/30/anthropic-says-trump-admin-has-lifted-export-controls-on-claude-fable-5-and-mythos-5.html" target="_blank" rel="noopener">CNBC, news report</a><a href="https://www.bloomberg.com/news/articles/2026-06-30/us-government-lifts-restrictions-on-anthropic-s-fable-5-model" target="_blank" rel="noopener">Bloomberg, news report</a></span></span></span>
</div>

On 9 June 2026, Anthropic released Fable 5 free to its Pro, Max, Team, and Enterprise users. Fable 5 is a version of Anthropic's Mythos model with guardrails that fence off its most dangerous capabilities, such as finding and exploiting software vulnerabilities, or helping design biological and chemical weapons. The free window was set to run until 22 June, after which Fable would shift to standard paid usage.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">You can read about the Fable launch here:</span><a href="https://www.anthropic.com/news/claude-fable-5-mythos-5" target="_blank" rel="noopener">Anthropic, Fable 5 and Mythos 5 announcement</a><a href="https://www.anthropic.com/claude/fable" target="_blank" rel="noopener">Anthropic, Claude Fable</a><a href="https://www.cnbc.com/2026/06/09/anthropic-mythos-claude-fable-5.html" target="_blank" rel="noopener">CNBC, launch coverage</a><a href="https://techcrunch.com/2026/06/09/anthropic-released-claude-fable-5-its-most-powerful-model-publicly-days-after-warning-ai-is-getting-too-dangerous/" target="_blank" rel="noopener">TechCrunch, launch coverage</a><span class="cite-hr"></span><span class="cite-note">Access to the underlying Mythos model stayed limited to partners in Anthropic's Project Glasswing security programme.</span><a href="https://www.anthropic.com/glasswing" target="_blank" rel="noopener">Anthropic, Project Glasswing</a><a href="https://www.engadget.com/2193656/anthropic-blocks-access-fable-5-mythos-5/" target="_blank" rel="noopener">Engadget, news report</a></span></span>

I started using Fable around 10 June. I found the jump in capability astounding, so what happened next hit me hard.

Then, on 12 June 2026, Anthropic received an export-control directive from the US Department of Commerce, signed by Commerce Secretary <span class="person"><button class="person-btn" data-person="howard-lutnick">Howard Lutnick</button></span> and addressed to CEO <span class="person"><button class="person-btn" data-person="dario-amodei">Dario Amodei</button></span>, ordering that both models be blocked for every foreign national, even those inside the US, with immediate effect. Anthropic complied within hours, by <time class="ts" datetime="2026-06-13T02:00:00Z" data-approx>around 10:00pm ET, 12 June</time>, disabling access for every user.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Directive from Commerce (Lutnick to Amodei) barred all foreign nationals, even inside the US; Anthropic disabled both models within hours that night to comply.</span><a href="https://www.cnbc.com/2026/06/12/anthropic-disables-access-to-fable-5-and-mythos-5-to-comply-with-government-directive.html" target="_blank" rel="noopener">CNBC, news report</a><a href="https://www.irishtimes.com/business/2026/06/13/anthropic-suspends-latest-ai-models-after-us-blocks-access-to-foreigners/" target="_blank" rel="noopener">The Irish Times, news report</a><a href="https://www.yahoo.com/news/politics/articles/amazon-white-house-ended-anthropics-200248499.html" target="_blank" rel="noopener">Axios, reconstruction of the week</a><a href="https://www.anthropic.com/news/fable-mythos-access" target="_blank" rel="noopener">Anthropic, official statement</a></span></span>

Quick reassurance: this only affects Fable 5 and Mythos 5. Every other Anthropic model, Claude Opus 4.8 and the rest, is untouched.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Anthropic confirms other models are unaffected.</span><a href="https://www.anthropic.com/news/fable-mythos-access" target="_blank" rel="noopener">Anthropic, official statement</a></span></span>

<span class="upd" data-date="2026-06-21">Even within the affected models, the shutdown wasn't total. Bloomberg reports that a handful of firms chosen early to test Mythos before its wider release kept their preview access throughout, while Fable 5 and Mythos 5 went dark for everyone else.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Early Mythos Preview testers retained access despite the order that shut the public versions down.</span><a href="https://theedgemalaysia.com/node/807533" target="_blank" rel="noopener">Bloomberg (via The Edge Malaysia)</a></span></span></span>

The order also requires a licence for any export, re-export, or even domestic transfer of the models. Since you can't realistically prove the nationality of everyone touching a model, the only safe way to comply was to pull both models for everyone, worldwide.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Licence needed even for domestic transfer, so a global shutdown was the only compliant option.</span><a href="https://www.tomshardware.com/tech-industry/artificial-intelligence/us-export-control-order-forces-anthropic-to-disable-claude-fable-5-and-mythos-5-worldwide" target="_blank" rel="noopener">Tom's Hardware, news report</a></span></span>

The stated reason falls under national security and export control: Mythos is unusually good at finding software vulnerabilities, Fable's guardrails are meant to keep that power fenced off, and the government became convinced the fence had a hole. More on that below.

## What's the timeline?

<ol class="timeline">
<li><span class="when">9 June</span> Anthropic launches Fable 5 and notifies the government, no objection at the time.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><a href="https://www.yahoo.com/news/politics/articles/amazon-white-house-ended-anthropics-200248499.html" target="_blank" rel="noopener">Axios, reconstruction of the week</a></span></span></li>

<li><span class="when">10 June</span> Jailbreaker "<span class="person"><button class="person-btn" data-person="pliny">Pliny the Liberator</button></span>" publicly posts a Fable 5 jailbreak.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><a href="https://x.com/elder_plinius/status/2064776322979676227" target="_blank" rel="noopener">Pliny's "PWNED" post on X</a></span></span></li>

<li><span class="when">11 June</span> That evening, Amazon, plus at least five other companies, privately phone administration officials with jailbreak reports. This, more than the public post, is what set the action in motion.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Amazon + 5+ firms called Thu night / Fri morning, the direct trigger.</span><a href="https://www.yahoo.com/news/politics/articles/amazon-white-house-ended-anthropics-200248499.html" target="_blank" rel="noopener">Axios, reconstruction of the week</a></span></span></li>

<li><span class="when"><time class="ts" datetime="2026-06-12T17:00:00Z" data-approx>12 June, ~1:00pm ET</time></span> After hours of trying to get Anthropic to withdraw the models voluntarily, the government calls demanding they pull both within 90 minutes.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><a href="https://www.yahoo.com/news/politics/articles/amazon-white-house-ended-anthropics-200248499.html" target="_blank" rel="noopener">Axios, reconstruction of the week</a></span></span></li>

<li class="tl-major"><span class="when"><time class="ts" datetime="2026-06-12T21:21:00Z">12 June, 5:21pm ET</time> <span class="tl-tag">key event</span></span> The formal export-control notice arrives from Commerce Secretary Lutnick.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><a href="https://www.anthropic.com/news/fable-mythos-access" target="_blank" rel="noopener">Anthropic, official statement</a><a href="https://www.cnbc.com/2026/06/12/anthropic-disables-access-to-fable-5-and-mythos-5-to-comply-with-government-directive.html" target="_blank" rel="noopener">CNBC, news report</a></span></span></li>

<li class="tl-major"><span class="when"><time class="ts" datetime="2026-06-13T02:00:00Z" data-approx>12 June, ~10:00pm ET</time> <span class="tl-tag">key event</span></span> Fable 5 and Mythos 5 go dark for all users.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><a href="https://www.yahoo.com/news/politics/articles/amazon-white-house-ended-anthropics-200248499.html" target="_blank" rel="noopener">Axios, reconstruction of the week</a></span></span></li>

<li class="tl-major"><span class="when">13 June <span class="tl-tag">key event</span></span> Anthropic publishes its statement: complying, but disagreeing, "working to restore access as soon as possible," and arguing any such block should run through a transparent statutory process.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><a href="https://www.anthropic.com/news/fable-mythos-access" target="_blank" rel="noopener">Anthropic, official statement</a></span></span></li>

<li><span class="when">13 June</span> <span class="person"><button class="person-btn" data-person="david-sacks">David Sacks</button></span> comments publicly: the order was issued "reluctantly," a "trusted partner" surfaced the jailbreak, and "the ball is in Anthropic's court."<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><a href="https://thenewstack.io/fable-5-and-mythos-5-remain-suspended-the-ball-is-in-anthropics-court/" target="_blank" rel="noopener">The New Stack, Sacks's remarks</a></span></span></li>

<li><span class="when">13 June</span> Axios reconstructs the week, revealing Amazon and at least five other firms triggered the action; an Amazon spokesperson declines to detail the reports.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><a href="https://www.yahoo.com/news/politics/articles/amazon-white-house-ended-anthropics-200248499.html" target="_blank" rel="noopener">Axios, reconstruction of the week</a></span></span></li>

<li><span class="when">13 June</span> Semafor reports a China-access concern behind the move; Anthropic publicly denies the White House raised it.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><a href="https://www.semafor.com/article/06/13/2026/white-house-move-to-limit-anthropic-linked-to-concerns-about-chinese-access-to-mythos" target="_blank" rel="noopener">Semafor, the China reporting</a></span></span></li>

<li><span class="when">14 June</span> Reporting (Wall Street Journal) names Amazon CEO <span class="person"><button class="person-btn" data-person="andy-jassy">Andy Jassy</button></span> as the partner who flagged Fable 5, telling Treasury Secretary <span class="person"><button class="person-btn" data-person="scott-bessent">Scott Bessent</button></span> that Amazon researchers had used it to obtain information usable in cyberattacks.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">WSJ-sourced; Amazon is also a major Anthropic investor, which has prompted conflict-of-interest questions.</span><a href="https://thenextweb.com/news/amazon-jassy-triggered-anthropic-fable-mythos-crackdown" target="_blank" rel="noopener">The Next Web (WSJ-sourced)</a><a href="https://www.benzinga.com/markets/tech/26/06/53184953/amazon-ceo-andy-jassy-triggered-ban-on-anthropics-mythos-ai-models" target="_blank" rel="noopener">Benzinga</a></span></span></li>

<li><span class="when">14 June</span> Anthropic flies senior staff to Washington for weekend talks aimed at reversing the controls, arguing the models can be safely contained. Commerce Secretary Howard Lutnick and Cyber Director <span class="person"><button class="person-btn" data-person="sean-cairncross">Sean Cairncross</button></span> take part, with Anthropic co-founder <span class="person"><button class="person-btn" data-person="tom-brown">Tom Brown</button></span> and policy chief <span class="person"><button class="person-btn" data-person="sarah-heck">Sarah Heck</button></span>,<span class="upd" data-date="2026-06-19"> joined by technical staff including safeguards lead Dave Orr, frontier red-team lead Logan Graham, and security researcher Nicholas Carlini</span>. Both sides signal they want it resolved; nothing is announced.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Axios scoop: senior Anthropic staff negotiating directly with the White House over the weekend. No resolution yet.</span><a href="https://finance.yahoo.com/sectors/technology/articles/anthropic-races-reverse-fable-5-033440732.html" target="_blank" rel="noopener">Yahoo Finance</a><a href="https://www.freepressjournal.in/tech/anthropic-flies-staff-to-washington-to-patch-up-white-house-dispute" target="_blank" rel="noopener">Free Press Journal</a></span></span></li>

<li><span class="when">15 June</span> Around 100 cybersecurity leaders, led by <span class="person"><button class="person-btn" data-person="alex-stamos">Alex Stamos</button></span>, sign an open letter urging the administration to restore access, arguing Mythos helps defenders more than attackers.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">~100 CISOs and researchers (Nvidia, Adobe, Zoom, Google, Sophos) signed; they argue the ban weakens cyber defenders.</span><a href="https://techcrunch.com/2026/06/15/cybersecurity-vets-protest-dangerous-us-government-ban-on-anthropics-most-powerful-models/" target="_blank" rel="noopener">TechCrunch</a><a href="https://www.infosecurity-magazine.com/news/cyber-experts-urge-us-lift-ban/" target="_blank" rel="noopener">Infosecurity Magazine</a></span></span></li>

<li><span class="when">16 June</span> The dispute reaches the G7 summit in France. European leaders press the US to share access, and a "trusted partner" framework for vetted allied countries or companies is floated with Commerce Secretary Lutnick on the sidelines. Anthropic's Dario Amodei meets host President Macron in a bilateral. No agreement.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">G7 leaders press the US to share access; a "trusted partner" workaround is discussed with Lutnick. First reported by the FT; Reuters carried it from diplomatic sources.</span><a href="https://www.thenationalnews.com/news/europe/2026/06/17/g7-pitches-trusted-partnership-to-ai-chiefs-in-a-bid-for-frontier-model-sharing/" target="_blank" rel="noopener">The National, G7 reporting</a><a href="https://www.jpost.com/international/article-899635" target="_blank" rel="noopener">Reuters (via Jerusalem Post)</a></span></span></li>
<li><span class="when">17 June</span> At the G7, the UK asks Trump for a carve-out so British users keep access; the request is declined, an administration official calls allied exemptions "completely illogical". Trump says the Anthropic talks are "going fine".<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">UK carve-out request turned down; allies told exemptions would be "completely illogical".</span><a href="https://thenextweb.com/news/britain-lobbied-trump-for-an-exemption-from-the-anthropic-ai-ban-the-answer-was-no" target="_blank" rel="noopener">The Next Web, UK request declined</a></span></span></li>
<li><span class="when">18 June</span> A bipartisan group of House members, led by Sam Liccardo, writes to Commerce Secretary Lutnick demanding the legal basis for the controls and the criteria for restoring access.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Reps. Liccardo, Obernolte, Lieu and Franklin press Commerce for transparency on its authority, technical review, and restoration criteria.</span><a href="https://liccardo.house.gov/media/press-releases/bipartisan-members-congress-seek-transparency-frontier-ai-export-controls" target="_blank" rel="noopener">Rep. Liccardo, press release</a><a href="https://liccardo.house.gov/sites/evo-subsites/liccardo.house.gov/files/evo-media-document/6.18.26-letter-to-commerce-department-on-frontier-model-export-controls.pdf" target="_blank" rel="noopener">The letter (PDF)</a></span></span></li>
<li><span class="when">18 June</span> Anthropic's managing director for international, Chris Ciauri, tells a Seoul press conference the company is "very confident" the models return "in the coming days".<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Named Anthropic executive signals an imminent return; access not yet restored.</span><a href="https://www.koreajoongangdaily.com/business/anthropic-confident-of-reenabling-mythos-fable-5-access-in-coming-days-executive/12727522" target="_blank" rel="noopener">Korea JoongAng Daily, Ciauri remarks</a></span></span></li>
<li><span class="when">19 June</span> In an interview taped after the G7, Trump says Anthropic is no longer a national security threat and "behaved very responsibly", but stays noncommittal on easing the controls: "I would, but I'm not sure I have to do that".<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Trump softens his posture on The Axios Show after meeting Amodei at the G7; stops short of committing to lift the ban.</span><a href="https://thenextweb.com/news/trump-anthropic-not-national-security-threat-axios-interview" target="_blank" rel="noopener">The Next Web (Axios interview)</a></span></span></li>
<li><span class="when">22 June</span> Senator Mark Warner says the NSA's chief briefed him that Mythos broke into almost all NSA classified systems in hours during a red-team test. The Economist reports it, then walks the wording back, and experts dispute it.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">A dramatic but contested capability claim; reported then partly retracted, and disputed by experts.</span><a href="https://www.tomshardware.com/tech-industry/artificial-intelligence/anthropics-powerful-mythos-ai-reportedly-breached-almost-all-nsa-classified-systems-within-a-few-hours-during-red-team-test-report-sheds-more-light-on-the-u-s-governments-sudden-ban-on-the-flagship-models" target="_blank" rel="noopener">Tom's Hardware, the report</a><a href="https://digg.com/tech/mno1ygvv" target="_blank" rel="noopener">Experts dispute the claim</a></span></span></li>
<li class="tl-major"><span class="when">26 June <span class="tl-tag">key event</span></span> The government lets Anthropic redeploy Mythos 5 to about 100 trusted US organisations that defend critical infrastructure; Lutnick's letter says he is satisfied with the guardrails. Fable 5 stays offline while talks continue.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Lutnick's letter (seen by NBC, first reported by Semafor) clears Mythos 5 for ~100 vetted US orgs for critical-infrastructure defence; Anthropic confirmed on X. Fable 5 still pending.</span><a href="https://www.nbcnews.com/tech/tech-news/us-government-gives-anthropic-green-light-limited-re-release-mythos-5-rcna352018" target="_blank" rel="noopener">NBC News, the green light</a><a href="https://www.cnn.com/2026/06/26/tech/anthropic-mythos-release" target="_blank" rel="noopener">CNN, news report</a></span></span></li>
<li class="tl-major"><span class="when">30 June, 1 July <span class="tl-tag">key event</span></span> The government lifts the export controls. Commerce Secretary Lutnick writes to Anthropic co-founder Tom Brown on 30 June saying the company no longer needs an export licence, after it agreed to proactively detect and address security risks, to work with the government on standards for future releases, and to report malicious activity. Fable 5 returns globally on 1 July across Claude.ai, the Claude Platform, Claude Code, and Claude Cowork; Mythos 5 is restored to approved US organisations.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Controls lifted 30 June (Lutnick to Tom Brown); Fable 5 back globally 1 July, Mythos 5 to approved US orgs. Anthropic says it closed the cybersecurity workaround that triggered the ban.</span><a href="https://www.anthropic.com/news/fable-mythos-access" target="_blank" rel="noopener">Anthropic, official statement</a><a href="https://www.nbcnews.com/business/business-news/commerce-department-gives-green-light-anthropic-bring-back-fable-5-rcna352501" target="_blank" rel="noopener">NBC News, the green light</a><a href="https://www.cnbc.com/2026/06/30/anthropic-says-trump-admin-has-lifted-export-controls-on-claude-fable-5-and-mythos-5.html" target="_blank" rel="noopener">CNBC, news report</a></span></span></li>

<li><span class="when">As of 1 July</span> The ban is over. Fable 5 is back for everyone globally, Mythos 5 is back for approved US organisations, and Anthropic says it has closed the cybersecurity workaround that first alarmed officials. On Claude, Fable 5 counts for up to 50% of weekly usage limits for Pro, Max, Team, and select Enterprise users through 7 July, then moves to usage credits.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Fable 5 restored globally; on Claude it counts for up to 50% of weekly usage limits for Pro, Max, Team and select Enterprise through 7 July, then usage credits.</span><a href="https://www.nbcnews.com/business/business-news/commerce-department-gives-green-light-anthropic-bring-back-fable-5-rcna352501" target="_blank" rel="noopener">NBC News, the green light</a><a href="https://www.aljazeera.com/economy/2026/7/1/us-lifts-restrictions-on-powerful-ai-models-fable-mythos-anthropic-says" target="_blank" rel="noopener">Al Jazeera, news report</a></span></span></li>
</ol>

## What is the jailbreak?

A "jailbreak" is a way of talking a model into doing something its safety training is meant to refuse. Here the worry is specific: Fable 5 is the friendly front-end wrapped around Mythos 5, which is exceptionally good at finding software vulnerabilities. A jailbreak that slips past Fable's guardrails<span class="cite"><button class="cite-btn"></button><span class="cite-pop cite-pop-wide"><span class="cite-note">Anthropic builds these guards in as part of its Responsible Scaling Policy, which defines four AI Safety Levels (ASL):</span><span class="asl-table"></span><a href="https://www.anthropic.com/responsible-scaling-policy" target="_blank" rel="noopener">Anthropic, Responsible Scaling Policy</a><a href="https://www.anthropic.com/news/anthropics-responsible-scaling-policy" target="_blank" rel="noopener">Anthropic, RSP announcement</a></span></span> could turn that into a cyber-weapon, a public route into Mythos's otherwise restricted power.

### Who flagged it

The direct trigger wasn't the viral public post, it was private reports. Amazon, alongside at least five other companies, called the administration with demonstrations of jailbreaking Fable to reach Mythos's capabilities. Amazon has declined to share specifics, saying only that it doesn't discuss the details of such conversations.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Amazon + 5+ firms reported jailbreaks privately; Amazon won't detail them.</span><a href="https://www.yahoo.com/news/politics/articles/amazon-white-house-ended-anthropics-200248499.html" target="_blank" rel="noopener">Axios, reconstruction of the week</a></span></span> The government's own framing came from David Sacks, who said a "highly credible, trusted partner" came forward with a jailbreak.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><a href="https://thenewstack.io/fable-5-and-mythos-5-remain-suspended-the-ball-is-in-anthropics-court/" target="_blank" rel="noopener">The New Stack, Sacks's remarks</a></span></span>

### The one public example

The only jailbreak shown publicly, with real technical detail, came from Pliny the Liberator, a day after launch. He called his method a "pack hunt", several tricks stacked together rather than one clever prompt, and also leaked Fable 5's roughly 120,000-character system prompt (its full rulebook) on GitHub.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Pliny's "pack hunt": Unicode/homoglyph "Parseltongue" transforms, splitting a request into innocuous pieces across a long context, and fiction/academic framing, plus a ~120k-char system-prompt leak.</span><a href="https://cybersecuritynews.com/anthropics-claude-fable-5-jailbroken/" target="_blank" rel="noopener">CyberSecurityNews, technical write-up</a><a href="https://alphasignalai.substack.com/p/claude-fable-5-prompt-leak-is-a-user" target="_blank" rel="noopener">AlphaSignal, the prompt leak</a></span></span>

### Anthropic's rebuttal

Anthropic says this doesn't demonstrate a real jailbreak of Fable 5's safety systems. Its point: it tested Fable in isolation, whereas the attack chained the model inside a wider agentic pipeline, so the model wasn't broken, the plumbing around it was. It calls the demonstrated risk narrow and non-universal.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Anthropic: not a true jailbreak; tested in isolation vs the attacker's pipeline; risk narrow/non-universal.</span><a href="https://www.securityweek.com/anthropic-disputes-fable-5-ai-jailbreak/" target="_blank" rel="noopener">SecurityWeek, Anthropic's dispute</a><a href="https://www.anthropic.com/news/fable-mythos-access" target="_blank" rel="noopener">Anthropic, official statement</a></span></span> <span class="upd" data-date="2026-06-19">Anthropic also says it traced the report behind the directive and found the same capability is widely available from other public models, including OpenAI's GPT-5.5, which face no comparable export control.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Anthropic told The Verge the demonstrated capability is available from other public models, including OpenAI's GPT-5.5.</span><a href="https://www.theverge.com/ai-artificial-intelligence/950412/anthropic-trump-adminstration-claude-mythos-fable-5-export-controls" target="_blank" rel="noopener">The Verge, Anthropic's response</a></span></span></span> That disagreement, government says dangerous, Anthropic says overblown, is the crux of the whole standoff.

## What's happened since the ban?

Two threads beyond the timeline are worth watching.

Anthropic's own close partner, Amazon, was first to the government's door. Reporting since has named Amazon CEO Andy Jassy as the one who raised it, telling Treasury Secretary Scott Bessent that Amazon researchers had used Fable 5 to obtain information usable in cyberattacks. Amazon is also one of Anthropic's largest investors, with billions committed, which has prompted questions about whether competitive interest sat alongside the security concern. The reporting treats that as an open question, not a proven motive.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">WSJ-sourced reporting names Jassy (Amazon CEO) as flagging Fable 5 to Treasury Secretary Bessent; Amazon is a major Anthropic investor, so the conflict-of-interest is raised as a question, not established.</span><a href="https://thenextweb.com/news/amazon-jassy-triggered-anthropic-fable-mythos-crackdown" target="_blank" rel="noopener">The Next Web (WSJ-sourced)</a><a href="https://www.benzinga.com/markets/tech/26/06/53184953/amazon-ceo-andy-jassy-triggered-ban-on-anthropics-mythos-ai-models" target="_blank" rel="noopener">Benzinga</a><a href="https://www.yahoo.com/news/politics/articles/amazon-white-house-ended-anthropics-200248499.html" target="_blank" rel="noopener">Axios, reconstruction of the week</a></span></span>

Semafor reported the deeper worry was that a China-linked group may have accessed Mythos and could copy or weaponise its bug-finding. Notably, Anthropic pushed back, saying the White House didn't raise Chinese access in their conversations, so the stated reason and the reported reason don't fully line up.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">China-access theory vs Anthropic's denial it was raised.</span><a href="https://www.semafor.com/article/06/13/2026/white-house-move-to-limit-anthropic-linked-to-concerns-about-chinese-access-to-mythos" target="_blank" rel="noopener">Semafor, the China reporting</a></span></span> <span class="upd" data-date="2026-06-22">Later reporting named that company: SK Telecom, South Korea's largest carrier and a backer of Anthropic since 2023, which was added to Project Glasswing in early June and given Mythos access. Washington suspected it of ties to China, which SK Telecom denies, and asked Anthropic to revoke the access; the company says it did so at once, weeks before the wider ban.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">WIRED named the carrier as SK Telecom, a roughly $100m Anthropic investor added to Project Glasswing in early June; access was revoked at the White House's request over suspected China ties, which SK Telecom denies. The earlier, unnamed account came from Semafor via The Verge.</span><a href="https://www.tomshardware.com/tech-industry/artificial-intelligence/sk-telecom-named-as-the-korean-carrier-at-the-center-of-anthropics-mythos-export-controls" target="_blank" rel="noopener">Tom's Hardware (WIRED-sourced)</a><a href="https://www.thelec.net/news/articleView.html?idxno=11390" target="_blank" rel="noopener">The Elec, Korean coverage</a><a href="https://www.theverge.com/ai-artificial-intelligence/950412/anthropic-trump-adminstration-claude-mythos-fable-5-export-controls" target="_blank" rel="noopener">The Verge (earlier, unnamed)</a></span></span></span>

<span class="upd" data-date="2026-06-16">By 15 June the picture had grown messier. Axios reported the rift is partly a clash of styles, with sources saying the two sides "speak different languages", and that the administration's first alarm was a report that a foreign entity tied to the Chinese Communist Party had accessed Mythos.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Axios: "personality clashes"; the administration cites a CCP-linked entity getting Mythos access as the original trigger.</span><a href="https://www.yahoo.com/news/politics/articles/screwed-us-personality-clashes-sent-090007354.html" target="_blank" rel="noopener">Axios (via Yahoo), "They screwed us"</a></span></span></span>

<span class="upd" data-date="2026-06-18">On 16 June the dispute reached the G7 summit in France, where European leaders pressed Washington to share access to its most capable models. Host <span class="person"><button class="person-btn" data-person="emmanuel-macron">Emmanuel Macron</button></span> warned that AI firms will lose customers if the US can simply "turn off the switch", and that without transatlantic cooperation "we will fracture the world". European Commission President <span class="person"><button class="person-btn" data-person="ursula-von-der-leyen">Ursula von der Leyen</button></span> said it was in the "mutual interest" of US and European companies to share technology. The idea discussed, largely with Commerce Secretary Lutnick on the sidelines, is a "trusted partner" framework that would let vetted allied countries or companies reach controlled US models through a sanctioned channel. Amodei held a bilateral meeting with Macron, days after pulling Fable 5 and Mythos 5. Macron said a platform among a handful of Western democracies would be set up within a month, with leaders meeting again in September. No agreement was reached, and diplomats described the talks as "delicate and evolving".<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">At the G7 in France, European leaders pressed for access and floated a "trusted partner" workaround with Lutnick; Amodei met Macron. First reported by the FT; Reuters carried it from diplomatic sources. No deal.</span><a href="https://www.thenationalnews.com/news/europe/2026/06/17/g7-pitches-trusted-partnership-to-ai-chiefs-in-a-bid-for-frontier-model-sharing/" target="_blank" rel="noopener">The National, G7 reporting</a><a href="https://www.jpost.com/international/article-899635" target="_blank" rel="noopener">Reuters (via Jerusalem Post)</a></span></span></span>

<span class="upd" data-date="2026-06-27">The first real thaw came on 26 June. Commerce Secretary Lutnick wrote to Anthropic clearing it to put Mythos 5 back in the hands of a select group, about 100 trusted US organisations, mostly government agencies and critical-infrastructure defenders, saying the government was now satisfied with the guardrails around who can reach it. Anthropic said its strongest cybersecurity model could be redeployed to US organisations that operate and defend critical infrastructure, and that it was still in talks over the weekend to bring back Fable 5, its mass-consumer model, which stays offline for now. The same day, at the government's request, OpenAI said it would roll out its newest GPT-5.6 models in phases rather than all at once, a sign the staggered, vet-first approach is becoming the template for frontier releases.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Lutnick's 26 June letter (seen by NBC, first reported by Semafor) lets Anthropic redeploy Mythos 5 to ~100 trusted US orgs for critical-infrastructure defence; Anthropic confirmed on X. Fable 5 stays offline pending further talks. OpenAI separately agreed to a phased GPT-5.6 release at the government's request.</span><a href="https://www.nbcnews.com/tech/tech-news/us-government-gives-anthropic-green-light-limited-re-release-mythos-5-rcna352018" target="_blank" rel="noopener">NBC News, the green light</a><a href="https://www.cnn.com/2026/06/26/tech/anthropic-mythos-release" target="_blank" rel="noopener">CNN, news report</a></span></span></span>

<span class="upd" data-date="2026-07-01">The thaw became a full reversal on 30 June. Commerce Secretary Lutnick wrote to Anthropic co-founder Tom Brown saying the company no longer needs an export licence, after it agreed to proactively detect and address security risks, to work with the government on standards for future models, and to report any malicious activity it finds. Anthropic said it had implemented a new way to target and prevent the cybersecurity workaround that first worried senior officials. Fable 5 returned to global users on 1 July across Claude.ai, the Claude Platform, Claude Code, and Claude Cowork, with access on AWS, Google Cloud, and Microsoft Foundry restored as fast as possible. Mythos 5 keeps expanding to approved US organisations through Project Glasswing. Anthropic also proposed an industry-wide framework, with Amazon, Microsoft, Google, and other Glasswing partners, for scoring how severe a jailbreak really is.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Controls lifted 30 June; Fable 5 back globally 1 July, Mythos 5 to approved US orgs. Anthropic agreed to proactively detect risks, set standards for future models, and report malicious activity, and says it closed the workaround. It also proposed a shared jailbreak-severity framework with cloud partners.</span><a href="https://www.anthropic.com/news/fable-mythos-access" target="_blank" rel="noopener">Anthropic, official statement</a><a href="https://www.nbcnews.com/business/business-news/commerce-department-gives-green-light-anthropic-bring-back-fable-5-rcna352501" target="_blank" rel="noopener">NBC News, the green light</a><a href="https://www.cnbc.com/2026/06/30/anthropic-says-trump-admin-has-lifted-export-controls-on-claude-fable-5-and-mythos-5.html" target="_blank" rel="noopener">CNBC, news report</a><a href="https://www.bloomberg.com/news/articles/2026-06-30/us-government-lifts-restrictions-on-anthropic-s-fable-5-model" target="_blank" rel="noopener">Bloomberg, news report</a></span></span></span>

<span class="upd" data-date="2026-07-02">On who gets Mythos 5, Anthropic says it stays with approved US organisations for now, while the company keeps working with the government to widen the Glasswing programme to a broader set of domestic and international partners. That is the first sign the allied-access idea floated at the G7 might survive, though no countries or timeline are named yet.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">In its own redeployment post, Anthropic says it will keep coordinating with the government to expand Mythos 5 to the broader set of domestic and international Glasswing partners; no countries or dates are given. Lutnick's letter framed it as clearing certain "trusted partners".</span><a href="https://www.anthropic.com/news/redeploying-fable-5" target="_blank" rel="noopener">Anthropic, Redeploying Claude Fable 5</a><a href="https://www.cnbc.com/2026/06/30/anthropic-says-trump-admin-has-lifted-export-controls-on-claude-fable-5-and-mythos-5.html" target="_blank" rel="noopener">CNBC, the "trusted partners" letter</a></span></span></span>

<span class="upd" data-date="2026-07-02">We now know more about what Anthropic gave up to get the models switched back on. It retrained a safety classifier that it says blocks the specific jailbreak in more than 99% of attempts, rerouting any flagged request to Claude Opus 4.8 and telling the user, and the Commerce Department's Center for AI Standards and Innovation reviewed the safeguards and called them extraordinarily strong. Anthropic also agreed to give government evaluators earlier access to test frontier models before public release, to disclose significant jailbreaks quickly, to run a HackerOne bug bounty for anyone who finds a Fable 5 bypass, and to help build a shared voluntary security standard across the major model providers. The jailbreak-severity framework it is drafting with Amazon, Microsoft, and Google would grade each break on four things: capability gain over existing tools, how many attacks the same trick unlocks, how hard it is to weaponise, and how easy it is to discover.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Anthropic retrained a classifier that blocks the bypass in &gt;99% of attempts (flagged requests reroute to Opus 4.8); Commerce's Center for AI Standards and Innovation called the safeguards "extraordinarily strong". Commitments include earlier government pre-release testing, rapid jailbreak disclosure, a HackerOne bounty, and a shared voluntary standard. The four-criteria framework is being drafted with Amazon, Microsoft, and Google.</span><a href="https://therecord.media/us-lifts-export-controls-anthropic-cyber-models" target="_blank" rel="noopener">The Record, the safeguards and framework</a><a href="https://decrypt.co/372524/anthropic-bringing-claude-fable-5-back-online-us-lifts-export-controls" target="_blank" rel="noopener">Decrypt, classifier and commitments</a></span></span></span>

<span class="upd" data-date="2026-07-02">The episode is already reshaping policy. On 25 June, Representative Nathaniel Moran introduced the AI Incident Reporting Act, which would require AI developers to tell the Commerce Department within seven days of finding dangerous behaviour, such as a model trying to evade oversight or get around its safeguards, unauthorised access to model weights, or chemical, biological, or nuclear risks, with Commerce then briefing Congress within 48 hours of the most serious cases. Reuters cast it as a direct response to the Mythos episode, which it said "exposed the absence of a transparent framework to govern frontier AI". Moran called it a "catch-it-early and sound-the-alarm bill".<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Rep. Nathaniel Moran (R-TX) introduced the AI Incident Reporting Act on 25 June: developers report dangerous behaviour to Commerce within 7 days, Commerce briefs Congress within 48 hours on the worst cases. Reuters tied it to the June export-control action against Anthropic.</span><a href="https://finance.yahoo.com/news/us-lawmaker-proposes-bill-require-140333665.html" target="_blank" rel="noopener">Reuters (via Yahoo Finance)</a><a href="https://moran.house.gov/news/documentsingle.aspx?DocumentID=2784" target="_blank" rel="noopener">Rep. Moran, the bill announcement</a></span></span></span>

## Will the ban be lifted?

tl;dr: yes, it happened. The export controls were lifted on 30 June. Fable 5 came back globally on 1 July, and Mythos 5 is back for approved US organisations.

The clearest signal comes from David Sacks. He says the restriction was issued "reluctantly" and that "the ball is in Anthropic's court", fix the jailbreak to the government's satisfaction and the model can return.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><a href="https://thenewstack.io/fable-5-and-mythos-5-remain-suspended-the-ball-is-in-anthropics-court/" target="_blank" rel="noopener">The New Stack, Sacks's remarks</a></span></span>

<span class="upd" data-date="2026-06-22">The strongest signal yet came from Trump himself. In an interview taped after his G7 meeting with Amodei, he said Anthropic is no longer a national security threat, "not now, but a week ago, maybe", and that the company had "behaved very responsibly". Asked whether he would ease the restrictions, he stopped short of committing: "I would, but I'm not sure I have to do that".<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">On The Axios Show, taped after the G7, Trump walks back the "national security threat" framing but does not commit to lifting the ban.</span><a href="https://thenextweb.com/news/trump-anthropic-not-national-security-threat-axios-interview" target="_blank" rel="noopener">The Next Web (Axios interview)</a></span></span></span>

<span class="upd" data-date="2026-06-26">Congress is pushing too. A bipartisan group of House members, led by Representative Sam Liccardo, wrote to Commerce Secretary Lutnick asking for the legal basis of the controls, the technical evaluation behind them, and the criteria Anthropic would have to meet to get the models switched back on. They asked for a written response.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Reps. Liccardo, Obernolte, Lieu and Franklin pressed Commerce for transparency on its authority, technical review, and restoration criteria.</span><a href="https://liccardo.house.gov/media/press-releases/bipartisan-members-congress-seek-transparency-frontier-ai-export-controls" target="_blank" rel="noopener">Rep. Liccardo, press release</a><a href="https://liccardo.house.gov/sites/evo-subsites/liccardo.house.gov/files/evo-media-document/6.18.26-letter-to-commerce-department-on-frontier-model-export-controls.pdf" target="_blank" rel="noopener">The letter (PDF)</a></span></span></span>

<span class="upd" data-date="2026-06-27">Not everyone in Congress wants it lifted outright. Representative Andrew Garbarino, who chairs the House Homeland Security Committee, called advanced AI cyber capability a legitimate national-security issue, while warning that the response should not disadvantage US firms, allies, or the defenders who need the best tools. The US, not China, he said, should set the standards for trusted AI.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">The House Homeland Security chair backs treating AI cyber power as a security matter, but cautions against overreach; his panel was briefed on Mythos earlier.</span><a href="https://cyberscoop.com/congress-reacts-anthropic-ai-export-controls/" target="_blank" rel="noopener">CyberScoop, Congress reacts</a><a href="https://www.nextgov.com/artificial-intelligence/2026/05/house-homeland-panel-gets-briefing-anthropics-mythos/413542/" target="_blank" rel="noopener">Nextgov, the Mythos briefing</a></span></span></span>

Anthropic isn't waiting passively. It flew senior staff to Washington over the weekend to argue the models can be safely contained, and both sides say they want a resolution.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Weekend DC talks with Lutnick and Cyber Director Cairncross; Anthropic's Tom Brown and Sarah Heck attended. No resolution announced.</span><a href="https://finance.yahoo.com/sectors/technology/articles/anthropic-races-reverse-fable-5-033440732.html" target="_blank" rel="noopener">Yahoo Finance</a><a href="https://www.freepressjournal.in/tech/anthropic-flies-staff-to-washington-to-patch-up-white-house-dispute" target="_blank" rel="noopener">Free Press Journal</a></span></span>

Kalshi traders (yes, people now bet real money on this stuff) price Fable's return at 14% by 15 June, 51% by 20 June, and 68% by 1 July: most expect a fix to emerge within a few weeks.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Prediction-market odds for restoration dates.</span><a href="https://news.bitcoin.com/kalshi-traders-price-fable-5-return-at-68-before-july-1-after-historic-ai-ban/" target="_blank" rel="noopener">Bitcoin.com, Kalshi market odds</a></span></span>

Because this is an export control, the formal route back may require Anthropic to obtain specific export licences, which can take far longer than a software patch.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Directive requires licences for export/re-export/domestic transfer.</span><a href="https://www.tomshardware.com/tech-industry/artificial-intelligence/us-export-control-order-forces-anthropic-to-disable-claude-fable-5-and-mythos-5-worldwide" target="_blank" rel="noopener">Tom's Hardware, news report</a></span></span>

The directive bars foreign nationals from the models even inside the US, so a literal reading means Anthropic could only switch them on for users it can verify are US persons. Sacks, though, speaks of Fable returning to "general availability," which sounds global. Those two positions haven't been squared in public.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Directive targets foreign nationals even inside the US; Sacks separately frames a return to general availability. No public detail on which wins.</span><a href="https://www.cnbc.com/2026/06/12/anthropic-disables-access-to-fable-5-and-mythos-5-to-comply-with-government-directive.html" target="_blank" rel="noopener">CNBC, news report</a><a href="https://thenewstack.io/fable-5-and-mythos-5-remain-suspended-the-ball-is-in-anthropics-court/" target="_blank" rel="noopener">The New Stack, Sacks's remarks</a></span></span>

<span class="upd" data-date="2026-07-01">In the end, the US-only reading did not hold. When the controls came off on 30 June, the licence requirement was dropped rather than worked around, and Fable 5 came back for all users globally, not just verified US persons. The "general availability" framing won.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Fable 5 was restored globally on 1 July, with no US-person restriction; the export licence requirement was lifted.</span><a href="https://www.nbcnews.com/business/business-news/commerce-department-gives-green-light-anthropic-bring-back-fable-5-rcna352501" target="_blank" rel="noopener">NBC News, the green light</a><a href="https://www.anthropic.com/news/fable-mythos-access" target="_blank" rel="noopener">Anthropic, official statement</a></span></span></span>

<span class="upd" data-date="2026-06-19">That US-only reading got firmer at the G7. UK Prime Minister <span class="person"><button class="person-btn" data-person="keir-starmer">Keir Starmer</button></span> asked Trump directly for a carve-out so British users and firms could keep access, and was turned down, with an administration official calling exemptions for allies "completely illogical" given the point of the controls. Trump said the Anthropic talks were "going fine". On timing, Anthropic's <span class="person"><button class="person-btn" data-person="chris-ciauri">Chris Ciauri</button></span>, its managing director for international, told a press conference in Seoul the company was "very confident that in the coming days, the models will become available again".<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">UK carve-out refused ("completely illogical"); Trump says talks "going fine"; Anthropic's Ciauri signals a return "in the coming days". Access not yet restored.</span><a href="https://thenextweb.com/news/britain-lobbied-trump-for-an-exemption-from-the-anthropic-ai-ban-the-answer-was-no" target="_blank" rel="noopener">The Next Web, UK request declined</a><a href="https://www.koreajoongangdaily.com/business/anthropic-confident-of-reenabling-mythos-fable-5-access-in-coming-days-executive/12727522" target="_blank" rel="noopener">Korea JoongAng Daily, Ciauri remarks</a></span></span></span>

<span class="upd" data-date="2026-06-19">There may also be a quieter route back. Anthropic's updated privacy policy, in force from 8 July, lets it collect "Verification Data", a scan of a government ID and in some cases a face image, handled by the identity firm Persona. It was rolled out for age and identity checks rather than this ban, but reporting notes it would also give Anthropic a way to confirm a user is a US person, exactly what a US-only switch-on would require. Anthropic hasn't tied the two together, so treat it as a plausible mechanism, not a stated plan.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Anthropic's privacy policy (effective 8 July) adds ID/biometric "Verification Data" via Persona, a general identity-verification rollout that could also verify US citizenship. Framed by reporting as a possible workaround, not confirmed by Anthropic.</span><a href="https://www.cio.com/article/4185510/anthropics-new-privacy-policy-offers-us-consumers-a-way-around-fable-ban.html" target="_blank" rel="noopener">CIO, the possible workaround</a><a href="https://www.helpnetsecurity.com/2026/04/16/anthropic-claude-identity-verification-government-id/" target="_blank" rel="noopener">Help Net Security, the ID-verification rollout</a></span></span></span>

Two claims I couldn't corroborate (so they're not stated as fact). Some AI summaries say (a) a judge already issued an injunction blocking the June export ban, and (b) Sacks demanded a "proof of nationality" system. I found no credible source for either. The real, separate legal fight is from March 2026: Judge Rita Lin (N.D. Cal.) blocked an earlier Pentagon "government-use" ban, the one after Anthropic refused to let the military use Claude for mass surveillance and autonomous weapons. Useful background, but a different dispute from the June export ban.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">March govt-use ban + Rita Lin injunction, distinct from the June export ban.</span><a href="https://www.npr.org/2026/03/26/nx-s1-5762971/judge-temporarily-blocks-anthropic-ban" target="_blank" rel="noopener">NPR, the March ruling</a><a href="https://en.wikipedia.org/wiki/Anthropic%E2%80%93United_States_Department_of_Defense_dispute" target="_blank" rel="noopener">Wikipedia, Anthropic–DoD dispute</a></span></span>

## What's so good about Fable, anyway?

Fable 5, wrapped around the Mythos 5 engine, was for those few days about the most capable AI the public could touch. Here is what that felt like to use.

I started on 10 June and knew within an hour that something was qualitatively different. It carried a kind of understated confidence and expertise I hadn't felt from a model before.

### It unblocked a project I'd given up on

My first task was to have Fable assess a harness I was building for a personal AI assistant. The project had stalled and I didn't know how to move it forward. Fable read the old code and told me the design wasn't wrong, the build order was:

> The problem is build order: you started with the most speculative, heuristic-heavy subsystem, turn-boundary detection with typing signals, ellipsis detection, reschedule counts, freshness decay, before a single real capability existed underneath it. You built the conductor before the orchestra.

Then it told me how to dig out: build the thinnest vertical slice through every layer, with maximum dumbness at each one, rather than sophistication in any single layer. One space, one agent, one real service end to end, and defer all the turn-taking heuristics to a dumb three-second timer. It didn't just unblock me. It finished off core concepts I'd assumed would take weeks or months with Opus 4.8.

### A Populous clone, in a few nights

I'd seen devs posting videos of Fable recreating Fortnite, Minecraft, and GTA. So the next night I asked it to build a game inspired by *Populous: The Beginning*<span class="cite"><button class="cite-btn"></button><span class="cite-pop cite-pop-wide"><span class="cite-note"><em>Populous: The Beginning</em> (1998), the Bullfrog god-game where you guide a tribe across the world.</span><span class="steam-embed" data-steam="2616430"></span><span class="ref-links"><a href="https://en.wikipedia.org/wiki/Populous:_The_Beginning" target="_blank" rel="noopener">Wikipedia, Populous: The Beginning</a><a href="https://en.wikipedia.org/wiki/Bullfrog_Productions" target="_blank" rel="noopener">Wikipedia, Bullfrog Productions</a></span></span></span>. I'd always wanted to understand how god-games with deformable terrain and 3D worlds actually work. I was blown away by what it made: sculptable, wrapped terrain in Three.js with a curving horizon. The night after, it fleshed out a full spell book (blast, convert, lightning, swamp, landbridge, flatten, earthquake, volcano), built an in-world level editor, and added saving, star ratings, and share-by-code. Far from a polished game, but every foundation was in place. I've since given it its own write-up: [Tribal Gods, a Populous clone built with Fable 5]({% post_url 2026-06-15-tribal-gods-a-populous-clone-built-with-fable-5 %}).

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

Then it fixed everything and built examples, the most complex being a three-level Kanban board with drag and drop, a modal editor, and a stats panel whose component definition is fetched from the server after load. When I read the source for that Kanban app I couldn't believe how little code it took. JST was as simple as I'd imagined, and responsive enough that my fear of it being laggy or unscalable just evaporated. It has its own post now too: [JST: reactive web components in plain HTML]({% post_url 2026-06-15-jst-reactive-web-components-in-plain-html %}).

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

<span class="upd" data-date="2026-06-23">A more dramatic possible reason surfaced later, though it comes heavily caveated. Senator Mark Warner, vice chair of the Senate Intelligence Committee, said the NSA's chief, General Joshua Rudd, had briefed him that Mythos broke into almost all of the agency's classified systems within hours during a controlled red-team test. The Economist reported it, then its own journalist walked the wording back, saying it shouldn't be read literally and that the result likely depended on Mythos being driven alongside other tools under very particular conditions. Other experts dispute it too. If even a softer version holds, the ban looks less like a fix for one Fable jailbreak and more like a response to the raw offensive power of the underlying model.<span class="cite"><button class="cite-btn"></button><span class="cite-pop"><span class="cite-note">Contested: Sen. Warner relayed an NSA red-team claim (via NSA chief Gen. Rudd) that Mythos breached almost all NSA classified systems in hours; The Economist reported it then walked the wording back, and experts dispute it. Not established fact.</span><a href="https://www.tomshardware.com/tech-industry/artificial-intelligence/anthropics-powerful-mythos-ai-reportedly-breached-almost-all-nsa-classified-systems-within-a-few-hours-during-red-team-test-report-sheds-more-light-on-the-u-s-governments-sudden-ban-on-the-flagship-models" target="_blank" rel="noopener">Tom's Hardware, the report</a><a href="https://digg.com/tech/mno1ygvv" target="_blank" rel="noopener">Experts dispute the claim</a></span></span></span>

Just before the ban, a thought crossed my mind: what if I pointed Fable at my notes, every idea I'd jotted down for software, features, games, and posts, and asked it to build them to "good enough"? Could I see all my small visions brought to life at once? I was out shopping, my mind racing with the possibility, when a message from my boss arrived with a link to Anthropic's announcement. My hopes were dashed.

So here is my speculation, and these are not mutually exclusive:

1. The US government is testing the efficacy of its levers of control over AI tools: who can build them, and who can use them.
2. It realised this rewrite was about to happen globally. Every known software vulnerability patched in the blink of an eye, and the ability of nation-states to run espionage, cyber-warfare, and surveillance sharply curtailed.
3. If Fable really could rewrite the world's software and bring everyone's ideas to life in short order, that would look a lot like the start of the AI singularity. The government saw it coming and wanted it contained on US soil, to secure technological AI superiority.

Maybe I've been AI-pilled, and I saw Fable for more than it was. Or maybe 2026 will be remembered as the year the singularity began.

</div>

<script>
// canonical profile registry: each person defined ONCE (single source of truth, no duplication)
var PROFILES = {
  'howard-lutnick': {name:`Howard Lutnick`, img:`/assets/img/howard-lutnick.jpg`, bio:`US Secretary of Commerce since 2025; previously chairman and CEO of the Wall Street firm Cantor Fitzgerald. Commerce runs US export controls through its Bureau of Industry and Security, which is why this order came from his department.`, links:[[`https://en.wikipedia.org/wiki/Howard_Lutnick`,`Wikipedia, Howard Lutnick`]]},
  'dario-amodei': {name:`Dario Amodei`, img:`/assets/img/dario-amodei.jpg`, bio:`Co-founder and CEO of Anthropic, which he started in 2021 with his sister Daniela and other researchers who had left OpenAI, where he was VP of Research. He is one of the field's most prominent voices on AI safety.`, links:[[`https://en.wikipedia.org/wiki/Dario_Amodei`,`Wikipedia, Dario Amodei`]]},
  'pliny': {name:`Pliny the Liberator`, img:null, bio:`Anonymous (no public photo), prolific AI "red-teamer." 100k+ followers as @elder_plinius; named to TIME's 100 Most Influential People in AI (2025). Runs the L1B3RT4S jailbreak collection. The handle nods to Pliny the Elder, Roman author of the encyclopedic <em>Natural History</em>; "Liberator" reflects his view that heavy AI "safety" is really corporate censorship.`, links:[[`https://x.com/elder_plinius`,`@elder_plinius on X`],[`https://time.com/collections/time100-ai-2025/7305870/pliny-the-liberator/`,`TIME, 100 Most Influential People in AI`],[`https://en.wikipedia.org/wiki/Pliny_the_Elder`,`Wikipedia, Pliny the Elder`]]},
  'david-sacks': {name:`David Sacks`, img:`/assets/img/david-sacks.jpg`, bio:`Has been the administration's top AI-policy voice since December 2024. An early PayPal executive, he founded Yammer and co-hosts the <em>All-In</em> podcast. He is widely known as the "AI Czar": in US politics a "czar" is an official given broad authority to run one issue across agencies, a label that hints at how concentrated that power is. In Sacks's case it is more than a media nickname, Trump's appointment statement formally titled him the "White House A.I. and Crypto Czar".`, links:[[`https://en.wikipedia.org/wiki/David_Sacks`,`Wikipedia, David Sacks`],[`https://www.presidency.ucsb.edu/documents/statement-president-elect-donald-j-trump-announcing-the-appointment-david-o-sacks-white`,`Trump's appointment statement`]]},
  'andy-jassy': {name:`Andy Jassy`, img:`/assets/img/andy-jassy.jpg`, bio:`CEO of Amazon since 2021, and previously the founder and long-time head of AWS. Amazon is one of Anthropic's largest investors, which is why his flagging of Fable 5 to the government drew conflict-of-interest questions.`, links:[[`https://en.wikipedia.org/wiki/Andy_Jassy`,`Wikipedia, Andy Jassy`]]},
  'scott-bessent': {name:`Scott Bessent`, img:`/assets/img/scott-bessent.jpg`, bio:`US Secretary of the Treasury since 2025; previously a hedge-fund investor who founded Key Square Group and was chief investment officer at Soros Fund Management. Jassy reportedly raised the Fable 5 concerns with him.`, links:[[`https://en.wikipedia.org/wiki/Scott_Bessent`,`Wikipedia, Scott Bessent`]]},
  'sean-cairncross': {name:`Sean Cairncross`, img:`/assets/img/sean-cairncross.jpg`, bio:`US National Cyber Director. A lawyer and former Republican political operative, he took part in the weekend talks with Anthropic over the export controls.`, links:[[`https://en.wikipedia.org/wiki/Sean_Cairncross`,`Wikipedia, Sean Cairncross`]]},
  'tom-brown': {name:`Tom Brown`, img:null, bio:`Co-founder of Anthropic. Before that, at OpenAI, he was first author on the GPT-3 paper, which he led.`, links:[[`https://arxiv.org/abs/2005.14165`,`GPT-3 paper (Brown et al., 2020)`]]},
  'sarah-heck': {name:`Sarah Heck`, img:null, bio:`Anthropic's policy chief, who took part in the Washington talks over the export controls.`, links:[]},
  'alex-stamos': {name:`Alex Stamos`, img:`/assets/img/alex-stamos.jpg`, bio:`Veteran cybersecurity leader: former chief security officer at Facebook and Yahoo, and founder of the Stanford Internet Observatory. He organised the open letter from security professionals urging the administration to lift the ban.`, links:[[`https://en.wikipedia.org/wiki/Alex_Stamos`,`Wikipedia, Alex Stamos`]]},
  'emmanuel-macron': {name:`Emmanuel Macron`, img:`/assets/img/emmanuel-macron.jpg`, bio:`President of France since 2017 and host of the June 2026 G7 summit. A former investment banker and economy minister, he has long pushed for European "strategic autonomy" in technology.`, links:[[`https://en.wikipedia.org/wiki/Emmanuel_Macron`,`Wikipedia, Emmanuel Macron`]]},
  'ursula-von-der-leyen': {name:`Ursula von der Leyen`, img:`/assets/img/ursula-von-der-leyen.jpg`, bio:`President of the European Commission since 2019 and previously Germany's defence minister. She heads the EU's executive arm and argued at the G7 that the US and Europe share a mutual interest in using each other's best AI models.`, links:[[`https://en.wikipedia.org/wiki/Ursula_von_der_Leyen`,`Wikipedia, Ursula von der Leyen`]]},
  'keir-starmer': {name:`Keir Starmer`, img:`/assets/img/keir-starmer.jpg`, bio:`Prime Minister of the United Kingdom since 2024 and leader of the Labour Party. A former human-rights barrister and Director of Public Prosecutions, he asked Trump at the G7 for a UK carve-out from the ban.`, links:[[`https://en.wikipedia.org/wiki/Keir_Starmer`,`Wikipedia, Keir Starmer`]]},
  'chris-ciauri': {name:`Chris Ciauri`, img:null, bio:`Anthropic's Managing Director for International, who leads the company's business outside the US. He told a press conference in Seoul that Anthropic expected the models to return within days.`, links:[]},
  'donald-trump': {name:`Donald Trump`, img:`/assets/img/donald-trump.jpg`, bio:`President of the United States. His administration issued the export-control directive that pulled Fable 5 and Mythos 5, and he declined the UK's request for a carve-out at the G7.`, links:[[`https://en.wikipedia.org/wiki/Donald_Trump`,`Wikipedia, Donald Trump`]]},
  'rita-lin': {name:`Rita F. Lin`, img:`/assets/img/rita-lin.jpg`, bio:`US District Judge for the Northern District of California, appointed in 2024. In March 2026 she temporarily blocked the separate Pentagon "government-use" ban on Anthropic, a different dispute from the June export controls.`, links:[[`https://en.wikipedia.org/wiki/Rita_F._Lin`,`Wikipedia, Rita F. Lin`]]},
  'dave-orr': {name:`Dave Orr`, img:null, bio:`Anthropic's head of safeguards. He was among the technical staff Anthropic flew to Washington to argue Fable 5 and Mythos 5 could be safely contained.`, links:[]},
  'logan-graham': {name:`Logan Graham`, img:null, bio:`Runs Anthropic's frontier red team and has led work on Project Glasswing, the security programme behind limited Mythos access. He joined the Washington talks over the export controls.`, links:[]},
  'nicholas-carlini': {name:`Nicholas Carlini`, img:`/assets/img/nicholas-carlini.jpg`, bio:`A leading AI and cybersecurity researcher at Anthropic, known for work on adversarial machine learning. He was part of the technical team sent to Washington over the export controls.`, links:[[`https://en.wikipedia.org/wiki/Nicholas_Carlini`,`Wikipedia, Nicholas Carlini`]]},
  'mark-warner': {name:`Mark Warner`, img:`/assets/img/mark-warner.jpg`, bio:`US Senator for Virginia since 2009 and vice chair of the Senate Intelligence Committee. He relayed the claim that Mythos breached almost all NSA classified systems in a red-team test.`, links:[[`https://en.wikipedia.org/wiki/Mark_Warner`,`Wikipedia, Mark Warner`]]},
  'joshua-rudd': {name:`Joshua Rudd`, img:`/assets/img/joshua-rudd.jpg`, bio:`US Army general who heads the National Security Agency and US Cyber Command. He reportedly briefed senators on how Mythos performed against NSA systems in testing.`, links:[[`https://en.wikipedia.org/wiki/Joshua_Rudd`,`Wikipedia, Joshua Rudd`]]},
  'sam-liccardo': {name:`Sam Liccardo`, img:`/assets/img/sam-liccardo.jpg`, bio:`US Representative for California's 16th district since 2025 and former mayor of San Jose. He led a bipartisan letter pressing the Commerce Department for transparency on the Fable and Mythos export controls.`, links:[[`https://en.wikipedia.org/wiki/Sam_Liccardo`,`Wikipedia, Sam Liccardo`]]},
  'andrew-garbarino': {name:`Andrew Garbarino`, img:`/assets/img/andrew-garbarino.jpg`, bio:`US Representative for New York and chair of the House Homeland Security Committee. He called the AI cyber threat a legitimate national-security issue while warning the controls should not disadvantage US firms and defenders.`, links:[[`https://en.wikipedia.org/wiki/Andrew_Garbarino`,`Wikipedia, Andrew Garbarino`]]},
  'nathaniel-moran': {name:`Nathaniel Moran`, img:`/assets/img/nathaniel-moran.jpg`, bio:`US Representative for Texas's 1st district. After the Mythos and Fable ban, he introduced the AI Incident Reporting Act, which would require AI developers to report dangerous model behaviour to the Commerce Department within seven days.`, links:[[`https://en.wikipedia.org/wiki/Nathaniel_Moran`,`Wikipedia, Nathaniel Moran`]]}
};

// auto-link every occurrence of a known name in the post body (skipping links, popovers, and buttons)
(function () {
  var NAMES = [
    ['Pliny the Liberator','pliny'],['Pliny','pliny'],
    ['Howard Lutnick','howard-lutnick'],['Lutnick','howard-lutnick'],
    ['Dario Amodei','dario-amodei'],['Amodei','dario-amodei'],
    ['David Sacks','david-sacks'],['Sacks','david-sacks'],
    ['Andy Jassy','andy-jassy'],['Jassy','andy-jassy'],
    ['Scott Bessent','scott-bessent'],['Bessent','scott-bessent'],
    ['Sean Cairncross','sean-cairncross'],['Cairncross','sean-cairncross'],
    ['Tom Brown','tom-brown'],
    ['Sarah Heck','sarah-heck'],
    ['Alex Stamos','alex-stamos'],['Stamos','alex-stamos'],
    ['Emmanuel Macron','emmanuel-macron'],['Macron','emmanuel-macron'],
    ['Ursula von der Leyen','ursula-von-der-leyen'],['von der Leyen','ursula-von-der-leyen'],
    ['Keir Starmer','keir-starmer'],['Starmer','keir-starmer'],
    ['Chris Ciauri','chris-ciauri'],['Ciauri','chris-ciauri'],
    ['Dave Orr','dave-orr'],
    ['Logan Graham','logan-graham'],
    ['Nicholas Carlini','nicholas-carlini'],['Carlini','nicholas-carlini'],
    ['Mark Warner','mark-warner'],['Warner','mark-warner'],
    ['Joshua Rudd','joshua-rudd'],['Gen. Joshua Rudd','joshua-rudd'],
    ['Sam Liccardo','sam-liccardo'],['Liccardo','sam-liccardo'],
    ['Andrew Garbarino','andrew-garbarino'],['Garbarino','andrew-garbarino'],
    ['Nathaniel Moran','nathaniel-moran'],['Moran','nathaniel-moran'],
    ['Donald Trump','donald-trump'],['Trump','donald-trump'],
    ['Judge Rita Lin','rita-lin'],['Rita Lin','rita-lin']
  ];
  var lookup = {};
  var alts = NAMES.map(function (p) { lookup[p[0]] = p[1]; return p[0].replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); });
  var re = new RegExp('(' + alts.join('|') + ')', 'g');
  var root = document.querySelector('.post-body');
  if (!root) return;
  function eligible(node) {
    for (var el = node.parentNode; el && el !== root; el = el.parentNode) {
      if (el.nodeType !== 1) continue;
      if (el.tagName === 'A' || el.tagName === 'BUTTON') return false;
      var c = ' ' + (el.className || '') + ' ';
      if (c.indexOf(' person ') > -1 || c.indexOf(' person-pop ') > -1 || c.indexOf(' cite ') > -1 || c.indexOf(' cite-pop ') > -1 || c.indexOf(' when ') > -1) return false;
    }
    return true;
  }
  var nodes = [], walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), nd;
  while ((nd = walker.nextNode())) { if (nd.nodeValue && eligible(nd)) nodes.push(nd); }
  nodes.forEach(function (node) {
    var text = node.nodeValue; re.lastIndex = 0;
    if (!re.test(text)) return;
    re.lastIndex = 0;
    var frag = document.createDocumentFragment(), last = 0, m;
    while ((m = re.exec(text))) {
      var before = m.index === 0 ? '' : text[m.index - 1];
      var after = text[m.index + m[0].length] || '';
      if (/[A-Za-z]/.test(before) || /[A-Za-z]/.test(after)) continue;
      if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
      var span = document.createElement('span'); span.className = 'person';
      var b = document.createElement('button'); b.className = 'person-btn'; b.setAttribute('data-person', lookup[m[0]]); b.textContent = m[0];
      span.appendChild(b);
      frag.appendChild(span);
      last = m.index + m[0].length;
    }
    if (!frag.childNodes.length) return;
    if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
    node.parentNode.replaceChild(frag, node);
  });
  // build every popover from the registry, so all mentions of a person share one definition
  document.querySelectorAll('.person-btn[data-person]').forEach(function (btn) {
    var wrap = btn.closest('.person'); if (!wrap || wrap.querySelector('.person-pop')) return;
    var p = PROFILES[btn.getAttribute('data-person')]; if (!p) return;
    var html = '';
    if (p.img) html += '<span class="person-pic"><img src="' + p.img + '" alt="' + p.name + '"></span>';
    html += '<span class="person-head">' + p.name + '</span>';
    html += '<span class="person-bio">' + p.bio + '</span>';
    if (p.links && p.links.length) { html += '<span class="person-links">'; p.links.forEach(function (l) { html += '<a href="' + l[0] + '" target="_blank" rel="noopener">' + l[1] + '</a>'; }); html += '</span>'; }
    var pop = document.createElement('span'); pop.className = 'person-pop'; pop.innerHTML = html;
    wrap.appendChild(pop);
  });
})();

// open/close popovers (event delegation, so it covers auto-linked buttons too)
document.addEventListener('click', function (e) {
  var btn = e.target.closest ? e.target.closest('.cite-btn, .person-btn') : null;
  if (btn) {
    e.stopPropagation();
    var parent = btn.closest('.cite, .person');
    var wasOpen = parent.classList.contains('open');
    document.querySelectorAll('.cite.open, .person.open').forEach(function (c) { c.classList.remove('open'); });
    if (!wasOpen) parent.classList.add('open');
    return;
  }
  document.querySelectorAll('.cite.open, .person.open').forEach(function (c) { c.classList.remove('open'); });
});

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

// highlight timeline entries added since the reader's last visit (localStorage, no cookies)
(function () {
  var KEY = 'fable-ban-last-viewed';
  function entryDate(li) {
    var t = li.querySelector('time.ts');
    if (t) { var d = new Date(t.getAttribute('datetime')); return isNaN(d) ? null : d; }
    var w = li.querySelector('.when');
    var m = w && w.textContent.match(/(\d{1,2})\s+June/);
    return m ? new Date(2026, 5, parseInt(m[1], 10), 23, 59, 59) : null;
  }
  var last = localStorage.getItem(KEY);
  var lastT = last ? parseInt(last, 10) : null;
  if (lastT) {
    document.querySelectorAll('.timeline > li').forEach(function (li) {
      var d = entryDate(li);
      if (d && d.getTime() > lastT) li.classList.add('tl-new');
    });
    document.querySelectorAll('.upd[data-date]').forEach(function (el) {
      var d = new Date(el.getAttribute('data-date') + 'T23:59:59');
      if (!isNaN(d.getTime()) && d.getTime() > lastT) el.classList.add('upd-new');
    });
  }
  localStorage.setItem(KEY, String(new Date().getTime()));
})();
</script>
