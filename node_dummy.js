const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  console.log(req.url);
  const a = url.parse(req.url, true);  
  console.log(a);
  if (a.pathname === "/products" && req.method==="GET") {
    fs.readFile("./products.txt", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write("Error");
        res.end(); 
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(data);  
        res.end();  
      }
    });
  }
  else if (a.pathname === "/html" && req.method==="POST") {
    fs.readFile("./dom.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write("Error");
        res.end();  
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);  
        res.end();  
      }
    });
  }
  else {
    res.writeHead(401, { "Content-Type": "application/json" });
    res.end(JSON.stringify(a));  
  }
});

const port = 2006;
server.listen(port, () => {
  console.log("Server is running at http://localhost:" + port);
});
