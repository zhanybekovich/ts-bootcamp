// reusable interfaces

interface hasQuantity {
  quantity: number;
}

const something: hasQuantity = {
  quantity: 1,
};

console.log(something.quantity);

function printQuantity(item: hasQuantity): void {
  console.log(`The quantity of the item is ${item.quantity}`);
}

const fruit = {
  name: "apple",
  quantity: 5,
};

const vehicle = {
  type: "car",
  quantity: 3,
};

const person = {
  name: "John",
  age: 30,
};

printQuantity(fruit);
printQuantity(vehicle);

// error
// printQuantity(person);

// works
printQuantity({ quantity: 50 });

// error
// printQuantity({ quantity: 50, title: "foo" });
