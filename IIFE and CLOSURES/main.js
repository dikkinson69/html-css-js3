//immediately invoked functions
'use strict';

//Funkcije koje se izvrsavaju samo jednom i vise nikad ponovo
//ove funkcije ce nam biti bitne a kasnije za async i await

const runOnce = function() {
  console.log('this will never run again');
};
runOnce();
//nista nas ne zaustavlja da je ponovo pokrenemo kasnije
//dole je fazon
//ne nazovemo je imenom nikakvim, niti je ona vrednost
//bilo kojoj varijabli. Obmotamo je u zagrade
//Na samom kraju stavimo () kao znak da je odmah pozivamo
(function() {
  console.log('this will never run again');
  const isPrivate = 30;
})();

//sa arrow funkcijom
((() => console.log('this will also never run again'))());


//primer kako scope funkcionise sa pristupanjem podataka 
//kako global ne moze da pristupi lokalu
//var radi ali const ne 
{
  const isPrivate = 30;
  var notPrivate = 40;
}

//console.log(isPrivate); greska
console.log(notPrivate);

/////////////////////////////////////
//CLOSURES
//closure se ne koristi manualno kao npr niz. Closure se 
//desavala automatski i treba da prepoznamo 

console.log('closures section');
const secureBooking = function() {
  let passengerCount = 0;

  return function() {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
};

const booker = secureBooking();

booker();
booker();
booker();
//u sustini kada smo napravili const booker, cela funkcija secureBooking nestaje
//sve se prebacuje na booker(); i ona je closure funkcija i uvek ima pristup secureBookingu

//FUNKCIJA UVEK ima pristup variable okruzenju execution contexta u kojem je kreirano!!!
//CLOSURE: variabe okruzenje koje je povezano sa funkcijom, tacno u isto vreme i mesto na kojem je funkcija kreirana

//secureBoking VA ostaje sa booerom zauvek

//CLOSURE ima prioritet nad scope chainom
//dir da se pogleda direktno u funkciju koja je u booker varijabli
console.dir(booker);

//ne moramo samo returnovati funkciju iz druge funkcije
//da bi se napravio closure

let f;

const g = function() {
  const a = 23;
  f = function() {
    console.log(a * 2);
  }
};
//imamo f u globalu skroz, a u globalu g funkcije
//ispod je poenta da f iz globala postane funkcija 
//koja uzima a iz globala funkcije u mnozi ga sa 2 

g();
f();//ovaj f se stvarno preklapa sa funkcijom ispod
//iako nije ni definisan u funkciji
//ima pristup svemu u g funkciji, kao ovom a npr


const h = function() {
  const b = 777;
  f = function() {
    console.log( b* 2);
  }
};

h();
f();
//napravili smo jos jednu funkciju, primer kako se 
//pozivanje m funkcije h sad f assignuje na funkciu u njemu
//kad bi oper pozvali g , f bi bio u njemu funkcija
console.dir(f);//videcemo da je closure b 


//example 2 timer
//n je broj putnika
const boardPassengers = function(n, wait) {
  const perGroup = n / 3;

  //timer
  setTimeout(function() {
    console.log(`TIMER! we are boarding all ${n} passengers`);
    console.log(`there are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
 
  console.log(`will start boarding in ${wait} seconds`);
};


//setTimeout je callback funkcija, koja je imala pristup
//svim varijablama i boardPassengers funkcije, tj.
//pristup n i perGroup. 
//OVo je cist znak closurea

const perGroup = 1000;//ovo nece nist znaciti, jer 
//closure ima prioritet nad globalom. 
//promenilo bi se samo, kada bi izbrisali perGroup u funkciji
boardPassengers(180, 3);

///////////////////////////////////////////

// Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

// And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

// 
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';


  document.querySelector('body').addEventListener('click', function(){
    header.style.color = 'blue';
  });
}());

//kad kliknemo body da se promeni tekst uu plav
//pitanje ja glavno, kako je ovaj klik na body i funkcija
//u tom event handlery imala pristyp const header
