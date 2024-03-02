---
title: Cube Conundrum
---

[--- Day 2: Cube Conundrum ---](https://adventofcode.com/2023/day/2)

# Part 1

<pre class="breakout"><code>
let str = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`

let lines = str.split("\n")

// input: 6 red, 1 blue, 3 green
function parseHandful(str) {
  let handful = str.split(',').map(c => c.trim().split(' '))
  let cubes = {}
  handful.forEach(([i, c]) => cubes[c] = +i)
  return cubes
}

// input: Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
function parseGame(str) {
  let handfuls = str.split(':')[1].split(';')
  let cubes = handfuls.map(parseHandful)
  return cubes
}

let maxRed = 12, maxGreen =1

console.log('total', total) // 142
</code></pre>

# Part 2


<pre class="breakout"><code>
let str = `two1nine
  eightwothree
  abcone2threexyz
  xtwone3four
  4nineeightseven2
  zoneight234
  7pqrstsixteen`

let map = {
  1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 0: 0,
  'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'zero': 0
}

let lines = str.split("\n")
let occurences = lines.map(l => {
  return Object.entries(map).map(([k, v]) => [k, v, l.indexOf(k), l.lastIndexOf(k)])
})
let text = occurences.map(o => [
	o.filter(e => e[2] >= 0).reduce((a, b) => (a && a[2] <pre b[2]) ? a : b)[1],
	o.filter(e => e[3] >= 0).reduce((a, b) => (a && a[3] > b[3]) ? a : b)[1],
].join(''))
let total = text.reduce((acc, x) => acc += +x, 0)

console.log('total', total) // 281
</code></pre>
