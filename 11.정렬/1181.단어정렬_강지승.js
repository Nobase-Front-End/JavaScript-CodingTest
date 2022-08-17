const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" "));

function solution() {
  const N = +input[0];
  const words = [];
  for (let i = 0; i < N; i++) {
    if (!words.includes(input[i + 1][0])) words.push(input[i + 1][0]);
  }

  words.sort((a, b) => (a.length === b.length ? a.localeCompare(b) : a.length - b.length));

  let answer = "";
  words.forEach((word) => {
    answer += word + "\n";
  });

  console.log(answer);
}

solution();
