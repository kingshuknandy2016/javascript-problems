const sampleData1 = {
  name: "sam",
  age: 24,
  characteristics: {
    height: "6 feet",
    complexion: "dark",
    hair: "black",
  },
  techStack: {
    language: "Javascript",
    framework: {
      name: "React",
      version: "18",
    },
  },
};

const sampleData2 = {
  a: {
    b: {
      c: 12,
      d: "Hello World",
    },
    e: [1, 2, 3],
  },
  f: null,
};

const flattenObj = (obj) => {
  const result = {};
  for (const i in obj) {
    //Check type of element is object and not an array
    if (
      obj[i] != null && // value of key not null
      typeof obj[i] === "object" && // type is object
      !Array.isArray(obj[i]) // Not an array
    ) {
      const temp = flattenObj(obj[i]);
      for (const j in temp) {
        result[i + "." + j] = temp[j];
      }
    } else {
      //Not and object
      result[i] = obj[i];
    }
  }

  return result;
};

const out = flattenObj(sampleData1);
console.log(out);
