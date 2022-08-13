const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const N = +input;

function solution(N) {
  // 숫자 n의 분해합을 구하는 함수
  const getDigitSum = function (n) {
    let answer = n;
    while (n > 0) {
      answer += n % 10;
      n = parseInt(n / 10);
    }
    return answer;
  };

  // 생성자를 M이라고 하면, 'N = M + M의 각 자리수 합'이므로 'M = N - M의 각 자리수의 합'
  // 가능한 M의 최솟값은 M의 각 자리수의 합이 최대일 때, 즉 M의 각 자리수가 모두 9일 때이다.
  // 가능한 M의 최솟값, 즉 'N - M의 자리수 개수 * 9'부터 1씩 증가시키면서 M의 생성자인지 확인한다.
  for (let i = N - 9 * input.length; i <= N; i++) {
    // 가장 작은 생성자를 구하면 되므로 생성자를 구하는 순간 i를 return 하고 반복문 종료
    if (getDigitSum(i) === N) return i;
  }

  // 반복문을 다 돌았음에도 생성자를 구하지 못하면 0 return
  return 0;
}

console.log(solution(N));
