const [INPUT_N, INPUT_M, ...INPUT_ARR] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(/\s/);
const N = +INPUT_N;
const M = +INPUT_M;
const STR_SET = INPUT_ARR.slice(0, N);
const STR_ARR = INPUT_ARR.slice(N);

// // 첫 번째 풀이: 브루트포스(시간 초과)
// const solution = (N, M, STR_SET, STR_ARR) => {
//   return STR_ARR.reduce((cnt, curStr) => cnt + STR_SET.includes(curStr), 0);
// };

// // 두 번째 풀이: Set(통과)
// // Array.includes vs Set.has: https://www.tech-hour.com/javascript-performance-and-optimization
// const solution = (N, M, STR_SET, STR_ARR) => {
//   const strSet = new Set(STR_SET);
//   return STR_ARR.reduce((cnt, curStr) => cnt + strSet.has(curStr), 0);
// };

// 세 번째 풀이: 투 포인터(통과)
const solution = (N, M, STR_SET, STR_ARR) => {
  STR_SET.sort();
  STR_ARR.sort();
  let [setPointer, arrPointer, cnt] = [0, 0, 0];
  while (setPointer < STR_SET.length && arrPointer < STR_ARR.length) {
    if (STR_SET[setPointer] === STR_ARR[arrPointer]) cnt++;
    if (STR_SET[setPointer] >= STR_ARR[arrPointer]) arrPointer++;
    else setPointer++;
  }
  return cnt;
};

console.log(solution(N, M, STR_SET, STR_ARR));
