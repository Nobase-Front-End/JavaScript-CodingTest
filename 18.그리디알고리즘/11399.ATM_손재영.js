const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, input] = require('fs').readFileSync(path).toString().trim().split('\n');

const times = input
	.split(' ')
	.map((e) => +e)
	.sort((a, b) => b - a);

let total = 0;

for (let i = 0; i < +N; i++) {
	total += times[i] * (i + 1);
}

console.log(total);
