const [N, ...WORDS] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function solution(N, WORDS) {
  // 중복된 단어 제거
  WORDS = Array.from(new Set(WORDS));

  // 단어들을 길이가 짧은 것 부터, 길이가 같으면 사전 순으로 정렬

  // 방법 1: 자바스크립트의 sort는 안정정렬
  // -> 두 번째 sort에서 word1.length === word2.length일 경우 요소들의 자리가 바뀌지 않음
  // -> 두 번 나눠서 정렬
  // WORDS.sort();
  // WORDS.sort((word1, word2) => {
  //   if (word1.length !== word2.length) return word1.length - word2.length;
  // });

  // 방법 2: localeCompare는 두 문자열의 사전순 순서를 비교
  // word1이 word2보다 사전순으로 앞에 있는 경우 -1 반환
  // word1이 word2와 같은 경우 0 반환
  // word1이 word2보다 사전순으로 뒤에 있는 경우 1 반환
  WORDS.sort((word1, word2) => {
    if (word1.length !== word2.length) return word1.length - word2.length;
    return word1.localeCompare(word2);
  });

  return WORDS;
}

console.log(solution(N, WORDS).join("\n"));
