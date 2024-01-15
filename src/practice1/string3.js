
// Longest Prefix
let longestPrefix=(strAry)=>{
    return strAry.reduce((accumulator,currentValue)=>{
        let i=0;
        while(accumulator[i]&& currentValue[i] &&accumulator[i]===currentValue[i]){
            i++;
        }
        return accumulator.slice(0,i);
    })
}

console.log(longestPrefix(["flower","flow","flight"]));

//Group anagram
let strs = ["eat","tea","tan","ate","nat","bat"]
let groupAnagram=(str)=>{
    let obj={};
    for(i=0;i<str.length;i++){
        let sortedString=(str[i]).split("").sort().join("");

        if(obj[sortedString]){
            (obj[sortedString]).push(str[i]);
        }else{
            obj[sortedString]=[str[i]];
        }
    }

    return Object.values(obj);
    
}

console.log(groupAnagram(strs))

let rev1=(s)=>{
    if(s===""){
        return "";
    }else{
        return rev1(s.substr(1))+s.charAt(0);
    }
}

console.log(rev1("TOM"))

let rev2=(s)=> s.split("").reverse().join("");
console.log(rev2("TOM"))

let rev3=(s)=>{
    let out="";
    for(i=s.length-1;i>=0;i--){
        out+=s[i];
    }
    return out;
}
console.log(rev3("TOM"))


let testData=s = "()[]{}";

var isValid = function(s) {
    let stack=[]; // For c losing brackets;
    for(let i=0;i<s.length;i++){
        let char=s.charAt(i);
        switch(char){
            case "(":stack.push(")");
               break;
            case "{":stack.push("}");
                break;
            case "[":stack.push("]");
               break;
            default:
                let elementPopped=stack.pop();
                if(char!=elementPopped){
                    return false;
                }

        }
           
    }

    return stack.length===0;
};

var strStr = function(haystack, needle) {
        let outPostionArray=[];
        let initialPosition=0;
        while(true){
            let occurrence=haystack.indexOf(needle,initialPosition);
            if(occurrence==-1)
                break;
            outPostionArray.push(occurrence);
            initialPosition=occurrence+1;
        }
        return outPostionArray;
};

console.log(strStr("As sly as a fox, as strong as an ox","as"));

var firstUniqChar = function(s) {
    for(let i=0;i<s.length;i++){
      if(s.indexOf(s[i])===s.lastIndexOf(s[i])){
          return i;
      }
    }
    return -1;
};

firstUniqChar("loveleetcode");

var occurrenceOfEachChar=(s)=>{
    let map=new Map();
    for(i=0;i<s.length;i++){
        if(map.has(s[i])){
          let updatedCount=map.get(s[i])+1;
          map.set(s[i],updatedCount);
        }else{
            map.set(s[i],1);
        }
    }
   return map;
}

let input="kjhksgbvbvjjgsa";
let out=occurrenceOfEachChar(input);
console.log(out);