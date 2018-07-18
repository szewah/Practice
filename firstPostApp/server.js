// http://theusualstuff.com/handle-form-data-express-get-post-method/#comment-16777
// Import express module
var express = require('express')
//Import body parser
var bodyParser = require('body-parser')
//Store in variable
var app = express();
//Store express in the body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

// Let express access the index.html file
app.get('/index.html', function(req, res) {
	res.sendFile(__dirname + '/' + 'index.html');
})

// Route the GET requst to the path "/user"
// This sends the user information to the path
app.get('/user', function(req,res) {
	response = {
		first_name : req.query.first_name,
		last_name: req.query.last_name,
		gender: req.query.gender
	};

	// This line is optional and will print the response on the command prompt
	//Helpful to know what information is being transferred
	console.log(response);
	// Convert the response into a JSON format
	res.end(JSON.stringify(response));
});

// This piece of code creates the server
var server = app.listen(8888, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log("Example app listening", host, port)
})

