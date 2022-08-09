# 🔨 JavaScript Coding Test Bbo-gae-gi 🔨
자바스크립트 코딩테스트를 뽀개기 위한 레포지토리입니다.  
<br>
<br/>

## 👻 공부 방법 👻
백준 단계별로 풀어보기(https://www.acmicpc.net/step) 10단계부터 매주 한단계씩 뽀갭니다.
- 월요일: 그 주에 뽀갤 단계에서 5문제를 함께 선정하고, 각자 랜덤으로 한 문제를 담당하게 됩니다.
- 월요일 ~ 금요일: 5문제를 뽀갭니다. 자신이 담당한 문제는 다른 사람들이 코드만 보고도 이해할 수 있도록 꼼꼼하게 주석을 작성합니다.
- 토요일: 자정까지 자신의 풀이를 레포지토리에 업로드합니다. 별도의 코드리뷰는 없습니다. 폴더구조는 아래 이미지를 참고합니다.  
<br>
<br/>

## 👾 백준에서 JavaScript 입출력 👾
```javascript
// 1. 하나의 값을 입력받을 때
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

// 2. 공백으로 구분된 한 줄의 값들을 입력받을 때
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

// 3. 여러 줄의 값들을 입력받을 때
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 4. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때
const fs = require('fs');
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split(/\s/);

// 5. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때
const fs = require('fs');
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 6. 하나의 값 또는 공백으로 구분된 여러 값들을 여러 줄에 걸쳐 뒤죽박죽 섞여서 입력받을 때
// ex) n 입력 - 공백으로 구분된 n개의 값 입력 - m 입력 - 여러 줄에 걸쳐 m개의 값 입력
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(/\s/);
const n = input[0];
const n_arr = input.slice(1, n+1);
const [m, ...m_arr] = input.slice(n+1);
```
출처: https://overcome-the-limits.tistory.com/25  
<br/>
<br/>

## 🤖 백준 초기 설정 🤖
1. solved.ac 연동
<img width="1309" alt="스크린샷 2022-07-28 오전 11 01 10" src="https://user-images.githubusercontent.com/70943835/181404119-a99e80a8-2411-499f-96d7-4c2b77fbb382.png">
<img width="1309" alt="스크린샷 2022-07-28 오전 11 01 46" src="https://user-images.githubusercontent.com/70943835/181404177-ada689c4-cd8a-4a58-8628-c4a47a59ccd0.png">
<img width="1309" alt="스크린샷 2022-07-28 오전 11 01 54" src="https://user-images.githubusercontent.com/70943835/181404189-db047bbf-fad7-497c-9360-85510a9bb4d0.png">  
2. 기본 설정
<img width="1329" alt="스크린샷 2022-07-31 오후 12 21 51" src="https://user-images.githubusercontent.com/70943835/182008471-4ca48945-4395-44f5-a478-03cc5c009371.png">
<img width="1329" alt="스크린샷 2022-07-31 오후 12 22 14" src="https://user-images.githubusercontent.com/70943835/182008476-459c81ae-9c9b-4dd3-8982-b815d40836f6.png">  
<br/>
<br/>
