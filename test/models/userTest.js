require('../testHelper');

var User = App.model('user');

describe(__filename, function () {
	it('hashes the users password', function(done) {
		var u = new User({email: 'email2@example.net', passwordHash: 'override'});
		u.save(function(err) {
			assert.ifError(err);
			assert(u.passwordHash);
			assert.notEqual(u.passwordHash, 'override');
			done();
		});
	});
});