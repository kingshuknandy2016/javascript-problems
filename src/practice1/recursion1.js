let nums1 = [0,1,0,0,3,12,0];
let sum=nums1.reduce((prev,current)=>{
    return prev*current;
 })

 console.log(sum)
 
 let testNum=5
 const recursiveSum=(nums)=>{
     if(nums===1){
         return 1;
     }
     return nums+recursiveSum(nums-1);
 }
 
 
 console.log(recursiveSum(5));