import inquirer from "inquirer";
const currency = {
    USD: 1, // Base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: [`USD`, `EUR`, `GBP`, `INR`, `PKR`]
    },
    {
        name: "to",
        message: "Enter To Currency",
        type: "list",
        choices: [`USD`, `EUR`, `GBP`, `INR`, `PKR`]
    },
    {
        name: "Amount",
        message: "Enter your Amount",
        type: `number`
    }
]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let Amount = userAnswer.Amount;
let baseAmount = Amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
