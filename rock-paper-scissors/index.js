// The possible outcomes are:
// Rock destroys scissors
// Scissors cut paper
// Paper covers rock

// get users choice
function getUserChoice (userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || 'paper' || 'scissors') {
        return userInput; 
     } else { 
        console.log('Error, please make a valid selection.'); 
     }
};

getUserChoice(userInput('banana'));

// get computers choice

function getComputerChoice() {
   computerInput = Math.floor(Math.random(0-2));
   if (computerInput === 0) {
    return 'rock';
   } else if (computerInput === 1) {
    return 'paper';
   } else if (computerInput === 2) {
    return 'scissors';
   }
}

getComputerChoice(computerInput());

// compare two choices, determine winner

function determineWinner(userInput, computerInput) {
    if (userInput === computerInput) {
        return 'Tie Game!';
    } 
    if (userInput === 'rock' || 'scissors') {
        if (computerInput === 'paper'){
            return 'The computer won!';
        }
    } else {
        return 'You won!';
    }
    if (userInput === 'paper') {
        if (computerInput === 'scissors' || 'rock'){
            return 'You won!';
        }
    } else {
        return 'The computer won!';
    }
    if (userInput === 'scissors') {
        if (computerInput === 'rock' || 'paper'){
            return 'The computer won!';
        }
    } else {
        return 'You won!';
    }
}

// start program & display results 

function playGame() {
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    console.log(getUserChoice, getComputerChoice);

    console.log(determineWinner(userChoice, computerChoice));
}

playGame();