const input = require('fs')
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let N = +input;

function checkCount() {
  let firstNum = 666;
  while (N !== 0) {
    if (String(firstNum).includes("666")) {
      N--;
      if (N === 0) {
        break;
      }
    }
    firstNum++;
  }
  return firstNum;
}

console.log(checkCount());
