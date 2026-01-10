"use strict";

console.log("JS E2");
// VII. Functions
// function is a piece of code to perform an action and calculate a value
// VII.1. Function Declaration(Defining function)
// Variable Declaration
let name = "May";

// Function Declaration(Defining Functions)
// 1) "function" keyword
// 2)function name
// 3)parameters in parenthses(optionals)
// 4)function statements in curly braces({})
// eg.1 sayHi() Function
function sayHi() {
  console.log(`Hello, this is greeting from "sayHi" functuion!`);
}

// Calling/ Invoking/Returning a Function
sayHi();
sayHi();
sayHi();

// Eg.2 Calculating the sum of 2 numbers
function calSum(x, y) {
  // use the keyword "return" to return a value from the function
  return x + y;
}
console.log(calSum(6, 7));

// VII.2 Function Expression
const calcMultiplication = function (x, y) {
  return x * y;
};
// calling function
console.log(calcMultiplication(5, 4));
console.log(calcMultiplication(6, 9));
// variable names = nouns;
// function names = start with a verb

// VIII.3. Arrow functions
// ES6 features

// Using Function Expression to calculate current age
const currentAge = function (bornYear) {
  return 2026 - bornYear;
};
const ageMay = currentAge(2004);
console.log(ageMay);

// By Arrow Function
const calcAge = (bornYear) => 2026 - bornYear; //implicitly return

// sayHi By Arrow Function
const sayHi1 = () =>
  console.log(`Hello, this is greeting from "sayHi1" function!`);
sayHi1();

// To calculate difference of the two positive integers
// Check the greater integer first
// Subtract from greater integer and return the result
//
const calcdDifference = (x, y) => {
  if (x === y) {
    return 0; //must be returned explicitly
  } else if (x > y) {
    return `${x} is greater than ${y}. The answer is ${x - y}`;
  } else {
    return `${y} is greater than ${x}. The answer is ${y - x}`;
  }
};
console.log(calcdDifference(6, 8));
console.log(calcdDifference(6, 6));
console.log(calcdDifference(8, 4));

const sayHi3 = (name1) => `Hello,${name1} `;
console.log(sayHi3("May Zin Theint"));
