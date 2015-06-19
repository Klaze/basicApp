var mongoose = require('mongoose');

var schema = mongoose.Schema({
	name: 'string',
	description: 'string'
});

var Model = mongoose.model('ItemTemplate', schema);

module.exports = Model;