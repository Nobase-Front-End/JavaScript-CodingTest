const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  let result = "";
  // [첫 번째 링, 나머지 링]
  [firstRing, ...rings] = input[1].split(" ").map((n) => +n);
  // 두 수의 최대공약수 구하는 함수
  const getGcd = (a, b) => (a % b === 0 ? b : getGcd(b, a % b));
  // 나머지링 반복문
  rings.forEach((ring) => {
    // 첫 번째 링과 해당 링의 최대공약수를 구한다
    const gcd = getGcd(firstRing, ring);
    // 최대공약수로 첫 번째 링과 해당 링을 나눠서 기약 분수 형태(A/B)로 결과에 더해준다.
    result += `${firstRing / gcd}/${ring / gcd}\n`;
  });
  // 결과 출력
  console.log(result);
}
solution();
