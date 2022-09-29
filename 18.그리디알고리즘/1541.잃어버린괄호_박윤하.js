let fs = require("fs");
let input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const solution = (input) => {
  const addarr = input.split("-");
  let result = 0;
  for (let i = 0; i < addarr.length; i++) {
    result -=
      addarr[i].split("+").reduce((acc, x) => acc + +x, 0) * (i === 0 ? -1 : 1);
  }
  return result;
};

console.log(solution(input));
