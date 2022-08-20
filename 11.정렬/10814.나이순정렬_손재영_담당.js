// members 배열 추출
const [n, ...members] = require('fs')
	.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
	.toString()
	.trim()
	.split('\n');

// 정렬을 위해 나이와 이름 분리
const splited = members.map((m) => m.split(' '));
splited.sort((a, b) => +a[0] - +b[0]);

// 분리한 배열을 문자열로 변환
const answer = splited
	.reduce((acc, curr) => `${acc}\n${curr.join(' ')}`, '')
	.trimStart();

console.log(answer);
