var http = require("http");
var express = require('express'); //npm install express, npm update express

http.createServer(function(request, response) {

    // send the HTTP header
    // HTTP Status: 200 : OK
    // Content type: text/plaim
    response.end('Hello World\n');

}).listen(8081);

//Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
