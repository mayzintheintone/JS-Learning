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

// Calling/ Invoking/Running a Function
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

// VII.3. Arrow functions
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

function calcAge3(birthYear, name) {
  const age = 2026 - birthYear;
  console.log(`${name} is ${age} years old.`);
  return age;
}
let mayzinAge = calcAge3(2004, "May Zin Theint");
console.log(mayzinAge);

// VII.4 Invoking functions in other functions
// Eg1.
function fruitProcessor(fruit) {
  return fruit * 4;
}
function juiceMaker(apples, pineapples) {
  const applePieces = fruitProcessor(apples);
  const pineapplePieces = fruitProcessor(pineapples);
  // console.log(`${apples} apples is cut into ${applePieces} pieces.`);
  const juice = `The juice is made with ${applePieces} apple pieces and  ${pineapplePieces} pineapple pieces.`;
  return juice;
}
console.log(juiceMaker(2, 3));

// VII. Eg2 calling a function in another function
const isNumber = (num) => {
  if (typeof num === "number") {
    return true;
  } else {
    return false;
  }
};
const calcTotal = function (x, y) {
  const isXnumber = isNumber(x);
  const isYnumber = isNumber(y);
  if (!isXnumber || !isYnumber) {
    console.log("Invalid! Please input numbers only");
  } else {
    return x + y;
    // console.log("Invalid! Please input numbers only");
  }
};
console.log(calcTotal(3, 4));
console.log(calcTotal("abc", 4));
console.log(calcTotal(3, "abc"));

// const calculator = function (num1, num2, operator) {
//   if (operator === "+") {
//     return num1 + num2;
//   } else if (operator === "-") {
//     return num1 - num2;
//   } else if (operator === "*") {
//     return num1 * num2;
//   } else if (operator === "/") {
//     return num1 / num2;
//   } else {
//     console.log("Invalid");
//     return;
//   }
// };

// VIII. Arrays
// VIII.1. Array Literals[]
[1, 2, 3, 4, 5];
const arr0 = []; //empty array;
const arr1 = [, 1, 2, 3, 4];
const arr2 = [1, , 3, 4, , ,];
console.log(arr1[0]);

// VIII.2. Array.length Property
const friends = ["Su", "Hla", "Phoo", "Aye", "Hnin", "Myat"];
console.log(friends);
console.log(friends.length);
const lastIndex = friends.length - 1;
const firstFriend = friends[0];
console.log(firstFriend);
const lastFriend = friends[lastIndex];
console.log(lastFriend);

// VIII.3. Array.indexOf() method
const fruits = ["orange", "mango", "banana", "pineapple"];
console.log(fruits.indexOf("banana"));
fruits[fruits.indexOf("banana")] = "grapes"; //can be mutated
console.log(fruits.indexOf("apple")); // apple doesn't exist in array(returns -1)
// fruits = [1,2,3,4];//Error;cann't br resigned
console.log(fruits);

// VIII.4.Array.includes() method
console.log(fruits.includes("apple"));
console.log(fruits.includes("grapes")); //Array.includes return boolean
const indexOfOrange = fruits.indexOf("orange");
const replaceFruit = function (fruitToRemove, fruitToReplace) {
  if (fruits.includes(fruitToRemove)) {
    const indexOffruitToRemove = fruits.indexOf(fruitToRemove);
    fruits[indexOffruitToRemove] = fruitToReplace;
    return "Successful!";
  } else {
    console.log("Unsucess! Fruit to remove cann't be found");
    return "Unsuccessful!";
  }
};
replaceFruit("pineapple", "watermelon");
console.log(fruits);

const replaceFruit2 = (fruitToRemove, fruitToReplace) => {
  if (!fruits.includes(fruitToRemove)) {
    console.log("Uncess! Fruit to remove can't be found");
    return "unsuccessful!";
  }
  const indexOffruitToRemove = fruits.indexOf(fruitToRemove);
  fruits[indexOffruitToRemove] = fruitToReplace;
  return "Successful!";
};
replaceFruit2("watermelon", "coconut");
console.log(fruits);

// VIII.5 Adding Elements to Arrays(Array.push() method)
// Add new  element to the end of the array
// returns  the new length of the array
const friendsList = ["Hla", "Su Su", "Nway", "Myat", "Wai"];
const newFriends = friendsList.push("Khaing", "Moe");

console.log(friendsList.length, newFriends, friendsList);

// VIII.6.Array.pop() metmod//Removing an Element of the Array
// Remove the last element of the Array
// Returns the removed element
console.log(friendsList.pop());
console.log(friendsList.pop());
console.log(friendsList);

