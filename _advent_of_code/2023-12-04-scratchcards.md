---
title: Scratchcards
---

[--- Day 4: Scratchcards ---](https://adventofcode.com/2023/day/4)


# Part 1

<pre class="breakout"><code>
let str = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`

let lines = str.trim().split("\n").map(l => l.split(":")[1].split("|"))
let gameNumbers = lines.map(([a, b]) => [a.trim().split(/\s+/).map(i => +i), b.trim().split(/\s+/).map(i => +i)])
winningNumbers = gameNumbers.map(([a, b]) => a.filter(Set.prototype.has, new Set(b)))
points = winningNumbers.map(n => n.length == 0 ? 0 : Math.pow(2, n.length - 1))
totalPoints = points.reduce((a, x) => a += x)

console.log('totalPoints', totalPoints) // 13
</code></pre>

# Part 2


<pre class="breakout"><code>
let newCardCopies = winningNumbers.map((n, i) => [i, n.length])
let more = [...newCardCopies]
let total = 0

while (more.length > 0) {
  total += more.length
  let next = more.map(([i, n]) => newCardCopies.slice(i + 1, i + 1 + n))
  more = next.flat()
}

console.log('total', total) // 30
</code></pre>
