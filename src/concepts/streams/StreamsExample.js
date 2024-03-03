const fs = require("fs");

// Create a readable stream to read data from a file
const readableStream = fs.createReadStream(
  "./src/concepts/streams/sample.txt"
);

// Create a writable stream to write data to a file
const writableStream = fs.createWriteStream("./src/concepts/streams/output.txt");

// Pipe data from the readable stream to the writable stream
readableStream.pipe(writableStream);

// Listen for events on the readable stream
readableStream.on("data", (chunk) => {
  console.log("Received chunk of data:", chunk);
});

// Listen for events on the writable stream
writableStream.on("finish", () => {
  console.log("Data writing completed.");
});
