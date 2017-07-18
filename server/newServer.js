var express = require('express');
var app = express();
var routes = require("./newRoutes");
var cors = require('cors');

app.use(cors());

// require the body-parser nodejs module
bodyParser = require('body-parser'),

// require the path nodejs module
path = require("path");

// support parsing of application/json type post data
app.use(bodyParser.json());

// support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

console.log("Commerce Architects JS training server is running on port: " + 4444);

app.use(function(req, res, next) {
	console.log("DEBUGGING: " + req.headers.origin)
	res.header('Access-Control-Allow-Origin', req.headers.origin || "*");
	res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');
	res.header('Access-Control-Allow-Credentials', true);
	next();
})

// set the base url of the service
app.use("/new/", routes);

app.listen(4444);