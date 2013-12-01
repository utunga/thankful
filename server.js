// set up ======================================================================
var express  = require('express');
var app      = express(); 								// create our app w/ express
var mongoose = require('mongoose'); 					// mongoose for mongodb
var port  	 = process.env.PORT || 8080; 				// set the port
var db_url 	 = process.env.DB_URL || 'mongodb://localhost:27017/thankful';	// where to find the mongodb

// configuration ===============================================================

mongoose.connect(db_url); 	// connect to mongoDB database 

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.configure(function() {
	
	app.use(express.logger('dev')); 					// log every request to the console
	if (process.env.NODE_ENV == 'production') {	 
		// note you need to do 'grunt build' to update the /public dir first 
		app.use(express.static('public')); 	// set the static files location /public/img will be /img for users
		console.log("serving static from 'public'");
	}
	else {
		app.use(allowCrossDomain);
		app.use(express.static('app')); 
		console.log("serving static from 'app'");
	}
	app.use(express.bodyParser()); 						// pull information from html in POST
	app.use(express.methodOverride()); 					// simulate DELETE and PUT
});

// routes ======================================================================
require('./server/routes.js')(app);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listenin' on port " + port);
