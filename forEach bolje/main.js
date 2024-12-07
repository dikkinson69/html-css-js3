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
//FOR EACH
//ocemo da loopujemo kroz ovaj movements niz kako bi
//printovali poruku za svaki movement element
//ovo je fazon bankomat i brojevi u nizu oznacavaju da li je korisnik
//podigao ili uplatio novac


//for of loop varijanta
for (const movement of movements ) {
  if (movement > 0) {
    console.log(`you deposited ${movement}`);
  }else {
    console.log(`you withdrew ${movement}`);

  }
}

console.log('\n \n \n');
console.log('FOR EACH')
//sada forEeach
//je u sustini higher order funkcija za nizove
//forEach je built in metoda koja poziva i zahteva i callback funkciju
//loopuje kroz niz i za svaku iteraciju ce pozvati ovu callback funkciju
//takodje svaki put ce proslediniti trenutni element NIZAKAO ARGUMENT U CALLBACKU!!!
//znaci movement ce biti pojedinacno svaki elelemt niza
movements.forEach(function(movement) {
  if (movement > 0) {
    console.log(`you deposited ${movement}`);
  }else {
    console.log(`you withdrew ${movement}`);

  }
});
// na mestu 0: function(200)
//na mestu 1: function (450) itd.... to radi forEach

console.log(`\n \n \n` )
//for of loop da napravimo counter
//kao brojimo koliko puta je otisla osoba do bankomata 
//i koliko je pokupila ili ulozila
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`movement ${i + 1} you deposited ${movement}`);
  }else {
    console.log(`movement ${i + 1} you withdrew ${movement}`);

  }
}


console.log(`----forEACH-----`);
//forEACH varijanta
//ubacicemo 3 parametra
//bitan je red elemenata. Prvi je trenutni element, drugi je index, treci je ceo niz kroz koji loopujemo
movements.forEach(function(movement, i, array) {
  if (movement > 0) {
    console.log(`movement ${i + 1} you deposited ${movement}`);
  }else {
    console.log(`movement ${i + 1} you withdrew ${movement}`);

  }
});