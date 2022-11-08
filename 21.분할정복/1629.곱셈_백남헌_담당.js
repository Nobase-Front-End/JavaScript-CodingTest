/**
문제
정수 N이 주어졌을 때, 소인수분해하는 프로그램을 작성하시오.

입력
첫째 줄에 정수 N (1 ≤ N ≤ 10,000,000)이 주어진다.

출력
N의 소인수분해 결과를 한 줄에 하나씩 오름차순으로 출력한다. N이 1인 경우 아무것도 출력하지 않는다.
 */
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const [a, b, c] = input.split(" ").map(BigInt);
// A를 B번 곱한 수를 13으로 나누었을 때의 나머지를 구하기 위해 a, b, c로 변수를 할당한다.
// 지수의 성질을 이용하여 2**4 = (2**2)**2 와 같은 규칙을 갖는다
// n**2m = (n**m)**2
// 위의 성질을 이용하면, 2m번을 곱할 함수를 m+1번으로 구할 수 있다. 물론 m을 더 분할하여 
//O(log n)로 시간복잡도를 바꿀 수 있다.
const pow = (b) => {
  if (b == 0) return BigInt(1);
// n**0일 때는 1이다.
  else {
    const p = pow(BigInt(parseInt(b / BigInt(2))));
    //현재 곱해야하는 숫자를 2m이라할 때 그 절반인 m를 재귀 함수로 실행시킨다. 이때 내림을 위하여
    //parseInt를 쓴다. 주의 =>BigInt에 주의해야한다.
    // return (p*p*(b % BigInt(2) == 0?1:a)) %c
    if (b % BigInt(2) == 0) {
    //홀수 같은 경우 a를 한번 더 곱해줘야하기 때문에 조건문으로 이를 판별한다. 짝수면 p*p에 c의 나머지를 구한다
      return (p * p) % c;
    } else {
      return (p * p * a) % c;
    }
  }
};

console.log(parseInt(pow(b)));
