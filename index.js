#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    { message: chalk.yellowBright("\n Enter first number"), type: "number", name: "firstNumber" },
    { message: chalk.blue(" \n Enter second number"), type: "number", name: "secondNumber" },
    { message: chalk.whiteBright("select one of the operators to perform operation"),
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"], },
]);
if (answer.operator === "Addition") {
    console.log(chalk.yellowBright(answer.firstNumber + answer.secondNumber));
}
else if (answer.operator === "Subtraction") {
    console.log(chalk.blue(answer.firstNumber - answer.secondNumber));
}
else if (answer.operator === "Multiplication") {
    console.log(chalk.yellowBright(answer.firstNumber * answer.secondNumber));
}
else if (answer.operator === "Division") {
    console.log(chalk.blue(answer.firstNumber / answer.secondNumber));
}
else {
    console.log(chalk.red("please select corret number"));
}
console.log("THE END");
console.log("_".repeat(60));
