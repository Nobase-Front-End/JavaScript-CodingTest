const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  const [N, M] = input[0].split(" ").map((n) => +n);
  const S = new Set(input.slice(1, 1 + N));
  const checkWords = input.slice(1 + N);
  console.log(checkWords.filter((word) => S.has(word)).length);
}
solution();
