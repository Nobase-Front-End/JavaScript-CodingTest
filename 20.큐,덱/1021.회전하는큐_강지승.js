const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution() {
  const [n, m] = input[0].split(' ').map(Number);
  const a = Array.from({ length: n }, (_, i) => i + 1);
  
  const picks = input[1].split(' ').map(Number);
  let answer = 0;

  for (let i = 0; i < m; i++) {
    while (picks[i] !== a[0]) {
      answer++;
      if (a.indexOf(picks[i]) < (a.length / 2)) {
        a.push(a.shift());
      }
      else {
        a.unshift(a.pop());
      }
    }
    a.shift();
  }
  console.log(answer);
}

solution();
