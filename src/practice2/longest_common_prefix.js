strs = ["flower", "flow", "flight"];

function longestCommonPrefix(input) {
  return input.reduce((common, currentValue) => {
    let i = 0;
    while (common[i] && currentValue[i] && common[i] === currentValue[i]) {
      i++;
    }
    return common.slice(0, i);
  });
}

console.log(longestCommonPrefix(strs));
