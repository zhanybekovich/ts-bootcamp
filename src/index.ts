// type aliases

// example of tuple
type Rgb = [number, number, number];

function getRandomColor(): Rgb {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return [r, g, b];
}

console.log(getRandomColor());

// example of object literal

type User = {
  name: string;
  score: number;
};

const userOne: User = {
  name: "John",
  score: 10,
};

console.log(userOne);

function formatUser(user: User): void {
  console.log(`${user.name} has a score of ${user.score}`);
}

formatUser(userOne);
formatUser({ name: "Bob", score: 20 });
