const [N, ...nums] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(/\n/)
  .map(Number);

let count = {};
let sum = 0;
nums.sort((x, y) => x - y).forEach((el) => (sum += el));

for (let num of nums) {
  count[num] ? (count[num] += 1) : (count[num] = 1);
}

let toArr = Object.entries(count).sort(function ([k1, v1], [k2, v2]) {
  if (v1 !== v2) return v2 - v1;
  return k1 - k2;
});

let average = Math.round(sum / N);
let median = nums[Math.floor(N / 2)];
let mode = toArr.length > 1 ? (toArr[0][1] === toArr[1][1] ? +toArr[1][0] : +toArr[0][0]) : +toArr[0][0];
let range = Math.abs(nums[N - 1] - nums[0]);

console.log([average, median, mode, range].join("\n"));
// console.log([typeof average, typeof median, typeof mode, typeof range].join("\n"));
