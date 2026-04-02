import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  }

  else if (req.url === "/login" && req.method === "POST") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About Page");
  }

  // About Route
  else if (req.url === "/update-profile" && req.method === "PUT") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Update Page");
  }

  // Contact Route
  else if (req.url === "/contact" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Contact Page");
  }
 else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Page Not Found");
  }
});
server.listen(5000, () => {
  console.log("Server is listening on http://localhost:5000");
});





