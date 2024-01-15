let test=[4,4,2,4,3]


var unequalTriplets = function(nums) {

    let uniqueArray=nums.filter((value,index)=> nums.indexOf(value)===index);
    console.log(uniqueArray)



    for(i=0;i<nums.length-2;i++){ // 0 to n-2
        for(j=i+1;j<nums.length-1;j++){ // i+1 to n-1
            for(k=j+1;k<nums.length;k++){ // j+1 to n
                // (nums[i],nums[j],nums[k])
                //console.log(`(${nums[i]},${nums[j]},${nums[k]})`)
                if(i<j && j<k){
                    // console.log(`(${nums[i]},${nums[j]},${nums[k]})`)
                    if(nums[i]!=nums[j] && nums[j] != nums[k] && nums[i]!=nums[k]){
                        console.log(`(${nums[i]},${nums[j]},${nums[k]})`)
                    }
                }
            }
        }
    }
}


unequalTriplets(test);

var removeDuplicates = function(nums) {
    let filteredArray= nums.filter((value,index)=>{
        return nums.indexOf(value)=== index;
    })

    for(let i=0;i<nums.length;i++){

    }
    return filteredArray.length;
};

let ans=removeDuplicates([1,1,2]);
console.log(`ans:${ans}`)

let a=[0,1,0,3,12]
let zeroArray=[]
let outArray=[]
a.forEach(element=>{
    if(element!== 0){
        outArray.push(element);
    }else{
        zeroArray.push(element);
    }
})
console.log(outArray)
zeroArray.forEach(e=>{
    outArray.push(e);
})

console.log(outArray);