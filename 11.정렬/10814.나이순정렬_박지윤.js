const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = input.shift();

input.sort((a, b) => parseFloat(a) - parseFloat(b));

console.log(input.join("\n"));
