// Generic classes

class DataCollection<T> {
  constructor(private data: T[]) {}

  loadOne(): T {
    const i = Math.floor(Math.random() * this.data.length);
    return this.data[i];
  }
  loadAll(): T[] {
    return this.data;
  }
  add(val: T): T[] {
    this.data.push(val);
    return this.data;
  }
}

interface User {
  name: string;
  score: number;
}

const users = new DataCollection<User>([
  { name: "shaun", score: 20 },
  { name: "bob", score: 15 },
  { name: "pete", score: 150 },
]);

users.add({ name: "mario", score: 10 });
console.log(users.loadOne());
console.log(users.loadAll());
