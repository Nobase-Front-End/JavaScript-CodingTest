const [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/);
const numberList = arr.map((element) => +element);
const max = Math.max(...numberList);
const pibo = [1, 1, 1, 2, 2, 3, 4, 5, 7, 9];
const piboF = () => {
  const lastNumber = pibo.length - 1;
  if (max > lastNumber) {
    pibo.push(pibo[lastNumber - 1] + pibo[lastNumber - 2]);
    piboF();
  }
};
piboF();
const answer = numberList.map((number) => pibo[number - 1] + "\n").join("");
console.log(answer);
