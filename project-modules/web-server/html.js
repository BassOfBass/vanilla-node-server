const http = require("http");
const fs = require("fs").promises;

const host = 'localhost';
const port = 8000;
/** @type Buffer */
let indexFile;

const server = http.createServer(requestListener);

fs.readFile(__dirname + "/index.html")
.then(contents => {
  indexFile = contents;

  server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
  });
})
.catch(err => {
  console.error(`Could not read index.html file: ${err}`);
  process.exit(1);
})


/**
 * 
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res 
 */
function requestListener(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);
  res.end(indexFile);
};