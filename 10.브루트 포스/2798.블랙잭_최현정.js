const [N, M, ...cards] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(/\s/)
  .map(Number);

function getCloseSum() {
  let closeSum = 0;
    
  for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
      for (let k = j + 1; k < N; k++) {
        let sum = cards[i] + cards[j] + cards[k];
        if (sum <= M) {
            closeSum = Math.max(closeSum, sum);
        }
      }
    }     
  }
  return closeSum;
}

console.log(getCloseSum());
