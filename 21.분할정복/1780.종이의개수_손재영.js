const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");
const N = +input.shift();
const paper = input.map((row) => row.split(" "));
const count = {
  0: 0,
  "-1": 0,
  1: 0,
};

const checkColors = (sr, sc, len) => {
  const targetValue = paper[sr][sc];
  let isSame = true;
  outer: for (let r = sr; r < sr + len; r++) {
    for (let c = sc; c < sc + len; c++) {
      if (paper[r][c] !== targetValue) {
        isSame = false;
        break outer;
      }
    }
  }
  if (isSame) {
    count[targetValue] += 1;
  } else {
    const nextLen = len / 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        checkColors(sr + nextLen * i, sc + nextLen * j, nextLen);
      }
    }
  }
};

checkColors(0, 0, N);

console.log(`${count[-1]}\n${count[0]}\n${count[1]}`);
