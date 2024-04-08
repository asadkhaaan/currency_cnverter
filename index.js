#! /usr/bin/env node
// making object. we make two method one variable and . add and second is [""] this method we used the object prperty acsess eg below.
// let student_Data: any = {
//     name: "Asad Ameer",
//     Age: 22,
//     rollno: 22443,
//     adress: "baldia town" 
// }
// let property: any = "Age"
// console.log(student_Data[property])
import inquirer from "inquirer";
let Currency = {
    USD: 1,
    DInar: 0.5,
    DIrham: 3.0,
    EUR: 300,
    PKR: 280,
    Riyals: 330
};
let answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from Currency",
        type: "list",
        choices: ["USD", "DInar", "Dirham", "EUR", "PKR", "Riyals"]
    },
    {
        name: "to",
        messege: "Enter to currency",
        type: "list",
        choices: ["USD", "DInar", "Dirham", "EUR", "PKR", "Riyals"]
    },
    {
        name: "amount",
        message: "please enter your amount",
        type: "number"
    }
]);
let fromAmount = Currency[answer.from];
let toAmount = Currency[answer.to];
let amount = (answer.amount);
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(Math.round(convertedAmount));
console.log("Thank you!!");
