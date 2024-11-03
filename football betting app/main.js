//FOOTBALL BETTING APP
'use strict';;

const football = {
    team1: "fk polet",
    team2: "fk bradic",
    
    players: [
                [
                    'dida',
                    'dzajic',
                    'messi',
                    'inzaghi',
                    'maldini',
                    'giggs',
                    'lampard',
                    'beckham',
                    'scholes',
                    'terry',
                    'cantona'  
                ],
                [
                    'vanDerSaar',
                    'pele',
                    'maradona',
                    'nedved',
                    'kolarov',
                    'sestic',
                    'pepe',
                    'ozil',
                    'diMaria',
                    'lewandowski',
                    'gatuuuso'
                ]
            ],

    score: "4:0",
    scored: ['giggs', 'messi', 'lampard', 'dzajic'],
    date: 'nov 9th 2005',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },    

    
    
    
};

//creating player1 and player 2 array
//destructuring original player array
const [players1, players2] = football.players;
console.log(players1, players2);

//destructuring sa rest sintaksom
//da izdvoijimo golmana i ostale plajere
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//svi plejeri sa spread operatorom
const allPlayers = [...players1,...players2];
console.log(allPlayers);

//players 1 array sa 3 substituta
const players1Final = [...players1, "Thiago", "Robinho", "Maradona"];
console.log(players1Final);

//3 varijable zasnovane na odds objektu team1, draw, team2
//radimo nested destructuring
const {odds: {team1, x: draw, team2}} = football;
console.log(team1,draw,team2);

//print goals funkcija

const printGoals = function(...players) {
    console.log(`${players.length} goals were scored`)//4 gola su data, jer to je argument dole, sa brojem igraca. zato imamo ovo length
};

printGoals('giggs', 'messi', 'lampard', 'dzajic');
printGoals(football.scored);// ispada one goal scored, jer je u scored niz, koji je 1 element, moramo da ga dekostruisemo
printGoals(...football.scored);// reseno sa 3 tacke

//sada da vidimo na osnovu odds objekta, koji tim 
//ce pobedidi sa manjom kvotom
//bez ifa ili terniarya
team1 < team2 &&  console.log('team 1 is more likely to win');
team1 > team2 &&  console.log('team 1 is more likely to win');
//&& radi kao logicki operator, koji proverava da li je
//neto true. Ako je leva strana true, onda se ostvaruje ovo iz console.loga
//a team1 i team2 smo izvukli dekosntrukcijom oddsa