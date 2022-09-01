const [_, ...input] = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((e) => +e);

const nums = [];
input
	.sort((a, b) => a - b)
	.reduce((acc, curr) => {
		nums.push(curr - acc);
		return curr;
	});

const getGCD = (a, b) => {
	while (b > 0) {
		const rest = a % b;
		a = b;
		b = rest;
	}
	return a;
};
const gcd = nums.reduce((acc, curr) => {
	return getGCD(acc, curr);
});

const ans = Array.from(
	{ length: Math.ceil(Math.sqrt(gcd)) },
	(_, idx) => idx + 2
).filter((e) => gcd % e === 0);

console.log(ans.join(' '));
