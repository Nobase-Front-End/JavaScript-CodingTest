const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution() {
  let N = +input[0];
  let tmp = 0;
  for (let i = 1; i < N + 1; i++) {
    let answer = 1;
    let n = +input[++tmp];
    const style = {};
    for (let j = 1; j < n + 1; j++) {
      const [cloth, kind] = input[j + tmp].split(" ");
      if (style[kind]) style[kind].push(cloth);
      else style[kind] = [cloth];
    }
    tmp += n;
    Object.keys(style).forEach((s) => {
      answer *= style[s].length + 1;
    });
    console.log(answer - 1);
  }
}

solution();
