var subsets = function(nums) {
    let res = [[]]
    let appendArray= []
    
    nums.forEach(num=>{
        appendArray = []
        res.forEach(element=>{
            appendArray.push([...element,num])
        })
        res.push(...appendArray)
    })
    return res
    
};


let out=subsets([1,2,3])
console.log(out)


var permute = function(nums) {

    //Edge Conditions = 3 basic cases
    if(nums.length===0) return [[]]
    if(nums.length===1) return [nums]
    if(nums.length===2) return [[nums[0],nums[1]],[nums[1],nums[0]]]
    let out=nums.map(n=>{
        let otherNums=nums.filter(i=>i!==n) // Get oll other numbers other than the current number
        let permutationResult=permute(otherNums); // Get Permutations of other numbers
        let finalResult=permutationResult.map(element => [n,...element]) // Number we take out and permutation result
        return finalResult;
     }).flat(1);
     return out;
};

let out1=permute([1,2,3])
console.log(out1);

console.log(0%3)