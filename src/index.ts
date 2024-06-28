// Any type
let age: any;
age = 12;
age = "hello";
age = true;

let title;
title = "hello";
title = 25;
title = true;

// Any type in arrays
let names: any[] = ["Pete", "Bob", true];
names.push(12);

// Any type in functions
function addTogether(value: any): any {
  return value + value;
}

console.log(addTogether("hello"));
console.log(addTogether("5"));
