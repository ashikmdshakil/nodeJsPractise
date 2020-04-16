var http = require("http");

function onRequest(request, response){
    console.log("Request has come to "+ request.url);
    response.writeHead(200, {"context-type": "text/plain"});
    response.write("Hello World !");
    response.end();
}
http.createServer(onRequest).listen(8800);
console.log("Server has been initialized");