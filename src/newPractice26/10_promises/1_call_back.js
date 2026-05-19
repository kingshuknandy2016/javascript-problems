const callbackFunc = (message) => {
  console.log(message);
};

function adultChecker(age, callbackFunc) {
  const isAdult = age > 18 ? true : false;
  callbackFunc(`IS ADULT: ${isAdult}`);
}

adultChecker(21, callbackFunc);
