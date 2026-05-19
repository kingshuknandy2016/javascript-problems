let everyNumber = (a) => {
  let count = 0;
  for (let i = 1; i <= a; i++) {
    if (a % i === 0) {
      //console.log(i);
      count++;
    }
  }
  return count;
};

const timesOfToggle = everyNumber(20);
console.log(`timesOfToggle:${timesOfToggle}`);

const program = () => {
  for (let j = 1; j <= 100; j++) {
    const timesOfToggle = everyNumber(j);
    if (timesOfToggle % 2 == 0) {
      // Even Toggle: Open and then Close
      console.log(`Door No: ${j} is Close`);
    } else {
      console.log(`Door No: ${j} is Open`);
    }
  }
};

program();
