function addNumbers(a, b) {
  return a + b;
}

let num1 = 5;
let num2 = 10;
let num3 = 15;

let sum = addNumbers(addNumbers(num1, num2), num3);

console.log("Sum of", num1, "+", num2, "+", num3, "is:", sum);