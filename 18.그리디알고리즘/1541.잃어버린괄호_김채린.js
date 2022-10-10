const INPUT_STRING = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

// // [첫 번째 풀이]
// // - 아이디어: + 먼저 계산 후 - 계산
// // - 위험한 eval()을 사용하였고, 0으로 시작하는 수를 처리하지 못함 => 실패
// function solution(INPUT_STRING) {
//   return eval("(" + INPUT_STRING.replaceAll("-", ")-(") + ")");
// }

// 두 번째 풀이
function solution2(INPUT_STRING) {
  return INPUT_STRING.split("-").reduce(
    // 첫 번째 요소만 더해주고 나머지 요소는 모두 빼주기 위해 삼항연산자 사용
    (diff, cur, i) => diff + (i ? -1 : 1) * cur.split("+").reduce((sum, cur) => sum + +cur, 0),
    0
  );
}

console.log(solution2(INPUT_STRING));
