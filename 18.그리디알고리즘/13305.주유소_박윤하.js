let fs = require("fs");
let [N, distance, price] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((element) => element.split(" "));

const solution = (distance, price) => {
  let minprice = Infinity;
  const totalprice = distance.reduce((acc, dist, idx) => {
    minprice = Math.min(price[idx], minprice);
    return acc + BigInt(dist * minprice);
  }, BigInt(0));
  return (totalprice + "").slice(0);
};

console.log(solution(distance, price));
