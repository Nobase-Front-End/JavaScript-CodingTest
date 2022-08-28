const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map((n) => +n);
const setWord = new Set(input.slice(1, N + 1));
const findWord = input.slice(N + 1);

console.log(findWord.filter((word) => setWord.has(word)).length);
