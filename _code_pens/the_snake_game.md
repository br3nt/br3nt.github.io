---
pen_slug: RyRjNZ
title: The Snake Game
updated_at: 2018-11-30
created_at: 2018-11-30
---

This is my attempt to follow along with [Coding Challenge #3: The Snake Game](https://www.youtube.com/watch?v=AaGK-fj-BAM) by [The Coding Train](https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw).

The example is using the [p5.js library](https://p5js.org/).

My first attempt at the keyboard inputs to control the direction of the snake was quiet buggy.  On each frame, you could change the snake direction multiple times, which often caused the snake to crash into itself.  To fix this, the keyboard input mearly sets the snakes direction for the next frame.  When next the frame is drawn, the snakes direction is set based on the direction it was previously travelling, plus the change from the last keyboard input from the previous frame.

I also made an intersting function that draws the score as an seven-segment display (the sort you'd find on a microwave or digital clock).  I think it looks cool.  I'd like to extend the idea and try making a dot-matrix style text display.
