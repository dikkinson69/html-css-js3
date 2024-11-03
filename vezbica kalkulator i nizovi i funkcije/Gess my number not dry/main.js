// //event selectori 
// //Sada cemo manipulisati sa buttonom
// // <button> ima 2 imena u klasi btn check
// // posto i again button ima prvo ima btn
// // mi cemo selekovati dryugo ime .check

// //napravili smo event listener da kada se klikne na button
// // broj (njegov value) iz inputa (klase guess) izlazi u konzoli.

// //SECRET NUMBER
// //sa Math random operacijom
// //moramo trunc ubaciti da ne bi izbacivao decimale
// //* 20 + 1. Da je samo 20 isao bi od 1 do 19
// const number = Math.trunc(Math.random()*20)+1;
// //broj se skriven na znaku pitanja. div klase number
// document.querySelector('.number').textContent = number;
// //postavili smo umesto znaka pitanja da ide random broj
// //vratimo se na if kondicijonal u event listener funkciji
// // da poredimo broj sa guessom

// //takodje cemo da uzmemo domom i <p> klase message. Gde pise start guessing
// // i klikom ce da se promeni na correct number! ali to nije bitno sada, jer ne radi igra
// document.querySelector('.check').addEventListener('click', () => {
// //document.querySelector('.message').textContent = "CORRECT NUMBER";
// const guess = document.querySelector('.guess').value;
// console.log(guess);
// //ali on u konzoli uvek izbacuje string
// // ako hocemo da poredimo broj sa brojem, moramo taj string iz inputa konvertovati u broj
// const guessNumber = Number(document.querySelector('.guess').value);
// console.log(guessNumber,typeof guessNumber);//sada je broj

// //sada cemo da implementiramo logiku igre
// //najpre radimo na tome da nema guessa. 
// //kao da kliknemo na prazno, da bude false value
// //ovako samo po sebi ce ibaciti 0
// //stavicemo da se tekst kontent <p>message promeni u no number
// if(!guess) {
//     document.querySelector('.message').textContent = "NO NUMBER";
// } else if(guess === number) {
//     document.querySelector('.message').textContent = "CORECT NUMBER!";
// }
// });

// //sada cemo da definujemo secret number, koji treba da se ogodi
// // njega cemo da odradimo van svega!
// //van documen query selectora
// // kada bi smo ga obradili unutra. Tacnije u (event)
// // funkciji  u event listener funkciji. Svakim
// //novim klikom bi se pojavio novi secret broj
// // nazad na vrh da ga ubacimo



// Generate a secret number
let number = Math.trunc(Math.random() * 20) + 1;
// Display the secret number (for debugging purposes)

let score = 20;

let highscore = 0;

// Add event listener to the button
document.querySelector('.check').addEventListener('click', () => {
    // Get the guess from the input field and convert it to a number
    const guess = document.querySelector('.guess').value;
    const guessNumber = Number(guess); // Convert input to a number

    console.log(guess, guessNumber); // Debugging logs

    // Check if the input is empty
    if (!guess) {
        document.querySelector('.message').textContent = "NO NUMBER";
    } 
    // Check if the guess is correct
    //when player wins
    else if (guessNumber === number) {
        document.querySelector('.message').textContent = "CORRECT NUMBER!";
        document.querySelector('.number').textContent = number;

        document.querySelector('body').style.backgroundColor = "green";
        document.querySelector('.number').style.width = "30rem";
        
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        //too high
    }else if (guessNumber > number) {
        if (score > 1) {
        document.querySelector('.message').textContent = "TOO HIGH";
        score = score - 1;
        document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message').textContent = " YOU LOST THE GAME";
        }
    
        //too low
    }else if(guessNumber < number) {
        if (score > 1) {
            document.querySelector('.message').textContent = "TOO LOW";
            score = score - 1;
            document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message').textContent = " YOU LOST THE GAME";
            document.querySelector('body').style.backgroundColor = "red";
        
        }
    }
    //implementiracemo to da se broj svakim promasajem smanjuje za jedan. od 20 ka 1 
    // to je u ovim if i if elsovima. Koristimo score, koji smmo postavili gore;
    //takodje u else if guessNumber > score. Stavljamo jos jedan if score > 0. i u njega wrapujemo ceo selektor i message
    // a u else je situacija da smo potrosili sve sanse i isoada da smo izgubili igru

    
});



//manipulatng css style

//menjanje pozadine u zelenu boju kada player pobedi
//takodje da se kvadratic sa brojem, koji treba da se pogodi, prosiri
//to se u if elsu kada je guess === number. 
// uzmemo ceo body u query selector i promenimo my backgroundColor = "green"
// moze i u slucaju da izgubimo, da promenimo u crvenu



//playing again
const again = document.querySelector('.again');
// again.addEventListener("click", (event) => {
//     window.location.reload();
// }, false);

again.addEventListener("click", () => {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = "Start Guessing";
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = '';//epmty value

    document.querySelector('body').style.backgroundColor ='#222';
    document.querySelector('.number').style.width = '15rem';
},false);

//highscore
