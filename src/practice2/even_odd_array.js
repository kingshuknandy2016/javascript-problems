let num = [4, 2, 5, 7];

function oddEvenArray(arr) {
  let oddArray = [];
  let evenArray = [];
  arr.forEach((element) => {
    if (element % 2 == 0) {
      evenArray.push(element);
    } else {
      oddArray.push(element);
    }
  });
  return {
    evenArray,
    oddArray,
  };
}
