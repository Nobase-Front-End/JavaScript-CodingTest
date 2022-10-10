const [n, ...arr] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(/\n/);

const reversePrice = arr.reverse().map((e) => +e);
let [_, K] = n.split(" ");
let coin = 0;

reversePrice.forEach((price) => {
  coin += Math.floor(K / price);
  K = K % price;
});

console.log(coin);
