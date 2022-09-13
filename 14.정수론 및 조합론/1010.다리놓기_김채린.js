const [INPUT_T, ...INPUT_ARR] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const T = +INPUT_T;
const ARR = INPUT_ARR.map((e) => e.split(" ").map((e) => +e));

// n! = n * (n-1) * (n-2) * ... * 2 * 1
const factorial = (n) => {
  let answer = 1;
  while (n > 1) {
    answer *= n;
    n--;
  }
  return answer;
};

// 순서에 관계없이 a개 중 b개 선택: aCb = a! / (b! * (a - b)!)
const combination = (a, b) => {
  return Math.round(factorial(a) / (factorial(b) * factorial(a - b)));
};

// 다리끼리는 서로 겹칠 수 없으므로 강 동쪽의 다리 M개 중 N개를 선택하기만 하면
// 강 서쪽의 어떤 다리와 연결될지는 자동으로 결정됨
function solution(T, ARR) {
  return ARR.map((e) => combination(e[1], e[0]));
}

console.log(solution(T, ARR).join("\n"));
