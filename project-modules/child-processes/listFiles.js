const childProcess = require("child_process");

childProcess.exec("dir", (error, stdout, stderr) => {

  if (error) {
    console.error(`error: ${error.message}`);

    return;

  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);

    return;

  }

  console.log(`stdout:\n${stdout}`);

});