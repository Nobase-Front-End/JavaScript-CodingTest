const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

// 값이 존재하는지 확인하는 시간을 O(1)로 만들기 위해 배열이 아닌 set 객체에 값을 저장한다.
const seq = new Set(input[1].split(" "));
// seq에 값이 존재하면 1, 아니면 0을 배열에 담는다.
const answer = input[3].split(" ").map((n) => (seq.has(n) ? 1 : 0));

console.log(answer.join("\n"));
