const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

// 최솟값을 만들기 위해서 + 연산을 모두 마친 뒤 - 연산을 해준다
let answer = 0;

// 덧셈으로만 이루어진 배열안의 문자열의 합을 구해준다.
const add = (ex) =>
  ex
    .split("+")
    .map((ex) => +ex)
    .reduce((sum, num) => {
      return sum + num;
    }, 0);

// - 를 기준으로 split 했을 때 처음의 결과값만 양의 부호를 붙혀주고 두번째부터 음의 부호를 붙혀준다
input.split("-").forEach((ex, i) => {
  answer += i === 0 ? add(ex) : -add(ex);
});

console.log(answer);
