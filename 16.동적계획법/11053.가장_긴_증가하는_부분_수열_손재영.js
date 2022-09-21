const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = require('fs').readFileSync(path).toString().trim().split('\n');
const N = +input[0];
const nums = input[1].split(' ').map((e) => +e);

const records = [1];

for (let i = 1; i < nums.length; i++) {
	const currNum = nums[i];
	let maxLen = 1;
	for (let j = i; j >= 0; j--) {
		let compareNum = nums[j];
		if (currNum > compareNum) {
			const currLen = records[j] + 1;
			maxLen = Math.max(maxLen, currLen);
		}
	}
	records[i] = maxLen;
}

console.log(Math.max(...records));
