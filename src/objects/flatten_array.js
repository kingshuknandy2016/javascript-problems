
const input = [1, 2, [9, 4, [3, 6, [7, 8]]]];
const level=2;
//Output - [1, 2, 9, 4, 3, 6, 7, 8];

const flatten = (obj,level) => {
  var result = [];
  for (let i = 0; i < obj.length; i++) {
    if (!Array.isArray(obj[i])) {
      result.push(obj[i]);
    } else {
      if(level>0){
        var out = flatten(obj[i],level-1);
        result.push(...out);
      }else{
        result.push(obj[i]);
      }

    }
  }
  return result;
};

console.log(flatten(input,2));
