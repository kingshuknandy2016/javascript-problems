var subset1=(nums)=>{
    //global result
    const results=[];

    const dfs=(i,nums,slate)=>{
        //base case
        if(i === nums.length){
            results.push(slate.slice());
            return;
        }

        //dfs recursive case
        //Exclude Case
        dfs(i+1,nums,slate);

        //Include Case
        slate.push(nums[i]);
        dfs(i+1,nums,slate);
        slate.pop();
    }

    dfs(0,nums,[])

    //Remove any duplicates
    let hash={};
    for (let element of results) {
        if(hash[element]) 
           continue;
        else{
            hash[element]=element;
        }
    }
    let out=Object.values(hash)
    
    return out;
}

let input = [1,2,2];
console.log(subset1(input))