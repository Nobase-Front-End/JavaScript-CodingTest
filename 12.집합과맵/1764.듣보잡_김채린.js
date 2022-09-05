const [INPUT_N, INPUT_M, ...INPUT_ARR] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(/\s/);
const N = +INPUT_N;
const M = +INPUT_M;
const NO_LISTEN = INPUT_ARR.slice(0, N);
const NO_SEE = INPUT_ARR.slice(N);

// // 첫 번째 풀이: 배열 이용(시간초과)
// const solution = (N, M, NO_LISTEN, NO_SEE) => {
//   const NO_LISTEN_SEE = NO_SEE.filter((ppl) => NO_LISTEN.includes(ppl)).sort();
//   return [NO_LISTEN_SEE.length, ...NO_LISTEN_SEE].join("\n");
// };

// // 두 번째 풀이: 집합 이용(통과)
// // Array.includes vs Set.has: https://www.tech-hour.com/javascript-performance-and-optimization
// const solution = (N, M, NO_LISTEN, NO_SEE) => {
//   const noListenSet = new Set(NO_LISTEN);
//   const NO_LISTEN_SEE = NO_SEE.filter((ppl) => noListenSet.has(ppl)).sort();
//   return [NO_LISTEN_SEE.length, ...NO_LISTEN_SEE].join("\n");
// };

// 세 번째 풀이: 투 포인터
const solution = (N, M, NO_LISTEN, NO_SEE) => {
  NO_LISTEN.sort();
  NO_SEE.sort();
  let [noListenPointer, noSeePointer] = [0, 0];
  let noListenSeeArr = [];
  while (noListenPointer < NO_LISTEN.length && noSeePointer < NO_SEE.length) {
    if (NO_LISTEN[noListenPointer] === NO_SEE[noSeePointer])
      noListenSeeArr = [...noListenSeeArr, NO_LISTEN[noListenPointer]];
    if (NO_LISTEN[noListenPointer] >= NO_SEE[noSeePointer]) noSeePointer++;
    else noListenPointer++;
  }
  return [noListenSeeArr.length, ...noListenSeeArr].join("\n");
};

console.log(solution(N, M, NO_LISTEN, NO_SEE));
