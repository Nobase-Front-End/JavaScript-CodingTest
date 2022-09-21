const [n, numbers, operators] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map((string) => +string));
const putOperation = () => {
  const answer = [];
  let operatingNumber = numbers[0];
  const backTracking = (operatedNumber) => {
    if (operatedNumber === numbers.length - 1) {
      if (operatingNumber > 1000000000) {
        operatedNumber = 1000000000;
      }
      if (operatingNumber < -1000000000) {
        operatedNumber = -1000000000;
      }
      answer.push(operatingNumber);
      return;
    }
    if (operators[0] !== 0) {
      operators[0]--;
      operatingNumber += numbers[operatedNumber + 1];
      backTracking(operatedNumber + 1);
      operatingNumber -= numbers[operatedNumber + 1];
      operators[0]++;
    }
    if (operators[1] !== 0) {
      operators[1]--;
      operatingNumber -= numbers[operatedNumber + 1];
      backTracking(operatedNumber + 1);
      operatingNumber += numbers[operatedNumber + 1];
      operators[1]++;
    }
    if (operators[2] !== 0) {
      operators[2]--;
      operatingNumber *= numbers[operatedNumber + 1];
      backTracking(operatedNumber + 1);
      operatingNumber = operatingNumber / numbers[operatedNumber + 1];
      operators[2]++;
    }
    if (operators[3] !== 0) {
      operators[3]--;
      const temp = operatingNumber;
      operatingNumber = Number.parseInt(operatingNumber / numbers[operatedNumber + 1]);
      backTracking(operatedNumber + 1);
      operatingNumber = temp;
      operators[3]++;
    }
  };
  backTracking(0);
  return `${Math.max(...answer)}\n${Math.min(...answer)}`;
};

console.log(putOperation());
