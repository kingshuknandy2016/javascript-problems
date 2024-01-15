let nums = [0,0,1,1,1,2,2,3,3,4];

var removeDuplicates = function(nums) {
  let filter=nums.filter((element,index)=>nums.indexOf(element)===index);
  return filter;
};

console.log(removeDuplicates(nums))

var removeDuplicates2 = function(nums) {
       let index=0
        for(j=0;j<nums.length;j++){
            if(nums[j]!==nums[index]){
                // If nums[j]!==nums[i]
                //If not equal then the next position value is changed
                nums[++index]=nums[j];

            }
    }
    return nums;
  };
  
  console.log(removeDuplicates2(nums))

  var plusOne = function(digits) {
    let num=0;
    let output=[];
    for(i=0;i<digits.length;i++){
        num=num*10+digits[i];
    }

    console.log(num);
    let rev=(num+1).toString().split("").reverse();
    
    rev.forEach(value=>{
        output.push(parseInt(value));
    });
    console.log(output);
};

plusOne([1,2,4]);

let head = [4,2,1,3];
let out = head.sort((a,b)=>{
    return a-b; //Ascending
})

console.log(out);

let arr= [1,8,6,2,5,4,8,3,7]

let areaMax=0;
for(i=0;i<arr.length-1;i++){
    for(j=i+1;j<arr.length;j++){
        let area;
        if(arr[i]>arr[j]){
          area=arr[j]*(j-i);
        }else{
            area=arr[i]*(j-i);
        }
        if(area>areaMax){
            areaMax=area;
        }
    }
}

console.log(areaMax);

let arrAA=[1,2,4,7];
let arrBB=[1,2,4,3];

let outPut11=JSON.stringify(arrAA)===JSON.stringify(arrBB);
console.log(outPut11)

let test=arrAA.filter(value=>value===10);
if(test){
    console.log("Able to print")
}

//Print All Combinations
let testAllCombination=[1,2,4,7];

// let allCombinationArray=[[]];

// testAllCombination.forEach(valueNum=>{
//     let tempArray=[];
//     allCombinationArray.forEach(value=>{
//         tempArray.push([...value,valueNum]);
//     })
//     allCombinationArray.push(...tempArray);
// })


var subsets = function(nums) {
    let allCombinationArray=[[]];

    nums.forEach(valueNum=>{
        let tempArray=[];
        allCombinationArray.forEach(value=>{
            tempArray.push([...value,valueNum]);
        })
        allCombinationArray.push(...tempArray);
    })
    return allCombinationArray;
};
console.log(subsets(testAllCombination));

var permute=(nums)=>{
    if(nums.length===0)
        return [[]];
    if(nums.length===1)
        return [nums];
    if(nums.length===2)
       return [[nums[0],nums[1]],[nums[1],nums[0]]];

    return nums.map(value=>{
        let otherNumbers=nums.filter(num1=>num1!=value);
        let permutationResult=permute(otherNumbers);
        return permutationResult.map(everyResult=>[value,...everyResult]);
    }).flat(1);
}

console.log("==",permute([1,2,7]));

let inputArray=[5,3,2,7]
let valueOut=inputArray.reduce((sum,value,index)=>{
    return sum*value;
},1);

console.log(valueOut)

let strs1 = ["flower","flow","flight"]
let test123= "fl"
var longestCommonPrefix = function(strs) {
    let out=strs.reduce((common,value)=>{
        let i=0;
        while(common[i] && value[i] && common[i]===value[i]){
            i++; // Finds the common occurrence between 2 letters
        }
        return common.slice(0,i); //Returns common part of every iteration
    });
    return out;
}
console.log(longestCommonPrefix(strs1));


let word2;
let prefix=strs1[0];
let out1;
for(i=1;i<strs1.length;i++){
    word2=strs1[i];
    let j=0;
     while(prefix[j] && word2[j] && prefix[j]===word2[j]){
        j++;
     }
     out1=prefix.slice(0,j);

}

console.log(out1)

let s = "babad"

var longestPalindrome = function(s) {
    let current;
    for(i=s.length;i>0;i--){
           current=s.slice(0,i);
           console.log("s:",current);
           let numToComp=current.split("").reverse().join("");
           let isPalindrome=current===numToComp;
           if(isPalindrome){
                break;
           }
        
    }
    console.log(current)
};

longestPalindrome(s)