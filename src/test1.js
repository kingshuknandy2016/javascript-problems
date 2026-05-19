
// type user={name: string,age:number}|

// type status='Fullfilled'|'Rejected'


// const getStatus=():status{
//     return
// }


// const test=async (input:string):Promise<string>{

//     return 'test';
// }


const input=[2,7,4,3];

for (let i = 0; i < input.length; i++) {
    for (let j = i+1; j < input.length; j++) {
      //const element = array[index];
      if(input[i]<input[j]){
        let temp=input[i];
        input[i]=input[j];
        input[j]=temp;
      }
    }
}

console.log(input)

Object.call(abc,{})


Object.bind(abc, )