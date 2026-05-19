let b = [2, 5, 13]; // Index i
let a = [1, 4, 8, 9, 20, 21]; // index j
let c = [];

let i = 0;
a.forEach((e) => {
  while (e > b[i]) {
    c.push(b[i]);
    i++;
  }
  c.push(e);
});

console.log(c);
