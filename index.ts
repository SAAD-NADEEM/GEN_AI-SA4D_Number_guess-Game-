import inquirer from "inquirer";


const randomnumber = Math.floor(Math.random() *6 +1);
// const randomnumber = 4;
console.log("...................................")
console.log(". Welcome! Simple Number Guessing .")
console.log(". Game By SA4D                    .")
console.log("...................................")

console.log("==================================")
console.log("Please guess a number between 1-6")
console.log("==================================")
const answers = await inquirer.prompt([
    {
        message: ".",
        type: "number",
        name: "userguessnumber",
    },
]);

if(answers.userguessnumber === randomnumber) 
    {
        console.log("==================================")
        console.log("Congratulations! You guessed the");
        console.log("right number, it was indeed " +randomnumber)
        console.log("==================================")
    }
else 
    {
        console.log("==================================")
        console.log("Oops! You guessed the wrong number");
        console.log(", it was actually " +randomnumber);
        console.log("==================================")
    };