// VARIABLES

// Array that holds the alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Number of times user has guessed the letter correctly
var wins = 0;

// Number of times user has guessed incorrectly (10 guesses) and lost the game
var losses = 0;

// Number of guesses remaining
var guessesLeft = 10;

// Holds the specific letters that the user typed
var guessesSoFar = [];

// Holds users guess (single letter)
var userGuess = [];

// Computer randomly picks a letter from array above
var compChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

// GAME LOOP

document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    if (guessesSoFar.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
        guessesSoFar[guessesSoFar.length] = userGuess;
        guessesLeft--;
    }
    if (compChoice == userGuess) {
        wins++;
        guessesLeft = 10;
        guessesSoFar = [];
        compChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    if (guessesLeft == 0) {
        losses++;
        guessesLeft = 10;
        guessesSoFar = [];
        compChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    }

// UPDATES HTML WITH VALUES FROM ABOVE

    document.querySelector("#wins").innerHTML = "" + wins;
    document.querySelector("#losses").innerHTML = "" + losses;
    document.querySelector("#guessesLeft").innerHTML = "" + guessesLeft;
    document.querySelector("#currentGuesses").innerHTML = guessesSoFar;
}