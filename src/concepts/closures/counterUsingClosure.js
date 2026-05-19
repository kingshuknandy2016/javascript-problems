function Counter(){
    var count=0;
    return function counter(){
        return count++;
    }
}

const makeCounter=new Counter();
console.log(makeCounter())
count=7;
console.log(makeCounter());
console.log(makeCounter());