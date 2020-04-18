---
title: "display: compact-block"
status: published
---

I wish there was the concept of a `compact-block` in css.

An element with `display: compact-block` would be exactly the same as wrapping an inline element with a block element.

The reason I want this is so I can display a list of links as if they were block elements for easy of styling, but their bounding box is only as wide as the text.  This would enable me to use `background-clip: text` with a `background: linear-gradient(to right, #00BFFF 0%, #1E90FF 100%);` and have the gradient applied to the width of the text and not the whole block.

It has many advantages over other solutions.

We could for example apply f`loat:left; clear:left;` to an inline element.  This pushes sibling elements onto new lines, and the bounding box (or whatever it's called) is only as wide as the text and it's padding.  The drawback of this is that the element doesn't contribute to the height of the parent element.

We could apply `display: inline-block; margin-right: ?rem;` to an inline element, but we have to calculate the correct amount to push siblings onto the next line without going over.
