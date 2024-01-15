let a = "hello";

//Reverse string by
let arr1=a.split("").reverse().join("");
console.log(arr1);

let newString="";
for(i=a.length-1;i>=0;i--){
  newString=newString+a[i];
}
console.log(newString);

let str="Widget with id";
let pos=str.indexOf("a",2);
console.log(pos);

let position=0;
while(true){
    let foundPos=str.indexOf("id",pos);
    if(foundPos===-1)break;
    console.log(`At Position : ${foundPos}`);
    pos=pos+1;
}

str.lastIndexOf("id")
console.log(str.lastIndexOf("id"));

let str1 = "stringify";
// these are same for substring
console.log( str1.substring(2, 6) ); // "ring"
console.log( str1.substring(6, 2) ); // "ring"

// ...but not for slice:
console.log( str1.slice(2, 6) ); // "ring" (the same)
console.log( str1.slice(6, 2) ); // "" (an empty string)

// Reverse String using recursion
let h1="hello";

let reverseString=(str)=>{
    if(str==="")
        return "";
    else
       return reverseString(str.substr(1))+ str.charAt(0);
}

console.log(reverseString(h1))

var reverseString1 = function(s) {
   
    let i=0;
    let j= s.length-1; // starting from End
    while(j>i){
       [s[i],s[j]]=[s[j],s[i]]
       i++;
       j--;
    }
    return s;
};

let out11=reverseString1(["h","e","l","l","o"]);
console.log(`out11:${out11}`)

var reverseString123 = function(s) {
    let left = 0, right=s.length-1;
 
    while(left < right ) {
        [s[left] , s[right]] = [s[right] , s[left]];
        left++;
        right--
    } 
 
    return s
 };

 let out123=reverseString123(["h","e","l","l","o"]);
console.log(`out11:${out123}`)

let n=["h","e","l","l","o"];
[n[0],n[4]]=[n[4],n[0]]
console.log(n)