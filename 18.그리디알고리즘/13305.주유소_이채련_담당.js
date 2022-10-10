const input = require('fs')
	.readFileSync(
		process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
	)
	.toString()
	.trim()
	.split(/\s/);

const N = input[0];
const distance = input.slice(1, N).map((i) => BigInt(i)); // 그냥 Number 는 2^53 밖에 안되는데 제약사항에 2^53을 넘는 숫자가 나올수도 있기 때문에 BigInt를 사용하였다.
const price = input.slice(N).map((i) => BigInt(i));

const gasStation = () => {
	let minPrice = price[0]; // 주유소의 가격 중 최소 가격을 저장해놓기 위한 변수
	let answer = price[0] * distance[0]; // 초기값 : 처음 기름이 비워진 상태이기 때문에 첫 주유소에서 다음 주유소의 거리만큼 꼭 주유해야한다.

	// 현재 주유소와 다음 주유소의 가격을 비교해 가격이 적은 주유소의 가격을 minPrice에 저장해놓고
	// 계속해서 다음 주유소와 minPrice 의 값을 비교해 작은 값과 거리를 곱해 answer에 더해간다.
	for (let i = 1; i < distance.length; i++) {
		if (minPrice > price[i]) {
			minPrice = price[i];
		}
		answer += minPrice * distance[i];
	}

	return answer.toString(); // BigInt 타입을 사용했으므로 string 변환해줘야 알맞게 출력됨
};

console.log(gasStation());
