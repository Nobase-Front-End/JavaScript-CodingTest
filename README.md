# 🔨 JavaScript Coding Test Bbo-gae-gi 🔨
자바스크립트 코딩테스트를 뽀개기 위한 레포지토리입니다.  
부트캠프 일정에 무리가 가지 않는 선에서 각자 꾸준히 알고리즘 문제를 푸는 것을 목표로 합니다.  
<br/>

|주차|주제|문제|
|---|---|---|
|1주차|[10. 브루트 포스](https://www.acmicpc.net/step/22)|[2798. 블랙잭](https://www.acmicpc.net/problem/2798)|
|    |                                               |[2231. 분해합](https://www.acmicpc.net/problem/2231)|
|    |                                               |[7568. 덩치](https://www.acmicpc.net/problem/7568)|
|    |                                               |[1018. 체스판 다시 칠하기](https://www.acmicpc.net/problem/1018)|
|    |                                               |[1436. 영화감독 숌](https://www.acmicpc.net/problem/1436)|
|2주차|[11. 정렬](https://www.acmicpc.net/step/9)      |[2108. 통계학](https://www.acmicpc.net/problem/2108)|
|    |                                               |[11650. 좌표 정렬하기](https://www.acmicpc.net/problem/11650)|
|    |                                               |[1181. 단어 정렬](https://www.acmicpc.net/problem/1181)|
|    |                                               |[10814. 나이순 정렬](https://www.acmicpc.net/problem/10814)|
|3주차|[12. 집합과 맵](https://www.acmicpc.net/step/49) |[14425. 문자열 집합](https://www.acmicpc.net/problem/14425)|
|    |                                               |[1620. 나는야 포켓몬 마스터 이다솜](https://www.acmicpc.net/problem/1620)|
|    |                                               |[1764. 듣보잡](https://www.acmicpc.net/problem/1764)|
|    |                                               |[1269. 대칭 차집합](https://www.acmicpc.net/problem/1269)|
|    |                                               |[11478. 서로 다른 부분 문자열의 개수](https://www.acmicpc.net/problem/11478)|

<br>

## 👻 공부 방법 👻
백준 단계별로 풀어보기(https://www.acmicpc.net/step) **10단계**부터 매주 한단계씩 뽀갭니다.
- **월요일**: 그 주에 뽀갤 단계에서 5문제를 함께 선정하고, 각자 랜덤으로 한 문제를 담당합니다.
- **월요일 ~ 금요일**: 5문제를 뽀갭니다. 자신이 담당한 문제는 다른 사람들이 코드만 보고도 이해할 수 있도록 꼼꼼하게 주석을 작성합니다. 구글링을 해서 다른 사람의 답을 참고해도 좋습니다다. 다만, 이후에 해당 코드를 보고도 풀이 방법을 이해하지 못하는 사람이 직접 찾아온다면 언제든지 설명해줄 수 있어야 합니다.
- **토요일**: 자정까지 자신의 풀이를 레포지토리에 업로드합니다. 폴더구조는 아래 이미지를 참고합니다. 별도의 코드리뷰 없습니다. 각종 컨벤션 및 규칙 없습니다.
  <img width="880" alt="스크린샷 2022-08-09 오후 8 45 32" src="https://user-images.githubusercontent.com/70943835/183642169-d31c0cf9-08e0-4d23-8900-761733767daf.png">  
<br/>
<br/>

## 👾 백준에서 JavaScript 입출력 👾
1. 하나의 값을 입력받을 때
```javascript
const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();
```

2. 공백으로 구분된 한 줄의 값들을 입력받을 때
```javascript
const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ");
```

3. 여러 줄의 값들을 입력받을 때
```javascript
const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n");
```

4. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때
```javascript
const [n, ...arr] = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(/\s/);
```

5. 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때
```javascript
const [n, ...arr] = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n");
```

6. 하나의 값 또는 공백으로 구분된 여러 값들을 여러 줄에 걸쳐 뒤죽박죽 섞여서 입력받을 때
// ex) n 입력 - 공백으로 구분된 n개의 값 입력 - m 입력 - 여러 줄에 걸쳐 m개의 값 입력
```javascript
const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(/\s/);
const n = input[0];
const n_arr = input.slice(1, n+1);
const [m, ...m_arr] = input.slice(n+1);
```
출처: https://overcome-the-limits.tistory.com/25  
<br/>
❗️ IDE에서 JS파일과 같은 디렉토리의 index.txt를 통해 입력을 받아 출력을 테스트해볼 수 있습니다 ❗️ 
<br/>
<br/>
<br/>

## 🤖 백준 초기 설정 🤖
1. solved.ac 연동
<img width="1309" alt="스크린샷 2022-07-28 오전 11 01 10" src="https://user-images.githubusercontent.com/70943835/181404119-a99e80a8-2411-499f-96d7-4c2b77fbb382.png">
2. 기본 설정
<img width="1329" alt="스크린샷 2022-07-31 오후 12 21 51" src="https://user-images.githubusercontent.com/70943835/182008471-4ca48945-4395-44f5-a478-03cc5c009371.png">
<img width="1329" alt="스크린샷 2022-07-31 오후 12 22 14" src="https://user-images.githubusercontent.com/70943835/182008476-459c81ae-9c9b-4dd3-8982-b815d40836f6.png">  
<br/>
<br/>

## 🎃 뽀나스 🎃
https://www.notion.so/c4945b3675b34c9c83ef8ca05f8df98f  
커넥투 자체 코딩테스트 관련 토론의 장을 열어드립니다.  
자신은 문제를 어떻게 이해했는지, 어떤 방법으로 풀었는지, 코너케이스는 무엇인지 등 가벼운 주제부터 코드 공유 및 코드 리뷰까지 모두 환영합니다.  
<br/>
<br/>
