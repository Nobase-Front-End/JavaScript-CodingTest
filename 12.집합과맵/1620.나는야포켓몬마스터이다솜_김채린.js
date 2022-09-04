const [INPUT_N, INPUT_M, ...INPUT_ARR] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(/\s/);
const N = +INPUT_N;
const M = +INPUT_M;
const POKEMONS = INPUT_ARR.slice(0, N);
const QUESTIONS = INPUT_ARR.slice(N);

// // 첫 번째 풀이: 배열 이용(시간초과)
// const solution = (N, M, POKEMONS, QUESTIONS) => {
//   return QUESTIONS.map((question) =>
//     Number.isNaN(+question) ? POKEMONS.indexOf(question) + 1 : POKEMONS[question - 1]
//   );
// };

// 두 번째 풀이: 객체 이용(통과)
const solution = (N, M, POKEMONS, QUESTIONS) => {
  const pokemonObj = {};
  POKEMONS.forEach((pokemon, i) => {
    pokemonObj[pokemon] = i + 1;
    pokemonObj[i + 1] = pokemon;
  });
  return QUESTIONS.map((question) => pokemonObj[question]).join("\n");
};

console.log(solution(N, M, POKEMONS, QUESTIONS));
