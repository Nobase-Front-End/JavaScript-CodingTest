const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const regex = /[^()\[\]]/g
let answer = ""
for(let i=0;i<arr.length-1;i++){  
    const list =[]
    const line = arr[i].replace(regex, "")
    let bool = true
    for(let j=0;j<line.length; j++){
        if(line[j]==="("||line[j]==="["){
            list.push(line[j])
        }
        else{
            if(list.length>0){
                if(list.at(-1)==="("&&line[j]===")"){
                    list.pop()
                }
                else if(list.at(-1)==="["&&line[j]==="]"){
                    list.pop()
                }else{
                bool = false}
            }else{
                bool = false
            }
        }
    }
        if(list.length!==0) bool = false
        answer += (bool ? "yes\n" : "no\n")
}
console.log(answer)
