const STR = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

// Array.push vs Set.add: https://stackoverflow.com/questions/39007637/javascript-set-vs-array-performance
const solution = (STR) => {
  const subStrings = [];
  for (let i = 0; i < STR.length; i++) {
    for (let j = i; j < STR.length; j++) {
      subStrings.push(STR.slice(i, j + 1));
    }
  }
  return new Set(subStrings).size;
};

console.log(solution(STR));
