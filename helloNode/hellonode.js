// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment

//Load HTTP module
var http = require("http");
// Create  HTTP server and listen on port 8000 for requests
http.createServer(function (req, res) {
	//Set the response HTTP header with HTTP status and content type
	res.writeHead(200, {'Content-Type': 'text/plain'});
	//Send the response body 'Hello World'
	res.end('Hello World\n');
}).listen(8000);

//Print URL for accessing server
console.log('Server is running at http://127.0.0.1:8000/')

