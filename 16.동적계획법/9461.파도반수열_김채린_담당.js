const [INPUT_T, ...INPUT_ARR] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let T = INPUT_T;

// [접근 방법]
// DP의 핵심은 점화식 구하기! -> 파도반 수열의 점화식은?
// n-3번째 파도반 수 + n-2번째 파도반 수 = n번째 파도반 수

// n번째 파도반 수를 구하는 함수 getPadovan()
function getPadovan(n) {
  // 첫번째 파도반 수부터 n번째 파도반 수까지 저장할 배열 padovanSequence
  const padovanSequence = Array.from({ length: n });
  // 첫번째, 두번째, 세번째 파도반 수는 항상 1
  [padovanSequence[1], padovanSequence[2], padovanSequence[3]] = [1, 1, 1];
  // 네번째 파도반 수부터는 점화식을 이용하여 계산한 후 padovanSequence에 저장
  for (let i = 4; i <= n; i++) padovanSequence[i] = padovanSequence[i - 3] + padovanSequence[i - 2];
  // n번째 파도반 수 반환
  return padovanSequence[n];
}

while (T--) {
  const N = +INPUT_ARR.shift();
  console.log(getPadovan(N));
}
