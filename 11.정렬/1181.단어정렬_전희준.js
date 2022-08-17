const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  const N = +input.shift();
  let words = [];
  input.forEach((x) => words.push(x));
  words = [...new Set(words)].sort().sort((a, b) => a.length - b.length);
  let result = "";
  words.forEach((x) => (result += `${x}\n`));
  console.log(result);
}
solution();
