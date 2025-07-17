// Ternary Operator
let age = 16;
let canVote = age >= 18 ? "Can Vote" : "Can't Vote";
console.log("Ternary:", canVote);


// Template Literals (Updated variable names)
let myUserName = "Chaitali;
let myUserCity = "Mumbai";
let message = 'Hello ${myUserName}, welcome to ${myUserCity}.';
console.log("Template Literal:", message);


// Array Destructuring
let fruits = ["Apple", "Banana", "Mango"];
let [fruit1, fruit2, fruit3] = fruits;
console.log("Array Destructuring:", fruit1, fruit2, fruit3);


// Object Destructuring
let student = { course: "Full Stack", batch: "July", mode: "Online" };
let { course, batch, mode } = student;
console.log("Object Destructuring:", course, batch, mode); 


// Callback Function
function greetUser(name, callback) {
  console.log("Hi", name);
  callback();
}

function showNextStep() {
  console.log("Please follow the instructions."); 
}

greetUser("Chaitali", showNextStep);


// Callback with Condition
function checkVoting(age, onSuccess, onFail) {
  if (age >= 18) {
    onSuccess();
  } else {
    onFail();
  }
}

checkVoting(20,
  () => console.log("Eligible to vote."),
  () => console.log("Not eligible.")
);

// Promise Example
function checkAgePromise(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("You can vote.");
    } else {
      reject("You cannot vote.");
    }
  });
}

// Promise Call (Rejected)
checkAgePromise(17)
  .then((msg) => console.log("Promise Resolved:", msg))
  .catch((err) => console.log("Promise Rejected:", err));


// Promise Call (Resolved)
checkAgePromise(20)
  .then((msg) => console.log("Promise Resolved:", msg))
  .catch((err) => console.log("Promise Rejected:", err)); 
