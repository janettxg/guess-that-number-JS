//create secretNumber
var secretNumber = 4;

//ask user for guess
var guess = Number(prompt("Guess a number"));
/* 
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);
*/

//check if guess is right
if(guess === secretNumber){
    alert("YOU GOT IT RIGHT!");
}

//check if guess is higher
else if(Number(guess) > secretNumber) {
    alert("Too high. Guess again!");
}

//check if guess is lower
else {
    alert("Too low. Guess again!");
}