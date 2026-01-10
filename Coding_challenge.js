"use strict";
// Data 1
let massofJohn = 92;
let massofMark = 78;
let heightofJohn = 1.95;
let heightofMark = 1.69;
let bmiofJohn = massofJohn / heightofJohn ** 2;
let bmiofMark = massofMark / heightofMark ** 2;
let markHigherBMI = bmiofJohn > bmiofMark;
console.log(bmiofJohn);
console.log(bmiofMark);
console.log(markHigherBMI);

// Data 2
let massofJohn1 = 85;
let massofMark1 = 95;
let heightofJohn1 = 1.76;
let heightofMark1 = 1.88;
let bmiofJohn1 = massofJohn1 / heightofJohn1 ** 2;
let bmiofMark1 = massofMark1 / heightofMark1 ** 2;
let markHigherBMI1 = bmiofJohn1 > bmiofMark1;
console.log(bmiofJohn1);
console.log(bmiofMark1);
console.log(markHigherBMI1);

// Using Function to calculate BMI
function BMI(mass, height) {
  return mass / (height * height);
}
let bmiofJohn2 = BMI(92, 1.95);
let bmiofMark2 = BMI(78, 1.69);
let markHigherBMI2 = bmiofJohn2 > bmiofMark2;
console.log(bmiofJohn2);
console.log(bmiofMark2);
console.log(markHigherBMI2);
