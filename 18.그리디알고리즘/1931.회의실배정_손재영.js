const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...input] = require('fs').readFileSync(path).toString().trim().split('\n');

const meetings = input
	.map((meeting) => meeting.split(' ').map((e) => +e))
	.sort((a, b) => {
		if (b[0] !== a[0]) return b[0] - a[0];
		return b[1] - a[1];
	});

let count = 0;
let endTime = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < +N; i++) {
	const [st, et] = meetings[i];
	if (et <= endTime) {
		count += 1;
		endTime = st;
	}
}

console.log(count);
