// function signatures

type Calculator = (num1: number, num2: number) => number;

function addTwoNumbers(a: number, b: number) {
  return a + b;
}

function multiplyTwoNumbers(first: number, second: number) {
  return first * second;
}

function squareNumber(num: number) {
  return num * num;
}

function joinTwoNumbers(num1: number, num2: number) {
  return `${num1}${num2}`;
}

let calcs: Calculator[] = [];

calcs.push(addTwoNumbers);
calcs.push(multiplyTwoNumbers);
calcs.push(squareNumber);

// error
// calcs.push(joinTwoNumbers);

interface HasArea {
  name: string;
  calcArea: (a: number) => number;
}

const shape1: HasArea = {
  name: "square",
  calcArea(l: number) {
    return l * l;
  },
};

console.log(shape1.calcArea(36));

const shape2: HasArea = {
  name: "circle",
  calcArea(r: number) {
    return (Math.PI * r) ^ 2;
  },
};

console.log(shape2.calcArea(36));
