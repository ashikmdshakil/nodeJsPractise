var http = require('http');
var fs = require('fs');

function onRequest(request,response){
    if(request , response){
        response.writeHead(200 , {"context-type":"text/html"});
        fs.createReadStream('./index.html').pipe(response);
        
    }
    else{
        response.writeHead(500 , {"context-type":"text/plain"});
        response.write("something went wrong!");
        response.end();
    }
}

http.createServer(onRequest).listen(8222);
console.log("server is running ........");