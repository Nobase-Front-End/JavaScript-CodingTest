/*
해빈이는 패션에 매우 민감해서 한번 입었던 옷들의 조합을 절대 다시 입지 않는다. 
예를 들어 오늘 해빈이가 안경, 코트, 상의, 신발을 입었다면, 다음날은 바지를 추가로 입거나 안경대신 렌즈를 착용하거나 해야한다.
해빈이가 가진 의상들이 주어졌을때 과연 해빈이는 알몸이 아닌 상태로 며칠동안 밖에 돌아다닐 수 있을까?
*/
const [n, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
//경우의 수를 출력
const getItemList = () => {
  const itemList = [];
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i] * 1)) {
      itemList.push(
        arr
          .slice(i + 1, i + Number(arr[i] * 1) + 1)
          .map((element) => element.split(" "))
      );
    }
  }
  return itemList;
};
const calculateThecase = (itemList) => {
  for (let i = 0; i < itemList.length; i++) {
    const result = {};
    for (let j = 0; j < itemList[i].length; j++) {
      const item = itemList[i][j][1];
      result[item] = (result[item] || 1) + 1;
    }
    let all = 1;
    for (const number of Object.values(result)) {
      all = all * number;
    }
    console.log(all - 1);
  }
};
const printCase = () => {
  const itemList = getItemList();
  calculateThecase(itemList);
};

printCase();
