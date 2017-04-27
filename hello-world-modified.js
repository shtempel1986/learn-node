let http = require("http"),
    fs = require("fs");

http.createServer((req, res)=>{
    fs.readFile("hello-world.js", "utf8", (err, data)=>{
        res.writeHead(200,{"Content-Type":"text/html"});
        if(err)
            res.write("Could not find or open file for reading\n");
        else{
            res.write(`<html><head><meta charset="UTF-8"></head><body><pre>${data}${err}</pre></body></html>`);
        }
        res.end();
    });
}).listen(8124,()=>{console.log("bound to port 8124");});
console.log("Server running on 8124/");
