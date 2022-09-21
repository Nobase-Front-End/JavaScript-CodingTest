const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const [_, ...nums] = require('fs')
	.readFileSync(path)
	.toString()
	.trim()
	.split('\n')
	.map((e) => +e);

const padovan = [0, 1, 1, 1, 2, 2];
const getPadovan = (n) => {
	if (padovan[n]) return padovan[n];
	padovan[n] = getPadovan(n - 5) + getPadovan(n - 1);
	return padovan[n];
};

console.log(nums.map((n) => getPadovan(n)).join('\n'));
