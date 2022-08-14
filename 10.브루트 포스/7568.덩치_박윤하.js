let fs = require("fs");
let input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split('\r\n');
const N = input.shift();
const weightHeight = input
weightHeight.forEach((element, idx, array)=>{
  array[idx] = element.split(' ');
});

function solution(N, weightHeight){
  const rank = [];
  
  weightHeight.forEach((element, idx, arr)=>{
    let count = 0;
    for(let i=0; i<N; i++){
      if(element[0]<=arr[i][0] && element[1]<=arr[i][1])  count++;
    }
    rank.push(count);
  })

  return rank.join(" ");
}

console.log(solution(N, weightHeight));
