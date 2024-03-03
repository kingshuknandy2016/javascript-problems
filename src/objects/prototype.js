function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}


const myFather=new Person("Ram","Nandy",23,"red");

myFather.nationality="Indian"  // Adding Property to Object
myFather.name= ()=>{ // Adding method To and Object
    return this.firstName + " " + this.lastName;
}
console.log(myFather)

// But we cannot add a new property to an object constructor
Person.nationality = "English"; // This will not work and give undefined
console.log(myFather.nationality);
// The JavaScript prototype property allows you to add new properties to object constructors:
Person.prototype.nationality="Greek"
const myFather2 = new Person("Ram", "Nandy", 23, "red");
console.log(myFather2.nationality)