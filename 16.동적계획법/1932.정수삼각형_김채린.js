const [INPUT_N, ...INPUT_ARR] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const N = +INPUT_N;
const ARR = INPUT_ARR.map((e) => e.split(" ").map((e) => +e));

// [접근 방법]
// DP의 핵심은 점화식 구하기! -> 정수 삼각형의 점화식은?
// ARR[i][j]에 갱신될 값 = 한칸 위 왼쪽 값과 한칸 위 오른쪽 값 중 큰 값에 기존의 ARR[i][j]값을 더한 값
// ARR[i][j] = ARR[i-1][j-1]과 ARR[i-1][j] 중 큰 값 + ARR[i][j]
// ARR[i][j] += Math.max(ARR[i-1][j-1], ARR[i-1][j])

function solution(N, ARR) {
  for (let i = 1; i < N; i++) {
    for (let j = 0; j < ARR[i].length; j++) {
      // ARR[i][j]가 해당 줄의 가장 왼쪽 요소일 경우 ARR[i-1][j-1]이 이차원 배열 ARR의 범위를 벗어나므로 undefined
      // ARR[i][j]가 해당 줄의 가장 오른쪽 요소일 경우 ARR[i-1][j]가 이차원 배열 ARR의 범위를 벗어나므로 undefined
      // 이런 경우에 undefined 대신 0값을 사용하기 위해 null 병합 연산자 ?? 이용
      ARR[i][j] += Math.max(ARR[i - 1][j - 1] ?? 0, ARR[i - 1][j] ?? 0);
    }
  }
  return Math.max(...ARR[N - 1]);
}

console.log(solution(N, ARR));
