// Creating Objects with Constructor
function User(firstName,lastName,age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
}

let user=new User('Ram','Sharma',30)
console.log(user)

// Creating Object with Object Literals
let userOther={
    firstName:"Jadu",
    lastName:"Ghosh",
    age:23
}

console.log(userOther)

//Creating Objects with Object.create( )
const userNew={
    role:'User',
    printDesignation: function(){
        console.log(`${this.name} is having salary ${this.salary}`)
    }
}

const newUserOther=Object.create(userNew);
newUserOther.name="Jadu Sharma";
newUserOther.salary='30k'

newUserOther.printDesignation()

console.log(newUserOther)

  
//Using es6 classes
class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker =  maker;
    this.engine = engine;
  }
}
 
let car1 = new Vehicle('GT', 'BMW', '1998cc');
 
console.log(car1.name);  //GT
