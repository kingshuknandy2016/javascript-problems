let arr = [7, 10, 0, 2, 0, 15, 0, 10];

function moveZero(arr) {
  let zeroCount = 0;
  for (let i = 1; i < arr.length; i++) {
    const element = arr[i];
    if (arr[i] == 0) {
      zeroCount++;
    } else if (zeroCount > 0) {
      let temp = arr[i];
      arr[i] = 0;
      arr[i - zeroCount] = temp;
    }
  }

  return arr;
}

console.log(moveZero(arr));
