const [N, ...ARR] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(/\s/)
  .map((e) => +e);

// [접근 방법]
// DP[i]에 ARR[i]를 마지막 요소로 하는 가장 긴 증가하는 부분 수열의 개수를 저장

function solution(N, ARR) {
  const DP = [1];
  for (let i = 1; i < N; i++) {
    let maxCnt = 0;
    for (let j = 0; j < i; j++) {
      if (ARR[j] < ARR[i]) maxCnt = Math.max(maxCnt, DP[j]);
    }
    DP[i] = maxCnt + 1;
  }
  return Math.max(...DP);
}

console.log(solution(N, ARR));
