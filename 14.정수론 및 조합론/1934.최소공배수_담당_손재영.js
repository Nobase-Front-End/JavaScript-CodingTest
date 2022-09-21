const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

const [_, ...input] = require('fs')
	.readFileSync(path)
	.toString()
	.trim()
	.split('\n');

const getGCD = (a, b) => {
	if (b === 0) return a;
	return getGCD(b, a % b);
};
const LCMs = input.map((ab) => {
	const [a, b] = ab.split(' ').map((e) => +e);
	return (a * b) / getGCD(a, b);
});

console.log(LCMs.join('\n'));
