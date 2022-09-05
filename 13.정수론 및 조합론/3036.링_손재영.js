const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const [_, input] = require('fs')
	.readFileSync(path)
	.toString()
	.trim()
	.split('\n');
const [base, ...gears] = input.split(' ').map((e) => +e);
const getGCD = (a, b) => {
	if (b === 0) return a;
	return getGCD(b, a % b);
};
const answer = gears
	.map((gear) => {
		const GCD = getGCD(base, gear);
		return `${base / GCD}/${gear / GCD}`;
	})
	.join('\n');

console.log(answer);
