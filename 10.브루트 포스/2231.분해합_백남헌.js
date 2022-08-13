const fs = require('fs');
const targetNumber = Number(fs.readFileSync("/dev/stdin").toString().trim());
const digitsOfNumber = targetNumber.toString().split("").length
const startNumber = targetNumber - 9*digitsOfNumber
for(let i=startNumber;i<targetNumber+1;i++){
    const listOfI = i.toString().split("").reduce((acc, cur)=>acc+Number(cur), 0)
    const sumOfI = listOfI + i
    if(sumOfI === targetNumber){
        console.log(i);
        break;
    }
    if(targetNumber===i){
        console.log(0)   
    }
} 