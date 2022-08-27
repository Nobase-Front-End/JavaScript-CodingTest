const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const answer = [];
const [n, m] = input[0].split(" ").map((v) => +v);
const map = new Map();
const arr1 = input.slice(1, n + 1);
const arr2 = input.slice(n + 1);

arr1.forEach((v) => map.set(v, 0));
arr2.forEach((v) => {
  if (map.has(v)) answer.push(v);
});

answer.sort();

console.log([answer.length, ...answer].join("\n"));
