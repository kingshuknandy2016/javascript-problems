var longestPalindrome = function(s) {
    let longest="";
    // For edge case if string is blank or undefined
    if(s.length<0 || s=== null )
      return "";

    
    for(let i=0;i<s.length;i++){ // Traversing entire string
       let oddPalindrome=expandFromCentre(s,i,i); // Centre same character
       let evenPalindrome=expandFromCentre(s,i-1,i);
       if(oddPalindrome.length>longest.length ){
        longest=oddPalindrome;
       }
       if(evenPalindrome.length>longest.length ){
        longest=evenPalindrome;
       }
       
    }
    return longest;
};


let expandFromCentre=(s,left,right)=>{
  let i=0;
  while(s[left-i] && s[right+i] && s[left-i]===s[right+i] ){
      i++; // Continue to add common char
  }
  i--;
  return s.slice(left-i,right+i+1);
}

// console.log(expandFromCentre("abccbk",3,2));
console.log(longestPalindrome("babad"));