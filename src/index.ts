// Generics

function logAndReturnString(val: string): string {
  console.log(val);
  return val;
}

function logAndReturnNumber(val: number): number {
  console.log(val);
  return val;
}

function logAndReturnBoolean(val: boolean): boolean {
  console.log(val);
  return val;
}

// using generics

function logAndReturnValue<T>(val: T): T {
  console.log(val);
  return val;
}

const result1 = logAndReturnValue<string>("hello");
const result2 = logAndReturnValue<number>(10);
const result3 = logAndReturnValue<boolean>(true);

function getRandomArrayValue<T>(values: T[]): T {
  const i = Math.floor(Math.random() * values.length);

  return values[i];
}

interface User {
  name: string;
  score: number;
}

const users: User[] = [
  {
    name: "John",
    score: 10,
  },
  {
    name: "Jane",
    score: 20,
  },
  {
    name: "Bob",
    score: 40,
  },
  {
    name: "Mike",
    score: 400,
  },
];

const randomUser = getRandomArrayValue<User>(users);
console.log(randomUser);
