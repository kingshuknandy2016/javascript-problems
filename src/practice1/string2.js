let anagram1="listen";
let anagram2="silent1";

var isAnagram = function(s, t) {
    let an1=s.split("").sort().join();
    let an2=t.split("").sort().join();
    return an1===an2;
};
console.log(isAnagram("listen","silent1"))

let k="A man, a plan, a canal: Panama"
let out=k.toLowerCase().replace(/[^a-z]/g,"");
console.log(out)

let arr1=out.split("").reverse().join("");
console.log(arr1);