const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const chunks = require('fs')
	.readFileSync(path)
	.toString()
	.trim()
	.split('-')
	.map((chunk) => chunk.split('+').reduce((acc, curr) => +curr + acc, 0));

const min = chunks.reduce((acc, curr) => acc - curr);

console.log(min);
