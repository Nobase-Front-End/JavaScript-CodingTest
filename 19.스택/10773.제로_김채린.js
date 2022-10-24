const [K, ...NUMS] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => +e);

function solution(NUMS) {
  const stack = [];
  NUMS.forEach((num) => {
    if (num === 0) stack.pop();
    else stack.push(num);
  });
  return stack.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution(NUMS));
