function newSession (req, res) {
	res.render('sessions/new', {title: 'Welcome to the portal of Grand Ultima'});
}

var User = App.model('user');

function destroy (req, res) {
	req.logout();
	//req.flash('notice', 'You have succesfully signed out.');
	res.redirect('/');
}

exports.new = newSession;
exports.destroy = destroy;