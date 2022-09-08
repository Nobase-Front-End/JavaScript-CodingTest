const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const [N, ...input] = require('fs')
	.readFileSync(path)
	.toString()
	.trim()
	.split('\n');

const MAX_LENGTH = +N / 2;
const board = input.map((row) => row.split(' ').map((status) => +status));
const team1 = [];
const team2 = [];
let diff = Infinity;

const getDiff = () => {
	let scoreOfTeam1 = 0;
	let scoreOfTeam2 = 0;
	for (let i = 0; i < MAX_LENGTH - 1; i++) {
		for (let j = i + 1; j < MAX_LENGTH; j++) {
			scoreOfTeam1 += board[team1[i]][team1[j]] + board[team1[j]][team1[i]];
			scoreOfTeam2 += board[team2[i]][team2[j]] + board[team2[j]][team2[i]];
		}
	}
	return Math.abs(scoreOfTeam1 - scoreOfTeam2);
};

const generateTeam = (player) => {
	if (player === +N) {
		if (team1.length === MAX_LENGTH) diff = Math.min(diff, getDiff());
		return;
	}
	if (team1.length < MAX_LENGTH) {
		team1.push(player);
		generateTeam(player + 1);
		team1.pop(player);
	}
	team2.push(player);
	generateTeam(player + 1);
	team2.pop(player);
};

generateTeam(0);

console.log(diff);
