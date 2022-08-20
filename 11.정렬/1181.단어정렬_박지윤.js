const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());
const N = input.shift();

input.sort((a, b) => {
  return a.length - b.length || a.localeCompare(b);
});

const set = new Set(input);

console.log(Array.from(set).join("\n"));
