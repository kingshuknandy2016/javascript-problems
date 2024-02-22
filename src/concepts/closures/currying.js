

const multiply=(a)=>{
    return (b)=>{
        return (c) =>{
            return a*b*c;
        }
    }

}



const out=multiply(2)(3)(4);
console.log(out)

//Each function return by multiply captures its respective argument as a , b , c  as a closure 
// until all the 3 arguments have been provided