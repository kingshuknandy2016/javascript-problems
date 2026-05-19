// Promise.all([
//   new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
//   new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
//   new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
// ]).then((out) => {
//   console.log(out);
// }); // 1,2,3 when promises are ready: each promise contributes an array member

Promise.all([
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
  new Promise((reject) => setTimeout(() => reject(new Error()), 2000)), // 2
  new Promise((resolve) => setTimeout(() => resolve(4), 1000)), // 3
]).then((out) => {
  console.log(out);
});
