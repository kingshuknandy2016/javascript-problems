let obj = {};

obj["first-name"] = "Kingshuk";
obj["last-name"] = "Nandy";
obj["age"] = 24;

console.log(obj);

// Using Keys
let keys = Object.keys(obj);
keys.forEach((key) => {
  console.log(`${key}:${obj[key]}`);
});

// Using Entries
let entries = Object.entries(obj);
entries.forEach((entry) => {
  let key = entry[0];
  let value = entry[1];
  console.log(`${key}:${value}`);
});

keys.flatMap();
