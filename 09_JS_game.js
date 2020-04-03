// Create secretNumber
var user = prompt("Hey there, what should I call you?");
var secretNumber = 4;

// Ask user for a guess
var stringGuess = prompt("Guess my number "+ user + ":");
var guess = Number(stringGuess);

// Check if it is right
if (guess === secretNumber){
	alert("Correct!");
}
else if (guess > secretNumber){
	alert("Too high");
}
else{
	alert("Too low");
}