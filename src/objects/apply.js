/**
 * Basic Example
 */
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// Expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// Expected output: 2

/**
 * Using apply() to append an array to another
 */
const array = ["a", "b"];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]

//

const numbersNew = [5, 6, 2, 3, 7, 8, 10];

Math.max.apply((max) => {
  console.log(max);
}, numbersNew);
