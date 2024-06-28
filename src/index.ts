// Tuple
let person: [string, number, boolean] = ["Pete", 32, true];
console.log(person);

person[0] = "Bob";
console.log(person);

// error
// person = ["Bob", 32, "foo"];

// More examples
let hsla: [number, string, string, number] = [200, "100%", "100%", 1];
console.log(hsla);

let coors: [number, number] = [94.7, 20.1];

function useCoors(): [number, number] {
  const lat = 120;
  const long = 50;

  return [lat, long];
}

const [lat, long] = useCoors();

// named tuples

let user: [name: string, age: number];
user = ["Pete", 32];

console.log(user);
