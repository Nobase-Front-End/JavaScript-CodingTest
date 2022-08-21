const [N, ...datas] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(/\n/)
  .map((i) => i.split(/\s/));

// 현재 datas
// [[ '21', 'Junkyu' ], [ '21', 'Dohyun' ], [ '20', 'Sunyoung' ]]

let answer = "";

// 이미 가입한 순서대로 정렬이 되어있기 때문에 나이 비교만 해주면 된다.
// 정렬 후 각 원소를 공백을 두고 합친 후 줄바꿈을 해준다.
datas
  .sort((a, b) => a[0] - b[0])
  .forEach((el) => {
    answer += el.join(" ") + "\n";
  });

console.log(answer);
