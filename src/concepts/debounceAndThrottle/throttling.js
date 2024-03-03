function throttle(func, delay) {
  let isThrottled = false;
  let lastArgs;
  let lastContext;

  return function () {
    if (isThrottled) {
      // Store the last arguments and context for later execution
      lastArgs = arguments;
      lastContext = this;
      return;
    }

    // Execute the function with the current arguments and context
    func.apply(this, arguments);

    // Set a flag to indicate that the function is throttled
    isThrottled = true;

    // Reset the flag after the delay period
    setTimeout(() => {
      isThrottled = false;

      // If there are stored arguments and context, execute the function with them
      if (lastArgs) {
        func.apply(lastContext, lastArgs);
        lastArgs = null;
        lastContext = null;
      }
    }, delay);
  };
}

// Example usage
const throttledFunction = throttle(() => {
  console.log("Function executed with throttling");
}, 2000);

// Call the throttled function multiple times in quick succession
throttledFunction();
throttledFunction();
throttledFunction();

// Only the first call will trigger the function immediately
// Subsequent calls will be ignored until the throttle interval has passed
