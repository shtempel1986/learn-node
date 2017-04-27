let http = require("http");// а если обновить?

http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "text/plain"});
    res.end("Hello, World!\n");
}).listen(8124);
console.log("Server running on 8124");