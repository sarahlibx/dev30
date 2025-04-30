let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let runnersAge = 16;

if (runnersAge > 18 && registeredEarly === true) {
    raceNumber + 1000;
}

if (runnersAge > 18 && registeredEarly === true) {
    console.log(`Your race will start at 9:30am. Your bib number is ${raceNumber}.`)
} else if 
    (runnersAge > 18 && registeredEarly != true) {
        console.log(`Your race will start at 11am. Your bib number is ${raceNumber}.`);
} else if (runnersAge < 18) {
    console.log(`Your race will start at 12pm. Your bib number is ${raceNumber}.`);
}
