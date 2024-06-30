import { CSVWriter } from "./index";
interface Payment {
  id: number;
  amount: number;
  to: string;
  notes: string;
}

const paymentWriter = new CSVWriter<Payment>(["id", "amount", "to", "notes"]);

paymentWriter.addRows([
  { id: 1, amount: 105, to: "foo", notes: "bar" },
  { id: 2, amount: 45, to: "mario", notes: "bazz" },
  { id: 3, amount: 73, to: "john", notes: "somethi" },
]);

paymentWriter.save("./data/payments.csv");
