const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution() {
  const N = +input[0];
  const arr = Array.from({ length: N }, (_, i) => input[i + 1].split(" ").map((e) => +e));

  arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

  let now = 0;
  let answer = 0;
  arr.forEach((time) => {
    if (now <= time[0]) {
      now = time[1];
      answer++;
    }
  });
  console.log(answer);
}

solution();
