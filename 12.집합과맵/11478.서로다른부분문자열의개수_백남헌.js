const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const list = [];
for (let i = 1; i < input.length + 1; i++) {
  for (let j = 0; i + j < input.length + 1; j++) {
    list.push(input.slice(j, i + j));
  }
}

console.log(new Set(list).size);
