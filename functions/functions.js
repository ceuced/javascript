import { output } from "../output.js";
const [out, clear] = output("output");

// == Different ways to declare functions ==
// Function declaration
function add(a, b) {
  return a + b;
}
// Function expression
const subtract = function (a, b) {
  return a - b;
};
// Arrow function
const multiply = (a, b) => {
  return a * b;
};
// Arrow function with implicit return
const divide = (a, b) => a / b;
// arrow function without a return statement
const exponent = (a, b) => {
  a ** b;
};

// out("<b>Result is:</b> " + add(2, 2) + "<br />"); // Result is: 4
// out("<b>Result is:</b> " + subtract(5, 2) + "<br />"); // Result is: 3
// out("<b>Result is:</b> " + multiply(3, 3) + "<br />"); // Result is: 9
// out("<b>Result is:</b> " + divide(10, 2) + "<br />"); // Result is: 5
// out("<b>Result is:</b> " + exponent(2, 2) + "<br />"); // Result is: undefined

// == Default parameter ==
const sayHello = (message = "Hello!") => {
  console.log(message);
};

// == Calling a Function and Function arguments ==
// sayHello(); // Call without arguments. Log "Hello!"
// sayHello("Bonjour!"); // Call with arguments. Log "Bonjour!"

// == Anonymous functions ==
// Anonymous function
setTimeout(function () {
  console.log("Hello after 2 seconds");
}, 2000);

// Anonymous arrow function
setTimeout(() => {
  console.log("Hello after 4 seconds");
}, 4000);

// == Higher order functions ==
// Function as an argument
function sayMabuhay(logger) {
  logger("Mabuhay!");
}
sayMabuhay(console.log); // Mabuhay!

// sayMabuhay(out); // Mabuhay!

// Function as a return value
function getCaclulator(operator) {
  switch (operator) {
    case "+":
      return function (a, b) {
        return a + b;
      } 
    case "-":
      return  function (a, b) {
        return a - b;
      }
    case "*":
      return (a, b) => {
        return a * b;
      }
    case "/":
      return (a, b) => a / b;
    default:
      return "Invalid operator";
  }
}
const sum = getCaclulator("*");
out(sum(2, 2)); // 4
