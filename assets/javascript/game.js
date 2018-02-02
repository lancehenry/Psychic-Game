// Computer picks a random letter
// User enters guess through keyboard letter guesses
// User gets 10 guesses
// If correct, game is over and resets
// If incorrect, number of guesses goes down
// If incorrect, guessed letter get placed in a wrong div
// Once number of guesses hits 0, game resets

// Array that holds the alphabet
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Variables that track wins, losses and guesses
var wins = 0;
var losses = 0;
var guessesLeft = 10;

// Variable for the users guesses so far
var guessesSoFar = [];

// Variable for the users key press
var userGuess = [];

// Computer randomly picks a letter from the alphabet array
var compChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

// On Key Up function
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

    var html =
        "<p>You chose: " + userGuess + "</p>" +
        "<p>Remaining Guesses: " + guessesLeft + "</p>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>";

    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;
};


    // console.log("Wins: " + wins + " Losses: " + losses + " Remaining Guesses: " + guessesLeft + " Guessed So Far: " + guessesSoFar + " Computer Picked: " + compChoice);

