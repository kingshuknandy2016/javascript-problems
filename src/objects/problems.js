let user = {};
user.name = "John";
user["surname"] = "Smith";
console.log(user);
user.name = "Pete";
console.log(user);
delete user.name;
console.log(user);

// Check for object emptiness
const isEmpty = (object) => {
  for (let key in object) {
    return false;
  }
  return true;
};

//Sum of properties value
const salaries = {
  Ram: 200,
  Shyam: 300,
  Jadu: 500,
};

let sum = 0;
for (let key in salaries) {
  sum = sum + salaries[key];
}

console.log(`Sum of Salaries: ${sum}`);

// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

const myFunc = (object) => {
  for (let key in object) {
    let type = typeof object[key];
    if (type == "number") {
      object[key] = object[key] * 2;
    }
  }

  return object;
};

console.log(myFunc(menu));
