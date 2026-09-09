---
title: "Resurrecting The Space Game, a dead Flash game, by faking its server"
date: 2026-09-03 21:00:00 +0930
excerpt: "The Space Game has been unplayable since Flash died, and not because of Flash. The SWF everyone archived is a 16 KB loader that phones a server that no longer exists. I used Claude to read the obfuscated bytecode to work out the server protocol so we could mock the server. The game runs again."
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
  .tsg-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 1.2em 0 1.6em; }
  .tsg-grid img { display: block; width: 100%; border-radius: 8px; }
  @media (max-width: 640px) { .tsg-grid { grid-template-columns: 1fr; } }
  .tsg-err { margin: 1em 0 1.4em; padding: 0.7em 1em; border-left: 5px solid #e6b800; background: #fff6cc; color: #4a3d00; font-weight: 600; }
  .tsg-err p { margin: 0; }
  /* inline person profile */
  .person { position: relative; display: inline; }
  .person-btn { font: inherit; cursor: pointer; background: none; border: none; padding: 0; color: inherit; text-decoration: underline; text-decoration-style: dotted; text-underline-offset: 3px; text-decoration-color: #ff3399; }
  .person-btn:hover { color: #d81b76; }
  .person-pop { display: none; position: absolute; z-index: 30; left: 0; top: 1.7em; width: min(340px, 80vw); padding: .75em .85em; background: #fff; border: 1px solid #cbd5e1; border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,.18); font-size: .82rem; line-height: 1.45; text-align: left; white-space: normal; font-weight: 400; }
  .person.open .person-pop { display: block; }
  .person-head { font-weight: 700; margin-bottom: .15em; }
  .person-bio { color: #475569; }
  .person-links { margin-top: .4em; }
  .person-links a { display: block; margin-top: .35em; }
  @media (max-width: 640px) { .person-pop { position: fixed; left: 1rem; right: 1rem; top: auto; bottom: 1rem; inset-inline: 1rem; width: auto; max-width: none; max-height: 70vh; overflow-y: auto; z-index: 100; box-shadow: 0 -6px 30px rgba(0,0,0,.28); } }
</style>

*The Space Game* is one of my favourite Flash games. You mine asteroids for minerals and build out your base with solar stations, lasers, and misile launchers to protect youself from waves of the pirates that warp in to attack.  The lasers use up your energy reserves, and building and missiles cost minerals.  A wave or two of pirates could easily overwhelm your base.  The game mechanics were simple but addictive, and I loved the vector style art and the soundtrack.

The game was release in 2009.  Coding and artwork was by <span class="person"><button class="person-btn">David Scott</button><span class="person-pop"><span class="person-head">David Scott</span><span class="person-bio">Co-founder of Casual Collective with Paul Preece. Made Flash Element TD in 2007, then The Space Game and its Missions follow-up. Casual Collective became KIXEYE in 2011.</span><span class="person-links"><a href="https://web.archive.org/web/2009/http://www.casualcollective.com/" target="_blank" rel="noopener">Casual Collective in 2009, Wayback Machine</a><a href="https://www.kongregate.com/en/games/casualcollective/the-space-game" target="_blank" rel="noopener">The Space Game on Kongregate</a></span></span></span> from Casual Collective and the music and sound effects by Somatone. Later the same year came *The Space Game: Missions*, expanding the original game with a campaign.

<div class="breakout-md tsg-grid">
  <img src="/assets/img/tsg-menu-grid.jpg" alt="The Space Game main menu: glowing yellow title, Training, Missions, Mining Modes, Survival Modes and Bonus Modes tabs">
  <img src="/assets/img/tsg-build.jpg" alt="Mission 3 in play: a base of energy nodes, miners and lasers strung across an asteroid field, the build bar open, 17 exploders detected">
  <img src="/assets/img/tsg-wave.jpg" alt="A pirate wave closing in: 30 missile ships detected, the minimap full of red, the base bristling with lasers">
  <img src="/assets/img/tsg-complete.jpg" alt="The Mission Complete screen: 346 ships killed, 5732 minerals mined, with energy and mining graphs for the run">
</div>

When flash died, so did the game. Most flash games, however, can run on Ruffel.  But not The Space Game.  The game starts to load, then displays the error:

> Unable to load game. Please notify www.casualcollective.com.
{: .tsg-err}

## The thing everyone archived is not the game

A copy of the game is made available on [archive.org](https://archive.org/details/thespacegame) and [Kongregate](https://www.kongregate.com/en/games/casualcollective/the-space-game-missions). Both sites load the game using Ruffle. Both then print *"Unable to load game. Please notify www.casualcollective.com."* and stop. A 2021 thread on [r/FlashpointArchive](https://www.reddit.com/r/FlashpointArchive/comments/ng5m51/the_space_game_and_the_space_game_missions_try_to/) says the same thing: the SWFs pull their content from URLs that went dark, and Flashpoint Infinity could not run them either at the time.

I've been wanting to replay this game forever.  My own Downloads folder had a copy I grabbed in 2021, sitting next to two Ruffle nightlies from the same year. So I had tried this before and not got far.

I've had a lot of luck getting Claude help me get old games running on my Mac, so I figured it was the perfect AI for the job!

Claude quickly realised the SWF being run on archive.org just a loader stub.  The SWF was only 16kb.  I asked whether Ghidra could decompile it. It cannot; Ghidra does not do ActionScript.  Claude was already many steps ahead of me.  Claude was using JPEXS Free Flash Decompiler and replied that the stub was a POST to `widget.casualcollective.com/load`, and the reply it expected was two fields, `w1` and `w2`. `w1` is a URL for a "widget" wrapper SWF. `w2` is an API base URL. The stub is a bootstrapper for a server that has been off for a decade.

So two things become apparent: We need to mock the web server the SWF is expecting to communicate with, and we need to find the actual game!

## Finding the actual game

Of course, the Wayback Machine had it! `storage.cloud.casualcollective.com/zones/pub/10/thespacegame.v83.swf`, 1.9 MB, captured in 2019. The `widget.swf` wrapper was there too, from 2017.

Running the 1.9 MB game SWF directly in Ruffle gives a blank white screen. Forever.  A Ruffle bug??  "this SWF renders blank in Ruffle" is a common report there, usually a missing ActionScript feature. Another dead end.

## Reading the wrapper

The widget fetched by the wrapper is 740 KB of obfuscated ActionScript 2: control-flow flattening, junk constant pools, the works. Claude wrote a small script to resolve constant-pool references in the P-code so the decompiled output read as something close to source. That recovered the entire boot sequence.

The widget's protocol goes like this:

- The widget POSTs to `<api>/pub/session/setup?gid=10` and gets JSON back.
- `result` must be 1, or the widget gives up.
- `swfs.base`, `swfs.game` and `gamev` combine to give the URL of the actual game SWF.
- `cls` is the player class, where 2 means member, which unlocks members-only content.
- `pd` is saved player data as `k=v,k=v`.
- Then it POSTs `session/start` and `levelStart` and ignores the replies.
- It loads a stinger (the Casual Collective logo animation), then a splash, then the game.

Then the widget and the game perform a handshake.

The game side looks like this:

```actionscript
var hss = random(9999999);

function CCHandshake(n) {
  if (n == hss / 11 - int(hss / 11) + hss % 11) {
    this.hsok = getTimer();
    delete this.CCHandshake;   // one shot
    delete this.hss;
    return true;
  }
  return false;
}

function CCSetup() {
  _root.setupLevel = function (n, showReminder, sameseed) { ... };
  _root.showMenu = function (n) { ... };
  _root.gotoAndStop(2);        // frame 2 is the main menu
}
```

And the widget side, from its "Run Game" step is:

```actionscript
TraceLocal("Run Game:" + gameswf._name);
var h = gameswf.hss;                       // reads the child's variable
if (gameswf.CCHandshake(h / 11 - int(h / 11) + h % 11)) {
  TraceLocal("HS ok");
  topOptions.UpdateVolume();
  gameswf.CCSetup();
  removeMovieClip(GameSplash);
  topOptions.SetForStart();
  txtStatus.text = "Handshake OK:" + ...;
} else {
  TraceLocal("HS FAIL");
  txtStatus.text = "Handshake FAIL";
}
```

In words, the handshake goes like this:

1. The widget loads the game SWF into a child movie clip inside itself.
2. On startup the game picks a random number up to 9,999,999, and stores it as a variable on itself: `hss = random(9999999)`
3. In Flash a parent can read its child's variables directly, and both files come from the same domain so the sandbox allows it. The widget reads the game's `hss`.
4. The widget runs the formula on that number and calls the game back with the result: `game.CCHandshake((hss / 11 - int(hss / 11)) + hss % 11)`
5. The game runs the same formula on its own number, compares, and returns `true`, or `flase` if the handshake failed.
6. On a successful handshake, the widget calls `gameswf.CCSetup()`, otherwise, the game remains on the white screen indefinately.

The `CCAPI` object is not part of the handshake. The widget attaches it to the game clip the moment the last byte of the game SWF arrives, before the game's first frame runs, so by the time the handshake happens the game already has its API.

What is interesting is that it is the widget rather than the game that vlaidates the handshake.  It seems anyone with the actual game could just call `gameswf.CCSetup()`, and the game would run.  I would have thought the handshake should be validated in `gameswf.CCSetup()`.  However, that wrapper also provides the API to corrently fetch data from the server and set game variables required by certain featires of the game. 

## Mocking the server

Now we know the protocols by the different wrappers and widgets, we know whats required to run the game correctly.

To keep things super simple, I instructed claude to mock the server using a JavaScript Service Worker.  Service Wrokers are able to intercept any web request a webpage makes, which is perfect for mocking!


So Claude wrote the service worker. About 150 lines: the `load` reply, the `session/setup` JSON, `session/start`, `player/data` for saves, and `result=1` for anything else it did not recognise. The page tells Ruffle, through its `urlRewriteRules`, to send requests for the two dead hostnames to the worker instead. The loader, the widget and the game run unmodified.

The setup handler looks like this:

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

The next gotcha we ran into was a hang at *"Loading: 89%"*.

It turns out, the widget's preloader waits for `getBytesLoaded() == getBytesTotal()`. Ruffle only ever satisfies that for an uncompressed child SWF.  The original CasualCollective servers served a compressed version, and this compressed version is what the Wayback Machine and Flashpoint hold.  So we need to decompress the file and store as a FWS.  This then allows the preloader finishes.

The main menu came up.

<img class="tsg-shot" src="/assets/img/tsg-ingame.jpg" alt="Mission 1 of The Space Game: the briefing panel over a green nebula, asteroids around the base, the build bar along the bottom">

## Missions was harder

*Missions* is not on the Wayback Machine. Not the game SWF, not anything. Every mirror I could find, Newgrounds and freewebarcade and flashghetto, serves the same 16 KB loader stub. Google's AI answer for the problem was "use Flashpoint", which is true and unhelpful when you want the file.

Claude found the way in. Flashpoint's game submission system has a public API at `fpfss.unstable.life/api/games`, and each game record names its data pack under `download.unstable.life/gib-roms/Games/`. Both packs downloaded and matched their published sha256.

The Missions pack had `tsgmissions.v16.swf`, 2.9 MB. It also had Flashpoint's own reconstructed `setup.php` covering eight Casual Collective games, which answers the same questions the service worker does, plus the Casual Collective intro stinger and the menu background art.

One difference worth noting. Flashpoint handles members-only content with a patched game SWF. The service worker reports class 2 and leaves the game binary untouched, which I prefer.

<img class="tsg-shot" src="/assets/img/tsg-missions-menu.jpg" alt="The Space Game: Missions star map, dashed routes between mission nodes over purple nebulae, with Easy, Normal, Hard and Crazy completion counters">

## They are not the same game

I had assumed they were near-identical, and said so. Side by side, they share an engine and menu chrome and then diverge.

*The Space Game* has Training, Missions, Mining Modes, Survival Modes and Bonus Modes. *Missions* is an eight-mission campaign with difficulty multipliers, Easy at 1x through Normal 1.5x, Hard 2x and Crazy 3x, plus EMP, Super Miner and warp jumps.

## Saving progress

The `pd` field in the setup JSON is the save. The game asks the widget for it through `CCAPI.GetPersistantData()`, and when something changes the widget POSTs the whole string back to `player/data`. Casual Collective stored it against your account. The service worker stores it in the browser's Cache Storage, one entry per game, and hands it back on the next `session/setup`. Refresh the page and you are where you left off.

The save strings are tiny. *The Space Game* keeps a count of missions completed, `mC=1`. *Missions* keeps a state, a difficulty and a score for each mission:

```
m1=2,l1=1,s1=19666,m2=2,l2=1,s2=19516,m3=1
```

One gotcha. The game runs the string through `escape()` before handing it to the widget, and the POST encodes it again. Decode the POST once and store what is left, and on the next load the game reads a single giant key and the save snowballs. The fix is a second decode before storing:

```javascript
if (path.endsWith('player/data')) {
  let pd = form.get('pd') ?? q.get('pd');
  try { pd = pd && decodeURIComponent(pd); } catch {}
  if (pd) await savePd(gid, pd);
  return text('result=1');
}
```

The game also posts scores to `session/score` after every level. The worker acknowledges them and forgets them. There is no leaderboard to send them to any more.

## The last bug, and a nice accident

The loader stage is 700x525, and the game sets `Stage.scaleMode` to `noScale`. So the game drew at its native size inside a stage that was not its size, and spilled off into white. Ruffle's `forceScale` fixed it.

The accident: it is vector art. Scaled up to a full window it is still razor sharp. Flash being Flash, it sizes up and still looks great.

## The launcher

The final form is a static page on GitHub Pages plus the service worker. No server anywhere.

The catch is CORS. None of the archive hosts send the headers, so the page cannot fetch the SWFs for you. You download them yourself (links and checksums are on the page) and drop them on the launcher. It unzips the Flashpoint packs in the browser, converts the SWFs to uncompressed, checks them against the expected hashes and keeps them in the browser's cache. No SWFs in the repo, which keeps this clean.

A few things the page does beyond serving files:

- It pauses the game while its tab is in the background and resumes it when you come back, the way Steam does. Browsers throttle background tabs, which slows Ruffle to a crawl, so a clean pause beats a half-speed game playing to nobody.
- The banner buttons inside *Missions* still point at casualcollective.com. The one that offers the original game opens it in the launcher. The one that invites you to join the Collective opens the Wayback Machine's 2009 copy of the site.
- The saved progress for each game is listed on the Get the files tab, and can be cleared on its own.
- The How it works tab tells the story above in a few paragraphs, with the four-step boot sequence, for anyone who lands on the page wondering why the archived SWF does not work.

You can also clone the repo, put the files in `storage/`, and serve it with any static server. Service workers do not run on `file://`.

The page is styled as a homage to the game. Its bar under the stage, with the volume and full-screen controls, replaces the wrapper's own grey bar, which is clipped off the bottom of the stage.

<img class="tsg-shot" src="/assets/img/tsg-launcher.jpg" alt="The launcher page: The Space Game running inside a black frame styled like the game's menu, with coloured tabs above and a volume bar below">

<a class="tsg-play" href="https://br3nt.github.io/the-space-game-launcher/" target="_blank" rel="noopener">▶ Open the launcher →</a>

<p class="tsg-cap">Source: <a href="https://github.com/br3nt/the-space-game-launcher">github.com/br3nt/the-space-game-launcher</a></p>

## The takeaway

Almost no code was written. The service worker is 150 lines, and the page around it is a few hundred more. Nothing clever, nothing original, no reimplementation of anything.

The work was reading obfuscated bytecode until we knew what the dead server used to say, and then saying it. That is the whole job. The game was never broken. Its conversation partner went away.

Claude did the parts I would have quit over: the constant-pool script, the boot sequence, the Flashpoint API. I did the parts that needed a person in the room. Remembering that I might have grabbed the file before. Knowing the sizing looked wrong rather than merely different. Saying the two games looked the same, and being shown side by side that they don't. Asking whether saves could work, and playing long enough to prove they did.

The same widget served every Casual Collective game: Desktop Tower Defense Pro, Buggle Stars, Desktop Armada, Flash Element TD 2 and the rest. The launcher does not care which game id it is answering for. Given the files, it can in principle bring the others back too.

<script>
(function () {
  document.querySelectorAll('.person-btn').forEach(function (btn) {
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
