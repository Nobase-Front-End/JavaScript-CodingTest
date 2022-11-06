const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");
const N = +input.shift();
const paper = input.map((row) => row.split(" "));
const count = {
  white: 0,
  blue: 0,
};

// 주어진 영역의 값이 모두 같은지 확인하고, 만약 다르다면 4분할로 나누어서 재귀적으로 탐색한다.
// checkColors함수는 탐색을 시작할 row, column, 영역의 길이 length를 인수로 받는다.
// isSame 변수를 flag로 활용하여 탐색을 최소화한다.
const checkColors = (sr, sc, len) => {
  const targetColor = paper[sr][sc];
  let isSame = true;
  outer: for (let r = sr; r < sr + len; r++) {
    for (let c = sc; c < sc + len; c++) {
      if (paper[r][c] !== targetColor) {
        isSame = false;
        break outer;
      }
    }
  }
  if (isSame) {
    targetColor === "0" ? count.white++ : count.blue++;
  } else {
    // 절반 길이로 4분할한 뒤 각 영역의 왼쪽 위 지점부터 재귀적으로 탐색한다.
    const half = len / 2;
    checkColors(sr, sc, half);
    checkColors(sr, sc + half, half);
    checkColors(sr + half, sc, half);
    checkColors(sr + half, sc + half, half);
  }
};

checkColors(0, 0, N);

console.log(`${count.white}\n${count.blue}`);
