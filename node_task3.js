const http=require("http");
const url=require("url")
const port=3300;
const server=http.createServer((req,res)=>{
    // let x=req.url;
    // let y=x.split("/");
    
    // console.log(req.url);
    const parsedUrl=url.parse(req.url,true);
    let x=parsedUrl.query.name
    // console.log(x);
    
    // console.log(parsedUrl);
    if(parsedUrl.pathname=="/home"){
        res.writeHead(200,{"content-type":"application/json"})
        res.write(`welcome to home page ${x}`)
        res.end();

    }
    else if(parsedUrl.pathname=="/aboutus"){
        res.writeHead(200,{"content-type":"application/json"})
        res.write(`welcome to aboutus page ${x}`)
        res.end();
    }
    else{
        res.writeHead(401,{"content-type":"application/json"})
        res.write("page not found")
        res.end();
    }
    
   
    // res.write(`hello ${y[1]}`);
    
})
server.listen(port,()=>{
    console.log("server is running"+" "+"http://localhost:"+port+"/harika");
    
})