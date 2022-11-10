const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  const cards = input[1].split(" ").map((n) => +n).sort((a, b) => a - b);
  const listM = input[3].split(" ").map((n) => +n);

  const cardList = {};

  for (let card of cards) {
    cardList[card] = cardList[card] + 1 || 1;
  }

  const result = listM.map((num) => cardList[num] ?? 0);
  console.log(result.join(" "));
}
solution();
