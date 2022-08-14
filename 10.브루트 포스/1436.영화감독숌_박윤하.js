let fs = require("fs");
let input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();

function solution(input){

  let count666 = 1;
  let title = 666;
  while(count666 != input){
    title++;
    title += '';
    if(title.includes(666)){
      count666++;
    }
  }
  return title;
}

console.log(solution(input));