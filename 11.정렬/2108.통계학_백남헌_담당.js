/*
문제
수를 처리하는 것은 통계학에서 상당히 중요한 일이다. 
통계학에서 N개의 수를 대표하는 기본 통계값에는 다음과 같은 것들이 있다. 
단, N은 홀수라고 가정하자.

산술평균 : N개의 수들의 합을 N으로 나눈 값
중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
최빈값 : N개의 수들 중 가장 많이 나타나는 값
범위 : N개의 수들 중 최댓값과 최솟값의 차이
N개의 수가 주어졌을 때, 네 가지 기본 통계값을 구하는 프로그램을 작성하시오.
*/
/*
입력
첫째 줄에 수의 개수 N(1 ≤ N ≤ 500,000)이 주어진다. 단, N은 홀수이다. 
그 다음 N개의 줄에는 정수들이 주어진다. 입력되는 정수의 절댓값은 4,000을 넘지 않는다.

출력
첫째 줄에는 산술평균을 출력한다. 소수점 이하 첫째 자리에서 반올림한 값을 출력한다.

둘째 줄에는 중앙값을 출력한다.

셋째 줄에는 최빈값을 출력한다. 여러 개 있을 때에는 최빈값 중 두 번째로 작은 값을 출력한다.

넷째 줄에는 범위를 출력한다.
*/
const [n, ...numberList] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function getArithmeticMean(numberList) {
  return Math.round(numberList.reduce((acc, cur) => acc + Number(cur), 0) / n);
}
function getMedian(numberList) {
  return numberList.sort((a, b) => a - b)[Math.floor(n / 2)];
}
function getMode(numberList) {
  let maxFrequency = 0;
  const numberFrequencyObj = {};
  const maxFrequencyArr = [];
  numberList.forEach((element) => {
    numberFrequencyObj[element] = (numberFrequencyObj[element] || 0) + 1;
    if (maxFrequency < numberFrequencyObj[element]) {
      maxFrequency = numberFrequencyObj[element];
    }
  });
  const maxFrequencyNumber = Object.entries(numberFrequencyObj).filter(
    (element) => Number(element[1]) == maxFrequency
  );
  maxFrequencyNumber.sort((a, b) => Number(a[0]) - Number(b[0]));
  return maxFrequencyNumber.length > 1
    ? maxFrequencyNumber[1][0]
    : maxFrequencyNumber[0][0];
}
function getRange(numberList) {
  return numberList[n - 1] - numberList[0];
}
console.log(
  `${getArithmeticMean(numberList)}
${getMedian(numberList)}
${getMode(numberList)}
${getRange(numberList)}`
);
