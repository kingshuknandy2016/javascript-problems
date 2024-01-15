let map=new Map();

//Setting the Values
map.set(1,"Ram");
map.set(2,"Jadu");


//Accessing the values by get
let value=map.get(1)
console.log(value);

//Iteration over map
// 1. Iterate over keys
for(let key of map.keys()){
    console.log(map.get(key))
}

//2. Iterate over values
for(let value of map.values()){
    console.log(value);
}

//2. Iterate over entries
for(let entry of map){
    console.log(entry);
}