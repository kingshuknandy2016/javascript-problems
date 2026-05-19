/**
 * User is an Object Constructor Function
 */
function User(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.comment="I am user"
  this.name= function(){
    return this.firstName+" "+this.lastName;
  }
}

//prototype property allows you to add new properties to Object constructors
User.prototype.nationality="Indian"

let user=new User('Ram','Sharma',40,"blue")
console.log(user.nationality);

//Prototype Inheritance

function Admin(){
    this.role='Admin'
}

Admin.prototype=User;

const adminNew=new Admin();
console.log(adminNew.comment);

/** 
 * Example Counter
 * As value is 
 */
value=5
function makeCounter(){
    let value=0;
    return this.counter=()=>{
        return value++;
    }
}

const counter = new makeCounter();

console.log(counter());
console.log(counter());
value=50;
console.log(counter());