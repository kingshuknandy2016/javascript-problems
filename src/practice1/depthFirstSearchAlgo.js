var allPossibleCombinations=(s)=>{

    let result=[];
    let dfs=(i,s,slate)=>{
        console.log(slate);
        //Base Case
        if(i==s.length){
            result.push(slate.join(""));
            return;
        }
        //DFS case
        for(let j=i;j<s.length;j++){
        slate.push(s[i]);
        dfs(i+1,s,slate);
        slate.pop();
        }
    }
    dfs(0,s,[]);
    return result;
}

let out=allPossibleCombinations("abc");
console.log(out)