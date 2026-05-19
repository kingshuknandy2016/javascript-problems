//Write a function to find non - repetitive numbers, that are only once in a given array.
const a= [ 2, 3, 4, 3, 3, 2, 4, 9, 1, 2, 5, 5 ]
//Output: [ 9, 1 ]


const findNon=(a)=>{
    
    const obj={};
    a.forEach(num=>{
        //
        if(obj[num]){
            obj[num]=obj[num]+1;
        }else{
            obj[num]=1;
        }
        
    })
//console.log(`${JSON.stringify(obj,2,null)}`)
    let out=[];
    let keysArr=Object.keys(obj);
    //console.log(keysArr);
    keysArr.forEach(key=>{
        if(obj[key]==1){
            out.push(key);
        }
    })
   return out;
}

console.log(findNon(a));