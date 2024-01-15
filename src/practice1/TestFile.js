console.log("test")

let arr = [1,1,2,2,2,3] ;
const map= new Map();
arr.forEach(e=>{
        if(map.has(e)){
            map.set(e,map.get(e)+1);
        }else{
            map.set(e,1);
        }
    })

    console.log(map);

const out=arr.sort((a,b)=>{
    if(map.get(a)> map.get(b)){
        return 1;
    }else{
        return -1
    }
})

console.log(out);

const obj={}
arr.forEach(e=>{
    obj[e]=(obj[e] || 0)+1;
})
console.log(obj);

const sor1=arr.sort((a,b)=>{
    return obj[a]===obj[b]?b-a: obj[a]-obj[b];
})
console.log(sor1)
