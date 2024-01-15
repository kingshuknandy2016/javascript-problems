var letterCasePermutation = function(s) {
    
    let out=[];
    var dfs=(i,s,slate)=>{

        //Base Case
        if(i===s.length){
            out.push(slate.join(""));
            return;
        }

        let char=s.charAt(i)
        if(Number.isInteger(parseInt(char))){
            slate.push(char);
            dfs(i+1,s,slate);
            slate.pop();
        }else{
            // For lower case handling;
            slate.push(char.toLowerCase());
            dfs(i+1,s,slate);
            slate.pop();

            // For Upper case handling;
            slate.push(char.toUpperCase());
            dfs(i+1,s,slate);
            slate.pop();
        }
    }

    dfs(0,s,[]);
    return out;
}

let out=letterCasePermutation("a1b1");
console.log(out)