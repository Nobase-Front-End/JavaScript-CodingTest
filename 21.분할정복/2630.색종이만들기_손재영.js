const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");
const N = +input.shift();
const paper = input.map((row) => row.split(" ").map((e) => +e));
const count = {
  white: 0,
  blue: 0,
};

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
    targetColor === 0 ? count.white++ : count.blue++;
  } else {
    const half = len / 2;
    checkColors(sr, sc, half);
    checkColors(sr, sc + half, half);
    checkColors(sr + half, sc, half);
    checkColors(sr + half, sc + half, half);
  }
};

checkColors(0, 0, N);

console.log(`${count.white}\n${count.blue}`);
