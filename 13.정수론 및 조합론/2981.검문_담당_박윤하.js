let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\r\n");
// 백준에서 실행할 경우 .split("\r\n") => .split("\n) 변경

input.shift();

// 만약 A, B, C를 M으로 나눈 나머지가 r이라면
// A = M*a + r, B = M*b + r, C = M*c + r
// B-A = M*(b-a), C-B = M*(c-b) 이다.
// 즉, 나머지가 같도록 만드는 M을 찾는 것은 입력 요소 차이의 공약수를 찾는 것과 같다.
const solution = (input) => {
  let answer = new Set();

  // 1. 각 input 요소들의 차이 계산
  // 첫번째 요소는 이전 값이 없으므로 0으로 할당 후 제외
  const diff = input.map((val, idx, arr) =>
    idx === 0 ? 0 : Math.abs(val - arr[idx - 1])
  );
  diff.shift();

  // 2. 최대공약수 계산(유클리드 호제법 이용)
  const gcd = diff.reduce(
    (prev, curr) => calGcd(Math.max(prev, curr), Math.min(prev, curr)),
    diff[0]
  );

  // 3. 공약수 계산
  // 최대공약수의 약수들 계산하여 answer(set)에 할당
  // 1은 포함하지 않으므로 2부터 약수를 계산하고 gcd(최대 공약수) 따로 추가
  for (let i = 2; i <= Math.sqrt(gcd); i++) {
    if (gcd % i === 0) answer.add(i).add(gcd / i);
  }
  answer = answer.add(gcd);

  // 4. answer를 array로 형변환 후 정렬
  answer = Array.from(answer);
  answer.sort((x, y) => x - y);

  return answer.join(" ");
};

// 유클리드 호제법(최대공약수)
const calGcd = (a, b) => {
  while (b !== 0) {
    const r = a % b;
    a = b;
    b = r;
  }
  return a;
};

console.log(solution(input));
