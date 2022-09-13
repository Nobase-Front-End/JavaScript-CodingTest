const [N, M] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((e) => +e);

// // 첫 번째 풀이: 브루트포스(통과)
// function solution(N, M) {
//   let min = Math.min(N, M);
//   let gcd;
//   for (let i = min; i > 0; i--) {
//     if (N % i === 0 && M % i === 0) {
//       gcd = i;
//       break;
//     }
//   }
//   return [gcd, (N * M) / gcd];
// }

// 두 번째 풀이: 유클리드 호제법 이용(통과)
const gcd = (num1, num2) => (num2 ? gcd(num2, num1 % num2) : num1);
function solution(N, M) {
  const gcdNM = gcd(N, M);
  return [gcdNM, (N * M) / gcdNM];
}

console.log(solution(N, M).join("\n"));
