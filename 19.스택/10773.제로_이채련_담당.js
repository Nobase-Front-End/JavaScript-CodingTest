const [n, ...arr] = require('fs')
	.readFileSync(
		process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
	)
	.toString()
	.trim()
	.split('\n');

const numbers = arr;
const answer = [];

// 배열을 돌면서 요소가 0인 경우 answer 배열의 마지막에서 요소를 꺼내주고(가장 최근에 넣어준 요소 제거),
// 0이 아닌 경우 배열에 넣어주는 함수(배열의 마지막에 추가)
const zero = (arr) =>
	arr.filter((item) => (item === '0' ? answer.pop() : answer.push(item)));

zero(numbers);

let sum = 0;
// answer 배열에 담긴 값 모두 합쳐서 sum 에 더해주기
answer.forEach((item) => (sum += +item));

console.log(sum);
