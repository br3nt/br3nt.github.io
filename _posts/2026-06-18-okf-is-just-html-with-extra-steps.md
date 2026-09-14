---
title: "OKF is just HTML with extra steps"
date: 2026-06-18 00:00:00 +0930
excerpt: "Google's Open Knowledge Format and Andrej Karpathy's LLM wiki are good in theory, but also a reinvention of something the web has had for thirty years. A tongue-in-cheek case for just using HTML."
tags: [html, ai, web, okf]
---

<style>
/* person cards are global (assets/css/style.css); this post's two tweaks */
.person-pop { max-height: min(70vh, 440px); overflow-y: auto; }
.person-pic img { max-height: 230px; object-fit: cover; object-position: center 25%; }

/* give lists a normal paragraph gap above (theme hugs them to the intro line) */
.post-body p:has(+ ul) { margin-bottom: 1.1em; }

/* ---- breakout table (escapes the text column so cells don't wrap) ---- */
.okf-table {
  width: min(100vw - 3rem, 980px); position: relative; left: 50%;
  transform: translateX(-50%); margin: 1.6em 0; overflow-x: auto;
}
.okf-table table { border-collapse: collapse; width: 100%; }
.okf-table th, .okf-table td {
  border: 1px solid #cbd5e1; padding: .5em .75em; text-align: left; vertical-align: top;
}
.okf-table th { background: #f1f5f9; }
.okf-table td code, .okf-table th code { white-space: nowrap; }
</style>

<div class="post-body" markdown="1">

Today I stumbled across a video by <span class="person"><button class="person-btn">Marie Haynes</button><span class="person-pop"><span class="person-head">Marie Haynes</span><span class="person-bio">An SEO consultant and AI-search analyst who has spent years decoding how Google ranks and surfaces content. She runs Marie Haynes Consulting and publishes prolifically on search and how AI is reshaping discovery.</span><span class="person-links"><a href="https://www.mariehaynes.com/" target="_blank" rel="noopener">mariehaynes.com</a><a href="https://www.youtube.com/@Marie_Haynes" target="_blank" rel="noopener">YouTube, @Marie_Haynes</a></span></span></span>, [Google's OKF - The New Way to Structure Your Knowledge for Agents](https://youtu.be/MY9F9K7wWX4?si=huHIlKkgDKddjjFi). I was intrigued by the premise.

[Open Knowledge Format (OKF)](https://cloud.google.com/blog/products/data-analytics/how-the-open-knowledge-format-can-improve-data-sharing/) is Google's new, vendor-neutral way to represent knowledge such as the metadata, context, and curated insight that surrounds your data, so that AI agents can read it. The [spec](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md) is actually quite simple. Mostly, it's just a folder of markdown files with frontmatter conforming to some rules, an index.md, and a log.md. They call this a "bundle". Their repo also contains some rules to help create, visualise, and search the contents of the bundles.

The idea traces back to <span class="person"><button class="person-btn">Andrej Karpathy</button><span class="person-pop"><span class="person-pic"><img src="/assets/img/andrej-karpathy.png" alt="Andrej Karpathy"></span><span class="person-head">Andrej Karpathy</span><span class="person-bio">A founding member of OpenAI and former director of AI at Tesla, known for his research on neural networks and his widely-followed teaching on deep learning. He is the one who floated the "LLM wiki" idea.</span><span class="person-links"><a href="https://en.wikipedia.org/wiki/Andrej_Karpathy" target="_blank" rel="noopener">Wikipedia, Andrej Karpathy</a><a href="https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f" target="_blank" rel="noopener">The LLM wiki gist</a></span></span></span>, who floated the notion of an ["LLM wiki"](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f). It's basically OKF just using different words. Google's version mostly pins down a few rules for frontmatter and filenames.

OKF seemed like a reasonable idea: link knowledge together in files, add a few rules, and make the whole thing easier for agents to read.

But I wasn't far into the video before it hit me:

**That's just HTML. And HTML does it about 1000× better!**

## The Semantic Web called. It wants its idea back.

We had a name for this idea already: [the semantic web](https://en.wikipedia.org/wiki/Semantic_Web).

Back in 2001, <span class="person"><button class="person-btn">Tim Berners-Lee</button><span class="person-pop"><span class="person-pic"><img src="/assets/img/tim-berners-lee.jpg" alt="Tim Berners-Lee"></span><span class="person-head">Tim Berners-Lee</span><span class="person-bio">Inventor of the World Wide Web, which he proposed in 1989 at CERN. He directs the W3C and set out the original vision of the Semantic Web.</span><span class="person-links"><a href="https://en.wikipedia.org/wiki/Tim_Berners-Lee" target="_blank" rel="noopener">Wikipedia, Tim Berners-Lee</a><a href="https://www.w3.org/DesignIssues/Semantic.html" target="_blank" rel="noopener">Semantic Web road map (1998)</a><a href="https://www.w3.org/DesignIssues/Architecture.html" target="_blank" rel="noopener">Web Architecture from 50,000 feet (1998)</a></span></span></span> pitched a web of linked, machine-readable meaning for software agents to traverse, with structured data embedded right in the documents. He had sketched it years before that, from "a level of 20,000ft", in his [Semantic Web road map](https://www.w3.org/DesignIssues/Semantic.html) and a companion paper, [Web Architecture from 50,000 feet](https://www.w3.org/DesignIssues/Architecture.html). Both make the same point: the Web was always meant for machines to take part, not just humans to read. OKF is that same dream, just with a new acronym.

That 2001 vision leaned on formal, machine-readable languages: RDF, OWL, SPARQL. They made sense when software needed explicitly encoded meaning. LLMs change that tradeoff. A model can read raw HTML, or raw anything, and infer a lot of the structure itself. The formalisms still matter for deterministic scripts and parsers, but for an agent reading knowledge, the page is often enough.

Every capability a knowledge format needs is already in HTML.

* Links - local or across the web. The link graph is the knowledge graph.
* Structure and style - that's HTML and CSS.
* Machine-readable metadata - `<meta>`, `<link rel>`, schema.org, JSON-LD, embedded in the page and read by crawlers for a decade.
* A queryable data model - the DOM. One API, no SDK.
* Its own languages - JavaScript and CSS.
* Forms - state-changing actions, declared right in the markup.
* Auth and security - sessions, OAuth, CSP, CORS, same-origin.
* Accessibility - screen readers and keyboard navigation.
* Readable and writable by agents and humans alike.
* Local or hosted - opens from a file or a server, caches offline.
* Universal - every device ships a renderer.
* Backwards-compatible forever - HTML from 1995 still renders.
* Indexable - decades of search tooling.

I may also be biased. After all, I'm building an HTML-first web framework, [JST]({% post_url 2026-06-15-jst-reactive-web-components-in-plain-html %}).

## Every OKF concept already has an HTML equivalent

The OKF concepts map almost directly onto existing web concepts:

<div class="okf-table" markdown="1">

| OKF / LLM-wiki concept | Native HTML equivalent |
| --- | --- |
| A directory of `.md` files | A directory of `.html` files, open in a browser, zip it, or serve it |
| YAML frontmatter (`type`, `tags`, `timestamp`) | `<meta>` tags in `<head>` |
| Markdown body | `<body>` |
| Markdown links `[x](/path.md)` | `<a href="/path.html">` |
| `index.md` (progressive disclosure) | `sitemap.html`, the rarely-seen-but-once-ubiquitous sitemap |
| `log.md` (update history) | `log.html` |
| "Concept ID" (path minus `.md`) | The document's own URI, like `file://…/path` or `https://host/path` |
| `# Citations` | `<cite>` / `<a>` |
| Their bespoke `viz.html` graph viewer | …the browser itself |

</div>

## OKF, but HTML-ified

Mostly as a joke, but also to prove my point, [Claude](https://claude.com/claude-code), Codex, and I rewrote the entire Google OKF repo and replaced every Markdown concept with its HTML equivalent: the spec, the README, the example bundles, the lot. You can [read the result here](https://github.com/br3nt/knowledge-catalog-but-html/pull/1). The goal was to leave the documents as untouched as possible.

The diff converts all 78 example documents to HTML, and every cross-link still resolves.

We deleted around 59,000 lines of bespoke tooling: the Python "enrichment agent", the TypeScript toolbox, and the custom graph viewer. HTML brings its own viewer: the browser. Open any `sitemap.html` from disk and you're browsing the knowledge base. No server, no install, no build step.

## So…

OKF accidentally proves HTML was the right abstraction all along.

Just use HTML!

If HTML isn't human-writable, get your agent to write it. lol.

</div>
