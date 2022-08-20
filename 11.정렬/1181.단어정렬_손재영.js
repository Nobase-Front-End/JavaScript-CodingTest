const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

const [N, ...input] = require('fs')
	.readFileSync(path)
	.toString()
	.trim()
	.split('\n');
const set = new Set(input);
const words = [...set];
words.sort();
words.sort((a, b) => {
	if (a.length !== b.length) return a.length - b.length;
});

console.log(words.join('\n'));
