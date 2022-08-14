let fs = require("fs");
let input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\r\n");

const [N, M] = input[0].split(" ");
const cards = input[1].split(" ").map(element=>+element);

function solution(N, M, cards){
  let max = 0;
  for(let i=0; i<N-2; i++){
    for(let j=i+1; j<N-1; j++){
      for(let k=j+1; k<N; k++){
        const sum = cards[i]+cards[j]+cards[k];
        if(sum<=M)  max = Math.max(max, sum);
      }
    }
  }
  return max;
}

console.log(solution(N, M, cards));