#! usr/bin/env node
import inquirer from "inquirer";
// Step - 1 : Computer will generate a random number
const randomNumber = Math.floor(Math.random() * 10 + 1);
// Step - 2 : User Input for guessing number
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number b/w range 1 - 10 : "
    }
]);
console.log(answer);
// Step - 3 : Compare user input number with computer generated number and show results
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed the correct number");
}
else {
    console.log("You guessed the wrong number");
}
