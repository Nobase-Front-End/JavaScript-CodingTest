let fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
let cases = Number(inputs[0]);
let answer = [];
for (let i = 1; i <= cases; i++) {
	let x = Number(inputs[i].split(' ')[0]);
	let y = Number(inputs[i].split(' ')[1]);
	let common = gcd(x, y);
	answer.push((x * y) / common);
}

function gcd(a, b) {
	let tmp;
	while (b != 0) {
		tmp = a % b;
		a = b;
		b = tmp;
	}
	return a;
}
console.log(answer.join('\n').trim());
