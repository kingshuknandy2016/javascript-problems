const counter = () => {
  let counter = 0;

  function inner() {
    counter++;
    console.log(counter);
  }

  return inner;
};

//Get the inner function out: and then execute it
const counterInner = counter();
counterInner();
counterInner();
counterInner();
