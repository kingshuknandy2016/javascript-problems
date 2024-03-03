var fs=require('fs');

/**
 * Example1: Simple Callback example
 */
fs.readFile('./src/concepts/callbackAndPromises/sample.txt',(err,data)=>{
    if(err){
        console.error(`Error Occurred:${err}`);
        return;
    }
    console.log(`Success ....${data}`)
})

/**
 * Example2: Simulating an asynchronous operation
 */

const fetchData=(callBackFunction)=>{
    // Simulating an asynchronous function which resolve after 5 sec
    setTimeout(()=>{
        const data="someData";
        callBackFunction(null,data);
    },5000)
}

//Calling the above operation with a callback function
fetchData((err,data)=>{
    if (err){
        console.error("Error:",err)
    }else{
        console.log("Data:",data);
    }
})