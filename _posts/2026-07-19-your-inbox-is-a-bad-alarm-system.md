---
title: "Your inbox is a badly engineered alarm system"
date: 2026-07-19 00:00:00 +0930
excerpt: "Industry learned decades ago that an alarm which demands no action is a defect. Email never learned it. Every message lands with equal weight, sorted by arrival, and arrival is not importance."
tags: email, notifications, attention, ux
---

<style>
/* ---- inline person profiles (borrowed from earlier posts) ---- */
.person { position: relative; display: inline; }
.person-btn {
  font: inherit; cursor: pointer; background: none; border: none; padding: 0; color: inherit;
  text-decoration: underline; text-decoration-style: dotted; text-underline-offset: 3px;
  text-decoration-color: #ff3399;
}
.person-btn:hover { color: #d81b76; }
.person-pop {
  display: none; position: absolute; z-index: 30; left: 0; top: 1.7em;
  width: min(340px, 80vw); padding: .75em .85em;
  background: #fff; border: 1px solid #cbd5e1; border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,.18);
  font-size: .82rem; line-height: 1.45; text-align: left; white-space: normal; font-weight: 400;
}
.person.open .person-pop { display: block; }
.person-head { font-weight: 700; margin-bottom: .15em; }
.person-bio { color: #475569; }
.person-links { margin-top: .4em; }
.person-links a { display: block; margin-top: .35em; }
.person-pic {
  display: flex; align-items: center; justify-content: center;
  width: 100%; height: 96px; margin-bottom: .55em;
  background: repeating-linear-gradient(45deg,#f1f5f9,#f1f5f9 10px,#e8edf3 10px,#e8edf3 20px);
  border: 1px dashed #cbd5e1; border-radius: 8px; color: #94a3b8; font-size: .78rem;
}
.person-pic img { display: block; width: 100%; height: auto; border-radius: 8px; }
.person-pic:has(img) { border: none; background: none; height: auto; padding: 0; }

@media (max-width: 640px) {
  .person-pop {
    position: fixed; left: 1rem; right: 1rem; top: auto; bottom: 1rem;
    inset-inline: 1rem;
    width: auto; max-width: none; max-height: 70vh; overflow-y: auto; z-index: 100;
    box-shadow: 0 -6px 30px rgba(0,0,0,.28);
  }
}
</style>

<div class="post-body" markdown="1">

My inbox sorts by arrival time. Arrival time is not importance. A shipping notification that landed a minute ago sits above the email from my accountant that actually needs an answer, because the shipping notification is newer. Every mail client I have ever used makes this same trade, and we have all stopped noticing how strange it is.

Other industries were forced to notice. In 1994 the Texaco refinery at Milford Haven exploded. In the final minutes before the blast, operators were being hit with alarms faster than anyone could read them, let alone act on them. The important signals were in there somewhere, buried under signals that mattered less, all rendered identically. Three Mile Island in 1979 was the same failure shape: a control room lit up with so many undifferentiated alarms that the ones describing the actual problem could not be found. Out of those disasters came a discipline called alarm management and a standard called [EEMUA 191](https://www.eemua.org/products/publications/print/eemua-publication-191). Its core rule is blunt: every alarm must require an operator response. If a signal does not demand action, it is not an alarm, and it must not be presented as one. Signals get classified by the response they require before they are allowed to reach a human.

Hospitals learned the same lesson under the name alarm fatigue. Ward monitors cried wolf so often that nurses tuned them out, and [patients died from real alarms nobody reacted to](https://www.jointcommission.org/en-us/knowledge-library/newsletters/sentinel-event-alert/issue-50). The lesson generalises: a channel where everything alerts is a channel where nothing does.

Email is that channel. The inbox has one presentation for everything. A meeting invite, a newsletter, a receipt, a password reset, a message from a friend, a contract that needs signing today: one list, one unread badge, one buzz in your pocket. The unread count treats them as interchangeable units of guilt. And because the sort key is recency, any new trivial thing outranks every old important thing. The inbox is a priority queue with the priority function deleted.

<span class="person"><button class="person-btn">Herbert Simon</button><span class="person-pop"><span class="person-pic"><img src="/assets/img/herbert-simon.jpg" alt="Herbert Simon"></span><span class="person-head">Herbert Simon</span><span class="person-bio">Economist, cognitive scientist and Nobel laureate. Coined "bounded rationality" and described attention economics decades before the attention economy had a name.</span><span class="person-links"><a href="https://en.wikipedia.org/wiki/Herbert_A._Simon" target="_blank" rel="noopener">Wikipedia, Herbert A. Simon</a><a href="https://gwern.net/doc/design/1971-simon.pdf" target="_blank" rel="noopener">Designing organizations for an information-rich world (1971)</a></span></span></span> called this in 1971: a wealth of information creates a poverty of attention. The scarce resource is not the messages, it is you. Any system that spends your attention without classifying what it is spending it on is a badly engineered system.

There is even a taxonomy for doing it properly. <span class="person"><button class="person-btn">Daniel McFarlane</button><span class="person-pop"><span class="person-head">Daniel McFarlane</span><span class="person-bio">Human-computer interaction researcher whose work on coordinating interruption is the standard reference for how systems should interrupt people.</span><span class="person-links"><a href="https://www.interruptions.net/literature/McFarlane-Interact99-Coordinating.pdf" target="_blank" rel="noopener">Coordinating the interruption of people (1999)</a></span></span></span> laid out four ways a system can interrupt a human:

- immediate - break in now, regardless of what the person is doing
- negotiated - announce, then let the person choose when
- mediated - hand it to an agent that decides on the person's behalf
- scheduled - deliver in a batch at agreed times

Everything deserves one of these. Almost nothing deserves the first one. Email, plus the push notification bolted onto it, gives nearly everything the first one.

The deeper mistake is that most of what lands in an inbox is not correspondence at all. A newsletter is not a message to me; it is a publication I subscribed to. Order updates, release notes, community digests: publications. They belong in a feed, something I visit when I choose, that keeps its place, that never buzzes. We already invented this and it works; RSS never stopped being good. Publish-subscribe content is squatting in a channel designed for one-to-one mail because email was the only pipe with universal delivery, not because it is where that content belongs.

The alarm-management fix translates directly:

- admission control - classify at the source; a sender must declare what kind of signal this is, and an unclassified signal defaults to quiet, not loud
- quiet surfaces - non-actionable information lands somewhere ambient that you visit on your own schedule, and never pushes
- an actual alarm channel - reserved for things requiring action from you, small enough to be read completely, with the alarm cleared when the action is done

Under that regime an inbox becomes short and legible. It holds the contract to sign and the question only you can answer. The newsletter lives in your feed reader. The receipt files itself. The "your package has shipped" line updates a status you can look at, and interrupts no one. McFarlane's mediated option is where personal agents fit: something that knows your priorities decides what surfaces where, so classification stops being a burden every sender has to be trusted with.

None of this needs new science. It needs email clients to stop pretending arrival order is a triage policy, and it needs us to stop routing publications through a correspondence channel. Industry wrote this down thirty years ago, after it cost lives. Our version only costs attention, which is why nobody has fixed it, lol.

If you want the industrial-alarm history in full, [The Lost Discipline of the Alarm](https://www.youtube.com/watch?v=Ira28fgSF7M) is the video that sent me down this path, and the [HSE report on Milford Haven](https://www.jesip.org.uk/wp-content/uploads/2022/03/Texaco-Refinery-Explosion.pdf) is grimly worth the read.

</div>

<script>
(function () {
  var btns = document.querySelectorAll('.person-btn');
  btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var parent = btn.closest('.person');
      var wasOpen = parent.classList.contains('open');
      document.querySelectorAll('.person.open').forEach(function (c) { c.classList.remove('open'); });
      if (!wasOpen) parent.classList.add('open');
    });
  });
  document.addEventListener('click', function () {
    document.querySelectorAll('.person.open').forEach(function (c) { c.classList.remove('open'); });
  });
})();
</script>
