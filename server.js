var http = require('http');
var fs = require('fs');
var url = require('url');

//create a server
http.createServer(function(request, response){
    //parse the request containing file name
    var pathname = url.parse(request.url).pathname;

    //print the name of the file for which request is made
    console.log("Request for " + pathname + " received.");

    //read the requested file content from file system
    fs.readFile(pathname.substr(1), function (err, data){
        if (err) {
            console.log(err);
            // HTTP status: 404 not found
            //content type text/plain
            response.writeHead(404, {'Content-type': 'text/html'});
        }else{
            //page found
            //http status 200 OK
            //content type text/plain
            response.writeHead(200, {'Content-type': 'text/html'});

            //write the content of the file to response body
            response.write(data.toString());
        }
        //send the response body
        response.end();
        });
    }).listen(8081);

    //console will print the message
    console.log('Server running at http://127.0.0.1:8081/');

