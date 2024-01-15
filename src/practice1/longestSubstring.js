// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.


var lengthOfLongestSubstring = function(s) {
    if(!s){
        return 0; // Blank String
    }

    let start=0;
    let end=0;
    let maxLength=0;
    const uniqueCharacter=new Set();

    // Iterate till the end did not reach the length of string
    while(end<s.length){

        //If char does not exist the add to set
        if(!uniqueCharacter.has(s[end])){
            uniqueCharacter.add(s[end]);
            end++; // Move the end pointer to next position
            maxLength=Math.max(maxLength,uniqueCharacter.size)
        }else{
            uniqueCharacter.delete(s[start]);
            start++; // Move start to next position
        }
    }
    return maxLength;
};

let s = "abcabcdbb"
console.log("Ans:",lengthOfLongestSubstring(s));