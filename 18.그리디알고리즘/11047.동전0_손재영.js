const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [nk, ...input] = require('fs').readFileSync(path).toString().trim().split('\n');

let [N, K] = nk.split(' ').map((e) => +e);
const coins = input.map((e) => +e);

let count = 0;

for (let i = N - 1; i >= 0; i--) {
	const val = coins[i];
	count += Math.floor(K / val);
	K = K % val;
	if (K === 0) break;
}

console.log(count);
