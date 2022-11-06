const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const [N, ...screen] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");

const convertToQuadTree = (sr, sc, len) => {
  const targetSpot = screen[sr][sc];
  let isSame = true;
  outer: for (let r = sr; r < sr + len; r++) {
    for (let c = sc; c < sc + len; c++) {
      if (screen[r][c] !== targetSpot) {
        isSame = false;
        break outer;
      }
    }
  }
  if (isSame) {
    return targetSpot;
  } else {
    const half = len / 2;
    const ul = convertToQuadTree(sr, sc, half);
    const ur = convertToQuadTree(sr, sc + half, half);
    const dl = convertToQuadTree(sr + half, sc, half);
    const dr = convertToQuadTree(sr + half, sc + half, half);
    return `(${ul + ur + dl + dr})`;
  }
};

const quadTree = convertToQuadTree(0, 0, +N);

console.log(quadTree);
