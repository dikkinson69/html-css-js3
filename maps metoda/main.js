'use strict';

//MAP FILTER REDUCE TOOLS

/*MAP, koristan, kao i forEach za loopovanje kroz niz
ali map stvori novi niz baziran na originalnom
loopuje kroz niz i za svaku iteraciju ima callback funkciju
koja npr svaki element mnozi sa 2! i stavi je u novi niz
veoma korisno


FILTER filterise niz i vraca u novi niz samo elemente koji su prosli
neke zahteve, koje bismo da postavimo, kako bismo ga filterisali


REDUCE sve elemente iz originalnog niza pretvori u jednu vrednosti
on u sebi ima accumulator koji dodadje elemente i pored acc ima i trenutne elemente
sabira ih i vrati konacan rezultat od svih njih

MAP*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//hocemo da ih konvertujemo u dolare, ako su npr euri

const eurToUsd = 1.1;

//treba da ponozimo svaki element iz movementsa sa 1.1
//map ima u sebi callback funkciju, stavicemo mov kao parametar. Sto ce biti u sustini elelemti iz niza
//posto map stvara novi niz. Storovacemo ga u movemetsUSD varijablu
const movementsUSD = movements.map(function(mov) {
  return mov * eurToUsd;
  //return 420; //ovo je primer sta radi map. U ovom slucaju ce sve pozicije biti broj 420
});
console.log(movements);
console.log(movementsUSD);

//sad cemmo isto sa for of loopom
//novi prazan niz u koji cemo da pushujemo
//isto ce da uradi, ali skroz druga filozofija
//modernija je ova map verzija radnje stvari
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

//mozemo da pojednostavimo callback funkciju  sa arrow funkcijom
const movToUSD = movements.map (mov=> mov * eurToUsd);
console.log(movToUSD);
//rokacemo dalje arrow funkcije

//map metoda ima pristup i elementima i indeksu i celom nizu
//zato su 3 parametra u arrow funkciji
//napravicemo onu logiku, koja odredjuje da li su podginute pare ili ubacene 
//necemo consologovati ovo u `` vec cemo da returnujemo
//kako bi to sve bilo u novoj vrednosti, novom nizu
const movementsDescriptions = movements.map((mov, i , arr) => {
  if (mov > 0) {
    return `movement ${i + 1}: you deposited ${mov}`;
  }else {
    return `movement ${i + 1}: you withdrew ${mov}`;
  }
});
//dobijamo niz sa stringovima u returnu
console.log(movementsDescriptions);

//sa termiarijem
const movDescr = movements.map((mov, i) => 
  mov > 0 ? `movement ${i + 1}: you deposited ${mov}`
: `movement ${i + 1}: you withdrew ${mov}` );
console.log(movDescr);