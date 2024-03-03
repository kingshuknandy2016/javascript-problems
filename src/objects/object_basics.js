//Object Creation
let employee = new Object(); // Object Constructor Syntax
let employee1 = {}; // Object literal syntax

let user = {
  name: "Ram",
  age: 24,
};

// Dynamically assign properties to object
user.designation = "Senior Software Engineer";
user["isAdmin"] = true;

//Check if the Property with given key exist
let keyExist = "isAdmin" in user;
console.log(`${"isAdmin"} = Key Exist : ${keyExist} `);

//Deleting a property
delete user.isAdmin;

console.log(`${JSON.stringify(user, null, 2)}`);
// looping across key of objects
for (let key in user) {
  console.log(`${key}:${user[key]}`);
}

// Using Keys
let keys = Object.keys(user);
keys.forEach((key) => {
  console.log(`${key}:${user[key]}`);
});

// Using Entries
let entries = Object.entries(user);
entries.forEach((entry) => {
  let key = entry[0];
  let value = entry[1];
  console.log(`${key}:${value}`);
});


let entriesP1=Object.entries(user)
entriesP1.forEach(test=>{
 let k = test[0];
 let v = test[1];
 console.log(`${k}:${v}`);
})