const [INPUT_T, ...INPUT_ARR] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let T = +INPUT_T;

while (T--) {
  const N = +INPUT_ARR.splice(0, 1);
  const CLOTHES = INPUT_ARR.splice(0, N).map((e) => e.split(" "));

  // 각 카테고리별 옷 개수 카운트
  const cntByCategory = {};
  CLOTHES.forEach((cloth) => (cntByCategory[cloth[1]] = (cntByCategory[cloth[1]] ?? 0) + 1));

  // 한 카테고리에 N개의 옷이 있다면 해당 카테고리의 옷을 안 입거나, 첫 번째 옷을 입거나, 두 번째 옷을 입거나, ..., N번째 옷을 입을 수 있음 -> 경우의 수: N - 1
  // 각 카테고리별 경우의 수를 모두 곱한 뒤 아무것도 입지 않는 케이스에 해당하는 1을 빼주면 됨
  console.log(Object.values(cntByCategory).reduce((acc, cur) => acc * (cur + 1), 1) - 1);
}
