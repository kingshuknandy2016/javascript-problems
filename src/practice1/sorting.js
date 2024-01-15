let a = [7 , 10 , 0,15 , 0 ,20, 2 ,3 ,8, 0]

// for(i=0;i< a.length;i++){
//     for(j=i+1;j< a.length;j++){
//         if(a[i]>a[j]){ 
//             //Ascending
//             let t=a[i];
//             a[i]=a[j];
//             a[j]=t;
//         }
//     }
// }

// console.log(a);

let ball=0;
for(i=0;i< a.length;i++){
    if(a[i]===0){
      ball++;
    }else if(ball>0){
        let t=a[i];
        a[i]=0;
        a[i-ball]=t;
    }
}

a.find()

console.log(a)