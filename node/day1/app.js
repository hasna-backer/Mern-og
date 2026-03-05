// import http module
const http = require("http");

// create server
const server = http.createServer((request, response) => {

 // send text response
 response.end("Hello from Node Server");

});

// start server
server.listen(3000, () => {

 console.log("Server running on port 3000");

});
