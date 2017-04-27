let http =require("http"),
    fs = require("fs");

let counter = 0;


function writeNumber(res) {
    for(let i = 0; i<100; i++){
        counter++;
        res.write(`${counter}\n`);
    }
}

counter++;

http.createServer((req, res)=>{

    let query = require("url").parse(req.url).query;
        app = `${require("querystring").parse(query).file}.txt`;

    res.writeHead(200, {"Content-type": "text/plain"});

    writeNumber(res);

    setTimeout(()=>{
        console.log(`opening ${app}`);
        fs.readFile(app, "utf8",(err, data)=>{
            if(err)
                console.log("Could not find or open file for reading\n");
            else
                res.write(data);
            res.end();
        });
    }, 2000);

}).listen(8124);

console.log("Server running at 8124/");