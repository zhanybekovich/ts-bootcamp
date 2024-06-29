// extending interfaces

interface HasFormatter {
  format(): string;
}

interface Bill extends HasFormatter {
  id: string | number;
  amount: number;
  server: string;
}

const user = {
  id: 1,
  format(): string {
    return `This user has and id of ${this.id}`;
  },
};

const bill = {
  id: 2,
  amount: 10,
  server: "mary",
  format(): string {
    return `Bill with id ${this.id} has $${this.amount} to pay`;
  },
};

console.log(user.format());
console.log(bill.format());

function printFormatted(val: HasFormatter): void {
  console.log(val.format);
}

printFormatted(user);
printFormatted(bill);
