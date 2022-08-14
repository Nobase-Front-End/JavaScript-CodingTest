const input = require('fs')
.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
.toString()
.trim();

// String 값인 input 을 Number 타입으로 바꿔준다.
const N = +input;

// 분해합을 반환해 주는 함수. ex) 145 : 145 + 1 + 4 + 5 = 155 를 반환.
// num 을 String 값으로 받아와서 문자열의 길이만큼 반복문을 돌려 각 자리수를 더해준다.
// 문자열 풀이가 숫자보다 시간상으로 효율이 좋았다.
function getSum(num) {
  let sum = +num;
  for (let i = 0; i < num.length; i++) {
    sum += +num[i];
  }
  return sum;
}

// 분해합과 N의 일치여부를 판별하고 일치하면 해당 값을, 없으면 0 을 반환하는 함수.
// 1 ~ N 까지 모든 경우의 수를 살펴볼 수 있지만, 범위를 줄이기 위해 최소 시작값을 찾는다.
// 3자리 정수 N 이 주어졌을 때 생성자가 n 이라고 한다면 N = n + n1 + n2 + n3 이다. (이때 n1, n2, n3 는 각 자리수를 말한다)
// n = N - n1 - n2 - n3 라고 할 수 있고 이때 가장 큰 n1, n2, n3 은 9 이기 때문에 N - (9 * 3) 이 최소 시작값이 된다.
// 최소 시작값 부터 N 까지 순회하면서 getSum() 함수로 불러온 합과 일치하면 반환한다. 
function digitSum() {
  let minNum = N - 9 * input.length;
  for (let n = minNum; n < N; n++) {
    if (getSum(n + '') === N) {
      return n;
    }
  }
  return 0;
}

console.log(digitSum());