// Generic constraints
interface HasId {
  id: number;
}

class DataCollection<T extends HasId> {
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
  deleteOne(id: number): void {
    this.data = this.data.filter((item) => item.id !== id);
  }
}

interface User {
  name: string;
  score: number;
  id: number;
}

const users = new DataCollection<User>([
  { name: "shaun", score: 20, id: 1 },
  { name: "bob", score: 15, id: 2 },
  { name: "pete", score: 150, id: 3 },
]);

users.add({ name: "mario", score: 10, id: 4 });
users.deleteOne(1);
console.log(users.loadOne());
console.log(users.loadAll());
