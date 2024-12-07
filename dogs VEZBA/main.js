// Julia and Kate are doing a study on dogs. So each of them asked 
//5 dog owners about their dog's age, and stored the data into an array (one array for each). 
//For now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), 
//and does the following things:

// 1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! 
//So create a shallow copy of Julia's array, 
//and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
// 4. Run the function for both test datasets

// HINT: Use tools from all lectures in this section so far 😉

// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

'use strict';

const checkDogs = function(dogsJulia, dogsKate) {
  const correctedJulia = dogsJulia.slice(1 , -2);
  const allDogs = correctedJulia.concat(dogsKate);

  allDogs.forEach(function(age, i){
    if (age >= 3) {
      console.log(`${age} year old dog is an adult, he is num ${i + 1}`);
    }else {
      console.log(`${age} year old dog is stll a puppy, he is num ${i + 1}`);
    }
  });

};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);


//2.Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages
// and calculate the average age of the dogs in their study.

// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

// 1. Calculate the dog age in human years using the following formula:
// if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets

// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

// const calcAverageHumanAge = function(ages) {
//   const dogAgesHuman = ages.map(function(cur, i){
//     if(cur <= 2) {
//     console.log(`${i+1}: dog ${cur} years old is ${cur *2} human years old \n  `);
//     }else {
//      console.log(`${i+1}: dog ${cur} years old is ${16 + cur *4} human years old \n  `);
//     }
//   });
//   return dogAgesHuman;
// };
// console.log(calcAverageHumanAge(dogs1));

const doggies = function() {
  const dogs1 = [5, 2, 4, 1, 15, 8, 3];
  const calcAverageHumanAge = function(ages) {
  const dogAges = ages.map((cur, i) => cur <=2 ?`${i+1}: dog ${cur} years old is ${cur *2} human years old\n`
  :`${i+1}: dog ${cur} years old is ${16 + cur *4} human years old\n`);
    
  const filteredDogs = dogAges.filter(function(humanAges) {
    return humanAges >=18;
  });
  
  const formattedDogs = filteredDogs.map((humanAge, i) => 
    `Dog ${i + 1} has ${humanAge} human years.\n`
  );
  return formattedDogs.join('');
};
return calcAverageHumanAge(dogs1);
};

console.log(doggies());


const doggos = function () {
  const dogs2 = [16, 6, 10, 5, 6, 1, 4];

  const calcAverageHumanAge2 = function (ages) {
    // Convert dog ages to human ages
    const dogoHumanAges = ages.map(function (cur, i) {
      const humanAge = cur <= 2 ? cur * 2 : 16 + cur * 4;
      console.log(`${i + 1}: dogo is of ${cur} dog age, and of ${humanAge} human age \n`);
      return humanAge; // Return the human age
    });

    // Filter out dogs that are less than 18 human years old
    const filteredDogos = dogoHumanAges.filter(function (humanAge) {
      return humanAge >= 18;
    });

    // Log the "puppies" (dogs less than 18 human years old)
    dogoHumanAges.forEach(function (humanAge, i) {
      if (humanAge < 18) {
        console.log(`${i + 1}: dogo is of ${dogs2[i]} dog age, and is still a puppy at ${humanAge} human age!`);
      }
    });

    // Format and log the adult dogs
    const formattedDogs = filteredDogos.map(function (cur, i) {
      return `${i + 1}: dogo is of ${cur} human age`;
    });

    console.log("\nAdult dogs:\n", formattedDogs.join("\n"));
  };

  calcAverageHumanAge2(dogs2);
};

doggos();


