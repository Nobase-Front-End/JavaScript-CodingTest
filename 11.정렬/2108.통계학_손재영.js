const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

const [N, ...nums] = require('fs')
	.readFileSync(path)
	.toString()
	.trim()
	.split('\n')
	.map((n) => +n);

if (N === 1) {
	console.log(`${nums[0]}\n${nums[0]}\n${nums[0]}\n0`);
	return;
}

nums.sort((a, b) => a - b);

const freqTable = {};
nums.forEach((n) => (freqTable[n] = (freqTable[n] ?? 0) + 1));
const freqArr = Object.entries(freqTable);
freqArr.sort(([keyA, valA], [keyB, valB]) => {
	if (valA !== valB) return valB - valA;
	return +keyA - +keyB;
});

const average = Math.round(nums.reduce((acc, curr) => acc + curr, 0) / N);
const median = nums[(N - 1) / 2];
const mode = freqArr[0][1] === freqArr[1][1] ? freqArr[1][0] : freqArr[0][0];
const range = nums[N - 1] - nums[0];

console.log(`${average}\n${median}\n${mode}\n${range}`);
