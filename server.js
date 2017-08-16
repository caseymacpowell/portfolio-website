var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var ObjectID  = require('mongodb').ObjectId;

var db;

mongodb.MongoClient.connect('mongodb://localhost', function(err, database){
	if (err) {
		console.log(err);
		return;
	}
	console.log("Connected to Database.");
	db = database;
	startListening();
});

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

//Files to be served 
app.use(express.static('./'));

// 404 boilderplate
app.use(function(req, res, next){
	res.status(404);
	res.send("File Not Found!");
});

// 500 boilderplate
app.use(function(err, req, res, next){
	console.log(err);
	res.status(500);
	res.send("Internal Server Error!");
	res.send(err);
});

function startListening(){
	app.listen(3000, function(){
		console.log("Server started at http://localhost:3000");
	});
}
