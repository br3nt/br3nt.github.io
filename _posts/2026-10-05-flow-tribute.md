---
date: 2026-10-05 09:00:00 +1030
title: "flOw, the Flash game that lost its levels"
excerpt: "Jenova Chen's 2006 Flash game flOw plays on archive.org as an empty black sea. The fix was one missing XML file and some MP3s. So I made it a tribute page where you can play it properly."
tags: [flash, ruffle, preservation, gamedev, ai, anthropic]
---

<style>
  .flow-shot { display: block; width: 100%; border-radius: 10px; margin: 1.2em 0 0.4em; }
  .flow-play {
    display: inline-block; margin: 0.6em 0 1.4em;
    padding: 0.7em 1.4em; border-radius: 999px;
    background: #007cc9; color: #fff; font-weight: 700;
    text-decoration: none; letter-spacing: 0.3px;
  }
  .flow-play:hover { background: #005c8f; color: #fff; }
  .flow-cap { font-size: 0.82rem; color: #475569; margin: 0.2em 0 1.6em; }
  .flow-video { display: block; width: 100%; aspect-ratio: 16 / 9; border: 0; border-radius: 10px; margin: 1.2em 0; }
</style>

I was watching YouTube and came across [this /noclip documentary](https://youtu.be/6uYOnnz8o0g) on thatgamecompany, *Flower, Flow & the Origins of thatgamecompany*. It interviews Jenova Chen, who founded thatgamecompany, the studio behind *flOw*, *Flower*, *Journey* and *Sky*.

<iframe class="flow-video" src="https://www.youtube-nocookie.com/embed/6uYOnnz8o0g" title="Flower, Flow & the Origins of thatgamecompany - /noclip Documentary" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

He talks about moving from Shanghai to the US to study at USC's Interactive Media program, because there was no game industry in China doing the kind of games he wanted to make. There he worked with Nicholas Clark, a fellow USC student who co-created *flOw* with him, and Austin Wintory, who wrote the music. His lecturers pushed him to get creative, and in that time he made small experimental games like *Cloud* and *flOw*.

*flOw* was part of his master's thesis, [*Flow in Games*](https://www.jenovachen.com/flowingames/thesis.htm). You're a small creature starting out in the shallows. As you eat, your creature grows longer, with more segments. As you go deeper you meet other creatures that try to attack and eat you. The point of the game was to let the player choose their own difficulty, by choosing when to sink down or swim back up. That was the point of the thesis: let the player steer the difficulty so they stay in the zone. A year later *flOw* became thatgamecompany's first PlayStation 3 game, and the studio went on to make *Flower*, *Journey* and *Sky*.

<img class="flow-shot" src="/assets/img/flow-title.jpg" alt="The flOw title screen: the word flOw in white serif letters with ribbons trailing off each side, small creatures drifting across a bright blue sea">

I wanted to explore his work, and *flOw* seemed an easy enough entry point. It was a Flash game, so it should be on archive.org or somewhere similar.

## A black void

Like I experienced with [The Space Game]({% post_url 2026-09-10-the-space-game-launcher %}), when I played the game from [archive.org](https://archive.org/details/flash_flow), it didn't work. I was greeted by a black void with some glowing dots in the background. At first I didn't realise anything was wrong. I could steer the creature with my mouse, but I couldn't work out how to play. There wasn't anything to do. I tried swimming towards the glowing dots, but nothing reacted.

<img class="flow-shot" src="/assets/img/flow-black.jpg" alt="flOw on archive.org: the small white creature alone in a black void, with a few faint glowing dots and nothing to eat">

And so began my journey of getting the game to work!

## Restoring the game

Jenova Chen's own [flOw page](https://www.jenovachen.com/flowingames/flowing.htm) is still up, but its "Play flOw online" link leads to a site that can't be reached.

Claude helpfully read the SWF and found the answer in a couple of minutes. On startup, the game loads `levels.xml` along with its other assets. If those files aren't sitting next to the SWF, the game doesn't know what to draw.

`levels.xml` describes each level in the game, including its background colour, its food, its creatures and its bosses:

```xml
<Level bgColor="0x008DD8" levelSize="400">
  <SpawnFood num="15" foodType="1" hpMin="15" hpVar="10" />
  <SpawnFish num="2" numSegs="3" maxSegs="16" randEvolve="0" segLength="15"
             speedMin="60" speedVar="5" turnMin="8" turnVar="3" panic="true" />
</Level>
```

The game also streams its music, one MP3 per level and one per sound effect.

The good news is that every file is still on Jenova Chen's server. The Wayback Machine even has [the original ActionScript source](https://web.archive.org/web/20170512055653/http://www.jenovachen.com/flowingames/implementations/flowing/flOw_source.zip) from April 2006. Claude downloaded `core.swf`, `levels.xml` and the 41 MP3s into one folder, served it locally, pointed Ruffle at it, et voilà! The game sprang to life!!!

<img class="flow-shot" src="/assets/img/flow-eating.jpg" alt="flOw in play: the creature with its fins out in the middle of the blue, a ring of blurred creatures circling on the level below">

Compared with bringing back The Space Game, where we had to fake a whole server, this was a five-minute fix.

## A tribute page

It deserved more than a fix, so I made it a [tribute page](https://br3nt.github.io/flow-tribute/) where you can play it.

The page is styled like the game. It starts with the iconic colours from when the game first loads, then as you scroll, the background gets dark and eerie in the dangerous depths. Glowing particles pop in and out, and blurred creatures drift on a layer behind the page, the way the next level down shows through in the game. Just like the game, you see hints of snakefish, jelly rings, and once you're deep enough, a manta. The page is somewhat interactive too. If you're on a computer, a little creature follows your mouse and eats the food floating around the page.

<img class="flow-shot" src="/assets/img/flow-deep.jpg" alt="The Manta Boss level: a dark teal sea with the huge kite-shaped manta, curved sides and glowing nodes, beside the player's small creature">

I really appreciate the design aesthetic of this game. The blurred layers below hint at what you'll discover next, and encourage curiosity and exploration. You feel anxiety and excitement as you see large, potentially dangerous creatures lurking below, and wonder if you can take them on head first. The way the creatures move, and the way you grow as you eat, give a lovely sense of naturalness and connectedness to the environment. You feel part of an ecosystem.

I hope you love this one as much as I do :)

<img class="flow-shot" src="/assets/img/flow-tribute.jpg" alt="The flOw tribute page: the flOw logo over a bright blue sea of particles and blurred creatures, with a round Play button">

<a class="flow-play" href="https://br3nt.github.io/flow-tribute/" target="_blank" rel="noopener">▶ Play flOw →</a>

<p class="flow-cap">Source: <a href="https://github.com/br3nt/flow-tribute">github.com/br3nt/flow-tribute</a></p>
