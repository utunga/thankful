var Thank = require('./models/thank');
var version = 'v0.5';

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all thanks
	app.get('/api/' + version + '/thanks', function(req, res) {

		// use mongoose to get all thanks in the database
		Thank.find(function(err, thanks) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(thanks); // return all thanks in JSON format
		});
	});

	// create thank and send back all thanks after creation
	app.post('/api/' + version + '/thanks', function(req, res) {

		// create a thank, information comes from AJAX request from Angular
		Thank.create({
			text : req.body.text,
			done : false
		}, function(err, thank) {
			if (err)
				res.send(err);

			// get and return all the thanks after you create another
			Thank.find(function(err, thanks) {
				if (err)
					res.send(err)
				res.json(thanks);
			});
		});

	});

	// delete a thank
	app.delete('/api/' + version + '/thanks/:thank_id', function(req, res) {
		Thank.remove({
			_id : req.params.thank_id
		}, function(err, thank) {
			if (err)
				res.send(err);

			// get and return all the thanks after you create another
			Thank.find(function(err, thanks) {
				if (err)
					res.send(err)
				res.json(thanks);
			});
		});
	});

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('../public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};