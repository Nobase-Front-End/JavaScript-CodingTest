const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  const [N, M] = input[0].split(" ").map((n) => +n);
  const treeHeight = input[1].split(" ").map((n) => +n);

  // 초기 최소 높이
  let min = 1;
  // 초기 최대 높이
  let max = Math.max(...treeHeight);

  // 이분 탐색 조건
  while (min <= max) {
    // 자르려는 높이 H
    const mid = parseInt((min + max) / 2);
    // mid의 높이로 나무들을 잘랐을 때 상근이가 가져가는 나무의 길이
    const treeLen = treeHeight
      // 각 나무의 높이가 mid의 높이보다 낮은 경우 잘리지 않는다.
      .map((treeH) => (treeH > mid ? treeH - mid : 0))
      .reduce((pre, cur) => pre + cur, 0);

    // 상근이가 가져가는 나무의 길이(treeLen)가 조건 M보다 작을 경우,
    // 나무를 더 잘라야 하기 때문에 mid 값은 더 낮아져야 한다.
    // 결국, min < newmid < max(oldmid - 1) 범위 안에 있을 것이다.
    if (treeLen < M) max = mid - 1;
    // 마찬가지로 조건 M보다 크거나 같을 경우에는 mid 값은 더 높아져야 한다.
    // min(oldmid + 1) < newmid < max 범위 안에 있을 것이다.
    else min = mid + 1;
  }
  console.log(max);
}
solution();
