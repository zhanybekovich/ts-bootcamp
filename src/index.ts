// extending type aliases

type Person = {
  id: string | number;
  firstName: string;
};

type User = Person & {
  email: string;
};

const person1 = {
  id: 1,
  firstName: "John",
};

const person2: User = {
  id: 2,
  firstName: "Bob",
  email: "bob@me.com",
};

const person3 = {
  email: "pete@pete.com",
};

function printUser(user: User) {
  console.log(user.id, user.email, user.firstName);
}
// printUser(person1);
printUser(person2);
// printUser(person3);
