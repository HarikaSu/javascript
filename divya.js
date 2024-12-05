var http=require("http")
 var server=http.createServer((req,res)=>{

    res.end("Hello world");

   
 });

 var port=5008;
 server.listen(port,()=>{

    console.log("server is started"+port);
 });