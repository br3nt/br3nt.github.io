---
title: "Tribal Gods: a Populous clone built from a blank folder with Fable 5"
date: 2026-06-15 21:00:00 +0930
excerpt: "In my Fable & Mythos ban write-up I mentioned, almost in passing, that I'd spent a few nights getting Fable 5 to build a Populous clone. It deserves its own page, and now it's live, open-source, and playable in your browser."
tags: ai, anthropic, fable, gamedev, threejs, populous
---

<style>
  .tg-poster { display: block; margin: 1.2em 0 0.4em; }
  .tg-poster img { width: 100%; border-radius: 10px; display: block; }
  .tg-play {
    display: inline-block; margin: 0.6em 0 1.4em;
    padding: 0.7em 1.4em; border-radius: 8px;
    background: #ff3399; color: #fff; font-weight: 700;
    text-decoration: none; letter-spacing: 0.3px;
  }
  .tg-play:hover { background: #d81b76; }
  .tg-cap { font-size: 0.82rem; color: #475569; margin: 0.2em 0 1.6em; }
  .tg-codelist { line-height: 1.7; }
  .tg-codelist code { font-size: 0.92em; }
  /* Steam store widget: the same component the ban post uses. Kramdown
     escapes a raw <iframe>, so the iframe is injected by the script below. */
  .steam-embed { display: block; margin: 0.8em 0; }
  .steam-embed iframe { width: 100%; max-width: 646px; border: 0; }
</style>

In [my write-up of the Fable and Mythos ban]({% post_url 2026-06-15-anthropic-fable-mythos-ban %}) I mentioned, almost in passing, that I'd spent a few nights pointing Fable 5 at a blank folder and asking it to build a game inspired by *Populous: The Beginning*. Enough people asked about it that it deserves its own page, and in the days since, Fable turned it from "every foundation is in place" into something I'm happy to put a link to. It's playable in your browser right now, and every line is on GitHub.

<a class="tg-poster" href="https://br3nt.github.io/tribal-gods/" target="_blank" rel="noopener">
  <img src="/assets/img/populous-hero.png" alt="A small curved planet with green continents and blue coastlines, the signature Populous 'little world' look">
</a>
<a class="tg-play" href="https://br3nt.github.io/tribal-gods/" target="_blank" rel="noopener">▶ Play it in your browser →</a>

<p class="tg-cap">That curved horizon is the whole trick. The world is a flat, edge-wrapping heightmap; a one-line vertex shader bends it away from the camera so it reads as a tiny planet. Walk far enough in any direction and you come back to where you started.</p>

## What it is

It's a real-time god game in the spirit of Bullfrog's 1998 classic. You don't control your tribe directly so much as *tend* them: they chop wood, build huts, breed, and worship on their own. Worship is mana, and mana is god-powers: you reshape the planet itself with blast, lightning, swamp, landbridge, flatten, earthquake, and a genuinely satisfying volcano. There's a second tribe on the far side of the world that wants you gone, run by an AI that grows, harasses, assaults, and defends on its own clock. You pick a civilisation (Forest Tribe, River Dynasty, or Northmen, each with its own leader and architecture), race the enemy god to ancient stone monuments that unlock the bigger spells, and try to wipe each other off the planet. There's also a level editor, and you can share the worlds you build as copy-paste codes.

None of it uses a game engine. The terrain, the character models and animation, the camera, the pathfinding, the simulation: all hand-written in TypeScript and Three.js, and heavily commented, because the original point was for me to finally understand *how this kind of game actually works*.

## How it was built: the actual experiment

The interesting part isn't the game, it's how it got made. I never opened the code editor to write a line. I described what I wanted in plain English, and Fable did the rest, including the part that surprised me most: it tested its own work. It ran the dev server, drove a headless Chrome to play the game, took screenshots, looked at them, noticed when something was wrong, and fixed it. It caught its own bugs that way: a terrain-picking error where clicks near the horizon landed in the wrong spot, and an AI deadlock where a tribe that lost all its workers could get stuck sterile forever. I mostly just said "yes, keep going."

It went in phases, each one a single conversation that ended with something I could actually play:

1. **The planet**: the wrapping heightmap and the curvature illusion. The "oh, it's a little world" moment.
2. **Life**: procedural low-poly villagers with hand-written walk cycles, and A\* pathfinding that runs on the same grid as the terrain (so sculpting a landbridge instantly opens a route).
3. **The settlement**: wood, huts, breeding, and a village that runs itself.
4. **God powers**: the spell book, with the world fighting back (drowning, collapsing huts, lava that doesn't care whose side you're on).
5. **War**: soldiers, towers, and the enemy tribe with its utility AI.
6. **Civilisations and a tech tree**: choose-your-people, plus worship-to-unlock spells.
7. **The editor and sharing**: build a world, save it, export it as a code a friend can paste.

A typical prompt from my side was nothing more than *"cool! war it is :)"*. The spec, the architecture, the maths, the art, the debugging: that was all Fable. The full design doc it wrote up front is [SPEC.md](https://github.com/br3nt/tribal-gods/blob/main/SPEC.md) in the repo.

<img src="/assets/img/populous-tribes.png" alt="The Tribal Gods title screen: choose Forest Tribe, River Dynasty, or Northmen, plus difficulty, and Levels and Editor buttons" style="width:100%;border-radius:10px;margin:1.2em 0;">

## Peek at the code

It's all public, and the comments are written to be read. A few of the files I found most fun:

<div class="tg-codelist" markdown="1">

- [`world/heightmap.ts`](https://github.com/br3nt/tribal-gods/blob/main/src/world/heightmap.ts): the planet is *literally an array*. Every god-power is an edit to it.
- [`world/curvature.ts`](https://github.com/br3nt/tribal-gods/blob/main/src/world/curvature.ts): the entire "it's a planet" illusion, in about one line of shader.
- [`sim/spells.ts`](https://github.com/br3nt/tribal-gods/blob/main/src/sim/spells.ts): every spell is a few lines of heightmap maths. The volcano grows over nine seconds.
- [`sim/pathfinding.ts`](https://github.com/br3nt/tribal-gods/blob/main/src/sim/pathfinding.ts): A\* on the wrapping world grid, with a reusable-memory trick so it allocates nothing per path.
- [`sim/ai.ts`](https://github.com/br3nt/tribal-gods/blob/main/src/sim/ai.ts): the enemy god's brain. No cheats; it plays by exactly your rules.
- [`render/figure-animator.ts`](https://github.com/br3nt/tribal-gods/blob/main/src/render/figure-animator.ts): walk cycles as sine waves. Walking really is just oscillation.
- [`level/level-format.ts`](https://github.com/br3nt/tribal-gods/blob/main/src/level/level-format.ts): how a whole planet compresses into a pasteable share code.
- [`core/audio.ts`](https://github.com/br3nt/tribal-gods/blob/main/src/core/audio.ts): every sound is synthesised live; there are no audio files.

</div>

<img src="/assets/img/populous-spells.png" alt="The clone in play: 3D terrain, villagers, a minimap, and the spell-book HUD along the bottom" style="width:100%;border-radius:10px;margin:1.2em 0;">

## The original

This is a love letter, not a product. Every model, texture, and sound in it is original or procedurally generated, and "Populous" is a trademark of EA. If you've never played the 1998 game that inspired it, it's right here, and it still holds up:

<span class="steam-embed" data-steam="2616430"></span>

## Links

- ▶ **[Play Tribal Gods](https://br3nt.github.io/tribal-gods/)**: runs in any modern browser, no install.
- **[Source on GitHub](https://github.com/br3nt/tribal-gods)**: heavily commented; start with [`src/main.ts`](https://github.com/br3nt/tribal-gods/blob/main/src/main.ts), which lists a reading order.
- The bigger story of the model that built it: [the Fable & Mythos ban]({% post_url 2026-06-15-anthropic-fable-mythos-ban %}).

There's a small irony in the timing: the model I used to build all of this was switched off, globally, the same week I finished. If Fable comes back, I know exactly what I'm asking it to build next.

<script>
// Inject the Steam store widget. Kramdown escapes a raw <iframe> in the page
// source, so it's built here instead, the same approach as the ban post.
(function () {
  document.querySelectorAll('.steam-embed[data-steam]').forEach(function (el) {
    var f = document.createElement('iframe');
    f.src = 'https://store.steampowered.com/widget/' + el.getAttribute('data-steam') + '/';
    f.height = '190';
    f.title = 'Populous: The Beginning on Steam';
    el.appendChild(f);
  });
})();
</script>
