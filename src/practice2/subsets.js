function allPossibleCombination(arr) {
  let out = [[]];
  arr.forEach((element) => {
    let tempArray = [];
    out.forEach((elementArr) => {
      tempArray.push([...elementArr, element]);
    });

    out.push(...tempArray);
  });
  return out;
}

console.log(allPossibleCombination([1, 2, 3]));
