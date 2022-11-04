const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  const N = +input.shift();
  const colorPaper = input.map((item) => item.split(" ").map((n) => +n));

  const result = [0, 0]; // [whitepaper, bluepaper]

  function slicePaper(n, x, y) {
    let blueCount = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (colorPaper[y + i][x + j]) blueCount++;
      }
    }

    // 1. n * n범위에 흰색 종이만 있는 경우
    if (blueCount === 0) result[0]++;
    // 2. n * n범위에 파랑색 종이만 있는 경우
    else if (blueCount === n * n) result[1]++;
    // 3. 흰색 종이와 파랑색 종이가 섞여있는 경우
    else {
      n = n / 2;
      slicePaper(n, x, y); // 왼쪽 위
      slicePaper(n, x + n, y); // 오른쪽 위
      slicePaper(n, x, y + n); // 왼쪽 아래
      slicePaper(n, x + n, y + n); // 오른쪽 아래
    }
  }
  slicePaper(N, 0, 0);
  console.log(result.join("\n"));
}

solution();
