const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = require('fs').readFileSync(path).toString().trim().split('\n');
const N = +input.shift();
const [nums, [plus, minus, multiply, divide]] = input.map((str) =>
	str.split(' ').map((n) => +n)
);
const operators = { plus, minus, multiply, divide };
const operatorKeys = ['plus', 'minus', 'multiply', 'divide'];
let MAX = -Infinity;
let MIN = Infinity;

const operate = (operand1, operand2, operator) => {
	if (operator === 'plus') return operand1 + operand2;
	if (operator === 'minus') return operand1 - operand2;
	if (operator === 'multiply') return operand1 * operand2;
	if (operator === 'divide') {
		if (operand1 < 0) return -1 * Math.floor((-1 * operand1) / operand2);
		return Math.floor(operand1 / operand2);
	}
};

const operateNums = (idx, num) => {
	if (idx === N) {
		MAX = Math.max(MAX, num);
		MIN = Math.min(MIN, num);
		return;
	}
	operatorKeys.forEach((key) => {
		if (operators[key] > 0) {
			operators[key]--;
			const nextNum = operate(num, nums[idx], key);
			operateNums(idx + 1, nextNum);
			operators[key]++;
		}
	});
};

operateNums(1, nums[0], operators);

console.log(`${MAX}\n${MIN}`);
