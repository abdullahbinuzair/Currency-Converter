#! /usr/bin/env node

import inquirer from 'inquirer'

const currency: any = { 
    USD: 1, // BASE CURRENCY
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};

let user_answer = await inquirer.prompt(
    [
       { 
           name:'from',
           message:"Enter From Currency",
           type: "list",
           choices: ['USD','EUR','GBP','INR','PKR']
       },
       { 
           name:'to',
           message:"Enter to  Currency",
           type: "list",
           choices: ['USD','EUR','GBP','INR','PKR']
       },
       {
           name: 'Amount',
           message:"Enter Your Amount",
           type: 'number'
       }
    ]
)

let userFromCurrency = user_answer.from
let userToCurrency = user_answer.to
let fromAmount = currency[userFromCurrency]
let toAmount = currency[userToCurrency]
let amount = user_answer.Amount
let baseAmount = amount / fromAmount // USD base currency
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);