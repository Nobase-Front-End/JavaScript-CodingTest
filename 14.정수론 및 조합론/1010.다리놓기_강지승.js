const getPermutations = (arr, num) => {
  const results = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, index, origin) => {
    const permutations = getPermutations(origin, num - 1);
    const attached = permutations.map((v) => [fixed, ...v]);
    results.push(...attached);
  });

  return results;
};

const getCombinations = (array, selectNumber) => {
  const results = [];
  if (selectNumber === 1) {
    return array.map((element) => [element]);
  }
  array.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });
  return results;
};

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

function solution() {
  let T = +input[0];

  const factorial = (n) => {
    if (n === 1) return 1;
    return n * factorial(n - 1);
  };

  const getnCr = (c, n) => {
    return factorial(n) / (factorial(c) * factorial(n - c));
  };

  for (let i = 0; i < T; i++) {
    const [r, n] = input[1 + i].split(" ").map(Number);
    if (r === n) console.log(1);
    else console.log(parseInt(getnCr(r, n) + 0.5));
  }
}

solution();
