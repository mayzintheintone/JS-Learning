"use strict";

console.log("JS E2");
// VII. Functions
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
