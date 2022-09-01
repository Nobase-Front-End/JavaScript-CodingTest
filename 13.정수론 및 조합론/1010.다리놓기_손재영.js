const path = process.platform === 'linux' ? '/dev/stdin' : 'sites.txt';

const [_, ...sites] = require('fs')
	.readFileSync(path)
	.toString()
	.trim()
	.split('\n');

const factorial = (n, total) => {
	if (n === 1) return total;
	return factorial(n - 1, total * n);
};
console.log(factorial(30));
