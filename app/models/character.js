var mongoose = require('mongoose'),
	REQUIRED_CHARACTER_NAME_LENGTH = 2;

function validateStringLength (value) {
	return value && value.length >= REQUIRED_CHARACTER_NAME_LENGTH;
}

var schema = mongoose.Schema({
	userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	name: {type: String, required: true, unique: true, validate: [validateStringLength, 'Character needs names of at least two characters.']}
});

schema.set('autoIndex', App.env !== 'production');

schema.methods.avatar = function() {
	return '/images/sword_and_sheild.png';
};

var Model = mongoose.model('Character', schema);

module.exports = Model;