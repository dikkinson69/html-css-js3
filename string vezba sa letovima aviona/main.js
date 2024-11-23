
'use strict';

const flights = `
_Delayed_Departure;fao93766109;txl2133758440;11:25
+_Arrival;bru0943384722;fao93766109;11:45
+_Delayed_Arrival;hel7439299980;fao93766109;12:05
+_Departure;fao93766109;lis2323639855;12:30`;

  //transformisi ovo gore u ovo dole
  
  /* 🔴 Delayed departure  FAO to TXL (11h25)
        Arrival  BRU to FAO (11h45)
     🔴 Delayed arrival  HEL to FAO (12h05)
        departure  FAO to LIS (12h30)

 */

//posto je + razmak o informacijama
//splitovacemo u niz sve ove letove. U for of loopu je to bitniji

console.log(flights.split('+'));

//imamo po jednu liniju za svaki let. Zato cemo da loopoujemo kroz ovaj niz
//destrcuture tip leta, odakle, dokle i vreme
//dalje cemo da splitujemo sa ;.
//da bi ekstraktovali informaciju o FAO i TXL itd
//u time cemo da replacujemo : sa h
//u type imamo _ kojih hocemo da se otarasimo i zamenimo sa ' '
//replaceAll za to 
//dodati  🔴 kad god je delayed type.
//startsWith !!! to stvara boolean u sustini
//proveravamo da li pocinje sa delayed. Onda ide terniarz operator
//ako pocinje sa _delayed_, dodamo 🔴, a ako ne onda '  '

//sada za from i to. Trebaju nam samo 3 pocetna slova aerodroma da budu velika
//Ne treba nam onaj broj posle
//napravimo funkciju za  to


const getCode = (str) => {
    return str.slice(0,3).toUpperCase();
}

for (const flight of flights.trim().split('+')) {
    const [type, from, to, time] = flight.split(';');
    const output = `${type.startsWith('_Delayed') ? '🔴' : ' '} 
    ${type.replaceAll('_', ' ')} from 
    ${getCode(from)} to
    ${getCode(to)} 
    (${time.replace(':' , 'h')})`.padStart(36);
    console.log(output);
}