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
