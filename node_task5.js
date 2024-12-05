const http=require("http");
const fs=require("fs");

const server=http.createServer((req,res)=>{
    fs.readFile("./data.txt","utf-8",(err,data)=>{
        if(err){
            res.write("error");
            res.end();
        }
    //     else{
    //         res.write(data);
    //         res.end()
    //     }
    // })
    // const ip="goodmorning";
    // fs.appendFile("./data.txt",ip,(err,data)=>{
    //     if(err){
    //         res.write("error");
    //         res.end();
    //     }
    //     else{
    //         res.write("inserted successfully");
    //         res.end()
    //     }
    // })
    fs.unlink("./data.txt",(err,data)=>{
        if(err){
            res.write("error");
            res.end();
        }
        else{
            res.write("deleted successfully");
            res.end()
        }
    })
})
const port=2001;
server.listen(port,()=>{
    console.log("server is connected"+" "+"http://localhost:"+port);
    
})