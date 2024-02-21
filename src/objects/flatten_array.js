
const input = [1, 2, [9, 4, [3, 6, [7, 8]]]];
//Output - [1, 2, 9, 4, 3, 6, 7, 8];

const flatten = (obj) => {
  var result = [];
  for (let i = 0; i < obj.length; i++) {
    if (!Array.isArray(obj[i])) {
      result.push(obj[i]);
    } else {
      var out = flatten(obj[i]);
      result.push(...out);
    }
  }
  return result;
};

console.log(flatten(input));
