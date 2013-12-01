var Thank = require('./models/thank');
var apiVersion = '0.5';

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all thankyous
	app.get('/api/' + apiVersion + '/thanks', function(req, res) {

		// use mongoose to get all thankyous in the database
		Thank.find(function(err, thanks) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(thanks); // return all thanks in JSON format
		});
	});

	// create thankyou
	app.post('/api/' + apiVersion + '/thanks', function(req, res) {

		// create a thankyou with req.body info from Angular/ng-resource
		Thank.create(req.body,
		    function(err, thank) {
			if (err)
				res.send(err);
			else
				res.json(thank);	
			}
		);

	});


	// api ---------------------------------------------------------------------
	// get all thankyous
	app.get('/api/' + apiVersion + '/users', function(req, res) {

		// use mongoose to get all users in the database
		User.find(function(err, users) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(users); // return all users in JSON format
		});
	});

	// create a new user record
	app.post('/api/' + apiVersion + '/users', function(req, res) {

		// create a user, information comes from AJAX request from Angular
		User.create(req.body,
		function(err, user) {
			if (err)
				res.send(err);
			else
				res.json(user);	
			}
		);

	});

	// // delete a thankyou
	// app.delete('/api/' + apiVersion + '/users/:thank_id', function(req, res) {
	// 	Thank.remove({
	// 		_id : req.params.thank_id
	// 	}, function(err, thank) {
	// 		if (err)
	// 			res.send(err);
	// 		else 
	// 			res.send(thank);
	// 	});
	// });


	// application -------------------------------------------------------------
	app.get('/', function(req, res) {
		if (process.env.NODE_ENV == 'production') {
			console.log("production.. sending '../public/index.html'");
			res.sendfile('../public/index.html'); // load the single view file (angular will handle the page changes on the front-end)

		}	 
		else
		{
			console.log("not production.. sending '../app/index.html'");
			res.sendfile('../app/index.html'); 
		}
	});
};