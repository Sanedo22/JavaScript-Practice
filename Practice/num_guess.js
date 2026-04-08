let gameNum = "69";
let userNum = prompt("Guess the number between 1 and 100:");

while (userNum != gameNum){
    userNum = prompt("Wrong guess, guess again");
}
console.log("Congratulations! You guessed the number.");