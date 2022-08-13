const input = require('fs').readFileSync(
	process.platform === 'linux' ? '/dev/stdin' : './input.txt'
);
const N = parseInt(input, 10);

// 가능한 최소값의 최대 범위
// 생성자가 이 값보다 작으면 분해합이 N보다 무조건 작다

const digit = Math.floor(N / 10) + 1;
const min = N - digit * 9;

// 분해합을 반환하는 함수
function getSum(n) {
	let sum = n;
	while (n > 0) {
		const remainder = n % 10;
		sum += remainder;
		n = (n - remainder) / 10;
	}
	return sum;
}

// 가능한 범위 내 가장 작은 값부터 확인하고 분해합 === N 이면 바로 반환
for (let i = min; i < N; i++) {
	if (i < 0) continue;
	let currSum = getSum(i);
	if (currSum === N) {
		console.log(i);
		return;
	}
}
// 이후 값들은 분해합이 무조건 N보다 크기 때문에 0 반환
console.log(0);
return;
