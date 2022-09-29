let fs = require("fs");
let [NK, ...input] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\r\n");

const [N, K] = NK.split(" ").map((x) => +x);
input = input.sort((x, y) => y - x);

const solution = (K, input) => {
  let rest = K;
  return input.reduce((acc, coin) => {
    const num = +parseInt(rest / coin);
    rest -= coin * num;
    return acc + num;
  }, 0);
};

console.log(solution(K, input));
