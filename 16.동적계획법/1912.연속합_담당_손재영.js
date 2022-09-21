const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = require('fs').readFileSync(path).toString().trim().split('\n');
const N = +input[0];
const nums = input[1].split(' ').map((e) => +e);
nums.push(Number.MIN_SAFE_INTEGER);

let max = nums[0];
let temp = nums[0];

for (let i = 1; i < nums.length; i++) {
	let curr = nums[i];
	if (curr >= 0) temp = temp >= 0 ? temp + curr : curr;
	else {
		max = Math.max(max, temp);
		temp = Math.max(temp + curr, curr);
	}
}
console.log(max);
