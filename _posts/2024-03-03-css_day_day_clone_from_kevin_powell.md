---
title: CSS Day clone by David Powell
last_updated: 2024-03-03
draft: true
---

This page is following along to the [Can I clone this fun effect from CSS Day using modern CSS?](https://youtu.be/fs_5R8V4JCI?si=miqApIn_7SJgY9b0) YouTube video by David Powell.

<div class="breakout">
  <div class="speakers-grid">
    <ul>
      <li><a href="">Miriam Suzanne<img src="https://assets.codepen.io/308367/miriam.jpg" /></a>: MC</li>
      <li><a href="">Jeremy Keith<img src="https://assets.codepen.io/308367/jeremy.jpg" /></a>: MC</li>
      <li><a href="">Tab Atkins<img src="https://assets.codepen.io/308367/tab.jpg" /></a>: Anchor Positioning</li>
      <li><a href="">Josh Comeau<img src="https://assets.codepen.io/308367/josh.jpg" /></a>: How to Teach CSS</li>
      <li><a href="">Rachel Andrew<img src="https://assets.codepen.io/308367/rachel.jpg" /></a>: MC</li>
      <li><a href="">Matthias Ott<img src="https://assets.codepen.io/308367/matthias.jpg" /></a>: MC</li>
      <li><a href="">Stephen Hay<img src="https://assets.codepen.io/308367/stephen.jpg" /></a>: MC</li>
      <li><a href="">Julia Miocene<img src="https://assets.codepen.io/308367/julia.jpg" /></a>: Character Modelling</li>
      <li><a href="">Roel Nieskens<img src="https://assets.codepen.io/308367/roel.jpg" /></a>: Typography</li>
      <li><a href="">Roma Komarov<img src="https://assets.codepen.io/308367/roma.jpg" /></a>: Impactful Experimentation</li>
      <li><a href="">Sarah Dayan<img src="https://assets.codepen.io/308367/sarah.jpg" /></a>: Utility First CSS</li>
      <li><a href="">Carmen Ansio<img src="https://assets.codepen.io/308367/carmen.jpg" /></a>: Scroll-Enhanced Experiences</li>
      <li><a href="">Kevin Powell<img src="https://assets.codepen.io/308367/kevin.jpg" /></a>: Writing Robust CSS</li>
    </ul>
  </div>
</div>


<style>
  .speakers-grid {
    margin-top: 4rem;
    margin-bottom: 4rem;

    --column-count: 3;
    --row-count: 5;
    --column-size: 100px;
    --row-size: 50px;
    --hover-animation-ms: 2000ms;
    --primary-color: #986960;
    --text-color: var(--primary-color);
    --link-color: color-mix(in srgb, var(--primary-color), black 40%);
    --link-hover-color: color-mix(in srgb, var(--primary-color), white 90%);
    --link-hover-background-color: color-mix(in srgb, var(--primary-color), black 40%);

    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(var(--column-count), var(--column-size)) 60px [list-start] 1fr [list-end];
    grid-template-rows: [list-start] auto repeat(var(--row-count), var(--row-size)) auto [list-end];

    position: relative;

    ul {
      grid-area: list;

      list-style: none;
      margin: 0;
      padding: 0;
    }

    li {
      color: var(--text-color);
    }

    li:nth-child(3n + 1) img {
      grid-column: 1 / 2;
    }

    li:nth-child(3n + 2) img {
      grid-column: 2 / 3;
    }

    li:nth-child(3n + 3) img {
      grid-column: 3 / 4;
    }

    li:nth-child(-n + 3) img {
      grid-row: 2 / 3;
    }

    li:nth-child(n + 4):nth-child(-n + 6) img {
      grid-row: 3 / 4;
    }

    li:nth-child(n + 7):nth-child(-n + 9) img {
      grid-row: 4 / 5;
    }

    li:nth-child(n + 10):nth-child(-n + 12) img {
      grid-row: 5 / 6;
    }

    li:nth-child(n + 13):nth-child(-n + 15) img {
      grid-row: 6 / 7;
    }

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0.5rem;

      transition: var(--hover-animation-ms);
    }

    a {
      color: var(--link-color);
      text-decoration: underline;
      transition: initial;
      background: initial;
      font-weight: initial;

      padding: 2px 0 2px 4px;
    }

    a:not(:hover, :focus) img {
      animation: z-index-hack var(--hover-animation-ms);
    }

    a:is(:hover, :focus) {
      color: var(--link-hover-color);
      background-color: var(--link-hover-background-color);

      img  {
        scale: 2;
        z-index: 2;
        width: initial;
        height: initial;
        object-fit: initial;
      }
    }

    @keyframes z-index-hack {
      0%, 100% { z-index: 1; }
    }
  }
