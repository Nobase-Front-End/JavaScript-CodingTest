const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim();

const N = parseInt(input, 10);
let count = 1;
let num = 666;
while (count < N) {
	const curr = ++num + '';
	if (curr.includes('666')) count++;
}
console.log(num);
