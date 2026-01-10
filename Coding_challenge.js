"use strict";
// Data 1
let massOfJohn = 92;
let massOfMark = 78;
let heightOfJohn = 1.95;
let heightOfMark = 1.69;
let bmiOfJohn = massOfJohn / heightOfJohn ** 2;
let bmiOfMark = massOfMark / heightOfMark ** 2;
let markHigherBMI = bmiOfJohn < bmiOfMark;
console.log(bmiOfJohn);
console.log(bmiOfMark);
console.log(markHigherBMI);

// Data 2
let massOfJohn1 = 85;
let massOfMark1 = 95;
let heightOfJohn1 = 1.76;
let heightOfMark1 = 1.88;
let bmiOfJohn1 = massOfJohn1 / heightOfJohn1 ** 2;
let bmiOfMark1 = massOfMark1 / heightOfMark1 ** 2;
let markHigherBMI1 = bmiOfJohn1 < bmiOfMark1;
console.log(bmiOfJohn1);
console.log(bmiOfMark1);
console.log(markHigherBMI1);

// Using Function to calculate BMI
function haveBMI(mass, height) {
  return mass / (height * height);
}
let bmiOfJohn2 = haveBMI(92, 1.95);
let bmiOfMark2 = haveBMI(78, 1.69);
let markHigherBMI2 = bmiOfJohn2 < bmiOfMark2;
console.log(`BMI of John is ${bmiOfJohn2}`);
console.log(`BMI of Mark is ${bmiOfMark2}`);
console.log(markHigherBMI2);
