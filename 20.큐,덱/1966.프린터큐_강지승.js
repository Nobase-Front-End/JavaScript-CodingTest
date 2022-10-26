const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution() {
  const t = +input[0];
  for (let i = 0; i < t; i++) {
    let m = +input[1 + i * 2].split(" ")[1];
    let queue = input[2 + i * 2].split(" ").map(Number);
    let answer = 1;

    while (true) {
      const cur = queue.shift();
      if (Math.max(...queue) <= cur && m === 0) {
        break;
      }
      
      if (Math.max(...queue) > cur && m === 0) {
        queue.push(cur)
        m = queue.length - 1;
      } else if (Math.max(...queue) > cur) {
        queue.push(cur)
        m -= 1;
      } else if (Math.max(...queue) <= cur) {
        answer += 1;
        m -= 1;
      }
    }
    console.log(answer);
  }
}

solution();
