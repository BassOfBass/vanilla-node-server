// modules provided by Node.js, roughly similar to imports.
const http = require("http");
const fs = require("fs");
const path = require("path");
const colors = require("colors");

const chosenColor = colors.getRandomColor();
const favoriteColor = colors.getBlue();
const hostname = '127.0.0.1';
const port = 8125;

console.log(`You should use ${chosenColor.name} on your website. It's HTML code is ${chosenColor.code}`);
console.log(`My favorite color is ${favoriteColor.name}/${favoriteColor.code}, btw`);
/**
 * The function for creating the server.
 * 
 * `http.createServer` returns a `Server` object, which we can start up by listening on `port`.
 */
const server = http.createServer((request, response) => {
  console.log(`request ${request.url}`);

  // deal with fixing the request URL if it does not specify a file
  // For example, if the URL sent is `example.org`, it will be interpreted as `example.org/index.html`.
  let filePath = `.${request.url}`;
  if (filePath === "./") {
    filePath = "./index.html";
  }

  let extName = String(path.extname(filePath)).toLowerCase();
  /**
   * The extension of the file being requested and sees if it matches with one of our [MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types). 
   * 
   * Servers can prevent MIME sniffing by sending the `X-Content-Type-Options header`.
   */
  let mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    ".webm": "video/webm",
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.wasm': 'application/wasm',
    ".rar": "application/x-rar-compressed"
  };

  /** 
   * If no matches are found, we use the `application/octet-stream` as the default type. 
   * @type: string
   */
  let contentType = mimeTypes[extName] || "application/octet-stream";

  // this function reads the file using our previously prepared `filePath` variable
  fs.readFile(filePath, (error, content) => {

    // compensate for any possible errors
    if (error) {

      // most often, the error will be `ENOENT`, in which case reply with a 404 error.
      if ( error.code === "ENOENT" ) {
        fs.readFile("./404.html", (error, content) => {
          response.writeHead(404, {"Content-Type": "text.html"});
          response.end(content, "utf-8");
        }); 
      } else {
        response.writeHead(500);
        response.end(`Sorry, check with the site admin for error: ${error.code} ..\n`);
      }

    } else { // if there are no errors, send over the requested file.
      response.writeHead(200, {"Content-Type": contentType});
      response.end(content, "utf-8");
    }
  });
});

// listen for request on `port`, and as a callback function have the `port` listened on logged
server.listen(port, hostname, () => {
  console.log(`Server runnning at http:${hostname}:${port}/`);
});