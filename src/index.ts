// union types

let someId: number | string;
someId = 10;
console.log(someId);
someId = "35";
console.log(someId);

let email: string | null;
email = null;
console.log(email);
email = "5hYp6@example.com";
console.log(email);

type Id = number | string;

// pitfalls
function swapIdType(id: Id) {
  if (typeof id === "string") {
    id = id.split("").reverse().join("");
  }

  if (typeof id === "number") {
    id = id * -1;
  }

  return id;
}
