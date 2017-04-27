let http = require("http"),
    options = {
        host: "localhost",
        port: 8124,
        path: "/?file=secondary",
        method: "GET"
    },processPublicTimeline = (response)=>{
        console.log("запрос окончен");
    };
for( let i = 0; i < 9000; i++){
    http.request(options,processPublicTimeline).end();
}