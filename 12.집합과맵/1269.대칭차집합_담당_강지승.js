const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution() {
  const [N, M] = input[0].split(" ").map(Number);

  const A = new Set(input[1].split(" "));
  const B = new Set(input[2].split(" "));

  // 교집합 개수 세기
  let count = 0;
  A.forEach((a) => {
    if (B.has(a)) count++;
  });

  // 합집합에서 교집합 빼기
  console.log(N + M - 2 * count);
}

solution();
