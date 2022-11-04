const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  const N = +input.shift();
  const video = input.map((item) => item.split("").map((n) => +n));

  let result = [];

  function quadTree(n, x, y) {
    // 1의 개수를 세는 변수
    let oneCount = 0;

    // n * n 범위의 사각형을 돌며 1의 개수를 센다
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (video[y + i][x + j]) oneCount++;
      }
    }

    // 1. 만약 1의 개수가 0개라면 해당 사각형은 0으로만 이루어져 있으니 0을 넣는다.
    if (oneCount === 0) result.push(0);
    // 2. 만약 1의 개수가 n * n개라면 해당 사각형은 1으로만 이루어져 있으니 1을 넣는다.
    else if (oneCount === n * n) result.push(1);
    // 3. 만약 "0 < oneCount < n * n" 이라면 해당 사각형은 0과 1이 섞여 있다.
    else {
      n = n / 2; // 문제에서 주어진 것 처럼 n의 길이를 반으로 나누고
      result.push("(");
      // 다음 순서로 재귀를 돈다.
      quadTree(n, x, y); // 왼쪽 위
      quadTree(n, x + n, y); // 오른쪽 위
      quadTree(n, x, y + n); // 왼쪽 아래
      quadTree(n, x + n, y + n); // 오른쪽 아래
      result.push(")");
    }
  }
  quadTree(N, 0, 0);
  console.log(result.join(""));
}
solution();
