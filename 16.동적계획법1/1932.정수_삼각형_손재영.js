const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const [n, ...f] = require('fs')
	.readFileSync(path)
	.toString()
	.trim()
	.split('\n');
const N = +n;
const floors = f.map((e) => e.split(' ').map((e) => +e)).reverse();

for (let i = 1; i < N; i++) {
	floors[i] = floors[i].map(
		(val, idx) => val + Math.max(floors[i - 1][idx], floors[i - 1][idx + 1])
	);
}

console.log(floors.at(-1)[0]);
