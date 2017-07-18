var express = require('express');
var app = express();
var routes = require("./routes");
var cors = require('cors');

app.use(cors());

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

// require the body-parser nodejs module
bodyParser = require('body-parser'),

// require the path nodejs module
path = require("path");

// support parsing of application/json type post data
app.use(bodyParser.json());

// support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

console.log("Commerce Architects JS training server is running on port 3000");

// set the base url of the service
app.use("/ca/v1/example/", routes);

app.listen(3000);