---
title: "Resurrecting The Space Game, a dead Flash game, by faking its server"
date: 2026-09-03 21:00:00 +0930
excerpt: "The Space Game has been unplayable since Flash died, and not because of Flash. The SWF everyone archived is a 16 KB loader that phones a server that no longer exists. In one evening Claude read the obfuscated bytecode, worked out what that server used to say, and said it back. Both games run again."
tags: ai, anthropic, fable, flash, ruffle, preservation, gamedev
---

<style>
  .tsg-shot { display: block; width: 100%; border-radius: 10px; margin: 1.2em 0 0.4em; }
  .tsg-play {
    display: inline-block; margin: 0.6em 0 1.4em;
    padding: 0.7em 1.4em; border-radius: 8px;
    background: #2b6cb0; color: #fff; font-weight: 700;
    text-decoration: none; letter-spacing: 0.3px;
  }
  .tsg-play:hover { background: #1e4e8c; }
  .tsg-cap { font-size: 0.82rem; color: #475569; margin: 0.2em 0 1.6em; }
</style>

*The Space Game* came out in 2009 on Casual Collective. David Scott built it, Somatone did the audio. You build miners on asteroids, string energy nodes and relays out from your base, and put lasers and rocket launchers around it before the pirates warp in. Later the same year came *The Space Game: Missions*, with a campaign. I put a lot of hours into both.

Flash died and they went with it. Not the usual way, though, and that turned out to be the whole story.

<img class="tsg-shot" src="/assets/img/tsg-menu.jpg" alt="The Space Game main menu: glowing yellow title, Training, Missions, Mining Modes, Survival Modes and Bonus Modes tabs, and the Bonus Modes list">

## The thing everyone archived is not the game

There is a copy on [archive.org](https://archive.org/details/thespacegame) and a copy from Kongregate. Both load under Ruffle. Both then print *"Unable to load game. Please notify www.casualcollective.com."* and stop. A 2021 thread on r/FlashpointArchive says the same thing: the SWFs pull their content from URLs that went dark, and Flashpoint Infinity could not run them either at the time.

I opened it with Claude (Fable 5.1, through Claude Code) on a weeknight expecting to poke at it for twenty minutes.

The first fact reframed everything. The archive.org SWF is 16 KB. A game is not 16 KB. It is a loader stub.

I asked whether Ghidra could decompile it. It cannot; Ghidra does not do ActionScript. JPEXS Free Flash Decompiler does. Inside the stub was a POST to `widget.casualcollective.com/load`, and the reply it expected: two fields, `w1` and `w2`. `w1` is a URL for a "widget" wrapper SWF. `w2` is an API base URL. The stub is a bootstrapper for a server that has been off for a decade.

My own Downloads folder had a copy I grabbed in 2021, sitting next to two Ruffle nightlies from the same year. So I had tried this before and not got far. Same loader, Kongregate build.

## Finding the actual game

The Wayback Machine had it. `storage.cloud.casualcollective.com/zones/pub/10/thespacegame.v83.swf`, 1.9 MB, captured in 2019. The `widget.swf` wrapper was there too, from 2017.

Running the 1.9 MB game SWF directly in Ruffle gives a blank white screen. Forever. That is where most people stop, and it looks like a Ruffle bug. It is not.

## Reading the wrapper

The widget is 740 KB of obfuscated ActionScript 2: control-flow flattening, junk constant pools, the works. Claude wrote a small script to resolve constant-pool references in the P-code so the decompiled output read as something close to source. That recovered the entire boot sequence.

It goes like this. The widget POSTs to `<api>/pub/session/setup?gid=10` and gets JSON back. `result` must be 1. The game URL is assembled from `swfs.base` plus `swfs.game` plus `".v"` plus `gamev` plus `".swf"`. `cls` is the player class, where 2 means member, which unlocks members-only content. `pd` is saved player data as `k=v,k=v`. Then it POSTs `session/start` and `levelStart` and ignores the replies. It loads a stinger, then a splash, then the game.

Then it does a handshake. The game picks `hss = random(9999999)`. The widget has to call back with the right answer:

```actionscript
game.CCHandshake((hss / 11 - int(hss / 11)) + hss % 11);
```

Only if that lands does the widget call `game.CCSetup()` and inject the `CCAPI` object.

That handshake is the white screen. The game will not start without a wrapper that knows the trick. Everyone who archived the loader stub archived a game that refuses to run unless a specific dead server answers first.

## Saying what the server used to say

So Claude wrote the server. 142 lines of Python: `load`, the `session/setup` JSON, `session/start`, `player/data` for saves, and `result=1` for anything else it did not recognise. Plus a Ruffle web page using Ruffle's `urlRewriteRules` to point the dead hostnames at it.

The setup handler is the heart of it, and it is small:

```javascript
if (path.endsWith('session/setup')) {
  const cfg = {
    result: 1,
    cls: 2, pms: 1,                            // player class 2 = member
    pd: await loadPd(gid),                     // saved player data, "k=v,k=v"
    seed: Math.floor(Math.random() * 999999) + 1,
    swfs: {
      base: 'http://storage.cloud.casualcollective.com/zones/pub',
      stinger: '/stingers/ccblocks.swf',
      game: `/${gid}/${game.stem}`, gamev: game.ver,   // /10/thespacegame, 83
    },
    // ...and a dozen fields the widget reads but never needs
  };
  return new Response(JSON.stringify(cfg), { headers: { 'Content-Type': 'application/json' } });
}
```

First run: the loader accepted the reply and pulled the widget. Then it hung at *"Loading: 89%"*.

Two gotchas, and they took longer than the decompiling.

The first: the widget's preloader waits for `getBytesLoaded() == getBytesTotal()`. Ruffle only ever satisfies that for an uncompressed child SWF. So the wrapper and the game get stored decompressed, as FWS rather than CWS, and the preloader finishes.

The second was not a bug at all. Claude was driving a Chrome tab from the terminal, and that tab was in the background, so Chrome throttled it and Ruffle ran at a crawl. A loader that takes two seconds in the foreground took a minute in the back, which reads as a hang. Claude worked that out by checking the page's visibility state, switched to Ruffle desktop with a `--proxy` flag pointed at the same fake server, and the whole chain ran in about two seconds.

The main menu came up.

<img class="tsg-shot" src="/assets/img/tsg-ingame.jpg" alt="Mission 1 of The Space Game: the briefing panel over a green nebula, asteroids around the base, the build bar along the bottom">

## Missions was harder

*Missions* is not on the Wayback Machine. Not the game SWF, not anything. Every mirror I could find, Newgrounds and freewebarcade and flashghetto, serves the same 16 KB loader stub. Google's AI answer for the problem was "use Flashpoint", which is true and unhelpful when you want the file.

Claude found the way in. Flashpoint's game submission system has an API at `fpfss.unstable.life/api/games?broad=true&after=...&afterId=...`, and it is public. Each game record carries a `game_data` entry whose `date_added` names the data pack: `download.unstable.life/gib-roms/Games/<id>-<ms>.zip`. Both packs downloaded and matched their published sha256.

The Missions pack had `tsgmissions.v16.swf`, 2.9 MB. It also had Flashpoint's own reconstructed `setup.php` covering eight Casual Collective games, the Casual Collective intro stinger, and the menu background art. Good company to find yourself in after an evening of arriving at the same answer independently.

One difference worth noting. Flashpoint handles members-only content with a patched game SWF. The fake server reports class 2 and leaves the game binary untouched, which I prefer.

<img class="tsg-shot" src="/assets/img/tsg-missions-menu.jpg" alt="The Space Game: Missions star map, dashed routes between mission nodes over purple nebulae, with Easy, Normal, Hard and Crazy completion counters">

## They are not the same game

I had assumed they were near-identical, and said so. Side by side, they share an engine and menu chrome and then diverge.

*The Space Game* has Training, Missions, Mining Modes, Survival Modes and Bonus Modes. *Missions* is an eight-mission campaign with difficulty multipliers, Easy at 1x through Normal 1.5x, Hard 2x and Crazy 3x, plus EMP, Super Miner and warp jumps.

## The last bug, and a nice accident

The loader stage is 700x525, and the game sets `Stage.scaleMode` to `noScale`. So the game drew at its native size inside a stage that was not its size, and spilled off into white. Ruffle's `forceScale` fixed it.

The accident: it is vector art. Scaled up to a full window it is still razor sharp. Flash being Flash, it sizes up and still looks great.

Before I published, I ran a separate reviewer agent over the fake server. It found five real bugs. Save data decoded twice. A save file with bad bytes could brick the load chain. A game id went into a filename unvalidated. A page parameter could be pointed at a remote SWF. The launch scripts could not tell a failed start from a slow one. All fixed. Worth the extra pass.

## What it is now

The Python server is gone. The final form is a static page plus a service worker that answers the game's requests from cache.

The catch is CORS. None of the archive hosts send the headers, so the page cannot fetch the SWFs for you. You download the two Flashpoint data packs yourself (links and checksums are on the page) and drop them on the launcher. It unzips them in the browser, converts the SWFs to uncompressed, and caches them. No SWFs in the repo, which keeps this clean.

You can also clone the repo, put the files in `storage/`, and serve it with any static server. Service workers do not run on `file://`.

The page is styled as a homage to the game. Its bar under the stage, with the volume and full-screen controls, replaces the wrapper's own grey bar, which is clipped off the bottom of the stage.

<img class="tsg-shot" src="/assets/img/tsg-launcher.jpg" alt="The launcher page: The Space Game running inside a black frame styled like the game's menu, with coloured tabs above and a volume bar below">

<a class="tsg-play" href="https://br3nt.github.io/the-space-game-launcher/" target="_blank" rel="noopener">▶ Open the launcher →</a>

<p class="tsg-cap">Source: <a href="https://github.com/br3nt/the-space-game-launcher">github.com/br3nt/the-space-game-launcher</a></p>

## The takeaway

Almost no code was written. About 140 lines of Python, and about the same again when it became a service worker. Nothing clever, nothing original, no reimplementation of anything.

The work was reading obfuscated bytecode until we knew what the dead server used to say, and then saying it. That is the whole job. The game was never broken. Its conversation partner went away.

Claude did the parts I would have quit over: the constant-pool script, the boot sequence, the Flashpoint API. I did the parts that needed a person in the room. Remembering that I might have grabbed the file before. Knowing the sizing looked wrong rather than merely different. Saying the two games looked the same, and being shown side by side that they don't. Asking whether we needed a server at all.

The same widget served every Casual Collective game: Desktop Tower Defense Pro, Buggle Stars, Desktop Armada, Flash Element TD 2 and the rest. The launcher does not care which game id it is answering for. Given the files, it can in principle bring the others back too.
