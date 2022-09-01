const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution() {
  let [a, b] = input[0].split(" ").map(Number);

  // 최대 공약수
  const getGCD = (x, y) => {
    while (y) {
      let tmp = y;
      y = x % y;
      x = tmp;
    }
    return x;
  };

  const gcd = getGCD(a, b);
  // 최소 공배수
  const lsm = (a * b) / gcd;

  console.log(gcd);
  console.log(lsm);
}

solution();
