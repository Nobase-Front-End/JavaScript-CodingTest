const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function binarySearch(arr, target, s, e) {
  let mid;
  while (s <= e) {
    mid = Math.floor((s + e) / 2);
    if (arr[mid] === target) return true;
    else if (arr[mid] > target) e = mid - 1;
    else s = mid + 1;
  }
  return false;
}

function solution() {
  const listA = input[1]
    .split(" ")
    .map((n) => +n)
    .sort((a, b) => a - b);
  const listM = input[3].split(" ").map((n) => +n);

  const result = listM.map((num) =>
    binarySearch(listA, num, 0, listA.length) ? 1 : 0
  );
  console.log(result.join("\n"));
}

solution();
