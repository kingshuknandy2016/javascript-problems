const p = "kayak";

function isPalindrome(inp) {
  const reversedWord = inp.toLowerCase().split("").reverse().join("");
  return inp === reversedWord ? true : false;
}

console.log(isPalindrome(p));
