'use strict';

//koristiceomo this keyword
//znaci on se koristi za keywordove u objektu, kao sto je dole primer
//u funkciji book za airline, data code i niz bookings
//za bookings niz. pushujemo  0(data code i flight num) i 1(name)

const avioKompanija = {
    airline: 'Jugoslovenski Avio Transport',
    dataCode: 'JAT',
    bookings: [],
    
    book: function(flightNum, name) {
        console.group(`${name} booked a seat on ${this.airline} flight ${this.dataCode}${flightNum}`);
        
        this.bookings.push({flight: `${this.dataCode} ${flightNum}`, name});
    },

   
};

console.log(avioKompanija);
avioKompanija.book(239, 'Dimitrije Sreckovic');
avioKompanija.book(666, 'Varg Vikernes');

//navodno je novi airline kreiran

//CALL, APPLY I BIND METODE!!!!
const avioKompanija2 = {
    airline: 'Air Serbia',
    dataCode: 'AS',
    bookings: [],

    
};

//umesto da kopiramo funkciju book i u avioKompaniju2, napravimo varijablu
//book u koju storujemo funkciju book iz avioKompanija. I roknemo je gde god treba
//ona je vec definisana u avioKompanija
const book = avioKompanija.book;

//book(27, 'Janis Joplin'); ovo ne radi. Jer this keyword 
//jer ova book funkcija vise nije metoda iz avioKompanije, samo 
//regularna funkcija.Kopija je te funkcije, ali ne i METODA
//this keyword iz prvog objekta ne radi na njoj

//CALL METODA
//pozvace book funkciju sa thisovima iz avioKompanija ali setovanim
//na avioKompanija2
book.call(avioKompanija2, 27, 'Janis Joplin');
console.log(avioKompanija2);

book.call(avioKompanija, 420, 'Mary Jane');
console.log(avioKompanija);

//mozemo da pravimo koliko god hocemo objekata i da ih povezujemo 
//call metodom sa funkcijom iz avioKompanija.
//samo morajui da imaju iste propertije, ista imena
const swissArlines = {
    airline: 'Air Swiss',
    dataCode: 'SA',
    bookings: [],
};

book.call(swissArlines, 858, 'Adolf Hitler');
console.log(swissArlines);

//-------------
//APPLY METOD
//isto radi, samo sto ne prima argumente na isti nacin, vec mu treba niz
const flightData = [583,'Mahatma Gandi'];
book.apply(swissArlines, flightData);
console.log(swissArlines);
//applyjovali smo gandija u swiss airlines

//ovo je isto kao i apply
//sa koriscenjem ... spread operatora
book.call(swissArlines, ...flightData);

//----------------------------------------
//BIND METODA
//book.call(avioKompanija, 420, 'Mary Jane');


//ovo ce da returnuje novu funkciju
const bookAk = book.bind(avioKompanija);
const bookAk2 = book.bind(avioKompanija2);
const bookSw = book.bind(swissArlines);
bookAk(291231, 'Dimitrije Sreckovic');
bookAk(3951241, 'Kurcoslav Jajic');
bookAk(12391231, 'Cmarko Kolutic');


const bookAk23 = book.bind(avioKompanija, 23);
bookAk23('Dimitrije Sreckovic');
bookAk23('Tina Turner');

//----------------
//With event listeners

//ocemo kad god kliknemo na buy, da se povecava
avioKompanija.planes = 300;
avioKompanija.buyPlane = function() {
    console.log(this);//this keyword je button
    
    this.planes++;
    console.log(this.planes);
};

//moramo ubaciti bind() na kraju event handlera
document.querySelector('.buy').addEventListener('click', avioKompanija.buyPlane.bind(avioKompanija));
//sad radi. Povecava se broj aviona od 300


//Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.10, 200));

const addVAT = addTax.bind(null, 0.23);
//addVat = value => value + value * 0.23;
console.log(addVAT(100));
console.log(addVAT(23));
console.log(addVAT(45));


//rewrituje sve sa funkcijom koja ce da returnuje drugu funckiju.
//bez binda
const addTaxRate = function(rate) {
    return function(value) {
        return value + value * rate;
    }
}

const addVAT2 = addTaxRate(0.23);
console.log(addVAT(100));
console.log(addVAT(23));
console.log(addVAT(45));
