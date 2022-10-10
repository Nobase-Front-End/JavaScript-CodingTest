const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(path).toString().trim().split('\n');
const N = +input[0];

// 최대 가격이 Number.MAX_SAFE_INTEGER보다 크기 때문에 BigInt타입으로 계산
const roads = input[1].split(' ').map((e) => BigInt(e));
const prices = input[2].split(' ').map((e) => BigInt(e));

let totalPrice = BigInt(0);
let prevPrice = prices[0];

// 출발점부터 이전 가격과 현재 가격을 비교하며 최솟값을 갱신하고 최솟값으로 가격 계산
for (let i = 0; i < N - 1; i++) {
	const currPrice = prices[i];
	if (currPrice < prevPrice) {
		totalPrice += currPrice * roads[i];
		prevPrice = currPrice;
	} else {
		totalPrice += prevPrice * roads[i];
	}
}

// 출력 형식을 맞추기 위해 문자열로 변환
console.log(totalPrice + '');
