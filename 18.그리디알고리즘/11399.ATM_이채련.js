const [n, ...arr] = require('fs')
	.readFileSync(
		process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
	)
	.toString()
	.trim()
	.split(/\s/);

const N = n;
const time = arr.map(Number);

const minTime = (N, time) => {
	let sum = 0;

	time.sort((a, b) => b - a).forEach((i, index) => {
		sum += i * (index + 1);
	});

	return sum;
};

console.log(minTime(N, time));
