// Functions

// Parameter types
function addTwoNumbers(a: number, b: number) {
  return a + b;
}

console.log(addTwoNumbers(2, 2));

// error
// console.log(addTwoNumbers(2, "2"));

// Return types
function subtractTwoNumbers(a: number, b: number): number {
  return a - b;
}

console.log(subtractTwoNumbers(20, 2));

// return void
function addAllNumbers(items: number[]): void {
  console.log(items.reduce((a, b) => a + b, 0));
}

addAllNumbers([1, 2, 3, 4, 5]);

// error
// console.log(addAllNumbers([1, 2, 3, 4, "5"]));

// return type inference
function formatGreeting(name: string, greeting: string) {
  return `${greeting}, ${name}!`;
}

const result = formatGreeting("Pete", "Hello");
