// Module dependencies
var express = require('express');

var app = express.createServer();

//Configuration
app.configure(function() {
	//Empty configuration
});

app.get('/', function(request, response) {
	response.send('Hello World');
});

app.listen(3000);