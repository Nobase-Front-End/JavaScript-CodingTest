const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const [numberRange, requiredNumber] = input.split(" ");
const getCombintions = (numberRange, requiredNumber) => {
  const combinations = [];
  const numberList = [];
  const state = Array(+requiredNumber).fill(0);
  for (let i = 1; i < +numberRange + 1; i++) {
    numberList.push(i);
  }
  const backTracking = (depth, listNum) => {
    if (depth === +requiredNumber) {
      combinations.push([...state]);
      return;
    }
    for (let i = listNum; i < numberList.length; i++) {
      state[depth] = numberList[i];
      backTracking(depth + 1, i + 1);
    }
  };
  backTracking(0, 0);
  return combinations.map((combination) => combination.join(" ")).join(" \n");
};

console.log(getCombintions(numberRange, requiredNumber));
