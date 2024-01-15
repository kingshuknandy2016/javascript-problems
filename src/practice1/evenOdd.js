


let a=5;
 
var isNumberEven=function(n){
    return n%2==0
}

console.log(isNumberEven(0))

let nums = [4,2,5,7]
let oddArray=[];
let evenArray=[];
nums.forEach((value)=>{
    if(value%2==0){
        //Number even
        evenArray.push(value);
    }else{
        //Number odd
        oddArray.push(value);
    }
})

console.log(evenArray);
console.log(oddArray);

let outPut=[]
for (let i = 0; i < nums.length; i++) {
    if(i%2==0){
        //Even number insertion
        outPut.push(evenArray.pop());
    }else{
        outPut.push(oddArray.pop());
    }
    
}

console.log(outPut)

let nums1 = [3,0,1]

var missingNumber = function(nums) {
    let n=nums.length;
    for(let i=0;i<n+1;i++){
        
        if(!nums.includes(i)){
            return i;
        }
    }
};

console.log(missingNumber(nums1));