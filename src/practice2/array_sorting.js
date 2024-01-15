function sortArrayAscending(arr) {
  return arr.sort((a, b) => {
    return a - b; // Implies a > b, Ascending b,a
  });
}

function sortArrayDescending(arr) {
  return arr.sort((a, b) => {
    return b - a; // Implies b > a, Descending b, a
  });
}

console.log(sortArrayAscending([5, 7, 90, 3, 70, 10, 23, 19, 10]));

console.log(sortArrayDescending([5, 7, 90, 3, 70, 10, 23, 19, 10]));
