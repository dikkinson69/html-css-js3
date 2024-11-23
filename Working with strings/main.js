'use strict';

//WORKING WITH STRINGS PT1

const airline = 'Jugoslovenski avio transport';
const plane = 'A320';
//slova i pozicije
console.log(plane[0]);
console.log(plane[2]);//...
console.log('b737'[0]);//MOZE I OVAKO
//length stringa
console.log(airline.length);
//pozicija slova
console.log(airline.indexOf('r'));
//ako ima vise istih slova 
console.log(airline.lastIndexOf('r'));
//mozemo da trazimo i cele reci 
console.log(airline.indexOf('avio'));

//indexOf je koristian da se ekstraktuje deo stringa
//slice metoda
console.log(airline.slice(4));//isekli smo jugo iz stringa
//mozemo u parametru slica da stavimo i end parameter, ne samo begining
console.log(airline.slice(4, 13));//izbrisali smo i avio transport


//cesto i ne znamo koji string treba da ekstraktujemo 
//stavimo 0 kao prvu poiziciju i zatim airline.indexOf(' ') do razmaka 
//u sustini. i Izvalili smo prvu rec
console.log(airline.slice(0, airline.indexOf(' ')));
//poslednja rec samo. +1 je zbog razmaka, da ga nema
console.log(airline.slice(airline.lastIndexOf(' ') + 1));


//ekstraktovanje od kraja. Poslednja 2 slova sa - 2
console.log(airline.slice(-2));
//isekli smo prvo i poslednje slovo
console.log(airline.slice(1, -1));

//funkcija o sedistu u avionu, koja odredjuje da li je sediste u 
//sredini ili nije
//B i E su srednja sedista
//znaci treba da uzmemo zadnje slovo i proverimo da li je B ili E
const checkMiddleSeat = function(seat) {
    const s = seat.slice(-1);
    if (s ==='B' || s === 'E') {
        console.log(`${seat} je srednje sediste`);
    }else {
        console.log(`${seat} nije srednje sediste`);

    }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');


//kada god pozovemo neku funkciju za string(koji je primitive type).
//Javascript ga iza scene automatski konvertuje u objekat, ali ga prikaze
// u istom kontekstu
//ovo bukvalno iza scene
console.log(new String('Diki').slice(1));
console.log(typeof new String('Diki').slice(1));//kaze da je string

//toLower i UpperCase
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//fix capitalisation in names
const passenger = 'dIkI';//da se popravi da bude Diki
const passengerLower = passenger.toLocaleLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//comparing emails of passengers

const email = 'hello@diki.com';
//navodno pogresno unese passenger svoj mail sa razmacima i vise velikih slova
const loginEmail = '   Hello@Diki.com \n';

const lowerEmail = loginEmail.toLowerCase();
//trim
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);
//moze i ovako, isto mu dodje
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);//true


//replacing parts of the string
/// kao cene letova
const priceSerbia   = '120,94€';
//hocemo da zamenimo evro u dolar u stringu
// i zamenimo , za .
const priceUS = priceSerbia.replace('€', '$').replace(',','.');
console.log(priceUS);


//da zamenimo door rec sa gatee
//replaceAll. Svaka instanca pojave reci dooor
const announcment = 'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcment.replaceAll('door', 'gate'));
//ovo replaceAll je od skoro ubaceno

//pre se koristio regular expresion
//umestp '' stavimo // i slovo g. g znaci global
console.log(announcment.replace(/door/g, 'gate'));

//Booleans: includes, starts with, ends with
const newPlane = 'A320 neo';
console.log(newPlane.includes('A320'));//true
console.log(newPlane.includes('Boing'));//false
console.log(newPlane.startsWith('Air'));//false
console.log(newPlane.startsWith('A3'));//true
console.log(newPlane.endsWith('neo'));//true


if (newPlane.startsWith('A') && newPlane.endsWith('neo')) {
    console.log('part of a new airbus company')
}


//pracitce exercise. Da li je prtljag putnika dozvoljen u avionu
const checkBaggage = function(items) {
    //kad god dobijemo input od usera, jako je bitno sve staviti u lowercase
    const baggage = items.toLowerCase();
    if (baggage.includes('knife') || baggage.includes('gun') || baggage.includes('bomb')) {
        console.log(`you are not included on board`);
    }else {
        console.log('welcome on board!');
    }
};

checkBaggage('i Have a Laptop, Food, Bomb');
checkBaggage('i Have a speakers, snacks, camera');
checkBaggage('i Have a dildo, buttplugs and some guns for protection ');

//-------------------------------
//SPLIT i JOIN Method
//ova metoda ce napraviti niz
//['a', 'very', 'nice', 'string'] bukvalno ovo
console.log('a+very+nice+string'.split('+'));
console.log('Dimitrije Sreckovic'.split(' '));

//radimo destructuring sa splitom
const [firstName, lastName] = 'Dimitrije Sreckovic'.split(' ');

//hocemo da last name bude u uppercase i da dodadmo mr na pocetak

//join metoda, totalno suprotno od splita
const newName = ['mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);
//poenta je da smo napravili jedan string koji se satoji od 3 dela 
//jednog niza ['mr.', firstName, lastName.toUpperCase()]


//funkcija da budu velika slova u imenu sa vise reci
const capitalizeName = function(name) {
    const names = name.split(' ');//napravimo niz, preko kojeg cemo da loopojemo
    const namesUpper = [];//prazan niz, gde cemo da storujemo reci sa velikim slovom
    for(const word of names) {//loopojemo kroz svaku rec u names nizu
       namesUpper.push(word[0].toUpperCase() + word.slice(1));//capitalize firs letter
    }
    console.log(namesUpper.join(' '));//Join the array back into a single string and print it
}
capitalizeName('jean claude van damme');
capitalizeName('ronaldo luis nazario de lima');


//PADDING a string
//znaci napravili smo 25 znakova plus pre stringa message
//pad end i pad start
const message ='Go to gate 23';
console.log(message.padStart(25, '+'));
console.log('Dimitrije'.padEnd(25, '+'));
//isto sve, samo 25 pluseva posle
console.log(message.padStart(25, '+').padEnd(30, '+'));
//25 pluseva pre i 5 posle!!!! jer se tako gleda 30 - 25

//padding sa credit card brojem
//ne vidi se na netu nikad broj cele kartice, vec samo poslednja 4 broja

const maskCreditCard = function(number) {
    const stringNumber = number + '';//konvertujemo broj u string
    const last = stringNumber.slice(-4);
    return last.padStart(stringNumber.length, '*');
};

console.log(maskCreditCard(2716668881111));

//REPEAT method
//kao npr na vestima kada ima neki tekst koji ide ispod i ponavlja se sve vreme
const messageWeather = 'Lose vreme....Svi letovi su otkazani';
console.log(messageWeather.repeat(5));//toeto. 5 puta se ponavlja

const planesInLine = function(n) {
    console.log(`there are ${n} planes in line ${'✈️'.repeat(n)}`);
};

planesInLine(4);
