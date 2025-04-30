let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let runnersAge = 35;

// early registration adult receive bib number above 1000
if (runnersAge > 18 && registeredEarly === true) {
    raceNumber += 1000;
}

console.log(`Runner age is: ${runnersAge}.`);
console.log(`Runner registered early is: ${registeredEarly}.`);

// check age & registration time to determine race start
if (runnersAge > 18 && registeredEarly === true) {
    console.log(`Your race will start at 9:30am. Your bib number is ${raceNumber}.`)
} else if 
    (runnersAge > 18 && registeredEarly != true) {
        console.log(`Your race will start at 11am. Your bib number is ${raceNumber}.`);
} else if (runnersAge < 18) {
    console.log(`Your race will start at 12:30pm. Your bib number is ${raceNumber}.`);
}
