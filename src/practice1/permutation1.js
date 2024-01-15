let input=[1,2,3]

let permutation=(num)=>{
    let results=[]
    const dfs=(i,num)=>{
        //Base Case
        if(i===num.length){
            results.push(num.slice());
            return ;
        }

        //dfs case
        for(let j=i;j<num.length;j++){
            [num[i],num[j]]=[num[j],num[i]];
            dfs(i+1,num);
            [num[i],num[j]]=[num[j],num[i]];
        }
    }

    dfs(0,num);
    return results;
}

let out=permutation(input);
console.log(out)