//// VIII.7.Array.shift() metmod//Removing an Element of the Array
// Remove the first element of the Array
// Returns the removed element

const shiftedFriend = friendsList.shift();
console.log(shiftedFriend);
console.log(friendsList);

// VIII.8. Adding Elements to Arrays(Array.unshift())
// Add new  element to the begining of the array
// returns  the new length of the array
console.log(friendsList.unshift("Moe", "Thu"), friendsList);

//IX. Objects
//IX.1. Introduction to Objects
const paingArray = [
  "Paing Soe",
  "Chit",
  1996,
  "Engineer",
  ["Myat Thu", "Ar Kar", "Aung Htun"],
];
console.log(paingArray); //Reading array element by index
// Object Literals{}
const paing = {
  firstName: "Paing Soe",
  lastName: "Chit",
  professional: "Engineer",
  friends: ["Myat Thu", "Ar Kar", "Aung Htun"],
};

console.log(paing);

//IX.2. Reading and Overwriting property in Object
//IX.2.1 The Dot(.) notation
//Dot natation accepts only key
console.log(paing.lastName); //reading object's value by using key name with dot notation
console.log(paing.friends);
console.log(paing.girlFriend); //returns undefined because no property with that key
paing.girlFriend = "May Zin Theint"; //Inserting new property to object
console.log(paing.girlFriend);
console.log(paing.birthYear);
paing.birthYear = 1993; //Overwrite the new value to the specific key(Reassign)
console.log(paing.birthYear);

//IX.2.2 The Bracket[] Notation
//Bracket Notation accepts only expression
console.log(paing["firstName"]); //Reading
paing["hasDriverLicense"] = false; //Adding/Writing
console.log(paing);

const commonNameKey = "Name";
console.log(paing["last" + commonNameKey]);

//IX.3. Objects Methods
// A special type of property that stores function value
// Functions attached to an object
const mayzintheint = {
  firstName: "May Zin",
  lastName: "Theint",
  birthYear: 2004,
  nickName: "Chaw Hsu",
  calculateAge: function () {
    // console.log(this); //refers to rhe objects where the method is attached
    //let birthDate = this.birthYear; //same with mayzintheint.birthYear
    return 2026 - this.birthYear;
  }, //Special type of property(method)
};
//mayzintheint.calculateAge;
console.log(mayzintheint.calculateAge());
// console.log(mayZintheintAge);
// const calculateAge = function (birthYear) {
//   return 2026 - birthYear;
// };
// console.log(calculateAge(mayzintheint.birthYear));

// const mayzintheintAge = mayzintheint.calculateAge(mayzintheint.birthYear);
// console.log(mayzintheintAge);

//Global scope
// console.log(this);

function hi(y) {
  let x = y;
  console.log(this);
  return x;
}
hi("abc");

//X. Looping and iteration
//X.1. For Loop

for (let i = 0; i < 10; i++) {
  console.log(`Count ${i + 1}`); //change dynamically
}

//1st exp ===> i=0
//2nd exp ===> i<5?(true)
//since 2nd exp is true, the 1st iteration is executed
//after every iteration, the 3rd exp(afterthought) is executed
//check the 2nd exp again and so on far
//the iteration is terminated when the 2nd exp is false
//const numArray = [1, 2, 3, 4, 5];
const fruitArray = ["apple", "orange", "mango", "blueberry"];
for (let i = 0; i < fruitArray.length; i++) {
  console.log(`fruit ${fruitArray[i]}`);
}
const numArray = [1, 2, 3, 4, 7, 9];
//Ex1. Log each element to it's double
for (let i = 0; i < numArray.length; i++) {
  console.log(`Double of ${numArray[i]} is ${numArray[i] * 2}`);
}

//Ex2.make a new array to 2 times of each elements in numArray
//newArray = [2,4,6,8,14,18]

const newArray = [];

for (let i = 0; i < numArray.length; i++) {
  newArray.push(numArray[i] * 2);
  //console.log(newArray.push(numArray[i] * 2));
}
console.log(newArray);
console.log(`newArray = [${newArray}]`);

//Ex3. Construct a function that return a new array to 2 times of an array of numbers

//1.make a new function
//Inside function
//2.accept an array of numbers as an argument
//3.make a new array to 2 times of each element of the accepted array
//4. return the new array

const twiceMaker = function (numberArray) {
  const newArray = [];
  for (let i = 0; i < numberArray.length; i++) {
    newArray.push(numberArray[i] * 2);
  }
  console.log(newArray);
  return newArray;
};
const doubleArray = twiceMaker([3, 4, 5, 6]);
console.log(doubleArray);

