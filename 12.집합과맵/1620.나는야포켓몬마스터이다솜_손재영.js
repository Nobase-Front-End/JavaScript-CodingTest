const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [NM, ...arr] = require('fs')
	.readFileSync(path)
	.toString()
	.trim()
	.split('\n');
const [N, M] = NM.split(' ').map((e) => +e);
const dex = arr.slice(0, N).reduce((acc, curr, idx) => {
	acc[curr] = idx + 1;
	acc[idx + 1] = curr;
	return acc;
}, {});
console.log(
	arr
		.slice(N)
		.map((e) => dex[e])
		.join('\n')
);
