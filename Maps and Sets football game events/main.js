//1. Create an array 'events' of the different game events that happebed
// no duplicates
//2.After the game has finished, it was found that the yellow card from 
//minute 64 was unfair. Remove this event
//3.Print the following string to the console
//An event happened, on average, every 9 minutes.
//4.Loop over the events and log them to the console, marking whether
//its in the first half or 2nd half of the hame
// [FIRST HALF] : 17: GOOOL

const gameEvents = new Map ([
    [17, 'GOOOL'],
    [36, 'Substitution'],
    [47, 'GOOOL'],
    [51, 'Substitution'],
    [64, 'Yellow card'],
    [69, 'Red card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'GOOOL'],
    [80, 'GOOOL'],
    [92, 'Yellow card'],
]);

console.log(gameEvents);

//1. pravimo niz sa unique eventsima. U sustitna nam trebaju values
console.log(gameEvents.values());
//trebace nam set i par zagradica [] i spread operator da konvertujemo eventove u niz
const events = [...new Set(gameEvents.values())];
console.log(events);


//2.izbrisati zuti karton iz 64'. znaci samo key u zagradu ubacimo
gameEvents.delete(64);
console.log(gameEvents);

//3.iskalkulisati u ${} prosecno vreme tokom kojeg se u utakmici
//desavalo nesto
console.log(`an event happened, on average every ${90 / gameEvents.size} minutes`);
//preciznije resenje jer 92 min traje utakmica
//treba nam spread operator i pop () da bi poslednji element iz niza izbacili
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`an event happened, on average every ${time / gameEvents.size} minutes`);

//4.
for (const [minute, event] of gameEvents) {
    const half = minute <= 45 ? `First` : "Second"
    console.log(`[${half} Half] ${minute} : ${event}`);
}