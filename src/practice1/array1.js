let arr1=["banana","coconut","pinnaple"];

arr1.splice(1,1,"apple","grape");
console.log(arr1)


let arr2=["banana","coconut","pinnaple","mango"];
let out=arr2.slice(1,3);
console.log(out)

let arr = [1, 2, 3, 4, 5];
let out1=arr.reduce((sum,current)=>{
  return sum+current;
},0);
console.log(out1)