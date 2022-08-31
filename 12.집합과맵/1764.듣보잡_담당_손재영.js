const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [NM, ...arr] = require('fs')
	.readFileSync(path)
	.toString()
	.trim()
	.split('\n');
const [N, M] = NM.split(' ').map((e) => +e);
const notHear = arr.slice(0, N).reduce((acc, curr) => {
	acc[curr] = true;
	return acc;
}, {});
const notHearNotSee = arr.slice(N).filter((e) => notHear[e]);
notHearNotSee.sort();

console.log(`${notHearNotSee.length}\n` + notHearNotSee.join('\n'));
