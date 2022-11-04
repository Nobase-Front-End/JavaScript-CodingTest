const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  const N = +input.shift();
  const paper = input.map((item) => item.split(" ").map((n) => +n));

  const result = [0, 0, 0]; // -1, 0, 1 순서

  function slicePaper(n, x, y) {
    let firstPaperType = paper[y][x]; // 첫번째 종이 타입
    let isSameNum = true; // 같은 종이인지 판별

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (paper[y + j][x + i] !== firstPaperType) {
          isSameNum = false;
          break;
        }
      }
    }

    if (isSameNum) result[firstPaperType + 1]++;
    else {
      /*
       * 1 | 2 | 3
       * 4 | 5 | 6
       * 7 | 8 | 9
       */
      n = n / 3;
      slicePaper(n, x, y); // 1
      slicePaper(n, x + n, y); // 2
      slicePaper(n, x + n * 2, y); // 3
      slicePaper(n, x, y + n); // 4
      slicePaper(n, x + n, y + n); // 5
      slicePaper(n, x + n * 2, y + n); // 6
      slicePaper(n, x, y + n * 2); // 7
      slicePaper(n, x + n, y + n * 2); // 8
      slicePaper(n, x + n * 2, y + n * 2); // 9
    }
  }
  slicePaper(N, 0, 0);
  console.log(result.join("\n"));
}
solution();
