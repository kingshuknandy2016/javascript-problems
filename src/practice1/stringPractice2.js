
var allSubstrings=(s)=>{
    let outPut=[];
    if(s.length===0)
       return outPut;
    for(let i=0;i<s.length;i++){
        for(let j=i;j<s.length;j++){
            let out=s.slice(i,j+1);
            outPut.push(out);
        }
    }
    return outPut;
}

let out=allSubstrings("eceba")
console.log(out);


var test=(s)=>{
    let word1=s[0];
    let out="";
    for(let j=1;j<s.length;j++){
        let count=0;
        let word2=s[j];
        while(word1[count] && word2[count] && word1[count] ===word2[count]  ){
            count++;
        }
        out=word1.slice(0,count);
        word1=out;
    }
    return out;
}

test(["flower","flight","flow"])