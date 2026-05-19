/**
 * Basic Example
 */
function Product(name,price){
    this.name=name;
    this.price=price;
}

function Food(name,price){
    Product.call(this,name,price);
    this.category="food";
}

let newFood=new Food('Cheese',5);
console.log(`newFood: ${JSON.stringify(newFood,2,null)}`);
// Output : newFood: {"name":"Cheese","price":5,"category":"food"}

/**
 * Using call() to invoke a function and specifying the this value
 */
function greet() {
  console.log(this.animal, "typically sleep between", this.sleepDuration);
}

const inputObject = {
  animal: "cats",
  sleepDuration: "12 and 16 hours",
};

greet.call(inputObject); 
// cats typically sleep between 12 and 16 hours