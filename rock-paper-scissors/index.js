// The possible outcomes are:
// Rock destroys scissors
// Scissors cut paper
// Paper covers rock

// get users choice
var getUserChoice = function(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput; 
     } else { 
        console.log('Error, please make a valid selection.'); 
     }
};

// get computers choice

var getComputerChoice = function() {
   var randomNumber = Math.floor(Math.random() * 3);
   if (randomNumber === 0) {
    return 'rock';
   } else if (randomNumber === 1) {
    return 'paper';
   } else if (randomNumber === 2) {
    return 'scissors';
   }
};

// compare two choices, determine winner

var determineWinner = function(userInput, computerInput) {
    if (userInput === 'bomb') {
        return 'You won!'
    }

    if (userInput === computerInput) {
        return 'Tie Game!';
    } 
    if (userInput === 'rock') {
        if (computerInput === 'paper') {
            return 'The computer won!';
        }
    }
    if (userInput === 'paper') {
        if (computerInput === 'scissors') {
            return 'The computer won!';
        }
        if (computerInput === 'rock') {
            return 'You won!'
        }
    }
    if (userInput === 'scissors') {
        if (computerInput === 'rock') {
            return 'The computer won!';
        }
        if (computerInput === 'paper') {
            return 'You won!'
        }
    }
};

// start program & display results 
var playGame = function(userChoice) {
    var userInput = getUserChoice(userChoice);
    var computerInput = getComputerChoice();

    console.log('user input', userInput);
    console.log('computer input', computerInput);

    var winnerMessage = determineWinner(userInput, computerInput);

    console.log(winnerMessage);
};

var userChoice = prompt();

playGame(userChoice);
