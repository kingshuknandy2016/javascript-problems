
/**
 * init() creates a local variable called name and a function called displayName(). The displayName() function 
 * is an inner function that is defined inside init() and is available only within the body of the init() function. 
 * Note that the displayName() function has no local variables of its own. However, since inner functions have access 
 * to the variables of outer functions, displayName() can access the variable name declared in the parent function, init().
 */
function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

