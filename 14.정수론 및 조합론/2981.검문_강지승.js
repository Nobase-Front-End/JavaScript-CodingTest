const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution() {
  const getDivisors = (n) => {
    const answer = [];
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        answer.push(i);
        if (i !== n / i) answer.push(n / i);
      }
    }
    answer.sort((a, b) => a - b);
    answer.push(n);
    return answer;
  };

  const nums = [];

  input
    .slice(1)
    .map(Number)
    .sort((a, b) => a - b)
    .reduce((acc, cur) => {
      nums.push(cur - acc);
      return cur;
    });

  if (nums.length === 1) {
    return getDivisors(nums[0]).join(" ");
  }

  const getGCD = (x, y) => {
    while (y) {
      let tmp = y;
      y = x % y;
      x = tmp;
    }
    return x;
  };

  let gcd = getGCD(nums[0], nums[1]);

  for (let i = 1; i < nums.length; i++) {
    gcd = getGCD(gcd, nums[i]);
  }
  return getDivisors(gcd).join(" ");
}

console.log(solution());
