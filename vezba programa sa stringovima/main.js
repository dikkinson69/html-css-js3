'use strict';

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));



//Attach event handler to the button
document.querySelector('button').addEventListener('click', function() {
    const text = document.querySelector('textarea').value;
    console.log(text);
    //prvo ovo treba da podelimo u 5 razlicitih stringova
    const rows = text.split('\n');//dobijamo niz sa 5 razlicitih stringova
    console.log(rows);
    //sada cemo da loopoujemo preko ovog niza

    for (const [i, row] of rows.entries()) {
      const [first,second] =  row.toLowerCase().trim().split('_');//ischainujemo ga 
        
      const output = `${first}${second.replace( 
        second[0],
        second[0].toUpperCase()
        )}`;
        console.log(`${output.padEnd(20,)}${"✅".repeat(i + 1)}`);//napravili empty space posle stringa
    }

});

/*underscore_case------->underscoreCase
prvo da podelimo obe reci
 

first_name
Some_Variable 
  calculate_AGE
delayed_departure
*/
