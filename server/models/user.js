var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
	facebook_url : String,
	twitter_url : String,
	email: String,
	name : String,
	profile_image : String
});