let fs = require("fs");
let N = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();

function solution(N){
  const start = (+N) - (N.length * 9);
  for(let i=start; i<=N; i++){
    const digitsum = String(i).split("").reduce((sum, cur)=> sum+(+cur), 0);
    const sum = i+digitsum;
    if(sum==N)  return i;
  }
  
  return 0;
}

console.log(solution(N));