// Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.
// Return a list of all possible strings we could create. Return the output in any order.

// Example 1:

// Input: s = "a1b2"
// Output: ["a1b2","a1B2","A1b2","A1B2"]
// Example 2:

// Input: s = "3z4"
// Output: ["3z4","3Z4"]

/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
   let results=[];
   const dfs=(i,s,slate)=>{
    //Base Case
    if(i===s.length){
        results.push(slate.join(""));
        return;
    }

    //DFS case

    if(Number.isInteger(parseInt(s[i]))){
      // Is Number
      slate.push(s[i]);
      dfs(i+1,s, slate);
      slate.pop();
    }else{
      // Is not a number
      //Upper Case
      slate.push(s[i].toUpperCase());
      dfs(i+1,s,slate);
      slate.pop();

      //LowerCase
      slate.push(s[i].toLowerCase());
      dfs(i+1,s,slate);
      slate.pop()
    }

    
   }

   dfs(0,s,[]);
   return results;
};

let s = "a1b2"
let out=letterCasePermutation(s)
console.log(out);