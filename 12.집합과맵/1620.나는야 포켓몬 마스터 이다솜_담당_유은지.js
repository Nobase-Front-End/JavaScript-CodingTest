/*
도감에 있는 포켓몬을 map을 활용해 Map에 [포켓몬 이름, 번호]를 줘서 저장하고
문제를  돌면서 숫자일 때랑 아닐 때 구분해서 처리
*/

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/);

const N = +input[0]; // 도감에 수록된 포켓몬의 개수
const arr = input.slice(2, N + 2); //N개만큼 도감에 넣을 포켓몬 배열 만들어주기 
const pokemonMap = new Map(arr.map((val, idx) => [val, idx + 1])); // idx에 1씩 더해서 순서대로 번호를 값으로 넣어주기
const question = input.slice(N + 2); // 맞춰야 하는 문제배열을 만들어준다
const answer = []; //정답 배열

// 맞춰야 하는 문제를 forEach로 순회하면서 (차례번호 <-> 포켓몬이름)로 변경해준다. 
// 숫자인지 아닌지를 isNaN으로 판단해 문자일 때는 map에서 가져오고 , 숫자일 때는 처음 만든 arr[인덱스]를 가져온다.
question.forEach((v) => {
  if (Number.isNaN(+v)) answer.push(pokemonMap.get(v)); 
  else answer.push(arr[+v - 1]);
});

console.log(answer.join("\n"));
