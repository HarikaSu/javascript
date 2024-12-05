const http = require("http");
const url=require("url")
const fs = require("fs");
let port = 5005;
const server = http.createServer((req, res) => {
  // fs.readFile("./data.txt",(err,data)=>{
  //     if(err){
  //         res.write("something went wrong")
  //         res.end()
  //     }
  //     else{
  //         res.write(data)
  //         res.end()
  //     }

  // })
//   const ip = "hello";
//   fs.writeFile("./sample.js",ip,{flag:"a"},(err,data)=>{
//       if(err){
//           res.write("error")
//           res.end()
//       }
//       else{
//           res.write("inserted data successfully")
//           res.end()
//       }
let parsedUrl=url.parse(req.url,true)
let ip=parsedUrl.query.ip
  })
  fs.readFile("./sample.js","utf-8", (err, data) => {
    if (err) {
      res.write("error occurred");
      res.end();
    } else {
      let existingData = JSON.parse(data);
      // console.log(existingData,"harika");
      console.log(existingData);
      existingData.push(ip);
      console.log(existingData);
      fs.writeFile("./sample.js", JSON.stringify(existingData), (err,data) => {
        res.writeHead(200, { "content-type": "application/json" });
        res.write(data);
        res.end();
      });
      res.write("inserted");
      res.end();
    }
  });
});
  server.listen(port, () => {
  console.log("server is running" + " " + "http://localhost:" + port);
});
