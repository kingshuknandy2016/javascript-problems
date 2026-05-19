console.log("Hi")
const str1 = 'Mary';
const str2 = 'Army';

const sorted1=str1.toLowerCase().split('').sort().join("");
const sorted2 = str2.toLowerCase().split('').sort().join("");
console.log(sorted1);
console.log(sorted2);
if(sorted1===sorted2){
    console.log("Is Anagram")
}

const m = ['a','b','c']
 
const mqueue=(element)=>{
    return m.push(element);
}


const dqueue=()=>{
    let out=[];
    for(let i=m.length-1;i>=0;i--){
        out.push(m[i]);
        m.pop();
    }

    for (let i = out.length - 2; i >= 0; i--) {
      //out.push(m[i]);
      m.push(out[i]);
    }

    //console.log(out);
    return out.pop();
}


console.log(dqueue(),m);