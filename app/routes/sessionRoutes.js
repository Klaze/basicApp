function newSession (req, res) {
	res.render('sessions/new', {title: 'Welcome to the portal of Grand Ultima'});
}

var User = App.model('user');

function create (req, res) {
	User.findByEmailAndPassword(req.body.email, req.body.password, function(err, user) {
		if(err) {
			res.status(422).send('Problem: ', err.message);
		} else if (!user) {
			res.status(401).send('No User/Password Combo exists such as was entered.');
		} else {
			res.status(200).send('Welcome back, ', user.email);
		}
	})
}

exports.new = newSession;
exports.create = create;