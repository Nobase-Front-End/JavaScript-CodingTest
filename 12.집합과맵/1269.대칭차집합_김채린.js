const [N, M, ...INPUT_ARR] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(/\s/)
  .map((e) => +e);
const A = INPUT_ARR.slice(0, N);
const B = INPUT_ARR.slice(N);

// // 첫 번째 풀이: 대칭 차집합 직접 구하기(통과)
// const solution = (N, M, A, B) => {
//   const [setA, setB] = [new Set(A), new Set(B)];
//   return [...new Set([...A, ...B])].filter((e) => !(setA.has(e) && setB.has(e))).length;
// };

// 두 번째 풀이: 대칭 차집합 원소의 개수 = 집합 A 원소의 개수 + 집합 B 원소의 개수 - 2 * A와 B의 교집합의 원소의 개수
const solution = (N, M, A, B) => {
  const setB = new Set(B);
  return N + M - 2 * A.reduce((acc, cur) => acc + setB.has(cur), 0);
};

console.log(solution(N, M, A, B));
