console.log("Hello");

//Get Non-Repetative Number Array
const sampleArray = [2, 3, 4, 3, 3, 2, 4, 9, 1, 2, 5, 5];

const obj = {};

sampleArray.forEach((num) => {
  obj[num] = obj[num] ? obj[num] + 1 : 1;
});

const keys = Object.keys(obj);
let outputArray = [];
keys.forEach((key) => {
  console.log(`Key: ${key} , Value:${obj[key]}`);

  if (obj[key] == 1) {
    outputArray.push(key);
  }
});

console.log(outputArray);

const entries = Object.entries(obj);

entries.forEach((entry) => {
  const key = entry[0];
  const value = entry[1];
  console.log(`Key: ${key} , Value:${value}`);
});
