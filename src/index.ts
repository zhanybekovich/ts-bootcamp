// Array of strings
let names: string[] = ["Pete", "Bob"];
names.push("Mary");

// Array of numbers
let ages: number[] = [2, 45, 30];
ages.push(10);

console.log(names, ages);

// Type inference
let fruits = ["apples", "bananas"];
fruits.push("oranges");

const myFruit = fruits[0];

let things = [1, true, "hello"];
const t = things[2];

// Object literals
let user: {
  id: number;
  firstName: string;
  age: number;
} = {
  id: 1,
  firstName: "John",
  age: 30,
};

console.log(user);

user.age = 35;

console.log(user);

// error: keep structure of the object
// user.email = "hello@gmail.com";

// Type inference with object literals
let person = {
  name: "Lui",
  score: 25,
};

console.log(person);

// error: keep structure of the object
// person.email = "hello@gmail.com";

const score = person.score;
