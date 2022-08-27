const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const set = new Set();

for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j <= input.length; j++) {
    set.add(input.substring(i, j));
  }
}

console.log(set.size);
