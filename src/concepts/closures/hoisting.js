// Var keyword ==> Function scoped
// let ==> Block scoped


var num=10;
(()=>{
    console.log(num); // Undefined
    var num=20;
    console.log(num); // 20
})();

//Output
// undefined; Due to hoisting the var num is declared at the top
// 20;


let count = 0;
(function printCount(){
    if(count===0){
        let count=1;  // Count 1 is available within the block//Block scoped
        console.log(count);
    }
    console.log(count) // will take the previous block value
})();
//Output
// 1
// 0

function a(){
    // By hoisting var i;
    for(var i=0;i<3;i++){
        setTimeout(()=>{
            console.log(i)
        },i*1000)
    }
}

a();
//By the time set timeout gets executed i value is 3
//Since i is function scoped it will be accessible
//3
//3
//3

// Modify the code to get 0,1,2
function a() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

// By using let is is block scoped
// so the current value of i will be taken
// 0 , 1 , 2
