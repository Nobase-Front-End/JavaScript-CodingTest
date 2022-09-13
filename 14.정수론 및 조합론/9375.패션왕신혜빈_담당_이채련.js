let input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n');

//테스트케이스 처리 (백준 예제 1~5줄까지 처리)
let idx = 0;
//백준에서는 input.txt를 문자열로 받아오기 위해 input[0] 을 숫자로 바꿔주기 위해 +를 붙여 타입변환을 해준다.
let tc = +input[idx++];

for (let i = 0; i < tc; i++) {
	//n = input[1]의 값 할당해주면 n = 3;
	let n = +input[idx++];
	let ans = 1;
	//맵 자료구조 생성
	let map = new Map();

	//0~3까지 for문을 돌며 map에 넣어준다.
	for (let j = 0; j < n; j++) {
		//디스트럭쳐링할당을 이용해서 공백으로 분리된 값을 name, category에 각각 할당
		let [name, category] = input[idx++].split(' ');

		//map이 디스트럭쳐링할당받은 category의 내용을 가지고있다면 category 키 값에 name push
		if (map.get(category) != undefined) map.get(category).push(name);
		//map이 디스트럭처링할당받은 category의 내용을 가지고있지 않다면 키,value값으로 set해준다.
		else map.set(category, [name]);
	}

	for (let category of map.keys()) {
		//경우의 수 계산 => 정답 *= (카테고리별 길이 + 1);
		ans *= map.get(category).length + 1;
	}
	//아무것도 안입는 경우 한가지 제외 하면 답
	console.log(ans - 1);
}
