let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\r\n");
// 백준에서 실행할 경우 .split("\r\n") => .split("\n) 변경

const [_, ...N] = input;

const solution = (N) => {
  const max = Math.max(...N);
  const lengthArr = [1, 1, 1, 2, 2];
  for (let i = 0; i < max; i++) {
    //이미 존재한다면 건너뛰고
    if (lengthArr[i]) continue;
    // 없다면 i-1번째 값과 i-5번째 값을 더한 값을 배열에 넣어준다.
    lengthArr[i] = lengthArr[i - 1] + lengthArr[i - 5];
  }
  let answer = N.map((n) => lengthArr[n - 1]);
  return answer;
};

console.log(solution(N).join("\n"));
