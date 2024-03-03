const { spawn } = require("child_process");

const sleep = spawn("timeout", ["10"]);

console.log(`Current process PID: ${process.pid}`);
console.log(`Child process PID: ${sleep.pid}`);

sleep.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

sleep.stderr.on("data", (data) => {
  console.error(`stderr: ${data}`);
});

sleep.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});