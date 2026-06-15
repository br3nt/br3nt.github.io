---
title: "JST: reactive web components in plain HTML, no build step"
date: 2026-06-15 22:30:00 +0930
excerpt: "A couple of years ago I built a todo app with nothing but HTML and JS, and a question stuck with me. What would a front-end component look like if the server could stream it down like htmx, but it still ran on the client like Alpine, with no build step? JST is my answer, and it's live."
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

A couple of years ago I built a todo app with nothing but HTML and JavaScript, and a question stuck with me ever since. What would a front-end component look like if the server could stream it down, the way [htmx](https://htmx.org) does, but it still ran on the client like [Alpine](https://alpinejs.dev), with no build step at all?

This is my answer. It's called <span class="jst-tag">&lt;JST/&gt;</span>, short for JavaScript Templates, and it's live now:

<a class="jst-cta" href="https://br3nt.github.io/jst/" target="_blank" rel="noopener">See JST → br3nt.github.io/jst</a>

## What it is

A `<script type="jst">` tag gets compiled into a custom element class and registered with `customElements.define()`. There's a fair bit going on behind that line: a small lexer, parser and compiler turn the template into a render function, and a morphing step patches the DOM on updates. But what you write stays plain HTML, with JavaScript itself as the templating language. Your `<jst-*>` tags come out as genuine custom elements, so you can inspect them in DevTools, script them with plain properties, and drop them into any framework or none at all:

```html
<script type="module" src="jst.js"></script>

<script type="jst" name="hello-name" name>
  <p>Hello, <strong>$(name)</strong>!</p>
  <button @click="$(() => el.name = 'world')">reset</button>
</script>

<hello-name name="JST"></hello-name>
```

No compiler, no bundler, no JSX, no virtual DOM, no signals. The counter on the landing page is a JST component running on the page itself. View source and it's all right there.

## The part I actually care about

It's just web components underneath, so it rides the platform instead of replacing it. Rich data goes in as properties, actions come back out as bubbling `CustomEvent`s, and the DOM gets patched in place by morphing.

It also reframes the htmx idea in a way that closes htmx's one gap. Your API can speak hypertext instead of JSON, so a response is the UI itself: HTML that carries its own next actions. And because that HTML can contain real `<script type="jst">` components, the response brings its own front-end interactivity along with it. You get htmx's "the server just returns HTML" simplicity, plus client-side behaviour in the same payload, with no JSON contract and no separate client app to keep in sync. You don't even need a backend. A whole JST app can be a folder of static files. This site is exactly that, just GitHub Pages with no server.

## Does it actually work?

I didn't want to hand-wave the "it can do anything" claim, so I rebuilt 70 of the canonical examples from HTMX, Alpine, Vue and React in JST, and wrote down how each one went.

<a class="jst-cta" href="https://br3nt.github.io/jst/framework_parity/index.html" target="_blank" rel="noopener">Browse the comparison → 70 examples, side by side</a>

The tally came out at 35 exact matches, 35 that needed some kind of workaround, and 0 that were impossible. For every example you can flip between the JST source and the original framework's source. The gaps are real and I've listed them plainly: there's no two-way binding sugar, no transition or animation directives, no keyed list reconciliation, and no lifecycle teardown hooks. Where it does well is the stuff its model is built for, like server-streamed components, lifting state up, and slots and composition.

It's an experimental preview, still very much under active development and chasing parity with the big players. But it runs, it's tested (the framework, the examples and the editor tooling all have headless test suites), and the whole thing, including the comparison browser you're clicking through, is built with JST itself.

I started this by hand, back before agentic coding tools were really a thing, and I've been tinkering with it on and off for a while since. Claude, Gemini and Codex all pushed it forward at different points, but it was Fable that consolidated and cleaned up the design, pulling it back toward what I'd had in mind from the start. The stubbornness about "no build, no signals, just the platform" was always mine.

Every line is open source:

<a class="jst-cta" href="https://github.com/br3nt/jst" target="_blank" rel="noopener">github.com/br3nt/jst →</a>
