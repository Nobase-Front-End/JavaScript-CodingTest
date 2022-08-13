const fs = require("fs");
const [targetList, cardList] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const target = targetList.split(" ")[1];
const cards = cardList.split(" ");

const getCombination = function (array, n) {
  const result = [];
  if (n === 1) return array.map((element) => [element]);
  array.map((arr, index) => {
    const rest = [...array.slice(0, index)];
    const combination = getCombination(rest, n - 1);
    const attached = combination.map((element) => [arr, ...element]);
    result.push(...attached);
  });
  return result;
};
const listOfSelectedCardSum = getCombination(cards, 3).map((element) =>
  element.reduce((acc, cur) => acc + Number(cur), 0)
);
const filteredListOfSelectedCardSum = listOfSelectedCardSum.filter(
  (element) => element <= target
);
console.log(Math.max(...filteredListOfSelectedCardSum));
