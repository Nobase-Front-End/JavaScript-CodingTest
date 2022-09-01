const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution() {
  let n = +input[0];

  const getGCD = (x, y) => {
    while (y) {
      let tmp = y;
      y = x % y;
      x = tmp;
    }
    return x;
  };

  const getLSM = (x, y) => {
    return (x * y) / getGCD(x, y);
  };

  for (let i = 0; i < n; i++) {
    const [a, b] = input[1 + i].split(" ");
    console.log(getLSM(a, b));
  }
}

solution();
