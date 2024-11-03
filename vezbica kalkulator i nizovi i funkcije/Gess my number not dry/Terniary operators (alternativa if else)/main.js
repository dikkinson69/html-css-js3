// Conditionals: TERNARY OPERATORS



// syntax
// codition ? ifTrue: ifFalse

// let soup = "Chicken Noodle Soup";
// let response = soup ? "Yes, we have soup" : "Sorry, no soup today";
// console.log(response);

// ovde ispod cemo da obrisemo chicken noodle soup. I onda je value undefined
// s tim, ce odgovor biti false, tj sorry we dont have soup

// let soup;
// let response = soup ? "Yes, we have soup" : "Sorry, no soup today";
// console.log(response);
// ternary operator radi tri operacije. Uslov koji prati znak pitanja ?
// Zatom odgovor, kod da se ostvari ako je uslov true i na kraju dve tace :
//  i odgovor kod, koji ce da odradi ako je uslov false. ovaj operato
// se cesto koristi kao alternative if i else.

let soup = "Chicken Noodle Soup";
let isCustomerBanned = false;
let soupAccess = isCustomerBanned ? "Sorry, no soup for you" 
: soup
?`Yes, we have ${soup} today`
: "Sorry, no soup today";
console.log(soupAccess);


// program za ocenu. Pretvara broj bodova u ocenu u slovima
let testScore = 69;
let myGrade = testScore > 89 ? "A"
: testScore > 79 ? "B"
: testScore > 69 ? "C"
: testScore > 59 ? "D"
: "F";
console.log(`Your grade is ${myGrade}`);


// papir, kamen, makaze igra.
let playerOne = "scissors";
let computer = "rock";
let result = 
	playerOne === computer 
	? "Tie game"
	: playerOne === "rock" && computer === "paper"
	? "Computer wins"
	: playerOne === "paper" && computer === "scissors"
	? "Computer wins"
	: playerOne === "scissors" && computer === "rock"
	? "Computer wins"	
	: "player One wins";
	console.log(result);