var mongoose = require('mongoose');

var schema = mongoose.Schema({
	email: {type: String, unique: true}
});

schema.set('autoIndex', App.env !== 'production');

var Model = mongoose.model('User', schema);

module.exports = Model;