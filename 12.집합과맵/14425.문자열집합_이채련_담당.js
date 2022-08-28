const input = require('fs')
	.readFileSync(
		process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
	)
	.toString()
	.trim()
	.split(/\s/);

const n = +input[0];
const m = +input[1];
const n_arr = input.slice(2, n + 2);
const m_arr = input.slice(n + 2);

//집합 n 을 Set 자료구조로 만들고, m배열을 forEach문으로 돌면서 m배열의 요소가 setN이 has 하고 있는지 확인
//배열의 forEach문과 set 자료구조의 has 메서드를 사용해서 중복문자열을 찾았습니다
function solution() {
	//n_arr배열을 Set 자료구조로 변형
	let setN = new Set(n_arr);
	//결과값을 담을 변수
	let res = 0;
	//m_arr을 forEach문으로 돌면서 setN이 인자와 일치하는 요소가 있으면 res 한개씩 증가
	m_arr.forEach((str) => {
		if (setN.has(str)) res++;
	});
	//결과값 리턴
	return res;
}

solution();
