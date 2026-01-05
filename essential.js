//Essential JS
//I. Type Conversion
let inputYear = "2004";
let age;
// Convert String to Number
// Use Number() method
let sum = 2000 + Number(inputYear);
console.log(sum);

// Convert number to string
// Use String() method
console.log(typeof String(2004));

let person = "May";
// cannot convert char string to number
// return NaN(Invalid Number);
console.log(Number(person));
console.log(typeof NaN);

//II. Type Coercion
console.log("I'm " + 21 + " year old");

//Using + operator
// automatically convert nuber to string when operate with string
console.log(10 + "10"); //"10" +"10"

// using -, *,/ operators
//automatically convert string to number
console.log("23" - "10" - 3); //23-10-3
console.log("23" / 2);
console.log("23" * 2);
console.log("23" % 2);

let n = "1" + 1; //"11"
n = n - 1; //"11"-1> 11-1>10
console.log(n);

// III. Equality operators (==)vs strict equality operator (===)
console.log(3 == 4);
console.log(3 == 3);
console.log(3 == "3"); //return true; because of type corecion; bug (string vs number)

// Introduced strict equality operator(===) to cover (==) in JS in 1999
console.log(3 === "3"); //return false
console.log(3 === Number("3")); //return true

// IV. Expressions vs Statements
// IV.(1) Expressions
// Expression produces a value (value is a piece of data)
// Expressions fill the "slots" within statements where values are needed
// All of the codes below produces a value; they are expressions
//eg;
1994;
("2984");
("May Zin Theint");
3 + 5;
true;
false;
true && false;
(1 && 0) || !1;

//IV.(2) Statements
// Statements perform an action and does not necessarily produce a value
// Eg: if else statement
if (true) {
  console.log("This is if block statement!"); //This sentence is statement
} else {
  console.log("This is else block!");
}

// where the whole if....else block is a statement; true is an expression;
// Example declaration of a variable
// let profession = "Student";where the whole sentence is statement and ("Engineer") is expression
