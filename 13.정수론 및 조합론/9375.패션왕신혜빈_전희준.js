const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  const result = [];
  const testCases = [];
  let idx = -1;
  for (let i = 1; i < input.length; i++) {
    if (isNaN(input[i])) {
      testCases[idx].push(input[i].split(" ")[1]);
    } else {
      testCases.push([]);
      idx++;
    }
  }
  testCases.forEach((tc) => {
    let kinds = 1;
    const obj = {};
    for (let type of tc) {
      obj[type] = obj[type] + 1 || 1;
    }
    Object.values(obj).forEach((cnt) => {
      kinds *= cnt + 1;
    });
    result.push(kinds - 1);
  });
  console.log(result.join("\n"));
}
solution();
