const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" "));

function solution() {
  const N = +input[0];
  const members = [];
  for (let i = 0; i < N; i++) {
    members.push(input[i + 1]);
  }

  members.sort((a, b) => a[0] - b[0]);

  let answer = "";
  members.forEach((member) => {
    answer += member.join(" ") + "\n";
  });

  console.log(answer);
}

solution();
