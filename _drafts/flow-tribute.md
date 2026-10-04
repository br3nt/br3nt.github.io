---
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
</style>

*flOw* is a tiny Flash game by Jenova Chen from 2006, made for his master's thesis at USC with Nicholas Clark, with music by Austin Wintory. You're a small creature in a blue sea. You eat, you grow longer, and when you eat the red food you sink a level deeper, where the water gets darker and the creatures get bigger. Eat the blue food and you float back up. There's no difficulty setting; you choose how deep to go. That was the point of the thesis, *Flow in Games*: let the player steer the difficulty so they stay in the zone. A year later it became thatgamecompany's first PlayStation 3 game, and the studio went on to make *Flower* and *Journey*.

<img class="flow-shot" src="/assets/img/flow-title.jpg" alt="The flOw title screen: the word flOw in white serif letters with ribbons trailing off each side, small creatures drifting across a bright blue sea">

I went to play it again. The copy on [archive.org](https://archive.org/details/flash_flow) runs in Ruffle, and I could steer my creature, but the sea was black and there was nothing to eat. Jenova Chen's own [flOw page](https://www.jenovachen.com/flowingames/flowing.htm) is still up, but its "Play flOw online" link redirects to nowhere. Its offline download still works, but it's a 2006 Flash projector for Windows and classic Mac OS, so no help on a current Mac.

## One missing file

I asked Claude what was wrong. It pulled the SWF apart and found the answer in a couple of minutes: the game isn't only its SWF. On startup `core.swf` loads `levels.xml` from the folder it's in, and that file *is* the game:

```xml
<Level bgColor="0x008DD8" levelSize="400">
  <SpawnFood num="15" foodType="1" hpMin="15" hpVar="10" />
  <SpawnFish num="2" numSegs="3" maxSegs="16" randEvolve="0" segLength="15"
             speedMin="60" speedVar="5" turnMin="8" turnVar="3" panic="true" />
</Level>
```

Every level's background colour, its food, its creatures and its bosses live in there. Then the game streams its music, one MP3 per level and one per sound effect. The archive.org item is the three SWFs from that 2006 offline zip, uploaded without the `levels.xml` and MP3s that sit next to them in the zip. No level data, so no blue and nothing to eat.

The good news is that every file is still on Jenova Chen's server. Only the page that embedded them is gone. Claude downloaded `core.swf`, `levels.xml` and the 41 MP3s into one folder, served it locally, pointed Ruffle at it, and the blue sea came back with food in it. The Wayback Machine even has the original ActionScript source, `flOw_source.zip`, from April 2006.

Compared with [bringing back The Space Game]({% post_url 2026-09-10-the-space-game-launcher %}), where we had to fake a whole server, this was a five-minute fix.

<img class="flow-shot" src="/assets/img/flow-eating.jpg" alt="flOw in play: the creature with its fins out in the middle of the blue, a ring of blurred creatures circling on the level below">

## A tribute page

It deserved more than a fix, so I made it a [tribute page](https://br3nt.github.io/flow-tribute/) where you can play it.

The page is styled like the game. The background colour comes straight from `levels.xml`: it starts at the title screen's bright `#00BFFF` and sinks through every level's colour as you scroll, down to the final boss's near-black. Glowing particles pop in and out, and blurred creatures drift on a layer behind the page, the way the next level down shows through in the game: snakefish, jelly rings, and once you're deep enough, a manta. If you're on a computer, a little creature follows your mouse and eats the food floating around the page.

<img class="flow-shot" src="/assets/img/flow-deep.jpg" alt="The Manta Boss level: a dark teal sea with the huge kite-shaped manta, curved sides and glowing nodes, beside the player's small creature">

For The Space Game I kept the game files out of the repo and had people download them themselves. That would be miserable here with 43 files, so this time the page hosts them, unmodified, and lists where each one came from, with Jenova Chen's server first. If he'd rather it didn't, I'll take them down.

I hope you love this one as much as I do :)

<img class="flow-shot" src="/assets/img/flow-tribute.jpg" alt="The flOw tribute page: the flOw logo over a bright blue sea of particles and blurred creatures, with a round Play button">

<a class="flow-play" href="https://br3nt.github.io/flow-tribute/" target="_blank" rel="noopener">▶ Play flOw →</a>

<p class="flow-cap">Source: <a href="https://github.com/br3nt/flow-tribute">github.com/br3nt/flow-tribute</a></p>
