const [n, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = n.split(/\ /);
const [group1, group2] = [new Set(arr.slice(0, N)), new Set(arr.slice(N))];
let intersection = [...group1].filter((person) => group2.has(person)).sort();
console.log([intersection.length, ...intersection].join("\n"));
