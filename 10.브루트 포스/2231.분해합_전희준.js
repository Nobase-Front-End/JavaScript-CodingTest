const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

function solution() {
  // 풀이 start
  // check로 생성자가 있는지 없는지 확인한다
  let check = true;
  for (let i = 1; i <= +input; i++) {
    let sum = i;
    const stringNum = `${i}`;
    for (let j = 0; j < stringNum.length; j++) {
      sum += +stringNum[j];
    }
    if (sum === +input) {
      console.log(i);
      // 생성자가 있는 경우 check를 false로 하여 마지막에 0값을 출력하지 않도록 한다.
      check = false;
      break;
    }
  }
  // 값이 존재하지 않는 경우 0을 출력
  if (check) {
    console.log(0);
  }
}

solution();
