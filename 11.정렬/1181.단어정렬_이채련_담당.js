const [n, ...arr] = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt"
  )
  .toString()
  .trim()
  .split("\r\n");


function solution(){
  //단어의 개수 N
  const N = n;
  //입력되는 단어들의 배열 words
  const words = arr;
  
  //단어들의 배열에 중복되는 값을 제거하기 위해 Set을 이용합니다. 
  const distinctWords = new Set(words);

  //sort메서드를 사용하려면 배열이어야 합니다. 따라서 Set 이었던 distinctWords를 배열로 바꿔줍니다. 
  const answer = Array.from(distinctWords);

  //answer 배열을 오름차순으로 정리합니다. 
  answer.sort();

  //단어의 길이가 짧은 것부터 나열하라는 조건을 만족하기 위해서는 다시 정렬을 해야 합니다. 이 때 sort 메서드를 이용하기 위해
  //첫번째와, 두번째 단어의 길이값을 음수, 양수로 반환해주는 함수를 만들어줍니다. 
  const comparator = (first, second) => first.length - second.length;

  //길이정렬을 해주기 위해 sort함수 내에 인자로 음수와 양수값을 반환해주는 comparator 함수를 넣어 줍니다. 
  answer.sort(comparator);

  console.log(answer);
}

solution(); 