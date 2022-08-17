const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution() {
  let result = [];
  const N = +input.shift();
  const nums = [];
  input.forEach((x) => nums.push(+x));
  nums.sort((a, b) => a - b);
  // 산술 평균
  const average = Math.round(nums.reduce((a, b) => a + b, 0) / N);
  result.push(average === -0 ? 0 : average);
  // 중앙 값
  result.push(nums[Math.floor(N / 2)]);
  // 최빈값
  let array = [];
  let map = {};
  for (let num of nums) {
    map[num] = map[num] + 1 || 1;
  }
  const mostFreq = Math.max(...Object.values(map));
  for (let key in map) {
    if (map[key] === mostFreq) array.push(+key);
  }
  if (array.length > 1) {
    result.push(array.sort((a, b) => a - b)[1]);
  } else {
    result.push(array[0]);
  }
  // 범위
  result.push(nums[nums.length - 1] - nums[0]);

  // 결과 출력
  result.forEach((x) => console.log(x));
}
solution();
