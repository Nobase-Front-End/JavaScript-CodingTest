const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const [CASES, ...input] = require('fs')
	.readFileSync(path)
	.toString()
	.trim()
	.split('\n');

const result = [];

for (let i = 0; i < input.length; i++) {
	const N = +input[i];
	const clothes = input.slice(i + 1, i + N + 1).reduce((acc, curr) => {
		const type = curr.trim().split(' ')[1];
		acc[type] = (acc[type] ?? 0) + 1;
		return acc;
	}, {});
	const combinations = Object.values(clothes).reduce(
		(acc, curr) => acc * (curr + 1),
		1
	);
	result.push(combinations - 1);
	i += N;
}

console.log(result.join('\n'));
