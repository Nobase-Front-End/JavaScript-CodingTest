const [N, ...ARR] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(/\s/)
  .map((e) => +e);

// [접근 방법]
// 매 인덱스마다 연속합을 이어나가는 것과 새롭게 시작하는 것을 비교하여 더 큰 값을 DP 배열에 저장하자!

// 예) arr = [10, -4, 3, 1, 5, 6, -35, 12, 21, -1]

// 0번째 인덱스: DP[0] = 10
// 1번째 인덱스: 연속합을 이어나가면 DP[0] + arr[1] =  10 +  -4 =   6, 새롭게 시작하면 arr[1] =  -4 -> DP[1] = Math.max(  6,  -4) =   6
// 2번째 인덱스: 연속합을 이어나가면 DP[1] + arr[2] =   6 +   3 =   9, 새롭게 시작하면 arr[2] =   3 -> DP[2] = Math.max(  9,   3) =   9
// 3번째 인덱스: 연속합을 이어나가면 DP[2] + arr[3] =   9 +   1 =  10, 새롭게 시작하면 arr[3] =   1 -> DP[3] = Math.max( 10,   1) =  10
// 4번째 인덱스: 연속합을 이어나가면 DP[3] + arr[4] =  10 +   5 =  15, 새롭게 시작하면 arr[4] =   5 -> DP[4] = Math.max( 15,   5) =  15
// 5번째 인덱스: 연속합을 이어나가면 DP[4] + arr[5] =  15 +   6 =  21, 새롭게 시작하면 arr[5] =   6 -> DP[5] = Math.max( 21,   6) =  21
// 6번째 인덱스: 연속합을 이어나가면 DP[5] + arr[6] =  21 + -35 = -14, 새롭게 시작하면 arr[6] = -35 -> DP[6] = Math.max(-14, -35) = -14
// 7번째 인덱스: 연속합을 이어나가면 DP[6] + arr[7] = -14 +  12 =  -2, 새롭게 시작하면 arr[7] =  12 -> DP[7] = Math.max( -2,  12) =  12
// 8번째 인덱스: 연속합을 이어나가면 DP[7] + arr[8] =  12 +  21 =  33, 새롭게 시작하면 arr[8] =  21 -> DP[8] = Math.max( 33,  21) =  33
// 9번째 인덱스: 연속합을 이어나가면 DP[8] + arr[9] =  33 +  -1 =  32, 새롭게 시작하면 arr[9] =  -1 -> DP[9] = Math.max( 32,  -1) =  32

// DP = [10, 6, 9, 10, 15, 21, -14, 12, 33, 32]
// DP 배열의 최댓값은? -> Math.max(...DP) = 33

function solution(N, ARR) {
  const DP = Array.from({ length: N });

  DP[0] = ARR[0];
  for (let i = 1; i < N; i++) DP[i] = Math.max(DP[i - 1] + ARR[i], ARR[i]);

  return Math.max(...DP);
}

console.log(solution(N, ARR));
