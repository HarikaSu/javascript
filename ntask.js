let http=require("http");
let port=5001;
let a=http.createServer((req,res)=>{
    res.write("Harika\n");
    res.write("Lbrce clg\n");
    res.write("VIjawada CSE\n");
    res.end();
});
a.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
});