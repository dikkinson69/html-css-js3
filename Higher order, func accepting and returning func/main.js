'use strict';
//FUNCTIONS ACCEPTING OTHER FUNCTIONS

//funkcije koje rade string transformation
//funkcija koja izbrise razmake izmedju reci


//      / /g  ovo vnugo je za sve razmake izmedju reci. g je u globalu
//to je regular expression
const oneWord = function(str) {
    return str.replace( / /g, '').toLowerCase();
};

//ova funkcija ce da pretvori prvu rec u velika slova
const upperFirstWord = function(str) {
    const [first,...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

//sada kkreiramo higher order 

const tranformer = function(str, fn) {
    console.log(`original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`transformed by: ${fn.name}`);//name property, built in metoda
};

//znaci ubacujemo funkciju kao drugi argument
tranformer('JavaScript iz da best', upperFirstWord);
tranformer('JavaScript iz da best', oneWord);

//foreach funkcija u nizu

const high5 = function() {
    console.log("hiii");
}

document.body.addEventListener('click', high5);

['Jimmy', 'Robert', 'John'].forEach(high5);


//----------------------------------------
//FUNCTIONS RETURNING OTHER FUNCTIONS

const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
};

//ovaj value greeterHey je sada funkcija, a u sustini je returnovana funkcija
//iz prethodne
const greeterHey = greet('Hey');
console.log(greeterHey);

greeterHey('Diki');
greet('hello')('Diki');

//isto ovo njesra sa arrow funkcijama
//u sustini isto ko i gore. jedna arrow funkcija vraca drugu arrow funkcijhu
const greetArr = greeting =>name => console.log(`${greeting} ${name}`);
greetArr('cao')('diki');



