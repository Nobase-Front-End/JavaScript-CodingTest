const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const cards = {};
input[1].split(" ").forEach((card) => {
  cards[card] = (cards[card] ?? 0) + 1;
});
const answer = input[3].split(" ").map((card) => cards[card] ?? 0);

console.log(answer.join(" "));
