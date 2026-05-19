// Call
function Admin(dept){
   this.role="Admin";
   this.dept=dept
}

function Engineering(dept) {
  this.role = "Developer";
  this.dept=dept;
}

function User(name,dept){
    this.name=name
    Engineering.call(this, dept);
}

const newTester=new User("Rama","Testing")
console.log(newTester)

// Apply
let inputArray=[3,5,7]

//Apply to a function
let out=Math.max.apply(inputArray,[10,20])
console.log(out)

let OutputArray=[];

OutputArray.push.apply(inputArray,[10,20])
console.log(OutputArray)