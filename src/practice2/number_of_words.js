const sampleInput =
  "HTML tags are easy solutions for simple problems, like making a text bold, italic, or even displaying bullet points. To style text containing HTML To tags, call To Html.fromHtml method.";

const getAllWords = (input) => {
  return input.trim().split(/\s/);
};

const getMaxOccuringWord = (wordArray) => {
  let obj = {};
  wordArray.forEach((element) => {
    if (obj[element]) {
      obj[element] = obj[element] + 1;
    } else {
      obj[element] = 1;
    }
  });

  let entries = Object.entries(obj);
  let maxEntry = 0;
  let output;
  entries.forEach((entry) => {
    if (entry[1] > maxEntry) {
      maxEntry = entry[1];
      output = entry[0];
    }
  });

  return output;
};

console.log(getMaxOccuringWord(getAllWords(sampleInput)));
