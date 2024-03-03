/**
 * Basic Promise Example and its usage in 2 ways
 */
// Promise that resolve after 5 sec
const resolveAfter5Sec=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved")
    },2000)
})


// Approach 1
resolveAfter5Sec.then((value)=>{
    console.log("Successfully resolved the promise:",value)
}).catch(err=>{
    console.error("Error occurred. ",err)
})

// Approach 2
const main=async () =>{
    try {
      const result = await resolveAfter5Sec;
      console.log("Successfully resolved the promise:", result);
    } catch (error) {
      console.error("Error occurred. ", error);
    }
}

main();