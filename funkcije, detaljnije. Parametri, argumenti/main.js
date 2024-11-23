'use strict';

//FUNCTIONS-DEFAULT PARAMETERS

//basic booking function
//prazasn bookings niz
//u createBooking funkciji cemo da napravimo objekat booking i njega 
//pushujemo u niz
const bookings = [];

const createBooking = function(
    flightNum, 
    numPassengers = 1, 
   // price = 199 * 2    mozemo bilo kakav expression
   price = 199 * numPassengers//value drugog parametra da iskalkulisemo
) {
    
    /*po ES6, novom, vec u zagradi gore u paremetrima im stavimo 
    default value
   
   
    // numPassengers = numPassengers || 1;//stari nacin default valua. 
    // //da ne bude undefined
    // price = price || 199;
   
   */
    const booking = {
        flightNum,
        numPassengers,
        price,
    }
    console.log(booking);
    bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123',2 , 800);//rewritujemo one default value
createBooking('LH123', 5);

//JAKO JE BITAN REDOSLED PARAMETARA. ZNaci ne moze numPassengers posle
//price, ako ga price vec koristi
//sada ce drugi argument biti uvek vezan sa price parametrom
createBooking('LH123', 1000);
createBooking('LH123', undefined, 1000);//sa undefined skipujemo numPsasengers parametar


///////////////////////////////////////////////////////////////


//PASSING ARGUMENTS VALUE VS REFERENCE

//primitives and objects in context of functions

const flight = 'LH234';

const diki = {
    name : 'Dimitrije Sreckovic',
    passport: 231231245,    

};

const checkIn = function(flightNum, passenger) {
    flightNum = 'lh999';
    passenger.name = 'MR.' + passenger.name;

    if (passenger.passport === 231231245) {
        alert('CHECK IN');
    }else {
        alert('WRONG PASSPORT!');
    }
};

//checkIn(flight, diki);//ce da ubacimo objekat u parametar
console.log(flight);
console.log(diki);
//desava se to u zadnja 2 console.loga da se na name, dodalo MR.
//a flight koji smo passovali kao flightNum parametar i iako smo izmenili
//flightNum u funkciji da bude lh999. On ipak ostaje LH234 kao gore


//flightNum === flight. NE. flightNum je totalno druga varijabla

//jer je flight primitive!!!!!!!!!
//a diki objekat refereence type

//isto je kao 
//const flightNum = flight;
//const passenger = diki;

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random()) * 1000000000;
};

newPassport(diki);
checkIn(flight, diki);//kaze wrong password
//2 funckije manipulisu isti objekat!

//passing by value and passing by reference. 
//javascrip ima samo passing by value!!!!!!!!!

//----------------------------------------------

//first class and higher order functions

//funkcije su kao gradjani prvog reda
//funkciju su prosto vrednosti
//funkcije su u sustini samo jedan tip objekta

//HIGHER ORDER FUNKCIJE
//passujemo funkcije kao argumente drugim funkcijama
//mozemo da returnujemo funkcije iz funkcija
// const nekaFunkcija = () => {

// };
// nesto.addEventListener('click', nekaFunkcija);
/*event listeneri su higher order funkcije, jer imaju kao argument 
drugu funkciju.
ta druga funkcije je CALLBACK FUNKCIJA!!!!
znaci odradice se, tek kada se zavrsi ona funkcija od pre.
Recimo bude button kliknut u event handleru, jer je e.listener funckija
*/


const count = function() {//higher order funkcija
    let counter = 0;
    return function() { //callback
       console.log(counter++);
    };
};
const counterFunction = count();//ovo storujemo da se prikaze
counterFunction();//0
counterFunction();//1
counterFunction();//2

