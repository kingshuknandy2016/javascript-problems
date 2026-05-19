console.log("Hi")

// Write a program to find occurrences of alphabets in a string.
// const x="cbdabdcadcdcccda";
//     output: 3a2b6c5d

const x = "cbdabdcadcdcccda";

const a=x.split('').sort((a,b)=>b-a);

const obj={};
a.forEach(e=>{
   if(obj[e]){
    obj[e]=obj[e]+1;
   }else{
    obj[e]=1
   }
})

const keys=Object.keys(obj);
let str="";
keys.forEach(key=>{
   str=str+obj[key]+key;
})

console.log(obj)
console.log(str)