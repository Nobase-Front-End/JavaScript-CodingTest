//while 문을 사용하여 해당 조건이 만족할 때까지 계속 num을 증가시키는 반복문을 이용합니다.
//while 문은 num의 초기값 666부터 해당 조건을 만족할 때 까지 667->668->669 ... 로 계속 증가합니다.

//666이 가장 최소값이므로 num에 666으로 초기화 하였습니다.
let num = 666;
//count는 num이 666부터 증가가 시작되므로 count도 1부터 증가가 시작되어야 합니다.
let count = 1;

//while문의 조건식 (count !== n) ->카운트가 n과 같으면 false가 되므로 while문이 멈추게 됩니다.
//즉, count 와 n이 같지 않다면, 같아질 때까지 계속해서 while문을 돌아달라는 조건입니다.
while (count !== n) {
  //숫자는 while문을 한번씩 돌 때마다 667->668->669 ... 숫자 1씩 증가해야 합니다.
  num++;
  //문자열을 탐색하는 includes를 이용하기 위하여, 숫자 num을 문자열로 변환한 후 666을 포함하고 있으면 count + 1 을 실행합니다.
  if (String(num).includes("666")) count++;
}

console.log(num);
