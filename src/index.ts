// type guards

type Id = number | string;

function swapIdType(id: Id) {
  if (typeof id === "string") {
    return parseInt(id);
  } else {
    return id.toString();
  }
}

const id1 = swapIdType("1");
const id2 = swapIdType(2);

console.log(id1, id2);

// tagged interfaces
interface User {
  type: "user";
  username: string;
  email: string;
  id: Id;
}

interface Person {
  type: "person";
  firstName: string;
  age: number;
  id: Id;
}

function logDetails(value: User | Person): void {
  if (value.type === "user") {
    console.log(value.username);
  } else {
    console.log(value.firstName);
  }
}
