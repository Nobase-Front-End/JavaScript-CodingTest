/*
문제
위 그림은 크기가 5인 정수 삼각형의 한 모습이다
맨 위층 7부터 시작해서 아래에 있는 수 중 하나를 선택하여 아래층으로 내려올 때, 
이제까지 선택된 수의 합이 최대가 되는 경로를 구하는 프로그램을 작성하라. 
아래층에 있는 수는 현재 층에서 선택된 수의 대각선 왼쪽 또는 대각선 오른쪽에 있는 것 중에서만 선택할 수 있다.
삼각형의 크기는 1 이상 500 이하이다. 삼각형을 이루고 있는 각 수는 모두 정수이며, 
범위는 0 이상 9999 이하이다.
*/
const [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
//문제에 주어진 값을 \n으로 한줄 씩 나누어 배열로 만든다
const graph = arr
  .map((element) => element.split(" ").map((str) => +str))
  .reverse();
//배열을 " " split하고, 각 문자들을 Number로 바꾼다. 아래에서 위로 더하는 것이 낫기에 reverse한다
for (let i = 1; i < graph.length; i++) {
  for (let j = 0; j < graph[i].length; j++) {
    graph[i][j] += Math.max(graph[i - 1][j], graph[i - 1][j + 1]);
  }
}
//밑에 있는 숫자에서 높은 숫자를 선택했을 때를 계속 더한다
console.log(graph[graph.length - 1][0]);
//맨 위으 숫자를 return gksek
