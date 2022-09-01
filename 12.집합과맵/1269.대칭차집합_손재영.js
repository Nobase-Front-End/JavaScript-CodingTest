const [nm, a, b] = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

const [N, M] = nm.split(' ').map((e) => +e);
const MAX = N + M;
const A = new Set(a.split(' '));
const B = new Set(b.split(' '));

console.log(MAX - [...A].filter((a) => B.has(a)).length * 2);
