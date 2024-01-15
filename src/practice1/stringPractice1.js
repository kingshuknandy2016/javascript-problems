let test1=["flower","flight","flame"]

var longestCommonPrefix=(s)=>{
    return s.reduce((prev,current)=>{  // 1st and 2nd Word
        let i=0;
        while(prev[i]&& current[i] && prev[i]===current[i]){ // Compare character by character
        i++; // Get the common character of 2 words
        }   
        
        return prev.slice(0,i);// Then this will work as prev in next while
    })
}

const out=longestCommonPrefix(test1);
console.log(out);

var recursiveReverse=(s)=>{
    // Edge cases
   if(s.length===0){
    return "";
   }

   //recursive case
   return recursiveReverse(s.substring(1))  + s.charAt(0);
}

console.log(recursiveReverse("RAMA"))

const expandFromCentre1=(s,left,right)=>{
    let i=0;
    while(s[left-i] && s[right+i] && s[left-i] === s[right+i]){
        i++;
    }
    i--; 
    return s.slice(left-i,right+i+1);
}
const longestPalindrome1=(s)=>{
    let longest="";
    for(i=0;i<s.length;i++){
        let oddPalindrome=expandFromCentre1(s,i,i);
        
        let evenPalindrome=expandFromCentre1(s,i-1,i);
        if(oddPalindrome.length>longest.length){
            longest=oddPalindrome;
        }
        if(evenPalindrome.length>longest.length){
            longest=evenPalindrome;
        }
    
    }

    return longest;
}



console.log(longestPalindrome1("?KAMAD"))


const longestSubstring=(s)=>{
    let start=0;
    let end=0;
    let uniqueCharacterSet=new Set();
    let maxlength=0
    while(end<s.length){
    let char=s.charAt(end);
    if(!uniqueCharacterSet.has(char)){ // If it does not have the char => then add to set
        uniqueCharacterSet.add(char);
        end++;
        maxlength=Math.max(maxlength,uniqueCharacterSet.size);

    }else{
        uniqueCharacterSet.delete(s.charAt(start));
        start++;
    }
    }
    console.log(start,"====",end);
    let str=s.slice(start,end+1);
    let length=str.length;
    console.log("len:",maxlength);

    return maxlength;
}

longestSubstring("abcabcbb");