let arr=[10,17,23,1,4,7 , 34,93,8];
const sortedArray=arr.sort((a,b)=>{
    return b-a;//descending
})

console.log(sortedArray)


let nums = [0,1,0,0,3,12,0];

var moveZeroes = function(nums) {
    let zeroCount=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===0){ 
            // If current 0 the increase zeroCount Size
            zeroCount++;
        }else if(zeroCount>0){
            // If a valid number other than zero,then swap the next element with zero
            let temp=nums[i];
            nums[i]=0; // Current position to zero
            nums[i-zeroCount]=temp; // Swap the non zero to the front of all zeros
        }
    }
    console.log(nums);
};

moveZeroes(nums);

let num2 = [0,0,1,1,1,2,2,3,3,4]
var removeDuplicates = function(nums) {
  let i=0;
  for(let j=1;j<nums.length;j++){
    if(nums[i]!==nums[j]){ // Getting the next not equal number
        i=i+1; // Move i to next position;
        nums[i]=nums[j];
    }
  }

  let uniqueElements=i+1;
  return uniqueElements;
};

removeDuplicates(num2);

var permute = function(nums) {
    //Edge Case
    if(nums.length===0)
        return [[]];
    if(nums.length===1)
        return [nums];
    if(nums.length===2)
        return [[nums[0],nums[1]],[nums[1],nums[0]]]

    let outPut=[];
    //Permutation Case
    nums.forEach(each=>{      
        let other=nums.filter(n=>n!==each); // Get oll other numbers other than the current number
        let getPermutations=permute(other); // Get Permutations of other numbers
        getPermutations.forEach(element=>{
            outPut.push([each,...element]);
        })
    });
    return outPut;
};

let out = permute([1,2,3,4]);
console.log("Combination:",out);


var maxSubArray = function(nums) {
    let outPut=[]
  for(i=0;i<nums.length;i++){
    for(j=0;j<nums.length-i;j++){
        let temp1=[]
        for(k=i;k<=i+j;k++){
            temp1.push(nums[k]);
        }
        outPut.push(temp1);
    }
  }
  return outPut;
};

let array=[0,1,2,3];
let out1 = maxSubArray([0,1,2,3]);
console.log(out1);





