#! /usr/bin/env node

import inquirer from "inquirer";

// 1) computer will generate a random number - Done

// 2) user input for guessing number - Done

// 3) compare user input with computer generative number and show result - Done

const randoNumber = Math.floor(Math.random() * 10 + 1);

console.log("Welcome to number Guessing Game");

 const answers = await inquirer.prompt([
      {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10:",

      },

      ]);

     if(answers.userGuessedNumber === randoNumber) {

      console.log("Congratulations! you guessed right number.");

     } else {

        console.log(" Sorry! you guessed wrong number");
     }

    
