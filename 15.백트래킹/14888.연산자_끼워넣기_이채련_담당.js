const input = require('fs')
	.readFileSync(
		process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
	)
	.toString()
	.trim()
	.split(/\s/);

const N = +input[0]; // 연산될 숫자의 개수 (numbers 배열의 길이)
const numbers = input.slice(1, N + 1).map(Number); // 연산될 숫자가 담긴 배열
const numberOfOperators = input.slice(N + 1).map(Number); // 각 연산자의 개수가 담긴 배열

const operators = Array.from({ length: N - 1 }); // rec함수를 실행하면서 연산자들을 담을 빈배열 ex)['x', '-', '+', '-', '/'] 이런 형태로 담길 것임.
let minValue = Number.MAX_SAFE_INTEGER; // 최대값이 최소값일 경우를 거르기 위해 최대값으로 설정
let maxValue = Number.MIN_SAFE_INTEGER; // 최소값이 최대값일 경우를 거르기 위해 최소값으로 설정

// 재귀함수 내부에서 operators 배열이 완성되면 numbers 배열과 함께 연산하기 위해 만든 함수
// operators 배열을 차례대로 돌면서 +, -, /, * 의 조건을 확인한 후 value에 연산해서 담는다.
const calculate = () => {
	// numbers배열의 첫번째 값을 value에 넣어준다.
	let value = numbers[0];
	// operators 배열의 길이만큼 for문을 돌며 operators 의 연산자가 뭔지 확인하고 연산자에 맞는 연산을 수행한다.
	// value 에 numbers[0] 번째 값을 담아놨기 때문에 value에 다음 값(numbers[i+1])을 넣어주면서 연산한다.
	for (let i = 0; i < operators.length; i++) {
		// + 일경우
		if (operators[i] === '+') {
			value += numbers[i + 1];
		}
		// - 일경우
		if (operators[i] === '-') {
			value -= numbers[i + 1];
		}
		// / 일경우 나누기인경우에는 음수값 나누기의 조건을 만족시켜야 한다.
		// 음수를 양수로 나눌 때는 양수로 바꾼 뒤 몫을 취하고, 그 몫을 음수로 바꾼 것과 같다.
		if (operators[i] === '/') {
			// 값이 음수인 경우
			if (value < 0) {
				// -value (값을 양수로 바꾼 뒤 계산해서 몫을 취한다.) -Math.floor(몫을 음수로 다시 바꾸어준다.)
				value = -Math.floor(-value / numbers[i + 1]);
			} else {
				// 값이 양수인 경우 그대로 계산해서 몫만 취한다.
				value = Math.floor(value / numbers[i + 1]);
			}
		}
		// * 일경우
		if (operators[i] === '*') {
			value *= numbers[i + 1];
		}
	}

	return value; // 연산되고 난 후 value 값 반환
};

// 재귀함수 내부에서 +,-,*,/ 인지 조건문을 쓰지 않기 위해 미리 배열에 담아서 사용.
const op = ['+', '-', '*', '/'];

// 빈 operators를 채워주고, 다 채워지면 calculate 함수 호출해 연산 시행해주는 재귀함수
const rec = (curIndex, numberOfOperators) => {
	// 재귀함수의 탈출문, operators의 curIndex가 numbers의 길이보다 -1일 경우 return 해야한다.
	// ex) 1 + 2 + 3 - 4 / 5 * 6 일 경우
	// numbers의 인덱스는 0,1,2,3,4,5 까지 있고
	// operators의 인덱스는 0,1,2,3,4 까지 있다
	// operators의 마지막 인덱스 4(5 * 6 에서 *) 인 경우 연산이 끝나야 하므로
	// 탈출 조건은 operators.length과 curIndex가 일치할 때이고, 밑의 for문에서 재귀를 돌며 operators의 빈배열이 채워진 순간이기 때문에
	// return하기 전에 calculate() 를 호출해서 연산 해준다, 그리고 minValue와 maxValue인지 비교해서 value 값을 넣어준다.
	if (curIndex === operators.length) {
		const value = calculate();
		if (minValue > value) {
			minValue = value;
		}
		if (maxValue < value) {
			maxValue = value;
		}
		return;
	}

	// operators의 배열에 연산자들을 담아줄것임
	// numberOfOperators 배열에는 각 연산자들의 사용할 수 있는 갯수가 정해져있다.
	for (let i = 0; i < numberOfOperators.length; i++) {
		// numberOfOperators 요소가 0이면 쓸 수 있는 갯수가 다 떨어졌다는 말임.
		// 다 떨어졌으면 다음 연산자로 넘어가야되니까 조건을 0보다 큰걸로 달아줬음.
		if (numberOfOperators[i] > 0) {
			// operators 의 curIndex에 op 배열의 i 번째 요소를 담아준다.
			operators[curIndex] = op[i];
			// numberOfOperators 의 개수를 하나 빼준다. (사용했으니까 하나 빼줘야댐)
			numberOfOperators[i] -= 1;
			// 함수 자신을 다시 호출하고, 매개변수에 curIndex를 + 1 해서 operators의 다음 index를 채워줄 수 있게 한다.
			rec(curIndex + 1, numberOfOperators);
			// 사용했던 값을 다시 채워줘야 하므로.. +1 해준다
			numberOfOperators[i] += 1;
		}
	}
};

rec(0, numberOfOperators); // 재귀함수 호출
if (minValue === -0) minValue = 0; // -0 인경우와 0 인 경우를 다르게 판단해서 -0 인경우.. 0으로 바꿔줘야함
if (maxValue === -0) maxValue = 0;
console.log(maxValue);
console.log(minValue);
