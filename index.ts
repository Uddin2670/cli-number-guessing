#!/usr/bin/env node
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);


const answers = await inquirer.prompt([
  {
    name: "UserGuessingNumber",
    type: "number",
    message: "please guess the number between 1-6:",
  },
]);

if(answers.UserGuessingNumber === randomNumber) {
    console.log("congtratulation ! you guessed right number.");
} else{
    console.log("you loss you guessed wrong number"); 
}

console.log("THE END");