//Ex4. Construct a function that  returns a new array to required times of an array of numbers
//[1,2,3,4] to 2 or 3 or 4 or 5 times and so on and so far
const multiplyFunction = function (numArray, times) {
  let resultArray = [];
  for (let i = 0; i < numArray.length; i++) {
    resultArray.push(numArray[i] * times);
  }
  return resultArray;
};

//by using spread operator
const mergeFunction = function (numArray, times) {
  let mergeArray = [];
  for (let i = 0; i < times; i++) {
    mergeArray.push(...numArray);
  }
  return mergeArray;
};
//XI.Spread Operator (...)
//XI.1.Copying original iterable expressions
const orgArray = [1, 2, 3, "apple"];

//copy from original array
// const copiedArray = orgArray;
const copiedArray = [...orgArray];

//expanding to a string
const appleArray = [..."apple"];

//expanding to an object
const originalObj = { name: "Alice", age: 22 };
const copiedObj = { ...originalObj };

//XI.2 Merging Data
//Merging Arrays
//[1,2,3]
//[7,8,9]
//mergeArray = [1,2,3,7,8,9]
const firstArray = [1, 2, 3];
const secondArray = [7, 8, 9];
const mergedArray = [...firstArray, ...secondArray];

//Merging Objects
const firstObj = { a: 1, b: 2 };
const secondObj = { b: 3, c: 4 };
//Desiredobj = {a:1, b:3, c:4}
const mergedObj = { ...secondObj, ...firstObj };

//Passing Argument to function
//Argument pass
const nums = [1, 2, 3, 4];

// Array.prototype.push(); //built in global object
// Array.prototype.pop();
// Math.random();
//0 <= x < 1;

const maxNumber = Math.max(...nums);

// XII. functions inside another functions
//XII.1. function called inside function
function sayHi() {
  console.log("hi"); //function call
}
//functions are first class in js
//XII.2. Nested Function
function outer() {
  const outerVariable = "I'm in the outer function scope! ";
  function inner() {
    console.log("Hello, I'm from the inner function!");
    console.log(outerVariable);
    function innerMost() {
      console.log("hello, I'm from the innermost function!");
    }
    innerMost();
  }
  inner();
  return;
}
outer();

//XIII. Callback Functions
//passing primitive data as an arguments in functions
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 9, 8));
console.log("hello, hi", 1996);

//Eg. Passing a function as an argument in another function
function sayGoodbye() {
  console.log("Goodbye");
}
function greet(name, callback) {
  console.log("Hello," + name);
  callback();
}
//sayGoodbye();
greet("May", sayGoodbye); //passed sayGoodbye as callback function

function saySomething(name, callback) {
  console.log(name + ", " + callback());
}
function sayHi() {
  return "Hi";
}
function sayBye() {
  return "bye";
}
saySomething("May", sayBye);
saySomething("May", sayHi);

// Looping Arrays
//Traditional for loop
// Array.prototype.map()
// Map() method
//It's return value is added
//return a new array
const numList = [4, 6, 2, 7];
const newArr = numList.map((el) => el * 2);
console.log(newArr);
// callbackFn(element, index,array)
// map description

const randomNumbers = [1, 3, 5, 6, 2, 4, 8, 9, 13, 18, 16, 11];
//Code challenge
//Created a new array only with the odd numbers from the randomnumbers array
//using the forEach() method

//forEach Method()
// Array.prototype.forEach()
//It's return value is discarded
//forEach(callbackFn)
//forEach(callbackfn,thisArg)
//return none
const fruitsList = ["orange", "mango", "banana", "apple", "lemon", "banana"];
//log every fruit in the fruits in browser console.
//Using the traditional for loop
for (let i = 0; i < fruitsList.length; i++) {
  console.log(fruitsList[i]);
}

//Using Array.forEach()method
fruitsList.forEach((el) => console.log(el));

let twiceMultiply = [];
numList.forEach((number) => twiceMultiply.push(number * 2));
console.log(twiceMultiply);

const commonArray = [
  1,
  "apple",
  "Hi",
  1993,
  2,
  "teacher",
  [1, 2, 3],
  [4, "banana", 6],
  9,
  undefined,
  ,
];
// Create an array only with numbers from the above commonArray

// Array.prototype.filter()
const originalArray = [1, 2, 3, 4, 5, 6, 7, 9, 11, 24, 23];
//iterate on every single element once
//callBackFn(must truthy or falsy)
//create a new array with the filtered elements//return shallow copy
//a little similar with the map() method// same length with the original array
const scores = [194, 224, 366, 128, 256, 213, 521, 501, 477, 471];
//assume that only above 240 and scores pass the test
const studentMarks = scores.filter((mark) => mark >= 240);
