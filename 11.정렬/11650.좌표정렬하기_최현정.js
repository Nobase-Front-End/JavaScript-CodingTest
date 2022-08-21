const [N, ...datas] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(/\n/)
  .map((i) => i.split(/\s/));

let answer = "";
datas
  .sort(function ([x1, y1], [x2, y2]) {
    if (x1 === x2) return y1 - y2;
    return x1 - x2;
  })
  .forEach((el) => {
    answer += el.join(" ") + "\n";
  });

console.log(answer);
