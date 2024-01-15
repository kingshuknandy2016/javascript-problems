
let s = "cbaebabacd", p = "abc";
let s1 = "abab", p1 = "ab"
var findAnagrams = function(s, p) {
    let outPut=[]
    let pLength=p.length;
    for(let i=0;i<s.length-(pLength-1);i++){
        let arr=s.slice(i,i+pLength);
        console.log(arr);
        let test=arr.split("").sort().join("");
        if(test===p){
            outPut.push(i)
        }
    }
    console.log(outPut)
    return outPut;
};

findAnagrams(s1,p1)