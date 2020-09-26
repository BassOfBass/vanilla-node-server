const childProcess = require('child_process');

childProcess.execFile(__dirname + '/processNodejsImage.sh', (error, stdout, stderr) => {

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