// function declaration
function sayHello() {
  console.log("Hello from function declaration");
}
sayHello();


// function expression
const sayHi = function () {
  console.log("Hi from function expression");
};
sayHi();


// arrow function
const greetArrow = () => {
  console.log("Hello from arrow function");
};
greetArrow();


// arrow function with return
const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); 


// default parameters
function greet(name = "Student") {
  console.log("Welcome", name);
}
greet();
greet("Chaitali");


// let vs var (scope)
let a = 15;

function showScope() {
  let a = 15;
  console.log("Inside function:", a);
}
console.log("Outside function:", a);
showScope();


// object creation
var student = {
  name: "Bhakti",
  age: 21,
  subjects: ["Science", "English"],
  address: {
    city: "Delhi",
    pin: 110092
  }
};

console.log(student.name);
console.log(student.subjects[1]);
console.log(student.address.city);


// object update, add, delete
student.name = "Priya";
student.course = "Full Stack";
delete student.age;
console.log(student);


// for...in loop on object
for (let key in student) {
  console.log(key, ":", student[key]);
}


// object inside array
var users = [
  { username: "Dhoni", score: 95 },  //index 0
  { username: "Virat", score: 88 }   //index 1
];

console.log(users[0].username);
console.log(users[1].score);