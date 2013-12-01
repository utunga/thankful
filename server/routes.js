var apiVersion = '0.5';

module.exports = function(app, db) {

	var thanks = db.collection('thanks');
	var users = db.collection('users');

	// api ---------------------------------------------------------------------
	// get all thankyous
	app.get('/api/' + apiVersion + '/thanks', function(req, res) {
		thanks.find().toArray(function(err, data) {
			if (err)
				res.send(err);
			else 
				res.send(data);   
		});
	});

	// create thankyou
	app.post('/api/' + apiVersion + '/thanks', function(req, res) {

		// create a thankyou with req.body info from Angular/ng-resource
		thanks.save(req.body, {safe: true}, function(err, records) {
			if (err)
				res.send(err);
			else
				res.json(records);	
		});

	});


	// api ---------------------------------------------------------------------
	// get all users
	app.get('/api/' + apiVersion + '/users', function(req, res) {

		users.find().toArray(function(err, data) {
			if (err)
				res.send(err);
			else 
				res.send(data);   
		});
	});

	// create a new user record
	app.post('/api/' + apiVersion + '/users', function(req, res) {

		// create a user, information comes from AJAX request from Angular
		users.save(req.body, {safe: true}, function(err, data) {
			if (err)
				res.send(err);
			else
				res.json(data);	
		});
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

};