// Generic interface

interface Collection<T> {
  data: T[];
  name: string;
}

const collection1: Collection<string> = {
  data: ["foo", "bar"],
  name: "strings",
};

const collection2: Collection<number> = {
  data: [1, 2, 3],
  name: "numbers",
};

console.log(collection1, collection2);

function randomCollectionItem<T>(c: Collection<T>): T {
  const index = Math.floor(Math.random() * c.data.length);
  return c.data[index];
}

console.log(randomCollectionItem(collection1));
console.log(randomCollectionItem(collection2));
