import { CSVWriter } from "./index";

interface Employee {
  id: number;
  name: string;
  role: string;
  salary: number;
}

const employeeWriter = new CSVWriter<Employee>([
  "id",
  "name",
  "role",
  "salary",
]);

employeeWriter.addRows([
  { id: 1, name: "shaun", role: "CEO", salary: 100 },
  { id: 2, name: "bob", role: "CTO", salary: 200 },
  { id: 3, name: "pete", role: "Manager", salary: 300 },
]);

employeeWriter.save("./data/employees.csv");
