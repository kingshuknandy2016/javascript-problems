
// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {

};

let isPalindrome=(s,start,end)=>{
    while(start<end){
        if(s[start]!==s[end]){ //Start and end digit not equal
            return false; //Not a palindrome
        }
        start++;
        end--;
    }
    return true;
}


var partition=(s)=>{
    let result=[]

    let dfs=(i,s,slate)=>{
        if(i===s.length){
            result.push(slate.slice());
            return;
        }

        //dfs case
        for(let j=i; j<s.length; j++){
            if(isPalindrome(s,i,j)){
                slate.push(s.slice(i,j+1));
                dfs(j+1,s,slate);
                slate.pop();
            }
        }
    }
    dfs(0,s,[]);
    return result;
}

console.log(partition("aab"));

