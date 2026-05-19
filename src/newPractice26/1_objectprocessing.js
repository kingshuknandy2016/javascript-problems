import { returnOrder } from "./orders.js";

console.log("Hello, World!");

const jsonData = returnOrder;

const returnItems = jsonData.return_items;

let copyObject = Object.assign({}, returnOrder);
delete copyObject.return_items;
console.log(`Copy Object: ${JSON.stringify(copyObject, null, 2)}`);

let OutputArray = [];

returnItems.forEach((element) => {
  let newObject = { ...copyObject, ...element };
  OutputArray.push(newObject);
});

console.log(`Output Array: ${JSON.stringify(OutputArray, null, 2)}`);

const orderIdPresent = Object.hasOwn(copyObject, "order_id");
console.log(`Order ID Status:${JSON.stringify(orderIdPresent)} `);

Object.keys