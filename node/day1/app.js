import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("hello world  ");
});

server.listen(4000, () => {
  console.log("Server is listening on http://localhost:4000");
});