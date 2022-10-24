const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let answer =""
for(let i=0;i<arr.length;i+=1){
    let sum = 0;
    for(let j=0;j<arr[i].length;j+=1){
    
        if(sum>0){
            sum += arr[i][j]==="("?1 : -1
        }else{
            
            if(arr[i][j]===")") {
               
                sum =Number.MIN_SAFE_INTEGER
                }
            else{
                sum+=1
            }
        }
    }
    if(sum===0) answer+="YES\n"
    else answer+="NO\n"
}
console.log(answer)
