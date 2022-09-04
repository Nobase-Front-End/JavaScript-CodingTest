let fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\r\n");
// 백준에서 실행할 경우 .split("\r\n") => .split("\n) 변경

const [_, ...testcase] = input;
testcase.shift();
testcase.push("end");

const solution = (testcase) => {
  let obj = {};
  const answer = [];
  testcase.forEach((cloth) => {
    const [_, type] = cloth.split(" ");
    if (!type) {
      answer.push(
        Object.values(obj).reduce((prev, curr) => prev * (curr + 1), 1) - 1
      );
      obj = {};
    } else {
      obj[type] = obj[type] ? ++obj[type] : 1;
    }
  });
  return answer;
};

console.log(solution(testcase).join("\n"));
