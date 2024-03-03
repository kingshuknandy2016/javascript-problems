function debounce(func, delay) {
  let timerId;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

// Example usage
const debouncedFunction = debounce(() => {
  console.log("Function executed after debounce delay");
}, 2000);

// Call the debounced function multiple times in quick succession
debouncedFunction();
debouncedFunction();
debouncedFunction();

// Only the last call will trigger the function after the debounce delay
