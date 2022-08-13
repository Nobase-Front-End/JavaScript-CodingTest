const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input;

function solution(N) {
  // 몇 번째 영화 제목인지 cnt에 저장
  let cnt = 1;

  // 666부터 num을 1부터 증가시키며 666이 포함되는 숫자인지 여부 확인
  let num = 666;
  while (cnt < N) {
    num++;
    if (num.toString().includes("666")) cnt++;
  }
  return num;
}

console.log(solution(N));
