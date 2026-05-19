function runTask(tasks) {
  for (const task of tasks) {
    task();
  }
}

let input = [
  () => {
    console.log("TASK 1: STARTED");

    // Goes To the Web APIs, 
    // once the timer is over it is pushed back to MacroTask Queue/ Callback Queue
    setTimeout(() => {
      console.log("TASK 1: Timeout");
    }, 0);

    //
    Promise.resolve().then(() => {
      console.log("TASK 1: Promise");
    });
  },

  () => {
    console.log("TASK 2: STARTED");
  },
];

runTask(input);
