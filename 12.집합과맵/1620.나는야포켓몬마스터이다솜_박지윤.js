const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const m = +input[1];

const arr = input.slice(2, n + 2);
const pokemonMap = new Map(arr.map((v, i) => [v, i + 1]));
const question = input.slice(n + 2);

const answer = [];
question.forEach((v) => {
  if (Number.isNaN(+v)) answer.push(pokemonMap.get(v));
  else answer.push(arr[+v - 1]);
});

console.log(answer.join("\n"));
