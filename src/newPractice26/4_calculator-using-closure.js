const adding = (x) => {
  return (y) => {
    return x + y;
  };
};

const add = adding(2);
const out = add(3);

console.log(out);
