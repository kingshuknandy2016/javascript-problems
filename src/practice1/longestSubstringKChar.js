
let input="abcabcbb";
let longestSubstring=(s,k)=>{
   let start=0,end=0;
   
   let maxLength = 0;
  //For all unique
  let map=new Map();
  while(end<s.length){
    if(!map.has(s[end])){
        map[s[end]]=1
        end++;

        //unique.size() // Will give the number of unique char;
        //maxLength=Math.max(maxLength,unique.size);
    }else{
        unique.delete(s[start]);
        start++;
    }
  }
  return maxLength;
}

console.log(longestSubstring(input,2))

