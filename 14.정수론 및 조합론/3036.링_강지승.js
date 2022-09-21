const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution() {
  let N = +input[0];
  let nums = input[1].split(" ").map(Number);
  const num = nums[0];

  const getGCD = (x, y) => {
    while (y) {
      let tmp = y;
      y = x % y;
      x = tmp;
    }
    return x;
  };

  for (let i = 1; i < nums.length; i++) {
    if (num % nums[i] === 0) console.log(`${num / nums[i]}/1`);
    else {
      console.log(`${num / getGCD(num, nums[i])}/${nums[i] / getGCD(num, nums[i])}`);
    }
  }
}

solution();
