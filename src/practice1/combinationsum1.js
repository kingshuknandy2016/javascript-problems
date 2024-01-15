/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let results=[]
    const dfs=(i,candidates,target,slate)=>{
        //back tracking case
        if(target<0)
            return;

        //base case
        if(target===0){
            results.push(slate.slice());
            return;
        }

        //dfs case
        for(let j=i;j<candidates.length;j++){
            slate.push(candidates[j]);
            dfs(j,candidates,target-candidates[j],slate);
            slate.pop();
        }
    }
    dfs(0,candidates,target,[]);
    return results;
};

console.log(combinationSum([2,3,6,7],7))