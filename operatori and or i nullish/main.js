'use strict';

const footballGame = {
  team1: "prckovici",
  team2: "tuckovici",

  players : [
    [
      'buffon',
      'cumplo',
      'krkljo',
      'drkljo',
      'nedjo',
      'samir',
      'hasan',
      'mikec',
      'dikec',
      'marej',
      'bonga'

    ],
    [
      'kahn',
      'mustafa',
      'kemal',
      'ataturk',
      'yaoming',
      'messi',
      'giggs',
      'saban',
      'baki',
      'dudo',
      'mudo'

     ]
    ],

    score: "4:0",

    scored: ['krkljo','samir', 'drkljo', 'mikec'],
    date: "nov 29th 1994",
    odds: {
      team1: 1.44,
      x: 5.55,
      team2: 3.45,
    },


};

const [players1, players2 ] = footballGame.players;
console.log(players1,players2);
const [gk,...fieldPlayers] = footballGame.players[0];
console.log(gk,fieldPlayers);

const allPlayers = [...players1, ...players2] ;
console.log(allPlayers);

const completeSquad = [...players1, 'tiago', 'perisic', 'ronaldo'];
console.log(completeSquad);

const {team1, x: draw, team2} = footballGame.odds;

console.log(team1, draw, team2);

const printGoals = function(...goalsScored) {
  console.log(`players ${goalsScored} have scored in this game`);
}

printGoals('krkljo','samir','drkljo','mikec');