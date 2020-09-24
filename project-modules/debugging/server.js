const http = require("http");

const host = 'localhost';
const port = 8000;
const greetings = ["Hello world", "Hola mundo", "Bonjour le monde", "Hallo Welt", "Salve mundi"];
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
  let message = getGreeting(greetings);
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(`{"message": "${message}"}`);
};

/**
 * 
 * @param {string[]} greetings 
 */
function getGreeting(greetings) {
  let greeting = greetings[Math.floor(Math.random() * greetings.length)];

  return greeting;

};
