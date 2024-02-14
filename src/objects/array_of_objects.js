//Working with array of objects
let userArray = [
  { name: "Ram", age: 32 },
  { name: "Jadu", age: 42 },
  { name: "Madhu", age: 18 },
  { name: "Kirtan", age: 27 },
  { name: "Rishi", age: 26 },
];

let filteredEmp = userArray.filter((userObject) => {
  return userObject.age && userObject.age > 25;
});

//Adding new Property to filtered employee
const modifiedEmployees = filteredEmp.map((employee) => {
  employee["designation"] = "admin";
  return employee;
});

console.log(`${JSON.stringify(modifiedEmployees, null, 2)}`);
