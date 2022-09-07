const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const [N, M] = require('fs')
	.readFileSync(path)
	.toString()
	.trim()
	.split(' ')
	.map((e) => +e);

const arr = Array.from({ length: N }, (_, i) => i + 1);
const getPermutation = (arr, num) => {
	if (num === 1) return arr.map((e) => [e]);

	const result = [];

	arr.forEach((fixed, idx) => {
		const rest = arr.filter((e) => e !== fixed);
		const permutation = getPermutation(rest, num - 1);
		const attached = permutation.map((e) => [fixed, ...e]);
		result.push(...attached);
	});
	return result;
};

const permutation = getPermutation(arr, M)
	.map((p) => p.join(' '))
	.sort()
	.join('\n');

console.log(permutation);
