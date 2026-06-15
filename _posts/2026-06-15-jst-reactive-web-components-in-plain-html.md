---
title: "JST: reactive web components in plain HTML, no build step"
date: 2026-06-15 22:45:00 +0930
excerpt: "A couple of years ago I built a todo app with nothing but HTML and JS and a question stuck with me: what would a front-end component look like if the server could stream it down like htmx, but it still ran on the client like Alpine — with no build step? JST is my answer, and it's live."
tags: javascript, web-components, jst, htmx, frontend, ai
---

<style>
  .jst-cta {
    display: inline-block; margin: 0.4em 0 1.4em;
    padding: 0.7em 1.4em; border-radius: 8px;
    background: deeppink; color: #fff; font-weight: 700;
    text-decoration: none; letter-spacing: 0.3px;
  }
  .jst-cta:hover { background: #d81b76; }
  .jst-tag { font-family: ui-monospace, Menlo, monospace; }
</style>

A couple of years ago I built [a todo app with nothing but HTML and JavaScript]({% post_url 2024-01-07-htmx_todo_app_html_and_js_only %}), and a question stuck with me ever since: what would a *front-end* component look like if the server could stream it down — like [htmx](https://htmx.org) — but it still ran on the client, like [Alpine](https://alpinejs.dev) — and there was **no build step** at all?

This is my answer. It's called **<span class="jst-tag">&lt;JST/&gt;</span>** — JavaScript Templates — and it's live now:

<a class="jst-cta" href="https://br3nt.github.io/jst/" target="_blank" rel="noopener">See JST → br3nt.github.io/jst</a>

## What it is

A `<script type="jst">` tag is compiled into a class and registered with `customElements.define()`. That's it. Your `<jst-*>` tags are *genuine custom elements* — inspectable in DevTools, scriptable with plain properties, usable inside any framework or none. You write them in ordinary HTML, with JavaScript itself as the templating language:

```html
<script type="module" src="jst.js"></script>

<script type="jst" name="hello-name" name>
  <p>Hello, <strong>$(name)</strong>!</p>
  <button @click="$(() => el.name = 'world')">reset</button>
</script>

<hello-name name="JST"></hello-name>
```

No compiler, no bundler, no JSX, no virtual DOM, no signals. The counter on the landing page is a JST component running on the page itself — view source and it's all there.

## The bit I actually care about

It's **just Web Components under the hood**, which means it rides the platform instead of replacing it: rich data flows in as properties, actions flow out as bubbling `CustomEvent`s, and the DOM is patched in place by morphing.

And it reframes the htmx idea in a way that closes htmx's one gap. Your API can speak **hypertext instead of JSON** — a response *is* the UI, HTML carrying its own next actions. Because that HTML can contain real `<script type="jst">` components, the response brings its own front-end interactivity along with it. htmx's "the server just returns HTML" simplicity, but with client-side behaviour in the same payload — and no JSON contract, no parallel client app. You don't even need a backend: a whole JST app can be a folder of static files. (The site is exactly that — GitHub Pages, no server.)

## The honest part

I didn't want to hand-wave the "it can do anything" claim, so I rebuilt **70 of the canonical examples** from HTMX, Alpine, Vue, and React in JST and catalogued how it went:

<a class="jst-cta" href="https://br3nt.github.io/jst/framework_parity/index.html" target="_blank" rel="noopener">Browse the comparison → 70 examples, side by side</a>

The tally: **35 exact matches, 35 that needed a documented workaround, and 0 that were impossible.** You can flip between the JST source and the original framework's source for every single one. The gaps are real and listed plainly — no two-way binding sugar, no transition/animation directives, no keyed list reconciliation, no lifecycle teardown hooks. Where JST shines is the stuff its model is built for: server-streamed components, lift-state-up, slots and composition.

It's an **experimental preview** — still very much under active development and experimentation, chasing parity with the big players. But it runs, it's tested (the framework, the examples, and the editor tooling all have headless test suites), and the whole thing — including the comparison browser you're clicking through — is built with JST itself.

Built over a handful of sessions with Claude (Fable 5, then Opus), but the design and the stubbornness about "no build, no signals, just the platform" are mine.

Every line is open source:

<a class="jst-cta" href="https://github.com/br3nt/jst" target="_blank" rel="noopener">github.com/br3nt/jst →</a>
