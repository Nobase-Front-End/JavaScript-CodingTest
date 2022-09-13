const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const [A, B] = require('fs')
	.readFileSync(path)
	.toString()
	.trim()
	.split(' ')
	.map((e) => +e);

const getGCD = (a, b) => {
	if (b === 0) return A;
	return getGCD(b, a % b);
};

const GCD = A > B ? getGCD(A, B) : getGCD(B, A);

console.log(`${GCD}\n${(A * B) / GCD}`);
