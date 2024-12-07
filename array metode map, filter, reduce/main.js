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





///////////////////////
//FILTER

//pravimo novu varujablu, deposits. Hocemo da filterisemo movementse
//da odredimo da li je novac podignut ili uplacen
//ako je preko 0 onda je podignut
//samo   return mov > 0;
//i desice se da samo oni elemeti niza, za koje je ovo gore true 
//ce biti ucitani
const deposits = movements.filter(function(mov) {
  return mov > 0;
});
console.log(deposits);

//primer sa for of loopom
const depositsFor = [];
for (const mov of movements) if (mov > 0) {
  depositsFor.push(mov);
}
console.log(depositsFor);

//sada withdrawals
const withdrawals = movements.filter(function(mov) {
 return mov < 0;
});
console.log(withdrawals);

//sa for ofom
const withdrawalsFor = [];
for (const mov of movements) if (mov < 0) {
  withdrawalsFor.push(mov);
};
console.log(withdrawalsFor);

/////////////////
//REDUCE 
//da smanjimo sve iz niza u jedno
//u sustini sve od movementa ce biti global balance
console.log(movements);
//dok su u map i filter 3 elemeta currentElement, index, i ceo niz(cur,i,arr)npr.
//u reduce je prvi element accumulator, drugi current element, znaci sve vrednosti iz niza
//reduce takodje i loopuje kroz niz. Zato uzme i sabere sve
//accumulator je kao snezna grudva, gomila se sve i kupi sve
const balance = movements.reduce(function(accumulator, currentElement, index, array){
  console.log(`iteration ${index}: ${accumulator}`);//efekat snowballa podgledati u consoli
  return accumulator + currentElement;
}, 0);//ovde gde je 0 mozemo da dodamo bilo sta, da povecamo ukupnu vrednost od reduca
console.log(balance);//sabrao je sve


//sa for ofom
let balance2 = 0;
for(const mov of movements) balance2+=mov;
console.log(balance2);

//sada mozemo da displejujemo taj balans u balance value, gde pise 0000 po defaultu
const labelBalance = document.querySelector('.balance__value');
console.log(labelBalance);

const calcDisplayBalance = function(movements) {
  const balance = movements.reduce((acc, movement) => acc+ movement,0);
  labelBalance.textContent= `${balance}: EUR`;
};

calcDisplayBalance(movements);

//prebacicemo ovaj kod u banksist

//MAXIMUM value movements niza
//  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//znaci 3000 nam treba, to je najveca vrednost

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//znaci ako je acc veci od trenutne vrednosti, currenta. Sto je ovde mov
//returnujemo ga, ako ne returnujemo mov
const max = movements.reduce(function(acc, mov) {
  if (acc > mov) {
    return acc;
  }else {
    return mov;
  }
}, movements[0]);//initial value. Ne moze 0
console.log(max);


