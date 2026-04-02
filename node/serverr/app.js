import http from "http";
const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("helloooooo");
  }
  // About Route
  else if (req.url === "/about" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About Page");
  }
  // Contact Route
  else if (req.url === "/contact" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Contact Page");
  }
  else if (req.url === "/signup" && req.method === "POST") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("signup Page");
  }
 else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Page Not Found");
  }
});
server.listen(5000, () => {
  console.log("Server is listening on http://localhost:5000");
});





