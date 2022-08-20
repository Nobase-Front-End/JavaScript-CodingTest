const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

const [N, ...input] = require('fs')
	.readFileSync(path)
	.toString()
	.trim()
	.split('\n');
const posArr = input.map((e) => e.split(' '));
posArr.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));

const answer = posArr
	.reduce((acc, curr) => `${acc}\n${curr[0]} ${curr[1]}`, '')
	.trimStart();
console.log(answer);