</style>


This clone demonstrates some interesting uses and quirks of <code>grid</code>.

<pre class="breakout-md"><code>
.speakers-grid {
    --column-count: 3;
    --row-count: 5;
    --column-size: 100px;
    --row-size: 50px;

    display: grid;
    gap: 1rem;

    grid-template-columns:
        repeat(var(--column-count), var(--column-size)) 60px [list-start] 1fr [list-end];

    grid-template-rows:
        [list-start] auto repeat(var(--row-count), var(--row-size)) auto [list-end];
}
</code></pre>

The above code defines a grid which has 5 columns and 5 rows. <code>repeat()</code> is used along with the CSS variables to define the size of the grid the images will get placed inside. A [grid area](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Grid_template_areas) called <code>list</code> has also been defined which spans the last column and all the rows.

As the images are not child elements of the <code>.speakers-grid</code> grid, a hack needs to be introduced to place them with  <code>grid-template-columns</code> and <code>grid-template-rows</code>.  By positioning the images absolutely within the <code>.speakers-grid</code> grid, they can be positioned within the grid.

<pre><code>
.speakers-grid {
    position: relative;

    img {
        position: absolute;
        left: 0;
        top: 0;
    }


    li:nth-child(3n + 1) img {
        grid-column: 1 / 2;
    }

    li:nth-child(3n + 2) img {
        grid-column: 2 / 3;
    }

    li:nth-child(3n + 3) img {
        grid-column: 3 / 4;
    }

    li:nth-child(-n + 3) img {
        grid-row: 2 / 3;
    }

    li:nth-child(n + 4):nth-child(-n + 6) img {
        grid-row: 3 / 4;
    }

    li:nth-child(n + 7):nth-child(-n + 9) img {
        grid-row: 4 / 5;
    }

    li:nth-child(n + 10):nth-child(-n + 12) img {
        grid-row: 5 / 6;
    }

    li:nth-child(n + 13):nth-child(-n + 15) img {
        grid-row: 6 / 7;
    }
}
</code></pre>

One thing that stands out is the duplication required to set images to specific grid positions.  Specifically, we need to know in advance how many rows of images there will be.  In order for more rows of images to be added, additional styling is needed.

It would be nice to have access to the value of <code>n</code> to use in calculations within the style block.  This could greatly simplify the CSS:

<pre><code>
li img {
  /* Calculate the column position */
  grid-column: calc((n - 1) % 3 + 1) / span 1;

  /* Calculate the row position */
  grid-row: calc((n - 1) / 3 + 2) / span 1;
}
</code></pre>


A <code>transition</code> is used to enlarge and reveal the full image on hover.

<pre><code>
.speakers-grid {
    --hover-animation-ms: 200ms;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 0.5rem;
        transition: var(--hover-animation-ms);
    }

    a:is(:hover, :focus) {
      img  {
        scale: 2;
        z-index: 2;
        width: initial;
        height: initial;
        object-fit: initial;
      }
    }
}
</code></pre>

Due to the <code>transition</code>, the <code>z-index</code> changes abruptly when moving the cursor off off a link.  This causes other images to be rendered on top of the collapsing image.  An <code>animation</code> can be used to correct this by controlling the <code>z-index</code> for the duration of the <code>transition</code>.

<pre><code>
.speakers-grid {
    --hover-animation-ms: 200ms;

    a:not(:hover, :focus) img {
      animation: z-index-hack var(--hover-animation-ms);
    }

    @keyframes z-index-hack {
        0%, 100% { z-index: 1; }
    }
}
</code></pre>

I also took some time to learn how to use <code>color-mix</code> for the text and link colour and background colour.
