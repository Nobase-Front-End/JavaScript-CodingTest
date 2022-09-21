const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const [N, ...stairs] = require('fs')
	.readFileSync(path)
	.toString()
	.trim()
	.split('\n')
	.map((e) => +e);

const maxVals = Array(N).fill(0);
maxVals[0] = stairs[0];
maxVals[1] = stairs[0] + stairs[1];
maxVals[2] = Math.max(stairs[2] + stairs[1], stairs[2] + stairs[0]);

for (let i = 3; i < N; i++) {
	maxVals[i] = Math.max(
		maxVals[i - 2] + stairs[i],
		maxVals[i - 3] + stairs[i - 1] + stairs[i]
	);
}

console.log(maxVals[N - 1]);
