// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

// 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets

// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
'use strict';

const calcAverage = function(ages) {
  const humanAges = ages.map(age => age <= 2 ? 2 * age 
    : 16 + age * 4);
  //console.log(humanAges);
    const adultDogs = humanAges.filter(age => age >=18) 
    console.group(humanAges);
    console.log(adultDogs);

    const average = adultDogs.reduce((acc, age) =>
    acc + age, 0) / adultDogs.length; 

    return average;
    
  };

const avg1 = calcAverage([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverage([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);

const calcAverageAge = function(ages) {
  const humanAges = ages.map(function(cur, i){
    return cur <=2 ? cur * 2 : 16 + cur * 4;
  });
  //return humanAges.join('');
  const filteredDogs = humanAges.filter(function(cur, i) {
    return cur <= 18;
  });
  
  const adultDogs = humanAges.filter(function(cur) {
    return cur > 18;
  });
  const puppyMessage = filteredDogs.map(function(cur, i) {
    return `${i + 1} dog: is still a puppy and is only ${cur} dogo years old`;

  });
  const adultMessage = adultDogs.map(function(cur, i) {
    return `${i + 1} dog: is a big dog and is  ${cur} human years old`;

  }); 

  const allDogs = [...puppyMessage,...adultMessage].join('\n')
  return allDogs;
};
console.log(calcAverageAge([5, 2, 4, 1, 15, 8, 3]));