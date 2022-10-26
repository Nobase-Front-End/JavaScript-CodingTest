const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution() {
  const n = +input[0];
  const router = [];

  let i = 1;

  while (+input[i] !== -1) {
    if (+input[i] === 0) router.shift();
    else if (router.length < n) router.push(input[i]);
    i++;
  }

  console.log(router.length ? router.join(" ") : "empty");
}

solution();
