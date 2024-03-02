---
title: Trebuchet?!
---

[--- Day 2: Trebuchet?! ---](https://adventofcode.com/2023/day/1)


# Part 1

<pre class="breakout-md"><code>
let str = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`

let lines = str.split("\n")
let ascii = lines.map(l => Array.from(l).map(c => c.charCodeAt(0)))
let asciiNumbers = ascii.map(a => a.filter(c => c >= 48 && c <= 57))
let text = asciiNumbers.map(a => String.fromCharCode(a[0], a[a.length-1]))
let total = text.reduce((acc, x) => acc += +x, 0)

console.log('total', total) // 142
</code></pre>

# Part 2


<pre class="breakout-md"><code>
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
	o.filter(e => e[2] >= 0).reduce((a, b) => (a && a[2] < b[2]) ? a : b)[1],
	o.filter(e => e[3] >= 0).reduce((a, b) => (a && a[3] > b[3]) ? a : b)[1],
].join(''))
let total = text.reduce((acc, x) => acc += +x, 0)

console.log('total', total) // 281
</code></pre>
