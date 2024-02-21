let arr1 = [2, 7, 3, 1, 9];

let m = arr1.reduce((sum, item) => {
  return sum + item;
});

console.log(m);

let ab = "boo";
let reverseString = ab.trim().split("").reverse().join("");
if (ab === reverseString) {
  console.log("Is palindrome");
} else {
  console.log("Is not palindrome");
}

let strs = ["aolower", "flow", "flight"];

let out = strs.reduce((common, value) => {
  i = 0;
  while (common[i] && value[i] && common[i] === value[i]) {
    i++;
  }
  return common.slice(0, i);
});

console.log(`Out:${out}`);
