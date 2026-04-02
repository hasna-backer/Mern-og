// Import http module
const http = require("http");


// Create server
const server = http.createServer((req, res) => {
 // Check route
 if (req.url === "/users") {
console.log("req.url",req.url);
console.log("req.method",req.method);
console.log("req.body",req.body);
console.log("req.headers",req.headers);




  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(["John", "Sara"]));
}

});


// Start server
server.listen(3001, () => {
 console.log("Server running on port 3001");
});