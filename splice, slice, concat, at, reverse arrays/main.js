//WORKING WITH ARRAYS

'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//1) SIMPLE ARRAY METHODS

//Nizovi su isto objekti u sutini. Imaju svoje built in metode/tools

let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE method.Mozemo da isecemo bilo koji niz, a da ne kvarimo original
console.log(arr.slice(2));//ektraktujemo od 
console.log(arr.slice(2, 4));//ogranicimo sa krajnjim parametrom, moze i to
console.log(arr.slice(-2));//negativni parametar, krece od kraja. znaci sece e i d
console.log(arr.slice(1, -2));//ekstraktuje b i sece poslednja 2 d i e. znaci b i c

console.log(arr.slice());//kopija istog niza. slajsujemo nisacim
console.log([...arr]);//ista stvar sa spread operatorom


//SPLICE METHOD
//mutira niz.Pojebe stari niz, isto kao i slice ekstratuje elemente
//ali stari niz ne ostaje isti, vec je izgubio te elemente koje sno splicovali
//console.log(arr.splice(2));
arr.splice(-1);//isekli zadnji element e 
console.log(arr);
arr.splice(1, 2);//b i c izbrisani. Po pozicijama
console.log(arr);


//REVERSE METHOD
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j','i','h','g','f'];
console.log(arr2.reverse());//reversovalo ga, klasika
console.log(arr2);//ali je mutirao originalni!!!!


//CONCAT
//spaja 2 niza. NE mutira
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);//isot sa spreadom


//JOIN
//rezultat  bude string od elemenata iz niza
//slova iz letters odvojena sa - 
console.log(letters.join(' - '));



//AT 
//malo je moderniji, uveden 2022
const arr3 = [23, 11, 64];
console.log(arr3[0]);//ako hocemo prvi element, mozemo ovako tradicionalno
console.log(arr3.at(0));//isto sa at methodom

console.log(arr3[arr3.length -1]);//da pristupimo zadnjem elementu. znaci arr3[velicina niza -1. tj zadnjeg elementa]
//korisno kada ne znamo koliki je niz i gde su koje poziicije

console.log(arr3.slice(-1)[0]);//dobijemo poslednji elet isto. Slice je kul jer ne mutira
//ovo [0] je da bi taj elemet bio bez []


console.log(arr3.at(-1));//ovaj at metod radii isto sto i ovi gore. Uzima poslednji elemet
console.log(arr3.at(-2));


//at metod radi i na stringovima
console.log('Dimitrije'.at(0));//d
