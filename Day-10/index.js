// 1. Variable Scope
let a = 10;

function showValue() {
  let a = 20;
  console.log("Inside:", a); 
}

console.log("Outside:", a); 
showValue();


// 2. Count how many times each number comes
let numbers = [1, 2, 2, 3, 1, 4, 2];
let result = {};

for (let i = 0; i < numbers.length; i++) {
  let n = numbers[i];

  if (result[n]) {
    result[n] = result[n] + 1;
  } else {
    result[n] = 1;
  }
}

console.log("Count result:", result);


// 3. Find number with highest count
let highest = 0;
let mostNumber = null;

for (let key in result) {
  if (result[key] > highest) {
    highest = result[key];
    mostNumber = key;
  }
}

console.log("Most repeated number is:", mostNumber);


// 4. setTimeout - runs one time
setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);


// 5. setInterval - runs again and again
let counter = 1;

let id = setInterval(() => {
  console.log("Counter:", counter);
  counter++;

  if (counter > 3) {
    clearInterval(id); // stops after 3
  }
}, 1000);


// 6. Callback function
function sayName(name) {
  console.log("Hi", name);
}

function callMe(callback) {
  let user = "Chaitali";
  callback(user);
}

callMe(sayName);


// 7. JSON stringify and parse
let myInfo = { name: "Chaitali", city: "Kalyan" };

let jsonFormat = JSON.stringify(myInfo); // convert to JSON
console.log("JSON:", jsonFormat);

let backToJs = JSON.parse(jsonFormat); // convert back to JS
console.log("Back to object:", backToJs);