const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...arr] = require('fs')
	.readFileSync(path)
	.toString()
	.trim()
	.split('\n');

const N = parseInt(n, 10);
const weights = arr.map((e) => e.split(' ').map((ie) => +ie));

const orders = Array.from({ length: N }, () => 1);

for (let i = 0; i < N; i++) {
	for (let j = 0; j < N; j++) {
		if (weights[i][0] < weights[j][0] && weights[i][1] < weights[j][1])
			orders[i]++;
	}
}

console.log(orders.join(' '));
