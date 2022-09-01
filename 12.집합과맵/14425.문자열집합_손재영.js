const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

const [NM, ...arr] = require('fs')
	.readFileSync(path)
	.toString()
	.trim()
	.split('\n');
const [N, M] = NM.split(' ').map((e) => +e);
const S = arr.slice(0, N).reduce((acc, curr) => {
	acc[curr] = true;
	return acc;
}, {});
console.log(arr.slice(N).filter((e) => S[e]).length);
