var mongoose = require('mongoose');

module.exports = mongoose.model('Thank', {
	to : String,
	from : String,
	text : String,
	image : String
});