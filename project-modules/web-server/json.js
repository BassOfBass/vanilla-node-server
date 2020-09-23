const http = require("http");

const host = 'localhost';
const port = 8000;

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

/**
 * 
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res 
 */
function requestListener(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(`{"message": "This is a JSON response"}`);
};