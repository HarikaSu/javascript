const http=require("http");
const fs=require("fs");
const data=[
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    { id: 3, name: 'Alice Johnson', age: 35 },
    { id: 4, name: 'Bob Brown', age: 28 }
]
const server=http.createServer((req,res)=>{
    const jsonData = JSON.stringify(data, null, 4);
    fs.writeFile("./sample.txt",jsonData,(err,data)=>{
        if(err){
            res.write("error");
            res.end();
        }
        else{
            res.write("created successfully");
            res.end();
        }
    })


})
const port=2005;
server.listen(port,()=>{
    console.log("server is running"+" "+"http://localhost:"+port);
    
})