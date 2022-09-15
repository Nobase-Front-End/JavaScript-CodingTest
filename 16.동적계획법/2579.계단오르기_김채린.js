const [N, ...ARR] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => +e);

// [조건]
// 1. 한 번에 한 계단 또는 두 계단씩 오를 수 있음
// 2. 연속된 세 개의 계단을 모두 밟아서는 안 됨
// 3. 마지막 도착 계단은 반드시 밟아야 함

// [접근 방법]
// DP[i][j]에 연속된 j개의 계단을 밟아서 i번째 계단까지 왔을 때 가능한 점수의 최댓값을 저장하자!!

function solution(N, ARR) {
  const DP = Array.from({ length: N }, () => []);
  DP[0][1] = ARR[0];
  DP[0][2] = 0;

  for (let i = 1; i < N; i++) {
    // 1번 조건에 의해 한 번에 한 계단 또는 두 계단씩 오를 수 있으므로 i번쨰 계단을 밞으려면 바로 앞(i-1번째) 계단 또는 앞앞(i-2번째) 계단을 밟고 와야 함

    // 1) 바로 앞 계단을 밟고 i번째 계단까지 온 경우 -> 연속된 세 개의 계단을 모두 밟을 수 없으므로 직전 계단에서 연속된 1개의 계단을 밞은 경우만 고려!
    DP[i][2] = DP[i - 1][1] + ARR[i];

    // 2) 앞앞 계단을 밟고 i번째 계단까지 온 경우 -> 앞앞 계단에서 연속된 1개의 계단을 밟았든 연속된 2개의 계단을 밟았든 상관없음! 둘 중 큰 값 이용
    // i가 1인 경우 undefined 대신 0값을 사용하기 위해 null 병합 연산자 ?? 이용
    DP[i][1] = Math.max(DP[i - 2] ? DP[i - 2][1] : 0, DP[i - 2] ? DP[i - 2][2] : 0) + ARR[i];
  }
  return Math.max(DP[N - 1][1], DP[N - 1][2]);
}

console.log(solution(N, ARR));
