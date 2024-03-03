console.log("Hi")
const input = [1, 2, [9, 4, [3, 6, [7, 8]]]];
//Output - [1, 2, 9, 4, 3, 6, 7, 8];

const flatten=(obj)=>{
    var result=[];
    for(let i=0;i<obj.length;i++){
        if(!Array.isArray(obj[i])){
          result.push(obj[i]);
        }else{
            var out=flatten(obj[i]);
            result.push(...out)
        }
    }
    return result;
}

console.log(flatten(input));

const  array1= [23, 45, 11, 67, 12, 89, 20];
const array2= [12, 20, 89, 45, 23, 67];

let status1=false;
for(let i=0;i<array1.length;i++){
    const element1=array1[i];
    for (let j = 0; j < array2.length; j++) {
        const element2 = array2[j];
        if(element1===element2){
            status1=true;
            break;
        }
    }
    if(!status1){
        console.log(element1)
        break;
    }
    status1=false;
}
