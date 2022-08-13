const fs=require('fs');
var input=fs.readFileSync('/dev/stdin','utf-8').toString();

var title=666;

while(true){
    
    if(title.toString().includes('666')){
        input-=1;
        if(input==0)
            break;
    }
    
    title+=1;
    
}

console.log(title);