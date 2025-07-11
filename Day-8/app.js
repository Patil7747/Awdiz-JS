// Multiply Two Numbers
let a = 10;
let b = 5;

function MultiplyTwoVariables() {
  console.log(a * b);
}
MultiplyTwoVariables(); 


// Divide Two Numbers
let x = 200;
let y = 40;

function DivideTwoVariables() {
  console.log(x / y);
}
DivideTwoVariables(); 


// Add using parameters
function AddTwo(num1, num2) {
  console.log(num1 + num2);
}
AddTwo(20, 70); 


// Subtract using parameters
function Subtract(num1, num2) {
  console.log(num1 - num2);
}
Subtract(90, 30); 


// Add 4 numbers
function AddFourNumbers(a, b, c, d) {
  console.log(a + b + c + d);
}
AddFourNumbers(10, 20,25, 15); 


// Return example
function MultiplyAndReturn(a, b) {
  return a * b;
}
console.log(MultiplyAndReturn(6, 11)); 


// Filter from array
let courses = ["HTML", "CSS", "JavaScript"];
let input = "CSS";

function MatchCourse(list, text) {
  let result = list.filter((item) => item === text);
  return result;
}
console.log(MatchCourse(courses, input));