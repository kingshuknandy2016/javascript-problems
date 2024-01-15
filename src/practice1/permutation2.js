const permutation2=(nums)=>{
    //Global result;
    let results=[];

    const dfs=(i,nums)=>{
        if(i===nums.length){
            results.push(nums.slice());
            return;
        }

        for(let j=i;j<nums.length;j++){
            [nums[i],nums[j]]=[nums[j],nums[i]];
            dfs(i+1,nums);
            [nums[i],nums[j]]=[nums[j],nums[i]];
        }
    }
    dfs(0,nums);

    let hash={}
    for(let element of results){
        if(hash[element]){
            continue;
        }else{
            hash[element]=element;
        }
    }
    return Object.values(hash);

}

console.log(permutation2([1,1,2]));