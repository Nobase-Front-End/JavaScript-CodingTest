const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  // 문제 풀이
  const n = +input[0];
  const dp = [];

  // dp에 입력으로 주어진 정수 삼각형을 넣어준다
  for (let i = 1; i <= n; i++) {
    input[i] = input[i].split(" ");
    dp.push(input[i].map((v) => +v));
  }

  for (let i = 1; i < n; i++) {
    // 각 배열의 양 끝은 한 값에 의해서만 결정되기 때문에 따로 다뤄준다
    dp[i][0] += dp[i - 1][0]; // 0 번째
    dp[i][i] += dp[i - 1][i - 1]; // n 번째

    // 각 배열의 양 끝을 제외한 부분은
    // 대각선 왼쪽 또는 대각선 오른쪽에 있는 것 중에서 큰 값을 선택해야 한다.
    for (let j = 1; j < i; j++) {
      dp[i][j] += Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
    }
  }

  // 그렇게 더해진 마지막 배열 중 가장 큰 값을 출력해준다.
  console.log(Math.max(...dp[n - 1]));
}
solution();
